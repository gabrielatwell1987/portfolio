import { Object3D, Vector3, Scene } from 'three';
import { FPSEnemy } from './FPSEnemy';
import type { Projectile } from '../../shooter/combat/Projectile';
import type { World } from '../../shooter/world';

export class FPSEnemyManager extends Object3D {
    private enemies: FPSEnemy[] = [];
    private world: World;
    private scene: Scene;
    private player: Object3D;
    private spawnCooldown: number = 0;
    private spawnCooldownMax: number = 3;
    private maxEnemies: number = 3;
    private totalSpawned: number = 0;
    private onEnemyKilled: (() => void) | null = null;

    constructor(player: Object3D, world: World, scene: Scene) {
        super();
        this.player = player;
        this.world = world;
        this.scene = scene;
    }

    private getRandomSpawnPosition(): Vector3 {
        const angle = Math.random() * Math.PI * 2;
        const distance = 6 + Math.random() * 4;
        const x = Math.max(
            2,
            Math.min(28, this.player.position.x + Math.cos(angle) * distance),
        );
        const z = Math.max(
            2,
            Math.min(28, this.player.position.z + Math.sin(angle) * distance),
        );
        return new Vector3(x, 0.5, z);
    }

    private isValidSpawnPosition(pos: Vector3): boolean {
        if (!this.world?.buildingCells) return true;
        return !this.world.buildingCells.has(
            `${Math.floor(pos.x)},${Math.floor(pos.z)}`,
        );
    }

    spawnEnemy(position: Vector3): FPSEnemy {
        const enemy = new FPSEnemy(position.clone(), this.world, this.player);
        this.enemies.push(enemy);
        this.scene.add(enemy);
        this.totalSpawned++;
        return enemy;
    }

    update(dt: number): void {
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];

            if (!enemy.isAlive()) {
                this.scene.remove(enemy);
                enemy.dispose();
                this.enemies.splice(i, 1);
                this.onEnemyKilled?.();
            } else {
                enemy.update();
            }
        }

        if (this.enemies.length < this.maxEnemies) {
            this.spawnCooldown -= dt;
            if (this.spawnCooldown <= 0) {
                for (let attempts = 0; attempts < 5; attempts++) {
                    const pos = this.getRandomSpawnPosition();
                    if (this.isValidSpawnPosition(pos)) {
                        this.spawnEnemy(pos);
                        break;
                    }
                }
                this.spawnCooldown = this.spawnCooldownMax;
            }
        }
    }

    checkProjectileCollisions(projectiles: Projectile[]): void {
        for (const enemy of this.enemies) {
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

    getEnemyProjectiles(): { position: Vector3; direction: Vector3 }[] {
        const result: { position: Vector3; direction: Vector3 }[] = [];
        for (const enemy of this.enemies) {
            if (enemy.canShoot()) {
                enemy.shoot();
                const dir = enemy.getFacingDirection();
                const pos = enemy.position
                    .clone()
                    .add(dir.clone().multiplyScalar(0.5));
                result.push({ position: pos, direction: dir });
            }
        }
        return result;
    }

    getEnemies(): FPSEnemy[] {
        return this.enemies;
    }

    setOnEnemyKilled(callback: () => void): void {
        this.onEnemyKilled = callback;
    }

    getKillCount(): number {
        return this.totalSpawned - this.enemies.length;
    }

    getEnemyCount(): number {
        return this.enemies.length;
    }

    dispose(): void {
        for (const enemy of this.enemies) {
            this.scene.remove(enemy);
            enemy.dispose();
        }
        this.enemies = [];
    }
}
