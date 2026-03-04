import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

export class GameObject extends Mesh {
	coords: Vector3;

	constructor(coords: Vector3, geometry?: BufferGeometry, material?: Material) {
		super(geometry, material);

		this.coords = coords;
	}
}
