import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Color,
    FogExp2,
    Vector3,
    AmbientLight,
    DirectionalLight,
    Raycaster,
    Vector2,
    Sphere,
} from 'three';
import { World } from '../shooter/world';
import { EnemyManager } from '../shooter/enemies/EnemyManager';
import { CombatManager } from '../shooter/combat/CombatManager';
import { FPSPlayer } from './FPSPlayer';

export class FPSGame {
    scene!: Scene;
    camera!: PerspectiveCamera;
    renderer!: WebGLRenderer;
    controls!: PointerLockControls;
    fpsPlayer!: FPSPlayer;
    world!: World;
    enemyManager!: EnemyManager;
    combatManager!: CombatManager;

    private moveForward = false;
    private moveBackward = false;
    private moveLeft = false;
    private moveRight = false;
    private velocity = new Vector3();
    private direction = new Vector3();
    private boundOnKeyDown: (e: KeyboardEvent) => void = () => {};
    private boundOnKeyUp: (e: KeyboardEvent) => void = () => {};
    private boundOnMouseDown: (e: MouseEvent) => void = () => {};
    private boundOnResize: () => void = () => {};

    async init(canvas: HTMLCanvasElement) {
        this.renderer = new WebGLRenderer({ canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.scene = new Scene();
        this.scene.background = new Color('#242424');
        this.scene.fog = new FogExp2(0x242424, 0.05);

        this.camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        this.camera.position.set(0, 1.6, 0); // eye level

        this.controls = new PointerLockControls(this.camera, canvas);

        // --- World ---
        this.world = new World(50, 50);
        await this.world.generate();
        this.scene.add(this.world);
        this.scene.add(this.world.buildings);

        // --- FPS Player ---
        this.fpsPlayer = new FPSPlayer(this.world);
        this.fpsPlayer.rotation.y = Math.PI; // face +Z instead of -Z
        this.fpsPlayer.add(this.camera); // camera follows player
        this.scene.add(this.fpsPlayer);

        // --- Lighting ---
        const ambient = new AmbientLight(0x404040, 0.5);
        this.scene.add(ambient);
        const sun = new DirectionalLight(0xffffff, 1);
        sun.position.set(10, 20, 10);
        this.scene.add(sun);

        // --- Combat & Enemies ---
        this.combatManager = new CombatManager(this.fpsPlayer, this.scene);
        this.enemyManager = new EnemyManager(
            this.fpsPlayer,
            this.world,
            this.scene,
        );
        this.scene.add(this.enemyManager);
        this.combatManager.setEnemyManager(this.enemyManager);
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
            // Shooting is now on mouse click, not Space
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
            const hit = raycaster.ray.intersectsSphere(hitbox);
            if (hit) {
                enemy.takeDamage(1);
                // One bullet hits at most one enemy
                break;
            }
        }

        // Fire projectile from camera position so it's visible at eye level
        const cameraPos = new Vector3();
        this.camera.getWorldPosition(cameraPos);
        this.combatManager.shoot(dir, cameraPos);
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
        this.enemyManager.dispose();
        this.combatManager.dispose();
    }
}
