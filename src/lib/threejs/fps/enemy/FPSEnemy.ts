import {
    Object3D,
    Vector3,
    Mesh,
    BoxGeometry,
    MeshStandardMaterial,
    SphereGeometry,
    Color,
} from 'three';
import type { World } from '../../shooter/world';
import { EnemyFSM, EnemyState } from './EnemyStateMachine';
import { AIPerception } from './AIPerception';
import {
    EnemyArchetype,
    ARCHETYPE_CONFIGS,
    type ArchetypeConfig,
} from './EnemyArchetypes';
import {
    findPath,
    worldToCell,
    cellToWorld,
    type Cell,
} from './FPSPathfinding';

export class FPSEnemy extends Object3D {
    // ─── Public state (read by manager / combat) ─────────────
    readonly archetype: EnemyArchetype;
    private config: ArchetypeConfig;

    // ─── Core systems ────────────────────────────────────────
    readonly fsm: EnemyFSM;
    readonly perception: AIPerception;

    // ─── Combat stats ────────────────────────────────────────
    private health: number;
    readonly maxHealth: number;
    private shootCooldown: number = 0;
    private ammo: number | null = 10;
    private readonly hitboxRadius: number = 0.9;

    // ─── Movement ────────────────────────────────────────────
    private facingDirection: Vector3 = new Vector3(0, 0, 1);
    private moveTarget: Vector3 | null = null;

    // ─── Pathfinding ─────────────────────────────────────────
    private currentPath: Cell[] = [];
    private pathIndex: number = 0;
    private pathRecalcTimer: number = 0;
    private readonly pathRecalcInterval: number = 0.4; // seconds

    // ─── Patrol ──────────────────────────────────────────────
    private patrolWaypoints: Vector3[] = [];
    private patrolIndex: number = 0;

    // ─── Flank ───────────────────────────────────────────────
    private flankDirection: number = 1; // 1 = left, -1 = right
    /** Per-enemy random phase offset so enemies don't strafe in sync */
    private strafePhase: number = 0;

    // ─── Spawn idle ──────────────────────────────────────────
    /** Timestamp when this enemy was created — blocks perception briefly */
    private spawnTime: number = 0;
    /** Duration (seconds) before the enemy becomes fully active */
    private readonly spawnIdleDuration: number = 0.8;

    // ─── Visual ──────────────────────────────────────────────
    private body: Mesh;
    private head: Mesh;
    private readonly originalBodyColor: number;
    private readonly originalHeadColor: number;
    private flashTimer: number = 0;
    private readonly flashDuration: number = 0.08;

    // ─── Death ────────────────────────────────────────────────
    private deathTimer: number = 0;
    private readonly deathDuration: number = 1.0;
    private dead: boolean = false;

    // ─── Dependencies ────────────────────────────────────────
    private world: World;
    private player: Object3D;
    /** Buildings group — used for LOS raycasting */
    private obstacles: Object3D[] = [];

    // ─── Boss flag ──────────────────────────────────────────
    /** If true, this enemy is a boss — bigger, glowier, mini-boss fight */
    readonly isBoss: boolean = false;

    // ─── Id ──────────────────────────────────────────────────
    readonly enemyId: number;
    private static nextEnemyId = 0;

    // ─── Hit callback ────────────────────────────────────────
    onHit: ((enemy: FPSEnemy) => void) | null = null;
    /** Squad order from manager */
    squadOrder: string | null = null;

