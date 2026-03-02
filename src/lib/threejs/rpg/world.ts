import {
	ConeGeometry,
	Group,
	Mesh,
	MeshStandardMaterial,
	PlaneGeometry,
	RepeatWrapping,
	SphereGeometry,
	SRGBColorSpace,
	Texture,
	TextureLoader,
	Vector2
} from 'three';

const grassUrl =
	'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/grass.webp';

function loadGrassTexture(): Texture | null {
	if (typeof document === 'undefined') return null;

	const texture = new TextureLoader().load(grassUrl);
	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.colorSpace = SRGBColorSpace;
	return texture;
}

export class World extends Mesh {
	width: number;
	height: number;
	treeCount: number;
	trees!: Group;
	treeCells: Set<string>;
	rocks!: Group;
	rockCount: number;
	rockCells: Set<string>;
	bushes!: Group;
	bushCount: number;
	treeDensity: number;
	rockDensity: number;
	bushDensity: number;

	private grassTexture: Texture | null = null;

	constructor(width: number, height: number) {
		super();

		this.width = width;
		this.height = height;

		this.treeDensity = 15 / 100;
		this.rockDensity = 11 / 100;
		this.bushDensity = 8 / 100;

		this.treeCount = 15;
		this.rockCount = 11;
		this.bushCount = 8;

		this.treeCells = new Set<string>();
		this.rockCells = new Set<string>();

		this.grassTexture = loadGrassTexture();
		this.generate();
	}

	private updateCountFromSize() {
		const cols = Math.max(1, Math.floor(this.width));
		const rows = Math.max(1, Math.floor(this.height));
		const totalCells = cols * rows;

		this.treeCount = Math.min(totalCells, Math.round(totalCells * this.treeDensity));
		this.rockCount = Math.min(totalCells, Math.round(totalCells * this.rockDensity));
		this.bushCount = Math.min(totalCells, Math.round(totalCells * this.bushDensity));
	}

	generate(recalculateFromDensity = true) {
		this.clear();
		if (recalculateFromDensity) this.updateCountFromSize();
		this.createTerrain();
		this.createTrees();
		this.createRocks();
		this.createBushes();
	}

	clear() {
		if (this.geometry) {
			this.geometry.dispose();
			(this.material as MeshStandardMaterial).dispose();
		}

		if (this.trees) {
			this.trees.children.forEach((tree) => {
				(tree as Mesh).geometry?.dispose();
				((tree as Mesh).material as MeshStandardMaterial)?.dispose();
			});
			this.trees.clear();
		}

		if (this.rocks) {
			this.rocks.children.forEach((rock) => {
				(rock as Mesh).geometry?.dispose();
				((rock as Mesh).material as MeshStandardMaterial)?.dispose();
			});
			this.rocks.clear();
		}

		if (this.bushes) {
			this.bushes.children.forEach((bush) => {
				(bush as Mesh).geometry?.dispose();
				((bush as Mesh).material as MeshStandardMaterial)?.dispose();
			});
			this.bushes.clear();
		}

		return this;
	}

	createTerrain() {
		if (!this.grassTexture) this.grassTexture = loadGrassTexture();

		const cols = Math.max(1, Math.floor(this.width));
		const rows = Math.max(1, Math.floor(this.height));

		if (this.grassTexture) {
			this.grassTexture.wrapS = RepeatWrapping;
			this.grassTexture.wrapT = RepeatWrapping;
			this.grassTexture.repeat.set(cols, rows);
			this.grassTexture.needsUpdate = true;
		}

		this.geometry = new PlaneGeometry(this.width, this.height, cols, rows);
		this.material = new MeshStandardMaterial({ map: this.grassTexture ?? null });

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
		this.treeCells.clear();

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
			this.treeCells.add(key);

			const treeMesh = new Mesh(treeGeometry, treeMaterial);

			const x = -this.width / 2 + (cx + 0.5) * (this.width / cols);
			const z = -this.height / 2 + (cz + 0.5) * (this.height / rows);

			treeMesh.position.set(x, treeHeight / 2, z);
			this.trees.add(treeMesh);
		}
	}

	createRocks() {
		const minRockRadius = 0.1;
		const maxRockRadius = 0.3;
		const minRockHeight = 0.5;
		const maxRockHeight = 0.8;

		const rockMaterial = new MeshStandardMaterial({ color: 0xb0b0b0, flatShading: true });

		const buriedChance = 0.55;
		const minBuriedChance = 0.25;
		const maxBuriedRatio = 0.75;

		if (!this.rocks) {
			this.rocks = new Group();
			this.rocks.rotation.x = Math.PI / 2;
			this.add(this.rocks);
		}
		this.rockCells.clear();

		const cols = Math.max(1, Math.floor(this.width));
		const rows = Math.max(1, Math.floor(this.height));
		const freeCells: string[] = [];

		for (let cx = 0; cx < cols; cx++) {
			for (let cz = 0; cz < rows; cz++) {
				const key = `${cx},${cz}`;
				if (!this.treeCells.has(key)) freeCells.push(key);
			}
		}

		const count = Math.min(this.rockCount, freeCells.length);
		const forcedBuriedIndex = count;

		for (let i = 0; i < count; i++) {
			const pick = Math.floor(Math.random() * freeCells.length);
			const key = freeCells.splice(pick, 1)[0];
			this.rockCells.add(key);
			const [cxStr, czStr] = key.split(',');
			const cx = Number(cxStr);
			const cz = Number(czStr);

			const radius = minRockRadius + Math.random() * (maxRockRadius - minRockRadius);
			const height = minRockHeight + Math.random() * (maxRockHeight - minRockHeight);
			const rockGeometry = new SphereGeometry(radius, 6, 5);
			const rockMesh = new Mesh(rockGeometry, rockMaterial);
			rockMesh.scale.y = height;
			const scaledVerticalRadius = radius * height;

			const x = -this.width / 2 + (cx + 0.5) * (this.width / cols);
			const z = -this.height / 2 + (cz + 0.5) * (this.height / rows);

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
			this.rocks.add(rockMesh);
		}
	}

	createBushes() {
		const minBushRadius = 0.1;
		const maxBushRadius = 0.3;

		const bushMaterial = new MeshStandardMaterial({ color: 0x80a040, flatShading: true });

		if (!this.bushes) {
			this.bushes = new Group();
			this.bushes.rotation.x = Math.PI / 2;
			this.add(this.bushes);
		}

		const cols = Math.max(1, Math.floor(this.width));
		const rows = Math.max(1, Math.floor(this.height));
		const freeCells: string[] = [];

		for (let cx = 0; cx < cols; cx++) {
			for (let cz = 0; cz < rows; cz++) {
				const key = `${cx},${cz}`;
				if (!this.treeCells.has(key) && !this.rockCells.has(key)) freeCells.push(key);
			}
		}

		const count = Math.min(this.bushCount, freeCells.length);

		for (let i = 0; i < count; i++) {
			const pick = Math.floor(Math.random() * freeCells.length);
			const key = freeCells.splice(pick, 1)[0];
			const [cxStr, czStr] = key.split(',');
			const cx = Number(cxStr);
			const cz = Number(czStr);

			const radius = minBushRadius + Math.random() * (maxBushRadius - minBushRadius);
			const bushGeometry = new SphereGeometry(radius, 6, 5);
			const bushMesh = new Mesh(bushGeometry, bushMaterial);

			const x = -this.width / 2 + (cx + 0.5) * (this.width / cols);
			const z = -this.height / 2 + (cz + 0.5) * (this.height / rows);

			bushMesh.position.set(x, radius, z);
			this.bushes.add(bushMesh);
		}
	}
}
