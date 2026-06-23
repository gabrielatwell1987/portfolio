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
    PointLight,
    Raycaster,
    Vector2,
    Sphere,
    Group,
    Object3D,
    DoubleSide,
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
    private isRunning = false;
    private direction = new Vector3();
    private verticalVelocity = 0;
    private isGrounded = true;
    private jumpForce = 5;
    private gravity = -15;
    private groundLevel = 0;
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

        // --- Gun Model (added to scene, NOT camera — camera children don't render) ---
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(
            '/threejayess/models/ray_gun.glb',
            (gltf) => {
                const gun = gltf.scene;
                console.log('gun loaded - children:', gun.children.length);

                // Fix materials to be visible without replacing them entirely
                gun.traverse((child: any) => {
                    if (child.isMesh) {
                        const mat = child.material;
                        mat.side = DoubleSide;
                        mat.envMapIntensity = 2;
                        mat.metalness = 0.2;
                        mat.roughness = 0.6;
                        // Add subtle emissive so the gun is always visible
                        if (mat.emissive) {
                            mat.emissiveIntensity = 0.3;
                        }
                        child.frustumCulled = false;
                        mat.needsUpdate = true;
                    }
                });

                // Scale up significantly — model is only 0.087 units at 1×
                gun.scale.set(16, 16, 16);
                this.gunModel = gun;
                this.scene.add(gun);
                console.log('Gun added to scene');
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
        // Extra light near player so the gun is always lit
        const playerLight = new PointLight(0xffffff, 0.8, 10);
        playerLight.position.set(5.5, 3, 5.5);
        this.scene.add(playerLight);

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
            case 'Space':
                if (pressed && this.isGrounded) {
                    this.verticalVelocity = this.jumpForce;
                    this.isGrounded = false;
                }
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.isRunning = pressed;
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

        // Fire projectile from just below camera center (matches gun visual on screen)
        const cameraPos = this.camera.position;
        const spawnOffset = new Vector3(0.25, -0.3, -1.2);
        spawnOffset.applyQuaternion(this.camera.quaternion);
        const spawnPos = cameraPos.clone().add(spawnOffset);
        const proj = this.combatManager.shoot(dir, spawnPos);
        if (proj) {
            // FPS-specific projectile appearance
            proj.setAppearance(4, 0xcccccc, 0xcccccc, 1);
        }
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

        const speed = this.isRunning ? 8 : 5;
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

        // Apply gravity and vertical velocity (jumping)
        if (!this.isGrounded) {
            this.verticalVelocity += this.gravity * dt;
            this.fpsPlayer.position.y += this.verticalVelocity * dt;
            if (this.fpsPlayer.position.y <= this.groundLevel) {
                this.fpsPlayer.position.y = this.groundLevel;
                this.verticalVelocity = 0;
                this.isGrounded = true;
            }
        }

        // Sync gun model to follow camera (added to scene, not as camera child)
        if (this.gunModel) {
            // Bottom-right of screen. X=right, Y=down, Z=forward
            const gunOffset = new Vector3(0.6, -1.5, -1.2);
            gunOffset.applyQuaternion(this.camera.quaternion);
            this.gunModel.position.copy(this.camera.position).add(gunOffset);
            // Match camera rotation so gun faces the crosshair direction
            this.gunModel.quaternion.copy(this.camera.quaternion);
        }

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
            this.scene.remove(this.gunModel);
            this.gunModel = null;
        }
        this.enemyManager.dispose();
        this.combatManager.dispose();
    }
}
