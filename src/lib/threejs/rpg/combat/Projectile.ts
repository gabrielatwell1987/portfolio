import { Object3D, SphereGeometry, MeshStandardMaterial, Vector3, Mesh } from 'three';

export class Projectile extends Object3D {
	private mesh: Mesh;
	private velocity: Vector3;
	private speed: number = 10; // Units per second
	private maxDistance: number = 5; // Travel exactly 5 spaces
	private distanceTraveled: number = 0;

	constructor(startPosition: Vector3, direction: Vector3) {
		super();

		// Create projectile mesh
		const geometry = new SphereGeometry(0.15, 8, 8);
		const material = new MeshStandardMaterial({
			color: 0xff6b35,
			emissive: 0xff6b35,
			emissiveIntensity: 0.5
		});
		this.mesh = new Mesh(geometry, material);
		this.add(this.mesh);

		this.position.copy(startPosition);
		// Normalize and set velocity
		this.velocity = direction.normalize().multiplyScalar(this.speed);
	}

	update(dt: number): boolean {
		// Move projectile
		const displacement = this.velocity.clone().multiplyScalar(dt);
		this.position.add(displacement);

		// Track distance traveled
		this.distanceTraveled += displacement.length();

		// Remove if traveled too far (only check distance, not time)
		if (this.distanceTraveled >= this.maxDistance) {
			return false; // indicates this projectile should be removed
		}

		return true; // still alive
	}

	getPosition(): Vector3 {
		return this.position.clone();
	}

	getVelocity(): Vector3 {
		return this.velocity.clone();
	}

	dispose(): void {
		this.mesh.geometry.dispose();
		(this.mesh.material as MeshStandardMaterial).dispose();
	}
}
