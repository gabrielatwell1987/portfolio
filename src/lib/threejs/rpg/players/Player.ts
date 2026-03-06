import { Vector3, Mesh, Material } from 'three';
import type { World } from '../world';
import { GameObject } from '../objects/GameObject';
import { worldToCell } from './pathfinding';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export class Player extends GameObject {
	protected path: Vector3[] = [];
	protected moveSpeed = 3;
	protected lastTick = performance.now();
	protected world: World;
	protected facingDirection: Vector3 = new Vector3(0, 0, 1);

	constructor(world: World) {
		// create an empty container
		super(new Vector3(5.5, 0.5, 5.5));

		this.world = world;
		this.position.set(5.5, 0.5, 5.5);

		loader.load(
			'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/glb/character-skeleton.glb',
			(gltf: GLTF) => {
				const model = gltf.scene;
				// Apply skeleton styling
				model.traverse((child) => {
					if (child instanceof Mesh) {
						// Log for debugging
						console.log(
							'Mesh:',
							child.name,
							'Material:',
							Array.isArray(child.material)
								? child.material.map((m: Material) => m.name)
								: (child.material as Material).name
						);

						if (Array.isArray(child.material)) {
							child.material.forEach((mat) => {
								if (
									mat.name &&
									(mat.name.toLowerCase().includes('eye') ||
										mat.name.toLowerCase().includes('pupil') ||
										mat.name.toLowerCase().includes('iris'))
								) {
									mat.color.setHex(0x242424);
									mat.emissive.setHex(0x000000);
								} else {
									mat.color.setHex(0xf5f5dc); // Bone white
									mat.emissive.setHex(0x808080);
								}
								mat.metalness = 0.2;
								mat.roughness = 0.6;
							});
						} else {
							if (
								child.material.name &&
								(child.material.name.toLowerCase().includes('eye') ||
									child.material.name.toLowerCase().includes('pupil') ||
									child.material.name.toLowerCase().includes('iris'))
							) {
								child.material.color.setHex(0x242424);
								child.material.emissive.setHex(0x000000);
							} else {
								child.material.color.setHex(0xf5f5dc); // Bone white
								child.material.emissive.setHex(0x808080);
							}
							child.material.metalness = 0.2;
							child.material.roughness = 0.6;
						}
					}
					// Also check mesh names for eyes
					if (
						child.name &&
						(child.name.toLowerCase().includes('eye') || child.name.toLowerCase().includes('pupil'))
					) {
						console.log('Found eye mesh:', child.name);
						if (child instanceof Mesh && !Array.isArray(child.material)) {
							child.material.color.setHex(0x242424);
							child.material.emissive.setHex(0x000000);
						}
					}
				});
				this.add(model);
			}
		);
	}

	protected isBlockedPosition(x: number, z: number): boolean {
		const cell = worldToCell(x, z);
		const key = `${cell.x},${cell.z}`;
		return (
			this.world.treeCells.has(key) ||
			this.world.rockCells.has(key) ||
			this.world.bushCells.has(key)
		);
	}

	protected movePath(target: Vector3, dt: number): boolean {
		const dx = target.x - this.position.x;
		const dz = target.z - this.position.z;
		const dist = Math.hypot(dx, dz);
		const step = this.moveSpeed * dt;

		if (dist <= step) {
			if (!this.isBlockedPosition(target.x, target.z)) {
				this.position.set(target.x, 0.5, target.z);
			}
			this.path.shift();
			return true;
		} else {
			const nextX = this.position.x + (dx / dist) * step;
			const nextZ = this.position.z + (dz / dist) * step;

			if (this.isBlockedPosition(nextX, nextZ)) {
				this.path = [];
				return false;
			}

			// Update facing direction based on movement
			this.facingDirection.set(dx, 0, dz).normalize();

			this.position.x = nextX;
			this.position.z = nextZ;
			this.position.y = 0.5;
			return false;
		}
	}

	update(): void {
		if (this.path.length === 0) return;

		const now = performance.now();
		const dt = Math.min(0.05, (now - this.lastTick) / 1000);
		this.lastTick = now;

		const target = this.path[0];
		this.movePath(target, dt);
	}

	setPath(newPath: Vector3[]): void {
		this.path = newPath;
		this.lastTick = performance.now();
	}

	getFacingDirection(): Vector3 {
		return this.facingDirection.clone();
	}

	override dispose(): void {
		super.dispose();
	}
}
