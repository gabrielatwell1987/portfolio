import { PerspectiveCamera, Object3D } from 'three';
import type { World } from '../world';
import { Player } from './Player';
import { MovementAction } from '../actions/MovementAction';

export class HumanPlayer extends Player {
	private movementAction: MovementAction;
	private dom: HTMLElement;
	private handlePointerDown: (event: PointerEvent) => void;
	private handleTouchStart: (event: TouchEvent) => void;

	constructor(camera: PerspectiveCamera, terrain: Object3D, world: World, dom: HTMLElement) {
		super(world);

		this.dom = dom;
		this.movementAction = new MovementAction(this, camera, terrain, world, dom);

		this.handlePointerDown = this.movementAction.handlePointerDown.bind(this.movementAction);
		this.handleTouchStart = this.movementAction.handleTouchStart.bind(this.movementAction);

		this.dom.addEventListener('pointerdown', this.handlePointerDown);
		this.dom.addEventListener('touchstart', this.handleTouchStart, { passive: false });
	}

	override dispose(): void {
		this.dom.removeEventListener('pointerdown', this.handlePointerDown);
		this.dom.removeEventListener('touchstart', this.handleTouchStart);
		super.dispose();
	}
}
