<script lang="ts">
	import {
		AmbientLight,
		DirectionalLight,
		MeshStandardMaterial,
		PerspectiveCamera,
		Scene,
		WebGLRenderer
	} from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
	import { World } from './world';
	import { Player } from './player';
	import Stats from 'three/addons/libs/stats.module.js';

	let scene: Scene;
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let controls: OrbitControls;
	let sun: DirectionalLight;
	let ambient: AmbientLight;
	let stats: Stats;
	let world: World;
	let player: Player;

	let canvas = $state<HTMLCanvasElement | null>(null);

	$effect(() => {
		if (!canvas) return;

		const abortController = new AbortController();
		const isMobile = window.matchMedia('(max-width: 768px)').matches;
		const gui = isMobile ? null : new GUI();

		// lil-gui
		if (gui) {
			gui.domElement.style.position = 'fixed';
			gui.domElement.style.right = '0';
			gui.domElement.style.bottom = 'auto';
			gui.domElement.style.top = '10em';
			gui.domElement.style.zIndex = '10';
			gui.domElement.style.touchAction = 'none';

			const swallowEvent = (event: Event) => {
				event.stopPropagation();
				if ('cancelable' in event && (event as Event).cancelable) event.preventDefault();
			};
			gui.domElement.addEventListener('touchstart', swallowEvent, {
				passive: false,
				signal: abortController.signal
			});
			gui.domElement.addEventListener('touchmove', swallowEvent, {
				passive: false,
				signal: abortController.signal
			});
			gui.domElement.addEventListener('click', swallowEvent, {
				signal: abortController.signal
			});
		}

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
		// controls.update();

		world = new World(10, 10);
		scene.add(world);

		player = new Player(camera, world, world, canvas, controls);
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
			controls.update();
			stats.update();
			renderer.render(scene, camera);
		});

		// gui
		if (gui) {
			const worldFolder = gui.addFolder('World');

			if (isMobile) {
				gui.close();
				worldFolder.close();
			}

			const rebuildFromSize = () => {
				world.generate(true);
			};
			const rebuildFromCounts = () => {
				world.generate(false);
			};

			worldFolder.add(world, 'width', 1, 20, 1).name('Width').onChange(rebuildFromSize);
			worldFolder.add(world, 'height', 1, 20, 1).name('Height').onChange(rebuildFromSize);
			worldFolder.addColor(world.material as MeshStandardMaterial, 'color').name('Color');
			worldFolder.add(world, 'treeCount', 1, 100, 1).name('Tree Count').onChange(rebuildFromCounts);
			worldFolder.add(world, 'rockCount', 1, 100, 1).name('Rock Count').onChange(rebuildFromCounts);
			worldFolder.add(world, 'bushCount', 1, 100, 1).name('Bush Count').onChange(rebuildFromCounts);

			worldFolder.add(world, 'generate').name('Generate');
		}

		// cleanup
		return () => {
			abortController.abort();
			gui?.destroy();

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
</style>