    constructor(
        position: Vector3,
        world: World,
        player: Object3D,
        archetype: EnemyArchetype = EnemyArchetype.Grunt,
        obstacles: Object3D[] = [],
        isBoss: boolean = false,
    ) {
        super();
        this.enemyId = FPSEnemy.nextEnemyId++;
        this.world = world;
        this.player = player;
        this.archetype = archetype;
        this.config = ARCHETYPE_CONFIGS[archetype];
        this.obstacles = obstacles;
        this.isBoss = isBoss;

        // Boss gets bonus HP on top of archetype base
        const bossHpBonus = isBoss ? 10 : 0;

        // Stats from archetype config
        this.health = this.config.health + bossHpBonus;
        this.maxHealth = this.config.health + bossHpBonus;
        this.originalBodyColor = this.config.color;
        this.originalHeadColor = this.config.headColor;

        this.position.copy(position);
        this.position.y = 0.5;

        // ─── Meshes ──────────────────────────────────────────
        const bossScale = isBoss ? 2.0 : 1.0;
        const bodyGeo = new BoxGeometry(
            0.8 * bossScale,
            1.2 * bossScale,
            0.8 * bossScale,
        );
        const bodyMat = new MeshStandardMaterial({
            color: this.config.color,
            emissive: isBoss ? new Color(0xff4400) : undefined,
            emissiveIntensity: isBoss ? 0.6 : 0,
        });
        this.body = new Mesh(bodyGeo, bodyMat);
        this.body.position.y = 0.6 * bossScale;
        this.add(this.body);

        const headGeo = new SphereGeometry(0.35 * bossScale, 8, 8);
        const headMat = new MeshStandardMaterial({
            color: this.config.headColor,
            emissive: isBoss ? new Color(0xff4400) : undefined,
            emissiveIntensity: isBoss ? 0.4 : 0,
        });
        this.head = new Mesh(headGeo, headMat);
        this.head.position.y = 1.3 * bossScale;
        this.add(this.head);

        // ─── Patrol waypoints ────────────────────────────────
        this.generatePatrolRoute(position);

        // ─── Flank direction & strafe phase ────────────────
        this.flankDirection = Math.random() > 0.5 ? 1 : -1;
        this.strafePhase = Math.random() * Math.PI * 2;

        // ─── Spawn idle timer ────────────────────────────────
        this.spawnTime = performance.now();

        // ─── Perception ──────────────────────────────────────
        this.perception = new AIPerception();
        this.perception.setObstacles(this.obstacles);

        // ─── FSM ─────────────────────────────────────────────
        this.fsm = new EnemyFSM(EnemyState.Patrol, {
            [EnemyState.Idle]: this.makeIdleHandlers(),
            [EnemyState.Patrol]: this.makePatrolHandlers(),
            [EnemyState.Alert]: this.makeAlertHandlers(),
            [EnemyState.Chase]: this.makeChaseHandlers(),
            [EnemyState.Attack]: this.makeAttackHandlers(),
            [EnemyState.Flank]: this.makeFlankHandlers(),
            [EnemyState.Retreat]: this.makeRetreatHandlers(),
            [EnemyState.Search]: this.makeSearchHandlers(),
        });
    }

    // ════════════════════════════════════════════════════════════
    //  PUBLIC API
    // ════════════════════════════════════════════════════════════

    takeDamage(amount: number = 1): void {
        if (!this.isAlive()) return;
        this.health -= amount;
        this.flashTimer = this.flashDuration;
        (this.body.material as MeshStandardMaterial).color.setHex(0xffffff);
        this.onHit?.(this);

        if (!this.isAlive()) {
            this.die();
        }
    }

    isAlive(): boolean {
        return this.health > 0;
    }

    isDead(): boolean {
        return this.dead;
    }

    getHealth(): number {
        return this.health;
    }

    getMaxHealth(): number {
        return this.maxHealth;
    }

    getFacingDirection(): Vector3 {
        return this.facingDirection.clone();
    }

    getHitboxRadius(): number {
        return this.hitboxRadius;
    }

    canShoot(): boolean {
        if (this.config.meleeOnly) return false;
        const dist = this.position.distanceTo(this.player.position);
        if (this.ammo !== null && this.ammo <= 0) return false;
        return (
            this.shootCooldown <= 0 &&
            dist < this.config.attackRange &&
            this.isAlive()
        );
    }

    shoot(): void {
        if (this.canShoot()) {
            this.shootCooldown = this.isBoss
                ? Math.max(0.6, this.config.shootCooldown * 0.5)
                : this.config.shootCooldown;
            if (this.ammo !== null) this.ammo -= 1;
        }
    }

    /** Melee attack — returns true if player is in melee range */
    canMelee(): boolean {
        if (!this.config.meleeOnly) return false;
        const dist = this.position.distanceTo(this.player.position);
        return dist < this.config.attackRange && this.isAlive();
    }

    getAmmo(): number | null {
        return this.ammo;
    }

    setAmmo(n: number | null): void {
        this.ammo = n;
    }

    getShootCooldown(): number {
        return this.shootCooldown;
    }

    doMeleeDamage(): number {
        return this.config.damage;
    }

    /** Damage per shot — doubled for the boss */
    getShotDamage(): number {
        return this.isBoss ? this.config.damage * 2 : this.config.damage;
    }

