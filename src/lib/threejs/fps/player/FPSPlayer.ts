import { Object3D, Vector3 } from 'three';

export class FPSPlayer extends Object3D {
    getHitboxRadius(): number {
        return 0.7;
    }

    getFacingDirection(): Vector3 {
        // Camera direction is handled by PointerLockControls via FPSGame
        return new Vector3(0, 0, -1);
    }

    update(): void {
        // All movement is handled by FPSGame.animate()
    }
}
