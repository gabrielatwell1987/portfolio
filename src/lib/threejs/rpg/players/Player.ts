import { CapsuleGeometry, MeshStandardMaterial, Vector3 } from 'three';
import type { World } from '../world';
import { GameObject } from '../objects/GameObject';
import { cellToWorld, worldToCell } from './pathfinding';

export class Player extends GameObject {
	protected path: Vector3[] = [];
	protected moveSpeed = 3;
	protected lastTick = performance.now();
	protected world: World;

	constructor(world: World) {
		const geometry = new CapsuleGeometry(0.25, 0.5);
		const material = new MeshStandardMaterial({ color: 0x4040c0 });
		super(new Vector3(5.5, 0.5, 5.5), geometry, material);

		this.world = world;
		this.position.set(5.5, 0.5, 5.5);
	}

	protected isBlockedPosition(x: number, z: number): boolean {
		const cell = worldToCell(x, z);
		const key = `${cell.x},${cell.z}`;
		return (
			this.world.treeCells.has(key) ||
			this.world.rockCells.has(key) ||
			this.world.bushCells.has(key)
		);
	}

	protected movePath(target: Vector3, dt: number): boolean {
		const dx = target.x - this.position.x;
		const dz = target.z - this.position.z;
		const dist = Math.hypot(dx, dz);
		const step = this.moveSpeed * dt;

		if (dist <= step) {
			if (!this.isBlockedPosition(target.x, target.z)) {
				this.position.set(target.x, 0.5, target.z);
			}
			this.path.shift();
			return true;
		} else {
			const nextX = this.position.x + (dx / dist) * step;
			const nextZ = this.position.z + (dz / dist) * step;

			if (this.isBlockedPosition(nextX, nextZ)) {
				this.path = [];
				return false;
			}

			this.position.x = nextX;
			this.position.z = nextZ;
			this.position.y = 0.5;
			return false;
		}
	}

	update(): void {
		if (this.path.length === 0) return;

		const now = performance.now();
		const dt = Math.min(0.05, (now - this.lastTick) / 1000);
		this.lastTick = now;

		const target = this.path[0];
		this.movePath(target, dt);
	}

	setPath(newPath: Vector3[]): void {
		this.path = newPath;
		this.lastTick = performance.now();
	}

	override dispose(): void {
		super.dispose();
	}
}