    /** Rebuild obstacle list when buildings change */
    setObstacles(obstacles: Object3D[]): void {
        this.obstacles = obstacles;
        this.perception.setObstacles(obstacles);
    }

    // ════════════════════════════════════════════════════════════
    //  UPDATE
    // ════════════════════════════════════════════════════════════

    update(dt: number = 1 / 60): void {
        // Death animation
        if (this.dead) {
            this.deathTimer -= dt;
            this.position.y =
                -0.5 + (this.deathTimer / this.deathDuration) * 0.5;
            if (this.deathTimer <= 0) {
                this.visible = false;
            }
            return;
        }

        // ─── Spawn idle ──────────────────────────────────
        // Newly-spawned enemies are dazed for ~0.8 s so they don't
        // instantly swarm the player or start doing their patrol circle.
        const elapsed = (performance.now() - this.spawnTime) / 1000;
        if (elapsed < this.spawnIdleDuration) {
            this.fsm.current = EnemyState.Patrol;
            this.fsm.elapsed = 999;
            return;
        }

        // Update perception
        const playerSpeed = this.calcPlayerSpeed();
        this.perception.update(
            this.position,
            this.player.position,
            playerSpeed,
            dt,
        );

        // Update cooldowns
        if (this.shootCooldown > 0) this.shootCooldown -= dt;
        if (this.flashTimer > 0) {
            this.flashTimer -= dt;
            if (this.flashTimer <= 0) {
                (this.body.material as MeshStandardMaterial).color.setHex(
                    this.originalBodyColor,
                );
            }
        }

        // Update pathfinding timer
        this.pathRecalcTimer -= dt;

        // FSM update
        this.fsm.update(dt);
    }

    /** Rough player speed estimate from position delta */
    private lastPlayerPos: Vector3 = new Vector3();
    private calcPlayerSpeed(): number {
        const now = this.player.position.clone();
        const dist = now.distanceTo(this.lastPlayerPos);
        this.lastPlayerPos.copy(now);
        return dist * 60; // approximate per-second speed
    }

    // ════════════════════════════════════════════════════════════
    //  FSM HANDLER BUILDERS
    //  Each returns StateHandlers for the FSM.
    // ════════════════════════════════════════════════════════════

    private makeIdleHandlers() {
        const self = this;
        let lookAngle = 0;
        return {
            onEnter: () => {
                lookAngle = Math.random() * Math.PI * 2;
                self.moveTarget = null;
            },
            onUpdate: (_dt: number) => {
                // Slow head turning
                lookAngle += _dt * 0.5;
                self.body.rotation.y = lookAngle;
                self.facingDirection.set(
                    Math.sin(lookAngle),
                    0,
                    Math.cos(lookAngle),
                );
            },
            transitions: [
                {
                    to: EnemyState.Alert,
                    condition: () => self.perception.isAlerted(),
                    priority: 2,
                },
                {
                    to: EnemyState.Patrol,
                    condition: () => self.fsm.elapsed > 3 + Math.random() * 2,
                    priority: 1,
                },
            ],
        };
    }

    private makePatrolHandlers() {
        const self = this;
        return {
            onEnter: () => {
                self.pickNextPatrolPoint();
            },
            onUpdate: (_dt: number) => {
                self.moveTowardTarget(self.config.moveSpeed, _dt);
            },
            transitions: [
                {
                    to: EnemyState.Alert,
                    condition: () => self.perception.isAlerted(),
                    priority: 2,
                },
                {
                    to: EnemyState.Idle,
                    condition: () =>
                        self.moveTarget === null && self.fsm.elapsed > 1,
                    priority: 1,
                },
            ],
        };
    }

    private makeAlertHandlers() {
        const self = this;
        return {
            onEnter: () => {
                self.moveTarget =
                    self.perception.lastKnownPosition?.clone() ?? null;
            },
            onUpdate: (_dt: number) => {
                if (self.moveTarget) {
                    self.moveTowardTarget(self.config.moveSpeed * 1.2, _dt);
                }
            },
            transitions: [
                {
                    to: EnemyState.Chase,
                    condition: () => self.perception.isFullyAware(),
                    priority: 3,
                },
                {
                    to: EnemyState.Search,
                    condition: () =>
                        !self.perception.isAlerted() && self.fsm.elapsed > 2,
                    priority: 1,
                },
                {
                    to: EnemyState.Chase,
                    condition: () =>
                        self.perception.canSeePlayer &&
                        self.perception.awareness >= 40,
                    priority: 2,
                },
            ],
        };
    }

