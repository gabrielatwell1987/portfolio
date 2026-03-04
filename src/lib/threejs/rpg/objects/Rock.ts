import { Group, Mesh, MeshStandardMaterial, SphereGeometry, Vector3 } from 'three';
import { GameObject } from './GameObject';

const minRockRadius = 0.1;
const maxRockRadius = 0.3;
const minRockHeight = 0.5;
const maxRockHeight = 0.8;

const rockMaterial = new MeshStandardMaterial({ color: 0xb0b0b0, flatShading: true });

const buriedChance = 0.55;
const minBuriedChance = 0.25;
const maxBuriedRatio = 0.75;

export class Rock extends GameObject {
	static createRocks(
		width: number,
		height: number,
		rockCount: number,
		rockCells: Set<string>,
		treeCells: Set<string>
	): Group {
		const rocks = new Group();
		rocks.rotation.x = Math.PI / 2;

		rockCells.clear();

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

			const radius = minRockRadius + Math.random() * (maxRockRadius - minRockRadius);
			const height = minRockHeight + Math.random() * (maxRockHeight - minRockHeight);
			const rockGeometry = new SphereGeometry(radius, 6, 5);
			const rockMesh = new Mesh(rockGeometry, rockMaterial);
			rockMesh.scale.y = height;
			const scaledVerticalRadius = radius * height;

			const x = -width / 2 + (cx + 0.5) * (width / cols);
			const z = -height / 2 + (cz + 0.5) * (height / rows);

			const isBuried = Math.random() < buriedChance;
			const buryRatio = isBuried
				? minBuriedChance + Math.random() * (maxBuriedRatio - minBuriedChance)
				: 0;
			const buryDepth = scaledVerticalRadius * buryRatio;

			const rockShade = 1 - buryRatio * 0.8;
			const rockInstanceMaterial = rockMaterial.clone();
			rockInstanceMaterial.color.multiplyScalar(rockShade);
			rockMesh.material = rockInstanceMaterial;

			rockMesh.position.set(x, scaledVerticalRadius - buryDepth, z);
			rocks.add(rockMesh);
		}

		return rocks;
	}

	constructor(coords: Vector3, geometry?: SphereGeometry, material?: MeshStandardMaterial) {
		super(coords, geometry, material);
	}
}
