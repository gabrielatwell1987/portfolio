import {
    AmbientLight,
    DirectionalLight,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { World } from './world';
import { HumanPlayer } from './players/HumanPlayer';
import { EnemyManager } from './enemies/EnemyManager';
import { MobileJoystick } from './actions/MobileJoystick';

export interface GameState {
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    controls: OrbitControls;
    world: World;
    player: HumanPlayer;
    enemyManager: EnemyManager;
    mobileJoystick: MobileJoystick | null;
    sun: DirectionalLight;
    ambient: AmbientLight;
}

export async function initializeGame(
    canvas: HTMLCanvasElement,
    joystickElement: HTMLElement | null,
): Promise<GameState> {
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    const scene = new Scene();
    const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
    );

    const controls = new OrbitControls(camera, canvas);
    // keep camera locked to player: disable orbiting/panning/zooming
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = false;
    controls.minDistance = 0.1;
    controls.maxDistance = 1000;
    controls.target.set(5, 0, 5);
    camera.position.set(1, 4, 3);
    controls.update();

    const world = new World(50, 50);
    scene.add(world);

    console.log('generating world');
    await world.generate();
    console.log('generation complete, buildingCells:', world.buildingCells);

    scene.add(world.buildings);

    const player = new HumanPlayer(
        camera,
        world,
        world,
        canvas,
        scene,
        controls,
    );
    scene.add(player);

    const enemyManager = new EnemyManager(player, world, scene);
    scene.add(enemyManager);

    player.getCombatManager().setEnemyManager(enemyManager);

    // start player with limited ammo
    try {
        player.getCombatManager().setPlayerAmmo(10);
    } catch {
        // ignore if method missing
    }

    const mobileJoystick = joystickElement
        ? new MobileJoystick(player, world, joystickElement)
        : null;

    const sun = new DirectionalLight();
    sun.intensity = 3;
    sun.position.set(1, 2, 3);
    scene.add(sun);

    const ambient = new AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    return {
        scene,
        camera,
        renderer,
        controls,
        world,
        player,
        enemyManager,
        mobileJoystick,
        sun,
        ambient,
    };
}

export function cleanupGame(
    state: GameState,
    abortController: AbortController,
): void {
    abortController.abort();
    state.renderer.setAnimationLoop(null);
    state.world.clear();
    state.player?.dispose();
    state.enemyManager?.dispose();
    state.mobileJoystick?.dispose();
    state.renderer.dispose();
    state.scene.clear();
    state.controls.dispose();
    state.sun.dispose();
    state.ambient.dispose();
}
