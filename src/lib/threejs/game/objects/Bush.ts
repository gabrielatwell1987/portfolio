import { Group, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GameObject } from './GameObject';

// Constants and loader
const BUSH_MODEL_PATH = '/threejayess/models/bush.glb';
let bushModelCache: Group | null = null;
const gltfLoader = new GLTFLoader();

export class Bush extends GameObject {
	static async loadBushModel(): Promise<Group> {
		if (bushModelCache) {
			return bushModelCache;
		}

		return new Promise((resolve, reject) => {
			gltfLoader.load(
				BUSH_MODEL_PATH,
				(gltf: GLTF) => {
					bushModelCache = gltf.scene;
					bushModelCache.scale.set(0.005, 0.005, 0.005);
					resolve(bushModelCache);
				},
				undefined,
				reject
			);
		});
	}

	static async createBushes(
		width: number,
		height: number,
		bushCount: number,
		bushCells: Set<string>,
		treeCells: Set<string>,
		rockCells: Set<string>
	): Promise<Group> {
		const bushes = new Group();
		bushes.rotation.x = Math.PI / 2;

		bushCells.clear();

		// Load the bush model
		const bushModel = await this.loadBushModel();

		const cols = Math.max(1, Math.floor(width));
		const rows = Math.max(1, Math.floor(height));
		const freeCells: string[] = [];

		for (let cx = 0; cx < cols; cx++) {
			for (let cz = 0; cz < rows; cz++) {
				const key = `${cx},${cz}`;
				if (!treeCells.has(key) && !rockCells.has(key)) freeCells.push(key);
			}
		}

		const count = Math.min(bushCount, freeCells.length);

		for (let i = 0; i < count; i++) {
			const pick = Math.floor(Math.random() * freeCells.length);
			const key = freeCells.splice(pick, 1)[0];

			bushCells.add(key);

			const [cxStr, czStr] = key.split(',');
			const cx = Number(cxStr);
			const cz = Number(czStr);

			// Clone the bush model
			const bushMesh = bushModel.clone();

			const x = -width / 2 + (cx + 0.5) * (width / cols);
			const z = -height / 2 + (cz + 0.5) * (height / rows);

			bushMesh.position.set(x, 0, z);
			bushes.add(bushMesh);
		}

		return bushes;
	}

	constructor(coords: Vector3) {
		super(coords);
	}
}
