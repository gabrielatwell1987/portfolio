import { Object3D, Vector3, Scene } from 'three';
import { Projectile } from './Projectile';
import type { Player } from '../players/Player';
import type { EnemyManager } from '../enemies/EnemyManager';

export class CombatManager extends Object3D {
	private projectiles: Projectile[] = [];
	private enemyProjectiles: Projectile[] = [];
	private player: Player;
	private scene: Scene;
	private enemyManager: EnemyManager | null = null;
	private shotCooldown: number = 0;
	private cooldownDuration: number = 0.2; // seconds between shots
	private lastShotTime: number = 0;
	private playerHealth: number = 10;
	private maxPlayerHealth: number = 10;

	constructor(player: Player, scene: Scene) {
		super();
		this.player = player;
		this.scene = scene;
	}

	setEnemyManager(enemyManager: EnemyManager): void {
		this.enemyManager = enemyManager;
	}

	canShoot(): boolean {
		const now = performance.now() / 1000;
		return now - this.lastShotTime >= this.cooldownDuration;
	}

	shoot(shootDirection: Vector3): void {
		if (!this.canShoot()) return;

		// Create projectile from player position
		const playerPos = this.player.position.clone();
		const shootPos = playerPos.clone().add(shootDirection.clone().normalize().multiplyScalar(0.5));

		const projectile = new Projectile(shootPos, shootDirection);
		this.projectiles.push(projectile);
		this.scene.add(projectile);

		this.lastShotTime = performance.now() / 1000;
	}

	private checkCollisions(): void {
		// Check player projectiles hitting enemies
		if (this.enemyManager) {
			this.enemyManager.checkProjectileCollisions(this.projectiles);
		}

		// Check enemy projectiles hitting player
		const playerRadius = 0.3;
		for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
			const projectile = this.enemyProjectiles[i];
			const dist = this.player.position.distanceTo(projectile.position);

			if (dist < playerRadius) {
				// Apply knockback away from projectile
				const knockbackDirection = this.player.position
					.clone()
					.sub(projectile.position)
					.normalize();
				const knockbackDistance = 0.5;
				const newX = this.player.position.x + knockbackDirection.x * knockbackDistance;
				const newZ = this.player.position.z + knockbackDirection.z * knockbackDistance;

				// Clamp to world bounds
				this.player.position.x = Math.max(0.5, Math.min(29.5, newX));
				this.player.position.z = Math.max(0.5, Math.min(29.5, newZ));
				this.player.position.y = 0.5;

				this.takeDamage(1);
				// Properly clean up projectile from scene
				this.scene.remove(projectile);
				projectile.dispose();
				this.enemyProjectiles.splice(i, 1);
			}
		}
	}

	update(dt: number): void {
		// Update player projectiles
		for (let i = this.projectiles.length - 1; i >= 0; i--) {
			const projectile = this.projectiles[i];
			const isAlive = projectile.update(dt);

			if (!isAlive) {
				// Remove dead projectile
				this.scene.remove(projectile);
				projectile.dispose();
				this.projectiles.splice(i, 1);
			}
		}

		// Update enemy projectiles
		for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
			const projectile = this.enemyProjectiles[i];
			const isAlive = projectile.update(dt);

			if (!isAlive) {
				// Remove dead projectile
				this.scene.remove(projectile);
				projectile.dispose();
				this.enemyProjectiles.splice(i, 1);
			}
		}

		// Get new enemy projectiles
		if (this.enemyManager) {
			const newEnemyProjectiles = this.enemyManager.getEnemyProjectiles();
			for (const proj of newEnemyProjectiles) {
				const projectile = new Projectile(proj.position, proj.direction);
				this.enemyProjectiles.push(projectile);
				this.scene.add(projectile);
			}
		}

		// Check collisions
		this.checkCollisions();
	}

	getPlayerHealth(): number {
		return this.playerHealth;
	}

	getMaxPlayerHealth(): number {
		return this.maxPlayerHealth;
	}

	takeDamage(amount: number = 1): void {
		this.playerHealth -= amount;
	}

	isPlayerAlive(): boolean {
		return this.playerHealth > 0;
	}

	getProjectiles(): Projectile[] {
		return this.projectiles;
	}

	dispose(): void {
		// Clean up all remaining projectiles
		for (const projectile of this.projectiles) {
			this.scene.remove(projectile);
			projectile.dispose();
		}
		this.projectiles = [];
	}
}
