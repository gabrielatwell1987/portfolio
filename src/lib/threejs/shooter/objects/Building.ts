import { Group, type Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const buildingA = '/threejayess/models/large_building_a.glb';
const buildingB = '/threejayess/models/large_building_b.glb';

export class Building {
    private static loader = new GLTFLoader();
    private static modelCache: Map<string, Object3D> = new Map();

    static async loadModel(url: string): Promise<Object3D> {
        if (this.modelCache.has(url)) {
            return this.modelCache.get(url)!.clone();
        }

        return new Promise((resolve, reject) => {
            this.loader.load(
                url,
                (gltf) => {
                    this.modelCache.set(url, gltf.scene.clone());
                    resolve(gltf.scene);
                },
                undefined,
                reject,
            );
        });
    }

    static async createBuildings(
        width: number,
        height: number,
        count: number,
        occupiedCells: Set<string>,
    ): Promise<Group> {
        const group = new Group();
        const models = [buildingA, buildingB];
        const padding = 2;
        const placedBuildings = new Set<string>();

        for (let i = 0; i < count; i++) {
            let cellX: number;
            let cellZ: number;
            let cellKey: string;
            let attempts = 0;
            const maxAttempts = 50;

            // find unoccupied cell
            do {
                cellX =
                    Math.floor(Math.random() * (width - padding * 2)) + padding;
                cellZ =
                    Math.floor(Math.random() * (height - padding * 2)) +
                    padding;
                cellKey = `${cellX},${cellZ}`;
                attempts++;
            } while (placedBuildings.has(cellKey) && attempts < maxAttempts);

            if (attempts >= maxAttempts) continue;

            try {
                const modelUrl =
                    models[Math.floor(Math.random() * models.length)];
                const building = await this.loadModel(modelUrl);

                building.position.set(cellX, 0, cellZ);

                if (modelUrl === buildingA) {
                    building.scale.multiplyScalar(2.4);
                } else {
                    building.scale.multiplyScalar(1.5);
                }

                group.add(building);
                placedBuildings.add(cellKey);
                occupiedCells.add(cellKey);
            } catch (error) {
                console.error(`Failed to load building model: ${error}`);
            }
        }

        return group;
    }
}
