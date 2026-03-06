import { Object3D, Vector3, Scene } from 'three';
import { Projectile } from './Projectile';
import type { Player } from '../players/Player';

export class CombatManager extends Object3D {
	private projectiles: Projectile[] = [];
	private player: Player;
	private scene: Scene;
	private shotCooldown: number = 0;
	private cooldownDuration: number = 0.2; // seconds between shots
	private lastShotTime: number = 0;

	constructor(player: Player, scene: Scene) {
		super();
		this.player = player;
		this.scene = scene;
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

	update(dt: number): void {
		// Update all projectiles
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
