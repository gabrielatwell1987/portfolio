import { CapsuleGeometry, MeshStandardMaterial, Vector3 } from 'three';
import { GameObject } from '../objects/GameObject';
import type { World } from '../world';
import type { Player } from '../players/Player';

export class Enemy extends GameObject {
	protected world: World;
	protected player: Player;
	protected health: number = 5;
	protected maxHealth: number = 5;
	protected moveSpeed: number = 2;
	protected detectionRange: number = 15;
	protected shootCooldown: number = 0;
	protected shootCooldownMax: number = 2; // seconds between shots
	protected lastTick: number = performance.now();
	protected facingDirection: Vector3 = new Vector3(0, 0, 1);
	protected targetDirection: Vector3 = new Vector3();

	constructor(position: Vector3, world: World, player: Player) {
		const geometry = new CapsuleGeometry(0.25, 0.5);
		const material = new MeshStandardMaterial({ color: 0xff4444 }); // Red for enemies
		super(position, geometry, material);

		this.world = world;
		this.player = player;
		this.position.copy(position);
	}

	takeDamage(amount: number = 1): void {
		this.health -= amount;
	}

	isAlive(): boolean {
		return this.health > 0;
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

	private isBlockedPosition(x: number, z: number): boolean {
		const cell = { x: Math.floor(x), z: Math.floor(z) };
		const key = `${cell.x},${cell.z}`;
		return (
			this.world.treeCells.has(key) ||
			this.world.rockCells.has(key) ||
			this.world.bushCells.has(key)
		);
	}

	update(): void {
		const now = performance.now();
		const dt = Math.min(0.05, (now - this.lastTick) / 1000);
		this.lastTick = now;

		// Calculate direction to player
		const dx = this.player.position.x - this.position.x;
		const dz = this.player.position.z - this.position.z;
		const dist = Math.hypot(dx, dz);

		// Update facing direction
		if (dist > 0) {
			this.facingDirection.set(dx, 0, dz).normalize();
			this.targetDirection.copy(this.facingDirection);
		}

		// Move towards player if in range and not too close
		if (dist > 1.5 && dist < this.detectionRange) {
			const step = this.moveSpeed * dt;
			const nextX = this.position.x + (dx / dist) * step;
			const nextZ = this.position.z + (dz / dist) * step;

			if (!this.isBlockedPosition(nextX, nextZ)) {
				this.position.x = nextX;
				this.position.z = nextZ;
				this.position.y = 0.5;
			}
		}

		// Update shoot cooldown
		if (this.shootCooldown > 0) {
			this.shootCooldown -= dt;
		}
	}

	canShoot(): boolean {
		const dist = this.position.distanceTo(this.player.position);
		return this.shootCooldown <= 0 && dist < this.detectionRange && this.isAlive();
	}

	shoot(): void {
		if (this.canShoot()) {
			this.shootCooldown = this.shootCooldownMax;
		}
	}

	override dispose(): void {
		super.dispose();
	}
}
