import { Object3D, Vector3, Scene } from 'three';
import { Enemy } from './Enemy';
import type { Player } from '../players/Player';
import type { World } from '../world';
import type { Projectile } from '../combat/Projectile';

export class EnemyManager extends Object3D {
	private enemies: Enemy[] = [];
	private player: Player;
	private world: World;
	private scene: Scene;
	private spawnCooldown: number = 0;
	private spawnCooldownMax: number = 3; // seconds between spawns
	private maxEnemies: number = 5;

	constructor(player: Player, world: World, scene: Scene) {
		super();
		this.player = player;
		this.world = world;
		this.scene = scene;
	}

	private getRandomSpawnPosition(): Vector3 {
		// Spawn enemies around the player at a distance, but keep them on the map
		const angle = Math.random() * Math.PI * 2;
		const distance = 6 + Math.random() * 4; // Reduced from 8-13 to 6-10
		let x = this.player.position.x + Math.cos(angle) * distance;
		let z = this.player.position.z + Math.sin(angle) * distance;

		// Clamp to world bounds (2-28 for 30x30 world with safety margin)
		x = Math.max(2, Math.min(28, x));
		z = Math.max(2, Math.min(28, z));

		return new Vector3(x, 0.5, z);
	}

	private isValidSpawnPosition(pos: Vector3): boolean {
		// Check if position is not blocked and not too close to player
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

	update(dt: number): void {
		// Update existing enemies
		for (let i = this.enemies.length - 1; i >= 0; i--) {
			const enemy = this.enemies[i];

			if (!enemy.isAlive()) {
				// Remove dead enemies
				this.scene.remove(enemy);
				enemy.dispose();
				this.enemies.splice(i, 1);
			} else {
				enemy.update();
			}
		}

		// Spawn new enemies
		if (this.enemies.length < this.maxEnemies) {
			this.spawnCooldown -= dt;

			if (this.spawnCooldown <= 0) {
				for (let attempts = 0; attempts < 5; attempts++) {
					const spawnPos = this.getRandomSpawnPosition();
					if (this.isValidSpawnPosition(spawnPos)) {
						const enemy = new Enemy(spawnPos, this.world, this.player);
						this.enemies.push(enemy);
						this.scene.add(enemy);
						break;
					}
				}
				this.spawnCooldown = this.spawnCooldownMax;
			}
		}
	}

	checkProjectileCollisions(projectiles: Projectile[]): void {
		const hitRadius = 0.5; // Radius around enemy to check for hits

		for (const enemy of this.enemies) {
			for (let i = projectiles.length - 1; i >= 0; i--) {
				const projectile = projectiles[i];
				const dist = enemy.position.distanceTo(projectile.position);

				if (dist < hitRadius) {
					enemy.takeDamage(1);
					// Remove projectile after hit (will be cleaned up by combat manager)
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
				const pos = enemy.position.clone().add(enemy.getFacingDirection().multiplyScalar(0.5));
				projectiles.push({
					position: pos,
					direction: enemy.getFacingDirection()
				});
			}
		}

		return projectiles;
	}

	getEnemies(): Enemy[] {
		return this.enemies;
	}

	dispose(): void {
		for (const enemy of this.enemies) {
			this.scene.remove(enemy);
			enemy.dispose();
		}
		this.enemies = [];
	}
}
