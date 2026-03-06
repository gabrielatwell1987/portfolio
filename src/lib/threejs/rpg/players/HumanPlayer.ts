import { PerspectiveCamera, Object3D, Vector3, Scene } from 'three';
import type { World } from '../world';
import { Player } from './Player';
import { MovementAction } from '../actions/MovementAction';
import { KeyboardMovement } from '../actions/KeyboardMovement';
import { PlayerInputHandler } from './PlayerInputHandler';
import { CombatManager } from '../combat/CombatManager';
import { ShootingSystem } from '../combat/ShootingSystem';

export class HumanPlayer extends Player {
	private movementAction: MovementAction;
	private keyboardMovement: KeyboardMovement;
	private inputHandler: PlayerInputHandler;
	private dom: HTMLElement;
	private camera: PerspectiveCamera;
	private combatManager: CombatManager;
	private shootingSystem: ShootingSystem;
	private handlePointerDown: (event: PointerEvent) => void;
	private handleTouchStart: (event: TouchEvent) => void;

	constructor(
		camera: PerspectiveCamera,
		terrain: Object3D,
		world: World,
		dom: HTMLElement,
		scene: Scene
	) {
		super(world);

		this.dom = dom;
		this.camera = camera;
		this.inputHandler = new PlayerInputHandler(camera, terrain, world, dom);
		this.movementAction = new MovementAction(this, this.inputHandler, world);
		this.keyboardMovement = new KeyboardMovement(this, world, dom);
		this.handlePointerDown = (event: PointerEvent) => this.movementAction.handlePointerDown(event);
		this.handleTouchStart = (event: TouchEvent) => this.movementAction.handleTouchStart(event);

		// Initialize combat system
		this.combatManager = new CombatManager(this, scene);
		this.shootingSystem = new ShootingSystem(this.combatManager, this, camera, dom);

		this.dom.addEventListener('pointerdown', this.handlePointerDown);
		this.dom.addEventListener('touchstart', this.handleTouchStart, { passive: false });
	}

	override dispose(): void {
		this.dom.removeEventListener('pointerdown', this.handlePointerDown);
		this.dom.removeEventListener('touchstart', this.handleTouchStart);
		this.keyboardMovement.dispose();
		this.shootingSystem.dispose();
		this.combatManager.dispose();
		super.dispose();
	}

	override update(): void {
		super.update();

		// Update keyboard movement
		this.keyboardMovement.update();

		// Update combat system
		const now = performance.now();
		const dt = Math.min(0.016, (now - (this as any).lastTick) / 1000);
		(this as any).lastTick = now;
		this.combatManager.update(dt);
	}

	shoot(): void {
		this.shootingSystem.shoot();
	}

	getCombatManager(): CombatManager {
		return this.combatManager;
	}

	// Use the input handler for player choices
	async chooseTargetSquare() {
		return await this.inputHandler.getTargetSquare();
	}

	async chooseTargetObject() {
		return await this.inputHandler.getTargetObject();
	}

	selectTarget(square: Vector3) {
		const handler = this.inputHandler as PlayerInputHandler & {
			selectTargetSquare?: (square: Vector3) => void;
			selectTarget?: (square: Vector3) => void;
		};

		if (handler.selectTargetSquare) {
			handler.selectTargetSquare(square);
			return;
		}

		handler.selectTarget?.(square);
	}
}
