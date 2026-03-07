import { Object3D, Vector3 } from 'three';
import { GameObject } from '../objects/GameObject';
import type { World } from '../world';
import type { Player } from '../players/Player';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.setResourcePath(
	'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/glb/'
);

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
	protected model: Object3D | null = null;

	constructor(position: Vector3, world: World, player: Player) {
		super(new Vector3(5.5, 0.5, 5.5));

		this.world = world;
		this.player = player;
		this.position.copy(position);

		loader.load(
			'/threejayess/models/computerman.glb',
			(gltf: GLTF) => {
				const model = gltf.scene;
				this.model = model;
				model.scale.multiplyScalar(0.15);

				this.add(model);
			},
			undefined,
			(error) => {
				console.error('Error loading enemy model:', error);
			}
		);
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

		if (this.model) {
			this.model.rotation.y = Math.atan2(this.facingDirection.x, this.facingDirection.z);
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
