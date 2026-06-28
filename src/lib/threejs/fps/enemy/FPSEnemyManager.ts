import { Object3D, Vector3, Scene } from 'three';
import { FPSEnemy } from './FPSEnemy';
import { EnemyArchetype, getRandomArchetype } from './EnemyArchetypes';
import type { Projectile } from '../../shooter/combat/Projectile';
import type { World } from '../../shooter/world';

/**
 * Squad order types for coordinated enemy behavior.
 */
type SquadOrder =
    | 'assault'
    | 'flank_left'
    | 'flank_right'
    | 'hold'
    | 'surround';

export class FPSEnemyManager extends Object3D {
    private enemies: FPSEnemy[] = [];
    private world: World;
    private scene: Scene;
    private player: Object3D;
    private obstacles: Object3D[] = [];

    // ─── Spawning ─────────────────────────────────────────────
    private spawnCooldown: number = 0;
    private spawnCooldownMax: number = 3;
    private maxEnemies: number = 3;
    private wave: number = 1;
    private totalSpawned: number = 0;
    private onEnemyKilled: (() => void) | null = null;
    private onAmmoBrickSpawn: ((position: Vector3) => void) | null = null;

    // ─── Boss tracking ───────────────────────────────────────
    /** Set by the game when to spawn the boss (e.g. after 5 kills) */
    private bossTriggered: boolean = false;
    /** The boss enemy, if alive */
    private bossEnemy: FPSEnemy | null = null;
    /** Fired when the boss is killed */
    private onBossKilled: (() => void) | null = null;

    // ─── Squad tactics ────────────────────────────────────────
    private squadTimer: number = 0;
    private squadInterval: number = 4; // re-evaluate tactics every 4s
    private currentOrder: SquadOrder = 'assault';

    constructor(player: Object3D, world: World, scene: Scene) {
        super();
        this.player = player;
        this.world = world;
        this.scene = scene;
    }

    /** Set the buildings group for obstacle/LOS checks on enemies */
    setObstacles(obstacles: Object3D[]): void {
        this.obstacles = obstacles;
        for (const enemy of this.enemies) {
            enemy.setObstacles(obstacles);
        }
    }

    // ─── Spawning ─────────────────────────────────────────────

    private getRandomSpawnPosition(): Vector3 {
        const angle = Math.random() * Math.PI * 2;
        const distance = 6 + Math.random() * 4;
        const x = Math.max(
            2,
            Math.min(48, this.player.position.x + Math.cos(angle) * distance),
        );
        const z = Math.max(
            2,
            Math.min(48, this.player.position.z + Math.sin(angle) * distance),
        );
        return new Vector3(x, 0.5, z);
    }

    /**
     * Get a spawn position that's OUT of the player's view (behind or to the side).
     * This makes spawns feel more natural.
     */
    private getTacticalSpawnPosition(playerFacing: Vector3): Vector3 {
        // Pick an angle that's NOT in the player's view cone (±60° of facing)
        const facingAngle = Math.atan2(playerFacing.x, playerFacing.z);
        let spawnAngle: number;
        do {
            spawnAngle = Math.random() * Math.PI * 2;
        } while (Math.abs(spawnAngle - facingAngle) < Math.PI / 3);

        const distance = 8 + Math.random() * 5;
        const x = Math.max(
            2,
            Math.min(
                48,
                this.player.position.x + Math.cos(spawnAngle) * distance,
            ),
        );
        const z = Math.max(
            2,
            Math.min(
                48,
                this.player.position.z + Math.sin(spawnAngle) * distance,
            ),
        );
        return new Vector3(x, 0.5, z);
    }

    private isValidSpawnPosition(pos: Vector3): boolean {
        if (!this.world?.buildingCells) return true;
        return !this.world.buildingCells.has(
            `${Math.floor(pos.x)},${Math.floor(pos.z)}`,
        );
    }

    spawnEnemy(
        position: Vector3,
        archetype?: EnemyArchetype,
        isBoss: boolean = false,
    ): FPSEnemy {
        const type = archetype ?? getRandomArchetype(this.wave);
        const enemy = new FPSEnemy(
            position.clone(),
            this.world,
            this.player,
            type,
            this.obstacles,
            isBoss,
        );
        this.enemies.push(enemy);
        this.scene.add(enemy);
        this.totalSpawned++;
        return enemy;
    }