    private makeChaseHandlers() {
        const self = this;
        return {
            onEnter: () => {
                self.recalcPathToPlayer();
            },
            onUpdate: (_dt: number) => {
                // Recalc path periodically
                if (self.pathRecalcTimer <= 0) {
                    self.recalcPathToPlayer();
                }
                self.followPath(self.config.moveSpeed * 1.3, _dt);
            },
            transitions: [
                {
                    to: EnemyState.Attack,
                    condition: () => {
                        const d = self.position.distanceTo(
                            self.player.position,
                        );
                        return (
                            d <= self.config.attackRange &&
                            self.perception.canSeePlayer
                        );
                    },
                    priority: 3,
                },
                {
                    to: EnemyState.Search,
                    condition: () =>
                        !self.perception.canSeePlayer && self.fsm.elapsed > 1.5,
                    priority: 2,
                },
                {
                    to: EnemyState.Flank,
                    condition: () =>
                        self.perception.canSeePlayer &&
                        self.fsm.elapsed > 2 &&
                        Math.random() < self.config.flankChance,
                    priority: 1,
                },
            ],
        };
    }

    private makeAttackHandlers() {
        const self = this;
        return {
            onEnter: () => {
                // Face the player
                self.facePlayer();
            },
            onUpdate: (_dt: number) => {
                // Strafe while attacking
                self.strafe(_dt);
                self.facePlayer();

                // Shooting is handled by the manager's getEnemyProjectiles()
                // which calls enemy.shoot() — do NOT call it here or the
                // cooldown will already be active when the manager checks.
            },
            transitions: [
                {
                    to: EnemyState.Retreat,
                    condition: () => {
                        const hpPct = self.health / self.maxHealth;
                        return (
                            hpPct < 0.3 &&
                            Math.random() < self.config.retreatChance
                        );
                    },
                    priority: 4,
                },
                {
                    to: EnemyState.Chase,
                    condition: () => {
                        const d = self.position.distanceTo(
                            self.player.position,
                        );
                        return d > self.config.attackRange * 1.3;
                    },
                    priority: 3,
                },
                {
                    to: EnemyState.Flank,
                    condition: () =>
                        self.fsm.elapsed > 2.5 &&
                        Math.random() < self.config.flankChance * 1.5,
                    priority: 2,
                },
            ],
        };
    }

    private makeFlankHandlers() {
        const self = this;
        return {
            onEnter: () => {
                self.calculateFlankPosition();
            },
            onUpdate: (_dt: number) => {
                if (self.moveTarget) {
                    self.moveTowardTarget(self.config.moveSpeed * 1.2, _dt);
                }
                self.facePlayer();
            },
            transitions: [
                {
                    to: EnemyState.Attack,
                    condition: () => {
                        const d = self.position.distanceTo(
                            self.player.position,
                        );
                        return (
                            d <= self.config.attackRange &&
                            self.fsm.elapsed > 0.5
                        );
                    },
                    priority: 3,
                },
                {
                    to: EnemyState.Chase,
                    condition: () =>
                        self.moveTarget === null || self.fsm.elapsed > 3,
                    priority: 2,
                },
            ],
        };
    }

    private makeRetreatHandlers() {
        const self = this;
        return {
            onEnter: () => {
                self.calculateRetreatPosition();
            },
            onUpdate: (_dt: number) => {
                if (self.moveTarget) {
                    self.moveTowardTarget(self.config.moveSpeed * 1.5, _dt);
                }
            },
            transitions: [
                {
                    to: EnemyState.Chase,
                    condition: () => {
                        const d = self.position.distanceTo(
                            self.player.position,
                        );
                        return d > 12 || self.fsm.elapsed > 3;
                    },
                    priority: 2,
                },
                {
                    to: EnemyState.Attack,
                    condition: () =>
                        self.perception.canSeePlayer &&
                        self.position.distanceTo(self.player.position) <=
                            self.config.attackRange,
                    priority: 1,
                },
            ],
        };
    }

