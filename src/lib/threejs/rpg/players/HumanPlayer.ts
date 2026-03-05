import { PerspectiveCamera, Object3D, Vector3 } from 'three';
import type { World } from '../world';
import { Player } from './Player';
import { MovementAction } from '../actions/MovementAction';
import { PlayerInputHandler } from './PlayerInputHandler';

export class HumanPlayer extends Player {
	private movementAction: MovementAction;
	private inputHandler: PlayerInputHandler;
	private dom: HTMLElement;
	private handlePointerDown: (event: PointerEvent) => void;
	private handleTouchStart: (event: TouchEvent) => void;

	constructor(camera: PerspectiveCamera, terrain: Object3D, world: World, dom: HTMLElement) {
		super(world);

		this.dom = dom;
		this.inputHandler = new PlayerInputHandler(camera, terrain, world, dom);
		this.movementAction = new MovementAction(this, this.inputHandler, world);
		this.handlePointerDown = (event: PointerEvent) => this.movementAction.handlePointerDown(event);
		this.handleTouchStart = (event: TouchEvent) => this.movementAction.handleTouchStart(event);

		this.dom.addEventListener('pointerdown', this.handlePointerDown);
		this.dom.addEventListener('touchstart', this.handleTouchStart, { passive: false });
	}

	override dispose(): void {
		this.dom.removeEventListener('pointerdown', this.handlePointerDown);
		this.dom.removeEventListener('touchstart', this.handleTouchStart);
		super.dispose();
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