    /** Spawn the boss (a super-sized Tank) in front of the player */
    spawnBoss(): FPSEnemy {
        // Use the player's facing direction (FPSPlayer has this synced from camera)
        const playerFacing = (this.player as any).facingDirection;
        const dir =
            playerFacing instanceof Vector3 && playerFacing.lengthSq() > 0.01
                ? playerFacing.clone()
                : new Vector3(0, 0, -1);
        const spawnDist = 10;
        const spawnPos = new Vector3(
            Math.max(
                2,
                Math.min(48, this.player.position.x + dir.x * spawnDist),
            ),
            0.5,
            Math.max(
                2,
                Math.min(48, this.player.position.z + dir.z * spawnDist),
            ),
        );
        const boss = this.spawnEnemy(spawnPos, EnemyArchetype.Tank, true);
        this.bossEnemy = boss;
        this.bossTriggered = true;
        // Clear all other enemies when boss spawns
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            if (e !== boss) {
                this.scene.remove(e);
                e.dispose();
                this.enemies.splice(i, 1);
            }
        }
        return boss;
    }

    hasBossSpawned(): boolean {
        return this.bossTriggered;
    }

    isBossAlive(): boolean {
        return this.bossEnemy !== null && this.bossEnemy.isAlive();
    }

    setOnBossKilled(callback: () => void): void {
        this.onBossKilled = callback;
    }

    // ─── Wave progression ────────────────────────────────────

    setWave(n: number): void {
        this.wave = n;
        // More enemies per wave, faster spawns
        this.maxEnemies = Math.min(10, 2 + n);
        this.spawnCooldownMax = Math.max(1, 3 - n * 0.2);
    }

    getWave(): number {
        return this.wave;
    }

    // ─── Update ───────────────────────────────────────────────

    update(dt: number): void {
        // Update existing enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];

            if (!enemy.isAlive()) {
                // Wait for death animation to finish before removal
                if (enemy.isDead()) {
                    const deathPos = enemy.position.clone();
                    this.scene.remove(enemy);
                    enemy.dispose();
                    this.enemies.splice(i, 1);
                    this.onEnemyKilled?.();

                    // Spawn ammo brick every 3 kills
                    if (
                        this.onAmmoBrickSpawn &&
                        this.getKillCount() % 3 === 0
                    ) {
                        this.onAmmoBrickSpawn(deathPos);
                    }
                }
            } else {
                enemy.update(dt);
            }
        }

        // Squad tactics
        this.squadTimer -= dt;
        if (this.squadTimer <= 0 && this.enemies.length >= 2) {
            this.evaluateSquadTactics();
            this.squadTimer = this.squadInterval;
        }

        // Check boss death
        if (
            this.bossEnemy &&
            !this.bossEnemy.isAlive() &&
            this.bossEnemy.isDead()
        ) {
            this.onBossKilled?.();
            this.bossEnemy = null;
        }

        // Don't spawn regular enemies while boss is active
        const bossActive = this.bossEnemy !== null && this.bossEnemy.isAlive();
        if (!bossActive && this.enemies.length < this.maxEnemies) {
            this.spawnCooldown -= dt;
            if (this.spawnCooldown <= 0) {
                // Use tactical spawn positioning
                const playerFacing = this.getPlayerFacing();
                for (let attempts = 0; attempts < 5; attempts++) {
                    const pos = playerFacing
                        ? this.getTacticalSpawnPosition(playerFacing)
                        : this.getRandomSpawnPosition();
                    if (this.isValidSpawnPosition(pos)) {
                        this.spawnEnemy(pos);
                        break;
                    }
                }
                this.spawnCooldown = this.spawnCooldownMax;
            }
        }
    }

    /** Estimate player facing from player position changes, or null if unknown */
    private lastPlayerPos: Vector3 = new Vector3();
    private getPlayerFacing(): Vector3 | null {
        const delta = this.player.position.clone().sub(this.lastPlayerPos);
        this.lastPlayerPos.copy(this.player.position);
        if (delta.length() < 0.01) return null;
        return delta.normalize();
    }

    // ─── Squad Tactics ───────────────────────────────────────

    private evaluateSquadTactics(): void {
        const alive = this.enemies.filter((e) => e.isAlive());
        if (alive.length < 2) {
            this.currentOrder = 'assault';
            return;
        }

        // Pick a tactic based on enemy composition and wave
        const flankers = alive.filter(
            (e) => e.archetype === EnemyArchetype.Flanker,
        );
        const _snipers = alive.filter(
            (e) => e.archetype === EnemyArchetype.Sniper,
        );
        const _tanks = alive.filter((e) => e.archetype === EnemyArchetype.Tank);
        const _rushers = alive.filter(
            (e) => e.archetype === EnemyArchetype.Rusher,
        );

        // Sort enemies by distance to player
        const sorted = [...alive].sort(
            (a, b) =>
                a.position.distanceTo(this.player.position) -
                b.position.distanceTo(this.player.position),
        );

        // Tactics assignment:
        // - Tanks and closest enemies → direct assault
        // - Flankers → flank left/right
        // - Snipers → hold position (keep distance)
        // - Rushers → surround from different angles

        for (const e of alive) {
            if (e.archetype === EnemyArchetype.Tank) {
                e.squadOrder = 'assault';
            } else if (e.archetype === EnemyArchetype.Sniper) {
                e.squadOrder = 'hold';
            } else if (e.archetype === EnemyArchetype.Rusher) {
                e.squadOrder = 'surround';
            } else if (
                e.archetype === EnemyArchetype.Flanker ||
                sorted.indexOf(e) > alive.length / 2
            ) {
                // Further enemies flank
                const leftFlankers = Math.ceil(flankers.length / 2);
                const idx = flankers.indexOf(e as any);
                e.squadOrder =
                    idx < leftFlankers ? 'flank_left' : 'flank_right';
            } else {
                e.squadOrder = 'assault';
            }
        }
    }

    // ─── Projectile helpers ──────────────────────────────────

    checkProjectileCollisions(projectiles: Projectile[]): void {
        for (const enemy of this.enemies) {
            if (!enemy.isAlive()) continue;
            const hitRadius = enemy.getHitboxRadius();
            for (let i = projectiles.length - 1; i >= 0; i--) {
                const proj = projectiles[i];
                if (enemy.position.distanceTo(proj.position) < hitRadius) {
                    enemy.takeDamage(1);
                    this.scene.remove(proj);
                    proj.dispose();
                    projectiles.splice(i, 1);
                    break;
                }
            }
        }
    }

    getEnemyProjectiles(): {
        position: Vector3;
        direction: Vector3;
        damage: number;
    }[] {
        const result: {
            position: Vector3;
            direction: Vector3;
            damage: number;
        }[] = [];
        for (const enemy of this.enemies) {
            if (!enemy.isAlive()) continue;

            // Get shooting enemies
            if (enemy.canShoot()) {
                enemy.shoot();
                const dir = enemy.getFacingDirection();
                const pos = enemy.position
                    .clone()
                    .add(dir.clone().multiplyScalar(0.5));
                result.push({
                    position: pos,
                    direction: dir,
                    damage: enemy.getShotDamage(),
                });
            }

            // Get melee enemies (signal via null direction)
            // Melee damage is handled by FPSCombatManager distance check
        }
        return result;
    }

    /** Check if any melee enemy is in range of the player */
    checkMeleeAttacks(_playerPosition: Vector3): number {
        let totalMeleeDamage = 0;
        for (const enemy of this.enemies) {
            if (!enemy.isAlive()) continue;
            if (enemy.canMelee()) {
                totalMeleeDamage += enemy.doMeleeDamage();
            }
        }
        return totalMeleeDamage;
    }

    // ─── Accessors ───────────────────────────────────────────

    getEnemies(): FPSEnemy[] {
        return this.enemies;
    }

    setOnEnemyKilled(callback: () => void): void {
        this.onEnemyKilled = callback;
    }

    setOnAmmoBrickSpawn(callback: (position: Vector3) => void): void {
        this.onAmmoBrickSpawn = callback;
    }

    getKillCount(): number {
        return this.totalSpawned - this.enemies.length;
    }

    getEnemyCount(): number {
        return this.enemies.length;
    }

    getTotalSpawned(): number {
        return this.totalSpawned;
    }

    /** Current boss health (0 or less if dead, -1 if no boss) */
    getBossHealth(): number {
        return this.bossEnemy?.getHealth() ?? -1;
    }

    /** Max boss health */
    getBossMaxHealth(): number {
        return this.bossEnemy?.getMaxHealth() ?? -1;
    }

    // ─── Cleanup ─────────────────────────────────────────────

    dispose(): void {
        for (const enemy of this.enemies) {
            this.scene.remove(enemy);
            enemy.dispose();
        }
        this.enemies = [];
    }
}
