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
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
		><path
			d="M560 120C560 106.7 549.3 96 536 96C522.7 96 512 106.7 512 120L512 128L64 128C46.3 128 32 142.3 32 160L32 272C32 289.7 46.3 304 64 304L74 304C94.8 304 110.1 323.6 105 343.8L65 504.2C62.6 513.8 64.8 523.9 70.8 531.7C76.8 539.5 86.1 544 96 544L192 544C206.7 544 219.5 534 223 519.8L249 416L353.4 416C377.1 416 398.2 401.1 406.1 378.8L432.8 304L463.9 304C472.4 304 480.5 300.6 486.5 294.6L509.1 272L575.8 272C593.5 272 607.8 257.7 607.8 240L607.8 160C607.8 142.3 593.5 128 575.8 128L559.8 128L559.8 120zM353.4 368L260.9 368L276.9 304L381.9 304L360.9 362.7C359.8 365.9 356.7 368 353.4 368zM112 192L496 192C504.8 192 512 199.2 512 208C512 216.8 504.8 224 496 224L112 224C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192z"
		/></svg
	>
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
		background: var(--clr-blue);
		color: white;
		border: 2px solid var(--clr-blue);
		font-size: 1.5rem;
		cursor: pointer;
		z-index: 100;
		display: none;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		touch-action: manipulation;
		user-select: none;
		-webkit-user-select: none;

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	@media (max-width: 768px) {
		.shoot-button {
			display: flex;
		}
	}
</style>
