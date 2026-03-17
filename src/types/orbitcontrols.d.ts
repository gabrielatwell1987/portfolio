declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, Object3D } from 'three';
    export class OrbitControls {
        constructor(object: Camera, domElement: HTMLElement);
        enableRotate: boolean;
        // Add other properties/methods as needed
    }
}
