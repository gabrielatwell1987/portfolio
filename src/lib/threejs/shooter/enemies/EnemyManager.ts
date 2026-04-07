import { Object3D, Vector3, Scene } from 'three';
import { Enemy } from './Enemy';
import type { Player } from '../players/Player';
import type { World } from '../world';
import type { Projectile } from '../combat/Projectile';
import { AudioManager } from '../actions/AudioManager';

export class EnemyManager extends Object3D {
    private enemies: Enemy[] = [];
    private player: Player;
    private world: World;
    private scene: Scene;
    private spawnCooldown: number = 0;
    private spawnCooldownMax: number = 3; // seconds between spawns
    private maxEnemies: number = 3;
    private totalEnemiesSpawned: number = 0;
    private onEnemyKilled: (() => void) | null = null;
    private audioManager: AudioManager;
    private audioReady: boolean = false;

    constructor(player: Player, world: World, scene: Scene) {
        super();
        this.player = player;
        this.world = world;
        this.scene = scene;
        this.audioManager = new AudioManager();
        this.initializeAudio();
    }

    private async initializeAudio(): Promise<void> {
        try {
            await this.audioManager.initialize();
            await this.audioManager.loadSound(
                'enemyShoot',
                'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/sounds/enemy-shot.mp3',
            );
            this.audioReady = true;
        } catch (error) {
            console.warn('Failed to initialize audio:', error);
        }
    }

    private getRandomSpawnPosition(): Vector3 {
        // spawn enemies around the player
        const angle = Math.random() * Math.PI * 2;
        const distance = 6 + Math.random() * 4; // Reduced from 8-13 to 6-10
        let x = this.player.position.x + Math.cos(angle) * distance;
        let z = this.player.position.z + Math.sin(angle) * distance;

        // clamp to world bounds
        x = Math.max(2, Math.min(28, x));
        z = Math.max(2, Math.min(28, z));

        return new Vector3(x, 0.5, z);
    }

    private isValidSpawnPosition(pos: Vector3): boolean {
        const dist = pos.distanceTo(this.player.position);
        if (dist < 5) return false;

        const cell = { x: Math.floor(pos.x), z: Math.floor(pos.z) };
        const key = `${cell.x},${cell.z}`;
        return (
            !this.world.treeCells.has(key) &&
            !this.world.rockCells.has(key) &&
            !this.world.bushCells.has(key)
        );
    }

    spawnEnemy(position: Vector3): Enemy {
        const enemy = new Enemy(position.clone(), this.world, this.player);
        this.enemies.push(enemy);
        this.scene.add(enemy);
        this.totalEnemiesSpawned++;
        return enemy;
    }

    update(dt: number): void {
        // update existing enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];

            if (!enemy.isAlive()) {
                // remove dead enemies
                this.scene.remove(enemy);
                enemy.dispose();
                this.enemies.splice(i, 1);

                this.onEnemyKilled?.();
                console.log('Enemy killed, callback triggered');
            } else {
                enemy.update();
            }
        }

        // spawn new enemies
        if (this.enemies.length < this.maxEnemies) {
            this.spawnCooldown -= dt;

            if (this.spawnCooldown <= 0) {
                for (let attempts = 0; attempts < 5; attempts++) {
                    const spawnPos = this.getRandomSpawnPosition();
                    if (this.isValidSpawnPosition(spawnPos)) {
                        this.spawnEnemy(spawnPos);
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
                const projectile = projectiles[i];
                const dist = enemy.position.distanceTo(projectile.position);

                if (dist < hitRadius) {
                    enemy.takeDamage(1);
                    // Properly clean up projectile from scene
                    this.scene.remove(projectile);
                    projectile.dispose();
                    projectiles.splice(i, 1);
                    break; // Only one hit per projectile
                }
            }
        }
    }

    getEnemyProjectiles(): { position: Vector3; direction: Vector3 }[] {
        const projectiles: { position: Vector3; direction: Vector3 }[] = [];

        for (const enemy of this.enemies) {
            if (enemy.canShoot()) {
                enemy.shoot();

                if (this.audioReady) {
                    this.audioManager.playSound('enemyShoot', 0.3);
                }

                const dir = enemy.getFacingDirection(); // returns a clone
                const pos = enemy.position
                    .clone()
                    .add(dir.clone().multiplyScalar(0.5));
                projectiles.push({
                    position: pos,
                    direction: dir,
                });
            }
        }

        return projectiles;
    }

    getEnemies(): Enemy[] {
        return this.enemies;
    }

    setOnEnemyKilled(callback: () => void): void {
        this.onEnemyKilled = callback;
    }

    getKillCount(): number {
        return this.totalEnemiesSpawned - this.enemies.length;
    }

    getTotalEnemiesSpawned(): number {
        return this.totalEnemiesSpawned;
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
        this.audioManager.dispose();
    }
}
