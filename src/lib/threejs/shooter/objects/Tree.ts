import { Group, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GameObject } from './GameObject';

// Constants and loader
const TREE_MODEL_PATH = '/threejayess/models/low_poly_dead_tree.glb';
const MIN_TREE_SCALE = 0.02;
const MAX_TREE_SCALE = 0.05;
let treeModelCache: Group | null = null;
const gltfLoader = new GLTFLoader();

export class Tree extends GameObject {
	static async loadTreeModel(): Promise<Group> {
		if (treeModelCache) {
			return treeModelCache;
		}

		return new Promise((resolve, reject) => {
			gltfLoader.load(
				TREE_MODEL_PATH,
				(gltf: GLTF) => {
					treeModelCache = gltf.scene;

					resolve(treeModelCache);
				},
				undefined,
				reject
			);
		});
	}

	static async createTrees(
		width: number,
		height: number,
		treeCount: number,
		treeCells: Set<string>
	): Promise<Group> {
		const trees = new Group();
		trees.rotation.x = Math.PI / 2;

		treeCells.clear();

		// Load the tree model
		const treeModel = await this.loadTreeModel();

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

			// Clone the tree model
			const treeMesh = treeModel.clone();

			// random scale
			const randomScale = MIN_TREE_SCALE + Math.random() * (MAX_TREE_SCALE - MIN_TREE_SCALE);
			treeMesh.scale.set(randomScale, randomScale, randomScale);

			const x = -width / 2 + (cx + 0.5) * (width / cols);
			const z = -height / 2 + (cz + 0.5) * (height / rows);

			treeMesh.position.set(x, 0, z);
			trees.add(treeMesh);
		}

		return trees;
	}

	constructor(coords: Vector3) {
		super(coords);
	}
}
