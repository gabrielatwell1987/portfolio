import { AmbientLight, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
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
	stats: Stats;
}

export function initializeGame(
	canvas: HTMLCanvasElement,
	joystickElement: HTMLElement | null
): GameState {
	const renderer = new WebGLRenderer({ canvas, antialias: true });
	const scene = new Scene();
	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	const controls = new OrbitControls(camera, canvas);
	controls.enableRotate = false;
	controls.target.set(5, 0, 5);
	camera.position.set(1, 4, 3);

	const world = new World(30, 30);
	scene.add(world);

	const player = new HumanPlayer(camera, world, world, canvas, scene);
	scene.add(player);

	const enemyManager = new EnemyManager(player, world, scene);
	scene.add(enemyManager);

	player.getCombatManager().setEnemyManager(enemyManager);

	const mobileJoystick = joystickElement
		? new MobileJoystick(player, world, joystickElement)
		: null;

	const sun = new DirectionalLight();
	sun.intensity = 3;
	sun.position.set(1, 2, 3);
	scene.add(sun);

	const ambient = new AmbientLight(0xffffff, 0.5);
	scene.add(ambient);

	const stats = new Stats();
	document.body.appendChild(stats.dom);

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
		stats
	};
}

export function cleanupGame(state: GameState, abortController: AbortController): void {
	abortController.abort();
	state.renderer.setAnimationLoop(null);
	state.world.clear();
	state.player?.dispose();
	state.enemyManager?.dispose();
	state.mobileJoystick?.dispose();
	state.renderer.dispose();
	state.stats.dom.remove();
	state.scene.clear();
	state.controls.dispose();
	state.sun.dispose();
	state.ambient.dispose();
}
