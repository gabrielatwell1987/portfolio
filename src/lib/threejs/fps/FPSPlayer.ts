import { Object3D } from 'three';
import { Player } from '../shooter/players/Player';
import { World } from '../shooter/world';

export class FPSPlayer extends Player {
    private _modelCleaned = false;

    constructor(world: World) {
        super(world);
        this.position.y = 0;
    }

    override update(): void {
        // FPS movement is handled by FPSGame — skip Player.update()
        // Remove the async-loaded GLTF model but KEEP the camera
        if (!this._modelCleaned) {
            const toRemove: Object3D[] = [];
            for (const child of this.children) {
                if (child.type !== 'PerspectiveCamera') {
                    toRemove.push(child);
                }
            }
            if (toRemove.length > 0) {
                for (const child of toRemove) {
                    this.remove(child);
                }
                this._modelCleaned = true;
            }
        }
    }

    getHitboxRadius(): number {
        return 0.5;
    }
}
