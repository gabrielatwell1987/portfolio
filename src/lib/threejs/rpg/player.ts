import {
	CapsuleGeometry,
	Mesh,
	MeshStandardMaterial,
	Object3D,
	PerspectiveCamera,
	Raycaster,
	Vector2
} from 'three';

export class Player extends Mesh {
	private raycaster = new Raycaster();
	private pointer = new Vector2();
	private camera: PerspectiveCamera;
	private terrain: Object3D;
	private handleMouseDown: (event: MouseEvent) => void;

	constructor(camera: PerspectiveCamera, terrain: Object3D) {
		super();

		this.geometry = new CapsuleGeometry(0.25, 0.5);
		this.material = new MeshStandardMaterial({ color: 0x4040c0 });
		this.position.set(5.5, 0.5, 5.5);

		this.camera = camera;
		this.terrain = terrain;

		this.handleMouseDown = this.onMouseDown.bind(this);
		window.addEventListener('mousedown', this.handleMouseDown);
	}

	onMouseDown(event: MouseEvent) {
		if (!this.camera) return;

		this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

		this.raycaster.setFromCamera(this.pointer, this.camera);

		const intersects = this.raycaster.intersectObject(this.terrain, true);
		if (intersects.length > 0) {
			this.position.set(
				Math.floor(intersects[0].point.x) + 0.5,
				0.5,
				Math.floor(intersects[0].point.z) + 0.5
			);
			this.camera.position.set(this.position.x, this.position.y + 5, this.position.z + 5);
			this.camera.lookAt(this.position);
		}
	}

	dispose() {
		window.removeEventListener('mousedown', this.handleMouseDown);
		this.geometry.dispose();
		(this.material as MeshStandardMaterial).dispose();
	}
}
