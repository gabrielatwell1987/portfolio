import { Vector3 } from 'three';
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
		const key = `${cell.x},${cell.z}`;

		// Check the main cell and surrounding cells for collision buffer
		const cellsToCheck = [
			`${cell.x},${cell.z}`,
			`${cell.x + 1},${cell.z}`,
			`${cell.x - 1},${cell.z}`,
			`${cell.x},${cell.z + 1}`,
			`${cell.x},${cell.z - 1}`
		];

		for (const checkKey of cellsToCheck) {
			if (
				this.world.treeCells.has(checkKey) ||
				this.world.rockCells.has(checkKey) ||
				this.world.bushCells.has(checkKey)
			) {
				// Only block if player would be within 0.3 units of obstacle
				const cell = checkKey.split(',').map(Number);
				const cellX = cell[0];
				const cellZ = cell[1];
				const distToCell = Math.hypot(x - (cellX + 0.5), z - (cellZ + 0.5));
				if (distToCell < 0.4) {
					return true;
				}
			}
		}
		return false;
	}

	update(): void {
		const now = performance.now();
		const dt = Math.min(0.05, (now - this.lastTick) / 1000);
		this.lastTick = now;

		this.updateMoveDirection();

		// Only move if there's a direction and keys are pressed
		if (this.moveDirection.length() > 0) {
			const step = this.moveSpeed * dt;
			const nextX = this.player.position.x + this.moveDirection.x * step;
			const nextZ = this.player.position.z + this.moveDirection.z * step;

			if (!this.isBlockedPosition(nextX, nextZ)) {
				this.player.position.x = nextX;
				this.player.position.z = nextZ;
				this.player.position.y = 0.5;

				// Update facing direction
				const playerWithFacing = this.player as unknown as { facingDirection: Vector3 };
				playerWithFacing.facingDirection.copy(this.moveDirection);
			}
		}
	}

	dispose(): void {
		window.removeEventListener('keydown', this.handleKeyDown);
		window.removeEventListener('keyup', this.handleKeyUp);
		this.keysPressed.clear();
	}
}
