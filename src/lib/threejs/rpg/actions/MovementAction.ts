import { PerspectiveCamera, Raycaster, Vector2, Vector3, Object3D } from 'three';
import type { World } from '../world';
import type { Player } from '../players/Player';
import { findPathAStar, worldToCell, cellToWorld } from '../players/pathfinding';
import { Action } from './Action';

export class MovementAction extends Action {
	private raycaster = new Raycaster();
	private pointer = new Vector2();
	private camera: PerspectiveCamera;
	private terrain: Object3D;
	private dom: HTMLElement;
	private player: Player;
	private world: World;

	constructor(
		player: Player,
		camera: PerspectiveCamera,
		terrain: Object3D,
		world: World,
		dom: HTMLElement
	) {
		super(player);

		this.player = player;
		this.camera = camera;
		this.terrain = terrain;
		this.world = world;
		this.dom = dom;
	}

	private lastWorldPoint: Vector3 | null = null;

	async perform(): Promise<void> {
		if (this.lastWorldPoint) {
			this.setPathToWorldPoint(this.lastWorldPoint);
		}
	}

	async canPerform(): Promise<boolean> {
		const intersects = this.raycaster.intersectObject(this.terrain, true);
		if (intersects.length === 0) return false;

		this.lastWorldPoint = intersects[0].point;
		const start = worldToCell(this.player.position.x, this.player.position.z);
		const end = worldToCell(this.lastWorldPoint.x, this.lastWorldPoint.z);
		const cellPath = findPathAStar(start, end, this.world);

		return cellPath.length > 0;
	}

	async moveToClientPoint(clientX: number, clientY: number): Promise<void> {
		const rect = this.dom.getBoundingClientRect();
		this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
		this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

		this.raycaster.setFromCamera(this.pointer, this.camera);

		if ((await this.canPerform()) && this.lastWorldPoint) {
			this.setPathToWorldPoint(this.lastWorldPoint);
		}
	}

	handlePointerDown(event: PointerEvent): void {
		this.moveToClientPoint(event.clientX, event.clientY);
	}

	handleTouchStart(event: TouchEvent): void {
		if (event.touches.length > 0) {
			const touch = event.touches[0];
			this.moveToClientPoint(touch.clientX, touch.clientY);
		}
	}

	private setPathToWorldPoint(worldPoint: Vector3): void {
		const start = worldToCell(this.player.position.x, this.player.position.z);
		const end = worldToCell(worldPoint.x, worldPoint.z);
		const cellPath = findPathAStar(start, end, this.world);

		const worldPath = cellPath.slice(1).map((cell) => {
			const p = cellToWorld(cell);
			return new Vector3(p.x, 0.5, p.z);
		});

		this.player.setPath(worldPath);
	}
}
