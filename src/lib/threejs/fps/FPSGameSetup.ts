import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Color,
    Fog,
    Vector3,
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
    Raycaster,
    Vector2,
    Sphere,
    Group,
    Object3D,
} from 'three';
import { World } from '../shooter/world';
import { CombatManager } from '../shooter/combat/CombatManager';
import { FPSPlayer } from './player/FPSPlayer';
import { FPSEnemyManager } from './enemy/FPSEnemyManager';
import { FPSBuilding } from './buildings/FPSBuilding';

export class FPSGame {
    scene!: Scene;
    camera!: PerspectiveCamera;
    renderer!: WebGLRenderer;
    controls!: PointerLockControls;
    fpsPlayer!: FPSPlayer;
    world!: World;
    buildings!: Group;
    enemyManager!: FPSEnemyManager;
    combatManager!: CombatManager;

    private moveForward = false;
    private moveBackward = false;
    private moveLeft = false;
    private moveRight = false;
    private direction = new Vector3();
    private boundOnKeyDown: (e: KeyboardEvent) => void = () => {};
    private boundOnKeyUp: (e: KeyboardEvent) => void = () => {};
    private boundOnMouseDown: (e: MouseEvent) => void = () => {};
    private boundOnResize: () => void = () => {};
    private gunModel: Object3D | null = null;
    private muzzleOffset = new Vector3(0.35, -0.35, -0.8);

