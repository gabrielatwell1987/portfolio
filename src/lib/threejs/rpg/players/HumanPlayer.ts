import { PerspectiveCamera, Raycaster, Vector2, Vector3, Object3D } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { World } from '../world';
import { Player } from './Player';
import { findPathAStar, worldToCell, cellToWorld } from './pathfinding';

export class HumanPlayer extends Player {
	private raycaster = new Raycaster();
	private pointer = new Vector2();
	private camera: PerspectiveCamera;
	private terrain: Object3D;
	private controls: OrbitControls;
	private dom: HTMLElement;
	private handlePointerDown: (event: PointerEvent) => void;
	private handleTouchStart: (event: TouchEvent) => void;

	constructor(
		camera: PerspectiveCamera,
		terrain: Object3D,
		world: World,
		dom: HTMLElement,
		controls: OrbitControls
	) {
		super(world);

		this.camera = camera;
		this.terrain = terrain;
		this.controls = controls;
		this.dom = dom;

		this.handlePointerDown = this.onPointerDown.bind(this);
		this.handleTouchStart = this.onTouchStart.bind(this);

		this.dom.addEventListener('pointerdown', this.handlePointerDown);
		this.dom.addEventListener('touchstart', this.handleTouchStart, { passive: false });
	}

	private moveToClientPoint(clientX: number, clientY: number): void {
		const rect = this.dom.getBoundingClientRect();
		this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
		this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

		this.raycaster.setFromCamera(this.pointer, this.camera);

		const intersects = this.raycaster.intersectObject(this.terrain, true);
		if (intersects.length === 0) return;

		const start = worldToCell(this.position.x, this.position.z);
		const end = worldToCell(intersects[0].point.x, intersects[0].point.z);
		const cellPath = findPathAStar(start, end, this.world);

		const worldPath = cellPath.slice(1).map((cell) => {
			const p = cellToWorld(cell);
			return new Vector3(p.x, 0.5, p.z);
		});

		this.setPath(worldPath);
	}

	private onPointerDown(event: PointerEvent): void {
		if (event.target !== this.dom) return;
		if (event.button !== undefined && event.button !== 0) return;
		this.moveToClientPoint(event.clientX, event.clientY);
	}

	private onTouchStart(event: TouchEvent): void {
		if (event.target !== this.dom) return;
		const touch = event.changedTouches[0];
		if (!touch) return;
		event.preventDefault();
		this.moveToClientPoint(touch.clientX, touch.clientY);
	}

	override dispose(): void {
		this.dom.removeEventListener('pointerdown', this.handlePointerDown);
		this.dom.removeEventListener('touchstart', this.handleTouchStart);
		super.dispose();
	}
}