    private makeSearchHandlers() {
        const self = this;
        return {
            onEnter: () => {
                self.moveTarget =
                    self.perception.lastKnownPosition?.clone() ?? null;
            },
            onUpdate: (_dt: number) => {
                if (self.moveTarget) {
                    self.moveTowardTarget(self.config.moveSpeed, _dt);
                }
            },
            transitions: [
                {
                    to: EnemyState.Chase,
                    condition: () => self.perception.canSeePlayer,
                    priority: 3,
                },
                {
                    to: EnemyState.Patrol,
                    condition: () =>
                        self.fsm.elapsed > 5 || !self.perception.isAlerted(),
                    priority: 2,
                },
                {
                    to: EnemyState.Alert,
                    condition: () =>
                        self.perception.isAlerted() && self.fsm.elapsed > 1,
                    priority: 1,
                },
            ],
        };
    }

    // ════════════════════════════════════════════════════════════
    //  MOVEMENT HELPERS
    // ════════════════════════════════════════════════════════════

    /** Move directly toward moveTarget at given speed */
    private moveTowardTarget(speed: number, dt: number): void {
        if (!this.moveTarget) return;

        const dx = this.moveTarget.x - this.position.x;
        const dz = this.moveTarget.z - this.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.3) {
            this.moveTarget = null;
            return;
        }

        const step = speed * dt;
        const nextX = this.position.x + (dx / dist) * step;
        const nextZ = this.position.z + (dz / dist) * step;

        if (!this.isBlockedPosition(nextX, nextZ)) {
            this.position.x = nextX;
            this.position.z = nextZ;
        }

        // Update facing direction
        this.facingDirection.set(dx, 0, dz).normalize();
        this.body.rotation.y = Math.atan2(
            this.facingDirection.x,
            this.facingDirection.z,
        );