    async init(canvas: HTMLCanvasElement) {
        this.renderer = new WebGLRenderer({ canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.scene = new Scene();
        this.scene.background = new Color('#87ceeb'); // sky blue so we can see the horizon
        this.scene.fog = new Fog(0x87ceeb, 30, 60);

        this.camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        // Camera stays at scene root — NOT parented to player.
        // PointerLockControls only works reliably on root-level cameras.
        // We'll sync the camera position to the player each frame in animate().
        this.camera.position.set(5.5, 1.6, 5.5);

        this.controls = new PointerLockControls(this.camera, canvas);

        // --- World terrain (from shooter, no GLTF) ---
        this.world = new World(50, 50);
        await this.world.generate();
        this.scene.add(this.world);

        // Remove the GLTF buildings from the world, replace with simple boxes
        if (this.world.buildings) {
            this.world.remove(this.world.buildings);
        }
        const buildingCells = new Set<string>();
        this.buildings = await FPSBuilding.createBuildings(
            50,
            50,
            8,
            buildingCells,
        );
        // Merge building cells so enemy AI knows where to avoid
        for (const cell of buildingCells) {
            this.world.buildingCells.add(cell);
        }
        this.scene.add(this.buildings);

        // --- FPS Player (plain Object3D — invisible, just tracks position) ---
        this.fpsPlayer = new FPSPlayer();
        this.fpsPlayer.rotation.y = Math.PI;
        this.fpsPlayer.position.set(5.5, 0, 5.5);
        this.scene.add(this.fpsPlayer);

        // --- Gun Model ---
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(
            '/threejayess/models/ray_gun.glb',
            (gltf) => {
                const gun = gltf.scene;
                gun.scale.set(0.5, 0.5, 0.5);
                gun.position.set(0.35, -0.35, -0.8);
                this.gunModel = gun;
                this.camera.add(gun);
            },
            undefined,
            (error) => console.error('Failed to load ray_gun.glb', error),
        );

        // --- Lighting ---
        // HemisphereLight gives a natural sky/ground fill
        const hemi = new HemisphereLight(0x87ceeb, 0x362d25, 0.8);
        this.scene.add(hemi);
        const ambient = new AmbientLight(0xffffff, 0.4);
        this.scene.add(ambient);
        const sun = new DirectionalLight(0xffffff, 1.2);
        sun.position.set(10, 20, 10);
        this.scene.add(sun);

        // --- Combat & Enemies ---
        // CombatManager expects Player type — FPSPlayer satisfies the interface at runtime
        this.combatManager = new CombatManager(
            this.fpsPlayer as any,
            this.scene,
        );
        this.enemyManager = new FPSEnemyManager(
            this.fpsPlayer,
            this.world,
            this.scene,
        );
        this.scene.add(this.enemyManager);
        this.combatManager.setEnemyManager(this.enemyManager as any);
        this.combatManager.setPlayerAmmo(50);

        // --- Store bound references for cleanup ---
        this.boundOnKeyDown = (e: KeyboardEvent) => this.onKeyChange(e, true);
        this.boundOnKeyUp = (e: KeyboardEvent) => this.onKeyChange(e, false);
        this.boundOnMouseDown = (e: MouseEvent) => {
            if (e.button === 0 && this.controls.isLocked) this.shoot();
        };
        this.boundOnResize = () => this.onResize();

        // --- Input ---
        document.addEventListener('keydown', this.boundOnKeyDown);
        document.addEventListener('keyup', this.boundOnKeyUp);
        document.addEventListener('mousedown', this.boundOnMouseDown);
        window.addEventListener('resize', this.boundOnResize);

        this.animate();
    }

    private onKeyChange(e: KeyboardEvent, pressed: boolean) {
        switch (e.code) {
            case 'KeyW':
                this.moveForward = pressed;
                break;
            case 'KeyS':
                this.moveBackward = pressed;
                break;
            case 'KeyA':
                this.moveLeft = pressed;
                break;
            case 'KeyD':
                this.moveRight = pressed;
                break;
        }
    }

    private shoot() {
        const raycaster = new Raycaster();
        raycaster.setFromCamera(new Vector2(0, 0), this.camera);
        const dir = raycaster.ray.direction.clone();

        // Hit scan check against enemies
        const enemies = this.enemyManager.getEnemies();
        for (const enemy of enemies) {
            const hitbox = new Sphere(
                enemy.position,
                enemy.getHitboxRadius?.() ?? 0.9,
            );
            if (raycaster.ray.intersectsSphere(hitbox)) {
                enemy.takeDamage(1);
                break;
            }
        }

        // // Fire visible projectile from camera position
        // const cameraPos = new Vector3();
        // this.camera.getWorldPosition(cameraPos);
        // this.combatManager.shoot(dir, cameraPos);

        // Fire projectile from the gun barrel toward the crosshair
        const muzzleWorld = new Vector3();
        if (this.gunModel) {
            this.gunModel.getWorldPosition(muzzleWorld);
        } else {
            // Fallback: compute from camera + offset before gun model loaded
            const offset = this.muzzleOffset
                .clone()
                .applyQuaternion(this.camera.quaternion);
            muzzleWorld.copy(this.camera.position).add(offset);
        }
        this.combatManager.shoot(dir, muzzleWorld);
    }

    private animate() {
        requestAnimationFrame(() => this.animate());

        const dt = 1 / 60;

        const forward = new Vector3();
        this.camera.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();

        const right = new Vector3();
        right.crossVectors(forward, this.camera.up).normalize();

        this.direction.set(0, 0, 0);
        if (this.moveForward) this.direction.add(forward);
        if (this.moveBackward) this.direction.sub(forward);
        if (this.moveLeft) this.direction.sub(right);
        if (this.moveRight) this.direction.add(right);
        this.direction.normalize();

        const speed = 5;
        this.fpsPlayer.position.add(this.direction.multiplyScalar(speed * dt));

        // Clamp to world bounds
        this.fpsPlayer.position.x = Math.max(
            0.5,
            Math.min(49.5, this.fpsPlayer.position.x),
        );
        this.fpsPlayer.position.z = Math.max(
            0.5,
            Math.min(49.5, this.fpsPlayer.position.z),
        );

        // Sync camera to player eye-level (camera is NOT parented — at scene root)
        this.camera.position.x = this.fpsPlayer.position.x;
        this.camera.position.z = this.fpsPlayer.position.z;
        this.camera.position.y = this.fpsPlayer.position.y + 1.6;

        this.fpsPlayer.update();
        this.enemyManager.update(dt);
        this.combatManager.update(dt);

        this.renderer.render(this.scene, this.camera);
    }

    private onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    dispose() {
        this.controls.unlock();
        document.removeEventListener('keydown', this.boundOnKeyDown);
        document.removeEventListener('keyup', this.boundOnKeyUp);
        document.removeEventListener('mousedown', this.boundOnMouseDown);
        window.removeEventListener('resize', this.boundOnResize);
        if (this.gunModel) {
            this.camera.remove(this.gunModel);
            this.gunModel = null;
        }
        this.enemyManager.dispose();
        this.combatManager.dispose();
    }
}
