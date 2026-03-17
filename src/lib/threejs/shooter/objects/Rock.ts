import { Group, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GameObject } from './GameObject';

const ROCK_MODEL_PATH = '/threejayess/models/rock.glb';
const MIN_ROCK_SCALE = 0.003;
const MAX_ROCK_SCALE = 0.008;
let rockModelCache: Group | null = null;
const gltfLoader = new GLTFLoader();

export class Rock extends GameObject {
    static async loadRockModel(): Promise<Group> {
        if (rockModelCache) {
            return rockModelCache;
        }

        return new Promise((resolve, reject) => {
            gltfLoader.load(
                ROCK_MODEL_PATH,
                (gltf: GLTF) => {
                    rockModelCache = gltf.scene;
                    resolve(rockModelCache);
                },
                undefined,
                reject,
            );
        });
    }

    static async createRocks(
        width: number,
        height: number,
        rockCount: number,
        rockCells: Set<string>,
        treeCells: Set<string>,
    ): Promise<Group> {
        const rocks = new Group();
        rocks.rotation.x = Math.PI / 2;

        rockCells.clear();

        const rockModel = await this.loadRockModel();

        const cols = Math.max(1, Math.floor(width));
        const rows = Math.max(1, Math.floor(height));
        const freeCells: string[] = [];

        for (let cx = 0; cx < cols; cx++) {
            for (let cz = 0; cz < rows; cz++) {
                const key = `${cx},${cz}`;
                if (!treeCells.has(key)) freeCells.push(key);
            }
        }

        const count = Math.min(rockCount, freeCells.length);

        for (let i = 0; i < count; i++) {
            const pick = Math.floor(Math.random() * freeCells.length);
            const key = freeCells.splice(pick, 1)[0];
            rockCells.add(key);
            const [cxStr, czStr] = key.split(',');
            const cx = Number(cxStr);
            const cz = Number(czStr);

            const rockMesh = rockModel.clone();

            // apply random scale
            const randomScale =
                MIN_ROCK_SCALE +
                Math.random() * (MAX_ROCK_SCALE - MIN_ROCK_SCALE);
            rockMesh.scale.set(randomScale, randomScale, randomScale);

            const x = -width / 2 + (cx + 0.5) * (width / cols);
            const z = -height / 2 + (cz + 0.5) * (height / rows);

            rockMesh.position.set(x, 0, z);
            rocks.add(rockMesh);
        }

        return rocks;
    }

    constructor(coords: Vector3) {
        super(coords);
    }
}