        this.clampToWorldBounds();
    }

    /** Follow the A* path */
    private followPath(speed: number, dt: number): void {
        if (
            this.currentPath.length === 0 ||
            this.pathIndex >= this.currentPath.length
        ) {
            return;
        }

        const target = this.currentPath[this.pathIndex];
        const worldPos = cellToWorld(target);
        const dx = worldPos.x - this.position.x;
        const dz = worldPos.z - this.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.3) {
            this.pathIndex++;
            if (this.pathIndex >= this.currentPath.length) {
                this.currentPath = [];
                return;
            }
        }

        const step = speed * dt;
        const nextX = this.position.x + (dx / dist) * step;
        const nextZ = this.position.z + (dz / dist) * step;

        if (!this.isBlockedPosition(nextX, nextZ)) {
            this.position.x = nextX;
            this.position.z = nextZ;
        }

        this.facingDirection.set(dx, 0, dz).normalize();
        this.body.rotation.y = Math.atan2(
            this.facingDirection.x,
            this.facingDirection.z,
        );

        this.clampToWorldBounds();
    }

    /** Strafe perpendicular to the player (attack movement) */
    private strafe(dt: number): void {
        const toPlayer = new Vector3().subVectors(
            this.player.position,
            this.position,
        );
        toPlayer.y = 0;
        toPlayer.normalize();

        // Perpendicular vector (left of player view)
        const strafeDir = new Vector3(-toPlayer.z, 0, toPlayer.x);
        // Oscillate back and forth (per-enemy phase so they don't sync)
        const offset =
            Math.sin(performance.now() * 0.003 + this.strafePhase) *
            this.flankDirection;

        const targetX = this.position.x + strafeDir.x * offset * dt * 2;
        const targetZ = this.position.z + strafeDir.z * offset * dt * 2;

        if (!this.isBlockedPosition(targetX, targetZ)) {
            this.position.x = targetX;
            this.position.z = targetZ;
        }
        this.clampToWorldBounds();
    }

    private facePlayer(): void {
        const dx = this.player.position.x - this.position.x;
        const dz = this.player.position.z - this.position.z;
        if (Math.hypot(dx, dz) > 0) {
            this.facingDirection.set(dx, 0, dz).normalize();
            this.body.rotation.y = Math.atan2(
                this.facingDirection.x,
                this.facingDirection.z,
            );
        }
    }

    // ════════════════════════════════════════════════════════════
    //  PATHFINDING
    // ════════════════════════════════════════════════════════════

    private recalcPathToPlayer(): void {
        const start = worldToCell(this.position.x, this.position.z);
        const end = worldToCell(this.player.position.x, this.player.position.z);
        this.currentPath = findPath(start, end, this.world);
        this.pathIndex = 0;
        this.pathRecalcTimer = this.pathRecalcInterval;
    }

    recalcPathTo(targetWorldX: number, targetWorldZ: number): void {
        const start = worldToCell(this.position.x, this.position.z);
        const end = worldToCell(targetWorldX, targetWorldZ);
        this.currentPath = findPath(start, end, this.world);
        this.pathIndex = 0;
    }

    // ════════════════════════════════════════════════════════════
    //  PATROL
    // ════════════════════════════════════════════════════════════

    private generatePatrolRoute(origin: Vector3): void {
        this.patrolWaypoints = [];
        const count = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
            // Random angles (not evenly spaced) so patrol routes aren't circular
            const angle = Math.random() * Math.PI * 2;
            const radius = 3 + Math.random() * 5;
            const x = Math.max(
                1,
                Math.min(48, origin.x + Math.cos(angle) * radius),
            );
            const z = Math.max(
                1,
                Math.min(48, origin.z + Math.sin(angle) * radius),
            );
            this.patrolWaypoints.push(new Vector3(x, 0.5, z));
        }
        this.patrolIndex = Math.floor(
            Math.random() * this.patrolWaypoints.length,
        );
    }

    private pickNextPatrolPoint(): void {
        if (this.patrolWaypoints.length === 0) {
            this.moveTarget = null;
            return;
        }
        this.moveTarget = this.patrolWaypoints[this.patrolIndex].clone();
        this.patrolIndex = (this.patrolIndex + 1) % this.patrolWaypoints.length;
    }

    // ════════════════════════════════════════════════════════════
    //  TACTICAL POSITIONING
    // ════════════════════════════════════════════════════════════

    private calculateFlankPosition(): void {
        const toPlayer = new Vector3().subVectors(
            this.player.position,
            this.position,
        );
        toPlayer.y = 0;
        toPlayer.normalize();

        // Perpendicular to the direction from player to enemy
        const flankDir = new Vector3(-toPlayer.z, 0, toPlayer.x).multiplyScalar(
            this.flankDirection,
        );

        const desiredPos = this.player.position
            .clone()
            .add(flankDir.multiplyScalar(5 + Math.random() * 3))
            .add(toPlayer.multiplyScalar(4));

        desiredPos.x = Math.max(1, Math.min(48, desiredPos.x));
        desiredPos.z = Math.max(1, Math.min(48, desiredPos.z));

        // Use pathfinding to get there
        const start = worldToCell(this.position.x, this.position.z);
        const end = worldToCell(desiredPos.x, desiredPos.z);
        this.currentPath = findPath(start, end, this.world);
        this.pathIndex = 0;

        // If pathfinding fails, just move directly
        if (this.currentPath.length === 0) {
            this.moveTarget = desiredPos;
        } else {
            this.moveTarget = null; // using path instead
        }
    }

    private calculateRetreatPosition(): void {
        // Retreat in the opposite direction from the player
        const away = new Vector3().subVectors(
            this.position,
            this.player.position,
        );
        away.y = 0;
        away.normalize();

        // Try to find cover (a building to hide behind)
        const retreatPos = this.position
            .clone()
            .add(away.multiplyScalar(6 + Math.random() * 4));
        retreatPos.x = Math.max(1, Math.min(48, retreatPos.x));
        retreatPos.z = Math.max(1, Math.min(48, retreatPos.z));

        this.moveTarget = retreatPos;
    }

    // ════════════════════════════════════════════════════════════
    //  DEATH
    // ════════════════════════════════════════════════════════════

    private die(): void {
        this.dead = true;
        this.deathTimer = this.deathDuration;
        // Tilt the body over
        this.body.rotation.x = Math.PI / 2;
        this.head.rotation.x = Math.PI / 2;
    }

    // ════════════════════════════════════════════════════════════
    //  HELPERS
    // ════════════════════════════════════════════════════════════

    private isBlockedPosition(x: number, z: number): boolean {
        if (!this.world?.buildingCells) return false;
        return this.world.buildingCells.has(
            `${Math.floor(x)},${Math.floor(z)}`,
        );
    }

    private clampToWorldBounds(): void {
        this.position.x = Math.max(0.5, Math.min(49.5, this.position.x));
        this.position.z = Math.max(0.5, Math.min(49.5, this.position.z));
    }

    // ════════════════════════════════════════════════════════════
    //  CLEANUP
    // ════════════════════════════════════════════════════════════

    dispose(): void {
        this.body.geometry.dispose();
        (this.body.material as MeshStandardMaterial).dispose();
        this.head.geometry.dispose();
        (this.head.material as MeshStandardMaterial).dispose();
    }
}
