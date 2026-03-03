import {
	CapsuleGeometry,
	Mesh,
	MeshStandardMaterial,
	Object3D,
	PerspectiveCamera,
	Raycaster,
	Vector2,
	Vector3
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { World } from './world';
import { cellToWorld, findPathAStar, worldToCell } from './pathfinding';

export class Player extends Mesh {
	private raycaster = new Raycaster();
	private pointer = new Vector2();
	private camera: PerspectiveCamera;
	private terrain: Object3D;
	private world: World;
	private handleMouseDown: (event: MouseEvent) => void;
	private controls: OrbitControls;
	private dom: HTMLElement;

	private path: Vector3[] = [];
	private moveSpeed = 3;
	private lastTick = performance.now();

	constructor(
		camera: PerspectiveCamera,
		terrain: Object3D,
		world: World,
		dom: HTMLElement,
		controls: OrbitControls
	) {
		super();

		this.geometry = new CapsuleGeometry(0.25, 0.5);
		this.material = new MeshStandardMaterial({ color: 0x4040c0 });
		this.position.set(5.5, 0.5, 5.5);

		this.camera = camera;
		this.terrain = terrain;
		this.world = world;
		this.dom = dom;
		this.controls = controls;

		this.handleMouseDown = this.onMouseDown.bind(this);
		this.dom.addEventListener('mousedown', this.handleMouseDown);
	}

	onMouseDown(event: MouseEvent) {
		if (!this.camera) return;
		if (event.button !== 0) return; // Only respond to left-click

		const rect = this.dom.getBoundingClientRect();
		this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
		this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

		this.raycaster.setFromCamera(this.pointer, this.camera);

		const intersects = this.raycaster.intersectObject(this.terrain, true);
		if (intersects.length === 0) return;

		const start = worldToCell(this.position.x, this.position.z);
		const end = worldToCell(intersects[0].point.x, intersects[0].point.z);
		const cellPath = findPathAStar(start, end, this.world);

		this.path = cellPath.slice(1).map((cell) => {
			const p = cellToWorld(cell);
			return new Vector3(p.x, 0.5, p.z);
		});

		this.lastTick = performance.now();
	}

	private isBlockedPosition(x: number, z: number): boolean {
		const cell = worldToCell(x, z);
		const key = `${cell.x},${cell.z}`;
		return (
			this.world.treeCells.has(key) ||
			this.world.rockCells.has(key) ||
			this.world.bushCells.has(key)
		);
	}

	update() {
		if (this.path.length === 0) return;

		const now = performance.now();
		const dt = Math.min(0.05, (now - this.lastTick) / 1000);
		this.lastTick = now;

		const target = this.path[0];
		const dx = target.x - this.position.x;
		const dz = target.z - this.position.z;
		const dist = Math.hypot(dx, dz);
		const step = this.moveSpeed * dt;

		if (dist <= step) {
			if (!this.isBlockedPosition(target.x, target.z)) {
				this.position.set(target.x, 0.5, target.z);
			}
			this.path.shift();
		} else {
			const nextX = this.position.x + (dx / dist) * step;
			const nextZ = this.position.z + (dz / dist) * step;

			if (this.isBlockedPosition(nextX, nextZ)) {
				this.path = []; // stop if blocked
				return;
			}

			this.position.x = nextX;
			this.position.z = nextZ;
			this.position.y = 0.5;
		}
	}

	dispose() {
		this.dom.removeEventListener('mousedown', this.handleMouseDown);
		this.geometry.dispose();
		(this.material as MeshStandardMaterial).dispose();
	}
}
