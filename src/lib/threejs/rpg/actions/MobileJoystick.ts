import { Vector3, Object3D } from 'three';
import type { HumanPlayer } from '../players/HumanPlayer';
import type { World } from '../world';

export class MobileJoystick {
	private player: HumanPlayer;
	private world: World;
	private joystickElement: HTMLElement | null = null;
	private joystickActive = false;
	private joystickX = 0;
	private joystickY = 0;
	private moveSpeed: number = 5; // units per second
	private lastFrameTime: number = performance.now();
	private abortController = new AbortController();

	private handleTouchStart: (e: TouchEvent) => void;
	private handleTouchMove: (e: TouchEvent) => void;
	private handleTouchEnd: (e: TouchEvent) => void;

	constructor(player: HumanPlayer, world: World, joystickElement: HTMLElement) {
		this.player = player;
		this.world = world;
		this.joystickElement = joystickElement;

		this.handleTouchStart = (e: TouchEvent) => this.onTouchStart(e);
		this.handleTouchMove = (e: TouchEvent) => this.onTouchMove(e);
		this.handleTouchEnd = (e: TouchEvent) => this.onTouchEnd(e);

		this.setupEventListeners();
	}

	private setupEventListeners(): void {
		this.joystickElement?.addEventListener('touchstart', this.handleTouchStart, {
			passive: false,
			signal: this.abortController.signal
		});
		this.joystickElement?.addEventListener('touchmove', this.handleTouchMove, {
			passive: false,
			signal: this.abortController.signal
		});
		this.joystickElement?.addEventListener('touchend', this.handleTouchEnd, {
			passive: false,
			signal: this.abortController.signal
		});
	}

	private onTouchStart(e: TouchEvent): void {
		e.preventDefault();
		this.joystickActive = true;
		this.updateJoystick(e);
	}

	private onTouchMove(e: TouchEvent): void {
		e.preventDefault();
		if (!this.joystickActive) return;
		this.updateJoystick(e);
	}

	private onTouchEnd(e: TouchEvent): void {
		e.preventDefault();
		this.joystickActive = false;
		this.joystickX = 0;
		this.joystickY = 0;
	}

	private updateJoystick(e: TouchEvent): void {
		if (!this.joystickElement || !e.touches.length) return;

		const touch = e.touches[0];
		const rect = this.joystickElement.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const radius = rect.width / 2;

		let x = touch.clientX - centerX;
		let y = touch.clientY - centerY;
		const distance = Math.hypot(x, y);

		if (distance > radius) {
			x = (x / distance) * radius;
			y = (y / distance) * radius;
		}

		this.joystickX = x / radius;
		this.joystickY = y / radius;

		const direction = new Vector3(this.joystickX, 0, this.joystickY).normalize();
		if (direction.length() > 0.1) {
			// Update facing direction
			const playerWithFacing = this.player as unknown as {
				facingDirection: Vector3;
				model: Object3D | null;
				position: Vector3;
			};

			playerWithFacing.facingDirection.copy(direction);

			// Rotate model to face direction
			if (playerWithFacing.model) {
				playerWithFacing.model.rotation.y = Math.atan2(direction.x, direction.z);
			}

			// Move player with collision detection
			const now = performance.now();
			const dt = Math.min(0.05, (now - this.lastFrameTime) / 1000);
			this.lastFrameTime = now;

			const step = this.moveSpeed * dt;
			const nextX = playerWithFacing.position.x + direction.x * step;
			const nextZ = playerWithFacing.position.z + direction.z * step;

			if (!this.isBlockedPosition(nextX, nextZ)) {
				playerWithFacing.position.x = nextX;
				playerWithFacing.position.z = nextZ;
				playerWithFacing.position.y = 0.5;

				// Clamp to world bounds
				playerWithFacing.position.x = Math.max(0.5, Math.min(29.5, playerWithFacing.position.x));
				playerWithFacing.position.z = Math.max(0.5, Math.min(29.5, playerWithFacing.position.z));
			}
		}
	}

	private isBlockedPosition(x: number, z: number): boolean {
		const cell = { x: Math.floor(x), z: Math.floor(z) };

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
				const cellParts = checkKey.split(',').map(Number);
				const cellX = cellParts[0];
				const cellZ = cellParts[1];
				const distToCell = Math.hypot(x - (cellX + 0.5), z - (cellZ + 0.5));
				if (distToCell < 0.4) {
					return true;
				}
			}
		}
		return false;
	}

	getJoystickX(): number {
		return this.joystickX;
	}

	getJoystickY(): number {
		return this.joystickY;
	}

	dispose(): void {
		this.abortController.abort();
	}
}
