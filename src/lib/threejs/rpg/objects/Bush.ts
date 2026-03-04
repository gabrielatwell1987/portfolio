import { Group, Mesh, MeshStandardMaterial, SphereGeometry, Vector3 } from 'three';
import { GameObject } from './GameObject';

// Constants - created once, reused many times
const MIN_BUSH_RADIUS = 0.1;
const MAX_BUSH_RADIUS = 0.3;
const bushMaterial = new MeshStandardMaterial({ color: 0x80a040, flatShading: true });

export class Bush extends GameObject {
	static createBushes(
		width: number,
		height: number,
		bushCount: number,
		bushCells: Set<string>,
		treeCells: Set<string>,
		rockCells: Set<string>
	): Group {
		const bushes = new Group();
		bushes.rotation.x = Math.PI / 2;

		bushCells.clear();

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

			const radius = MIN_BUSH_RADIUS + Math.random() * (MAX_BUSH_RADIUS - MIN_BUSH_RADIUS);
			const bushGeometry = new SphereGeometry(radius, 6, 5);
			const bushMesh = new Mesh(bushGeometry, bushMaterial);

			const x = -width / 2 + (cx + 0.5) * (width / cols);
			const z = -height / 2 + (cz + 0.5) * (height / rows);

			bushMesh.position.set(x, radius, z);
			bushes.add(bushMesh);
		}

		return bushes;
	}

	constructor(coords: Vector3, geometry?: SphereGeometry) {
		super(coords, geometry, bushMaterial);
	}
}
