import { Vector3, Object3D } from 'three';
import type { Player } from '../players/Player';
import type { World } from '../world';

export class KeyboardMovement {
	private player: Player;
	private world: World;
	private dom: HTMLElement;
	private moveSpeed: number = 5; // units per second
	private keysPressed: Set<string> = new Set();
	private moveDirection: Vector3 = new Vector3(0, 0, 0);
	private lastTick: number = performance.now();

	private handleKeyDown: (event: KeyboardEvent) => void;
	private handleKeyUp: (event: KeyboardEvent) => void;

	constructor(player: Player, world: World, dom: HTMLElement) {
		this.player = player;
		this.world = world;
		this.dom = dom;

		this.handleKeyDown = (event: KeyboardEvent) => this.onKeyDown(event);
		this.handleKeyUp = (event: KeyboardEvent) => this.onKeyUp(event);

		window.addEventListener('keydown', this.handleKeyDown);
		window.addEventListener('keyup', this.handleKeyUp);
	}

	private onKeyDown(event: KeyboardEvent): void {
		const key = event.key.toLowerCase();
		if (['w', 'a', 's', 'd'].includes(key)) {
			event.preventDefault();
			this.keysPressed.add(key);
		}
	}

	private onKeyUp(event: KeyboardEvent): void {
		const key = event.key.toLowerCase();
		if (['w', 'a', 's', 'd'].includes(key)) {
			this.keysPressed.delete(key);
		}
	}

	private updateMoveDirection(): void {
		this.moveDirection.set(0, 0, 0);

		// Up (towards negative Z on screen)
		if (this.keysPressed.has('w')) {
			this.moveDirection.z -= 1;
		}
		// Down (towards positive Z on screen)
		if (this.keysPressed.has('s')) {
			this.moveDirection.z += 1;
		}
		// Right (towards positive X)
		if (this.keysPressed.has('d')) {
			this.moveDirection.x += 1;
		}
		// Left (towards negative X)
		if (this.keysPressed.has('a')) {
			this.moveDirection.x -= 1;
		}

		// Normalize for diagonal movement
		if (this.moveDirection.length() > 0) {
			this.moveDirection.normalize();
		}
	}

	private isBlockedPosition(x: number, z: number): boolean {
		const cell = { x: Math.floor(x), z: Math.floor(z) };

		// Check all 9 surrounding cells (3x3 grid) for collision
		const cellsToCheck = [
			// Center and orthogonal neighbors
			`${cell.x},${cell.z}`,
			`${cell.x + 1},${cell.z}`,
			`${cell.x - 1},${cell.z}`,
			`${cell.x},${cell.z + 1}`,
			`${cell.x},${cell.z - 1}`,
			// Diagonal neighbors
			`${cell.x + 1},${cell.z + 1}`,
			`${cell.x + 1},${cell.z - 1}`,
			`${cell.x - 1},${cell.z + 1}`,
			`${cell.x - 1},${cell.z - 1}`
		];

		for (const checkKey of cellsToCheck) {
			if (
				this.world.treeCells.has(checkKey) ||
				this.world.rockCells.has(checkKey) ||
				this.world.bushCells.has(checkKey)
			) {
				// Only block if player would be within 0.1 units of obstacle
				const cell = checkKey.split(',').map(Number);
				const cellX = cell[0];
				const cellZ = cell[1];
				const distToCell = Math.hypot(x - (cellX + 0.5), z - (cellZ + 0.5));
				if (distToCell < 0.1) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Slide-style collision detection: allows sliding along surfaces
	 * Tries full diagonal movement first, then slides along individual axes
	 */
	private getValidPosition(
		currentX: number,
		currentZ: number,
		desiredX: number,
		desiredZ: number
	): { x: number; z: number } {
		// Try full diagonal movement
		if (!this.isBlockedPosition(desiredX, desiredZ)) {
			return { x: desiredX, z: desiredZ };
		}

		// Try sliding along X axis only
		if (!this.isBlockedPosition(desiredX, currentZ)) {
			return { x: desiredX, z: currentZ };
		}

		// Try sliding along Z axis only
		if (!this.isBlockedPosition(currentX, desiredZ)) {
			return { x: currentX, z: desiredZ };
		}

		// Cannot move - stay in place
		return { x: currentX, z: currentZ };
	}

	update(): void {
		const now = performance.now();
		const dt = Math.min(0.05, (now - this.lastTick) / 1000);
		this.lastTick = now;

		this.updateMoveDirection();

		// Only move if there's a direction and keys are pressed
		if (this.moveDirection.length() > 0) {
			const step = this.moveSpeed * dt;
			const desiredX = this.player.position.x + this.moveDirection.x * step;
			const desiredZ = this.player.position.z + this.moveDirection.z * step;

			// Use slide-style collision detection
			const validPos = this.getValidPosition(
				this.player.position.x,
				this.player.position.z,
				desiredX,
				desiredZ
			);

			this.player.position.x = validPos.x;
			this.player.position.z = validPos.z;
			this.player.position.y = 0.5;

			// Clamp to world bounds
			this.player.position.x = Math.max(0.5, Math.min(29.5, this.player.position.x));
			this.player.position.z = Math.max(0.5, Math.min(29.5, this.player.position.z));

			// Update facing direction
			const playerWithFacing = this.player as unknown as {
				facingDirection: Vector3;
				model: Object3D | null;
			};
			playerWithFacing.facingDirection.copy(this.moveDirection);

			// Rotate model to face direction
			if (playerWithFacing.model) {
				playerWithFacing.model.rotation.y = Math.atan2(this.moveDirection.x, this.moveDirection.z);
			}
		}
	}

	dispose(): void {
		window.removeEventListener('keydown', this.handleKeyDown);
		window.removeEventListener('keyup', this.handleKeyUp);
		this.keysPressed.clear();
	}
}
