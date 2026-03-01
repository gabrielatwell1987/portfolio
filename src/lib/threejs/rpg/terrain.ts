import { ConeGeometry, Group, Mesh, MeshStandardMaterial, PlaneGeometry } from 'three';

export class Terrain extends Mesh {
	width: number;
	height: number;
	treeCount: number;
	trees!: Group;

	constructor(width: number, height: number) {
		super();

		this.width = width;
		this.height = height;
		this.treeCount = 10;

		this.createTerrain();
		this.createTrees();
	}

	createTerrain() {
		if (this.geometry) {
			this.geometry.dispose();
			(this.material as MeshStandardMaterial).dispose();
		}

		this.geometry = new PlaneGeometry(this.width, this.height, this.width, this.height);
		this.material = new MeshStandardMaterial({ color: 0x50a000, wireframe: true });

		this.rotation.x = -Math.PI / 2;
		this.position.set(this.width / 2, 0, this.height / 2);
	}

	createTrees() {
		const treeHeight = 1;
		const treeRadius = 0.2;
		const treeGeometry = new ConeGeometry(treeRadius, treeHeight, 8);
		const treeMaterial = new MeshStandardMaterial({ color: 0x305010, flatShading: true });

		// create once; clear on rebuild
		if (!this.trees) {
			this.trees = new Group();
			this.trees.rotation.x = Math.PI / 2;
			this.add(this.trees);
		}
		this.trees.clear();

		// one square for each plane segment
		const cols = Math.max(1, Math.floor(this.width));
		const rows = Math.max(1, Math.floor(this.height));
		const used = new Set<string>();
		const count = Math.min(this.treeCount, cols * rows);

		for (let i = 0; i < count; i++) {
			let cx = 0,
				cz = 0;
			let key = '';

			do {
				cx = Math.floor(Math.random() * cols);
				cz = Math.floor(Math.random() * rows);
				key = `${cx},${cz}`;
			} while (used.has(key));

			used.add(key);

			const treeMesh = new Mesh(treeGeometry, treeMaterial);

			const x = -this.width / 2 + (cx + 0.5) * (this.width / cols);
			const z = -this.height / 2 + (cz + 0.5) * (this.height / rows);

			treeMesh.position.set(x, treeHeight / 2, z);
			this.trees.add(treeMesh);
		}
	}
}
