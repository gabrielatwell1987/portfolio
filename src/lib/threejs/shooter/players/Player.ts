import { Vector3, Object3D } from 'three'
import type { World } from '../world'
import { GameObject } from '../objects/GameObject'
import { worldToCell } from './pathfinding'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()

export class Player extends GameObject {
    protected path: Vector3[] = []
    protected moveSpeed = 3
    protected lastTick = performance.now()
    protected world: World
    protected facingDirection: Vector3 = new Vector3(0, 0, 1)
    protected model: Object3D | null = null

    constructor(world: World) {
        // create an empty container
        super(new Vector3(5.5, 0.5, 5.5))

        this.world = world
        this.position.set(5.5, 0.5, 5.5)

        loader.load('/threejayess/models/gunner.glb', (gltf: GLTF) => {
            const model = gltf.scene
            this.model = model
            model.position.set(0, 0.5, 0)
            model.scale.multiplyScalar(0.7)

            this.add(model)
        })
    }

    protected isBlockedPosition(x: number, z: number): boolean {
        const cell = worldToCell(x, z)
        const key = `${cell.x},${cell.z}`
        return (
            this.world.treeCells.has(key) ||
            this.world.rockCells.has(key) ||
            this.world.bushCells.has(key)
        )
    }

    /**
     * Slide-style collision detection: allows sliding along surfaces
     * Tries full diagonal movement first, then slides along individual axes
     */
    protected getValidPosition(
        currentX: number,
        currentZ: number,
        desiredX: number,
        desiredZ: number,
    ): { x: number; z: number } {
        // Try full diagonal movement
        if (!this.isBlockedPosition(desiredX, desiredZ)) {
            return { x: desiredX, z: desiredZ }
        }

        // Try sliding along X axis only
        if (!this.isBlockedPosition(desiredX, currentZ)) {
            return { x: desiredX, z: currentZ }
        }

        // Try sliding along Z axis only
        if (!this.isBlockedPosition(currentX, desiredZ)) {
            return { x: currentX, z: desiredZ }
        }

        // Cannot move - stay in place
        return { x: currentX, z: currentZ }
    }

    protected clampToWorldBounds(): void {
        // Keep player within world bounds (0-30), with buffer for collision radius
        this.position.x = Math.max(0.5, Math.min(29.5, this.position.x))
        this.position.z = Math.max(0.5, Math.min(29.5, this.position.z))
    }

    protected movePath(target: Vector3, dt: number): boolean {
        const dx = target.x - this.position.x
        const dz = target.z - this.position.z
        const dist = Math.hypot(dx, dz)
        const step = this.moveSpeed * dt

        if (dist <= step) {
            if (!this.isBlockedPosition(target.x, target.z)) {
                this.position.set(target.x, 0.5, target.z)
            }
            this.clampToWorldBounds()
            this.path.shift()
            return true
        } else {
            const nextX = this.position.x + (dx / dist) * step
            const nextZ = this.position.z + (dz / dist) * step

            // Use slide-style collision detection
            const validPos = this.getValidPosition(
                this.position.x,
                this.position.z,
                nextX,
                nextZ,
            )

            // Update facing direction based on movement
            this.facingDirection.set(dx, 0, dz).normalize()

            this.position.x = validPos.x
            this.position.z = validPos.z
            this.position.y = 0.5
            this.clampToWorldBounds()
            return false
        }
    }

    update(): void {
        if (this.path.length === 0) return

        const now = performance.now()
        const dt = Math.min(0.05, (now - this.lastTick) / 1000)
        this.lastTick = now

        const target = this.path[0]
        this.movePath(target, dt)

        if (this.model) {
            this.model.rotation.y = Math.atan2(
                this.facingDirection.x,
                this.facingDirection.z,
            )
        }
    }

    private updateFacingDirection(target: Vector3): void {
        const dx = target.x - this.position.x
        const dz = target.z - this.position.z
        const dist = Math.hypot(dx, dz)

        if (dist > 0) {
            this.facingDirection.set(dx, 0, dz).normalize()

            // rotate model immediately
            if (this.model) {
                this.model.rotation.y = Math.atan2(
                    this.facingDirection.x,
                    this.facingDirection.z,
                )
            }
        }
    }

    setPath(newPath: Vector3[]): void {
        this.path = newPath
        this.lastTick = performance.now()

        if (newPath.length > 0) {
            this.updateFacingDirection(newPath[0])
        }
    }

    moveInDirection(direction: Vector3): void {
        // call this from keyboard input handlers
        this.updateFacingDirection(this.position.clone().add(direction))
    }

    getFacingDirection(): Vector3 {
        return this.facingDirection.clone()
    }

    override dispose(): void {
        super.dispose()
    }
}
