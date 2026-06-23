import {
    Object3D,
    Vector3,
    Mesh,
    BoxGeometry,
    MeshStandardMaterial,
    SphereGeometry,
} from 'three';
import type { World } from '../../shooter/world';

export class FPSEnemy extends Object3D {
    private health: number = 5;
    private maxHealth: number = 5;
    private moveSpeed: number = 2;
    private detectionRange: number = 15;
    private shootCooldown: number = 0;
    private shootCooldownMax: number = 2;
    private lastTick: number = performance.now();
    private facingDirection: Vector3 = new Vector3(0, 0, 1);
    private world: World;
    private player: Object3D;
    private hitboxRadius: number = 0.9;
    private ammo: number | null = 10;
    private body: Mesh;
    private head: Mesh;
    private enemyId: number;

    private static nextEnemyId = 0;

    constructor(position: Vector3, world: World, player: Object3D) {
        super();
        this.enemyId = FPSEnemy.nextEnemyId++;
        this.world = world;
        this.player = player;
        this.position.copy(position);
        this.position.y = 0.5;

        // Body
        const bodyGeo = new BoxGeometry(0.8, 1.2, 0.8);
        const bodyMat = new MeshStandardMaterial({ color: 0xff4444 });
        this.body = new Mesh(bodyGeo, bodyMat);
        this.body.position.y = 0.6;
        this.add(this.body);

        // Head
        const headGeo = new SphereGeometry(0.35, 8, 8);
        const headMat = new MeshStandardMaterial({ color: 0xff8888 });
        this.head = new Mesh(headGeo, headMat);
        this.head.position.y = 1.3;
        this.add(this.head);
    }

    takeDamage(amount: number = 1): void {
        this.health -= amount;
        // Flash white on hit
        (this.body.material as MeshStandardMaterial).color.setHex(0xffffff);
        setTimeout(() => {
            (this.body.material as MeshStandardMaterial).color.setHex(0xff4444);
        }, 80);
    }

    isAlive(): boolean {
        return this.health > 0;
    }

    getHealth(): number {
        return this.health;
    }

    getMaxHealth(): number {
        return this.maxHealth;
    }

    getFacingDirection(): Vector3 {
        return this.facingDirection.clone();
    }

    getHitboxRadius(): number {
        return this.hitboxRadius;
    }

    canShoot(): boolean {
        const dist = this.position.distanceTo(this.player.position);
        if (this.ammo !== null && this.ammo <= 0) return false;
        return (
            this.shootCooldown <= 0 &&
            dist < this.detectionRange &&
            this.isAlive()
        );
    }

    shoot(): void {
        if (this.canShoot()) {
            this.shootCooldown = this.shootCooldownMax;
            if (this.ammo !== null) this.ammo -= 1;
        }
    }

    getAmmo(): number | null {
        return this.ammo;
    }

    setAmmo(n: number | null): void {
        this.ammo = n;
    }

    update(): void {
        const now = performance.now();
        const dt = Math.min(0.05, (now - this.lastTick) / 1000);
        this.lastTick = now;

        const dx = this.player.position.x - this.position.x;
        const dz = this.player.position.z - this.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist > 0) {
            this.facingDirection.set(dx, 0, dz).normalize();
        }

        // Move toward player
        if (dist > 1.5 && dist < this.detectionRange) {
            const step = this.moveSpeed * dt;
            const nextX = this.position.x + (dx / dist) * step;
            const nextZ = this.position.z + (dz / dist) * step;

            if (!this.isBlockedPosition(nextX, nextZ)) {
                this.position.x = nextX;
                this.position.z = nextZ;
            }
        }

        this.clampToWorldBounds();

        if (this.shootCooldown > 0) {
            this.shootCooldown -= dt;
        }

        // Rotate body to face movement direction
        this.body.rotation.y = Math.atan2(
            this.facingDirection.x,
            this.facingDirection.z,
        );
    }

    private isBlockedPosition(x: number, z: number): boolean {
        if (!this.world?.buildingCells) return false;
        return this.world.buildingCells.has(
            `${Math.floor(x)},${Math.floor(z)}`,
        );
    }

    private clampToWorldBounds(): void {
        this.position.x = Math.max(0.5, Math.min(29.5, this.position.x));
        this.position.z = Math.max(0.5, Math.min(29.5, this.position.z));
    }

    dispose(): void {
        this.body.geometry.dispose();
        (this.body.material as MeshStandardMaterial).dispose();
        this.head.geometry.dispose();
        (this.head.material as MeshStandardMaterial).dispose();
    }
}
