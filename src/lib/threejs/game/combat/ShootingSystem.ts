import { Vector3, PerspectiveCamera } from 'three';
import type { CombatManager } from './CombatManager';
import type { HumanPlayer } from '../players/HumanPlayer';
import type { Player } from '../players/Player';

export class ShootingSystem {
	private combatManager: CombatManager;
	private player: HumanPlayer;
	private camera: PerspectiveCamera;
	private dom: HTMLElement;

	private handleKeyDown: (event: KeyboardEvent) => void;
	private handleTouchStart: (event: TouchEvent) => void;

	constructor(
		combatManager: CombatManager,
		player: HumanPlayer,
		camera: PerspectiveCamera,
		dom: HTMLElement
	) {
		this.combatManager = combatManager;
		this.player = player;
		this.camera = camera;
		this.dom = dom;

		this.handleKeyDown = (event: KeyboardEvent) => this.onKeyDown(event);
		this.handleTouchStart = (event: TouchEvent) => this.onTouchStart(event);

		// Register event listeners
		window.addEventListener('keydown', this.handleKeyDown);
		this.dom.addEventListener('touchstart', this.handleTouchStart, { passive: false });
	}

	private getShootDirection(): Vector3 {
		// Shoot in the direction the player is facing
		return (this.player as unknown as Player).getFacingDirection();
	}

	shoot(): void {
		const direction = this.getShootDirection();
		this.combatManager.shoot(direction);
	}

	private onKeyDown(event: KeyboardEvent): void {
		if (event.code === 'Space') {
			event.preventDefault();
			this.shoot();
		}
	}

	private onTouchStart(event: TouchEvent): void {
		// Allow shooting on tap (doesn't interfere with movement)
		if (event.targetTouches.length > 0) {
			// Double tap or long press could trigger shooting
			// For now, we'll use a simple tap on the right side of screen
			const touch = event.targetTouches[0];
			const screenWidth = window.innerWidth;

			// Tap on right half of screen to shoot
			if (touch.clientX > screenWidth / 2) {
				this.shoot();
			}
		}
	}

	dispose(): void {
		window.removeEventListener('keydown', this.handleKeyDown);
		this.dom.removeEventListener('touchstart', this.handleTouchStart);
	}
}
