<script lang="ts">
	import { AmbientLight, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { World } from './world';
	import { HumanPlayer } from './players/HumanPlayer';
	import Stats from 'three/addons/libs/stats.module.js';

	let scene: Scene;
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let controls: OrbitControls;
	let sun: DirectionalLight;
	let ambient: AmbientLight;
	let stats: Stats;
	let world: World;
	let player: HumanPlayer;

	let canvas = $state<HTMLCanvasElement | null>(null);

	$effect(() => {
		if (!canvas) return;

		const abortController = new AbortController();
		// const isMobile = window.matchMedia('(max-width: 768px)').matches;

		// renderer, scene, camera, player, controls, lights, terrain
		renderer = new WebGLRenderer({
			canvas,
			antialias: true
		});

		scene = new Scene();
		camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

		// orbit controls
		controls = new OrbitControls(camera, canvas);
		controls.enableRotate = false;
		controls.target.set(5, 0, 5);

		camera.position.set(1, 4, 3);

		world = new World(30, 30);
		scene.add(world);

		player = new HumanPlayer(camera, world, world, canvas, scene);
		scene.add(player);

		sun = new DirectionalLight();
		sun.intensity = 3;
		sun.position.set(1, 2, 3);
		scene.add(sun);

		ambient = new AmbientLight(0xffffff, 0.5);
		scene.add(ambient);

		// stats
		stats = new Stats();
		document.body.appendChild(stats.dom);

		// handle resizing
		function onResize() {
			const w = window.innerWidth;
			const h = window.innerHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(w, h, false);
		}

		onResize();
		window.addEventListener('resize', onResize, { signal: abortController.signal });

		// animation loop
		renderer.setAnimationLoop(() => {
			player.update();

			// camera movement
			const cameraOffsetX = 1;
			const cameraOffsetY = 4;
			const cameraOffsetZ = 3;
			camera.position.x = player.position.x + cameraOffsetX;
			camera.position.y = player.position.y + cameraOffsetY;
			camera.position.z = player.position.z + cameraOffsetZ;

			controls.target.copy(player.position);
			controls.update();

			stats.update();
			renderer.render(scene, camera);
		});

		// cleanup
		return () => {
			abortController.abort();

			renderer.setAnimationLoop(null);
			world.clear();

			player?.dispose();
			renderer.dispose();
			stats.dom.remove();
			scene.clear();
			controls.dispose();
			sun.dispose();
			ambient.dispose();
		};
	});
</script>

<canvas class="webgl" bind:this={canvas}></canvas>

<!-- Mobile shoot button -->
<button 
	class="shoot-button"
	onpointerdown={() => player?.shoot()}
	ontouchstart={() => player?.shoot()}
	aria-label="Shoot"
>
	🎯
</button>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		min-height: 100vh;
		max-inline-size: 100vw;
		display: block;
		background: transparent;
		touch-action: none;
	}

	.shoot-button {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: rgba(255, 107, 53, 0.9);
		color: white;
		border: 2px solid rgba(255, 107, 53, 1);
		font-size: 1.5rem;
		cursor: pointer;
		z-index: 100;
		display: none;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
		transition: all 0.2s ease;
	}

	.shoot-button:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 20px rgba(255, 107, 53, 0.6);
	}

	.shoot-button:active {
		transform: scale(0.95);
	}

	@media (max-width: 768px) {
		.shoot-button {
			display: flex;
		}
	}
</style>
