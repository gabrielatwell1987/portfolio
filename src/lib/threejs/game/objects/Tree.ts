import { ConeGeometry, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { GameObject } from './GameObject';

// Constants - created once, reused many times
const TREE_HEIGHT = 2;
const TREE_RADIUS = 0.3;
const treeGeometry = new ConeGeometry(TREE_RADIUS, TREE_HEIGHT, 8);
const treeMaterial = new MeshStandardMaterial({ color: 0x305010, flatShading: true });

export class Tree extends GameObject {
	static createTrees(
		width: number,
		height: number,
		treeCount: number,
		treeCells: Set<string>
		// rockCells: Set<string>,
		// bushCells: Set<string>
	): Group {
		const trees = new Group();
		trees.rotation.x = Math.PI / 2;

		treeCells.clear();

		const cols = Math.max(1, Math.floor(width));
		const rows = Math.max(1, Math.floor(height));
		const used = new Set<string>();
		const count = Math.min(treeCount, cols * rows);

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
			treeCells.add(key);

			const treeMesh = new Mesh(treeGeometry, treeMaterial);

			const x = -width / 2 + (cx + 0.5) * (width / cols);
			const z = -height / 2 + (cz + 0.5) * (height / rows);

			treeMesh.position.set(x, TREE_HEIGHT / 2, z);
			trees.add(treeMesh);
		}

		return trees;
	}

	constructor(coords: Vector3, geometry?: ConeGeometry, material?: MeshStandardMaterial) {
		super(coords, geometry, material);
	}
}
