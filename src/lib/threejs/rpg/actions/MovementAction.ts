import { PerspectiveCamera, Raycaster, Vector2, Vector3, Object3D } from 'three';
import type { World } from '../world';
import type { Player } from '../players/Player';
import { findPathAStar, worldToCell, cellToWorld } from '../players/pathfinding';

export class MovementAction {
    private raycaster = new Raycaster();
    private pointer = new Vector2();
    private camera: PerspectiveCamera;
    private terrain: Object3D;
    private dom: HTMLElement;
    private player: Player;
    private world: World;

    constructor(
        player: Player,
        camera: PerspectiveCamera,
        terrain: Object3D,
        world: World,
        dom: HTMLElement
    ) {
        this.player = player;
        this.camera = camera;
        this.terrain = terrain;
        this.world = world;
        this.dom = dom;
    }

    /**
     * Convert client coordinates to world position and set player path
     */
    moveToClientPoint(clientX: number, clientY: number): void {
        const rect = this.dom.getBoundingClientRect();
        this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.pointer, this.camera);

        const intersects = this.raycaster.intersectObject(this.terrain, true);
        if (intersects.length === 0) return;

        this.setPathToWorldPoint(intersects[0].point);
    }

    /**
     * Calculate and set path to a world position using A* pathfinding
     */
    private setPathToWorldPoint(worldPoint: Vector3): void {
        const start = worldToCell(this.player.position.x, this.player.position.z);
        const end = worldToCell(worldPoint.x, worldPoint.z);
        const cellPath = findPathAStar(start, end, this.world);

        const worldPath = cellPath.slice(1).map((cell) => {
            const p = cellToWorld(cell);
            return new Vector3(p.x, 0.5, p.z);
        });

        this.player.setPath(worldPath);
    }

    /**
     * Handle pointer down events for movement
     */
    handlePointerDown(event: PointerEvent): void {
        if (event.target !== this.dom) return;
        if (event.button !== undefined && event.button !== 0) return;
        this.moveToClientPoint(event.clientX, event.clientY);
    }

    /**
     * Handle touch events for movement
     */
    handleTouchStart(event: TouchEvent): void {
        if (event.target !== this.dom) return;
        const touch = event.changedTouches[0];
        if (!touch) return;
        event.preventDefault();
        this.moveToClientPoint(touch.clientX, touch.clientY);
    }
}