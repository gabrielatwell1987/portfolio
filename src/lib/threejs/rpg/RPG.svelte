<script lang="ts">
	import {
		AmbientLight,
		BoxGeometry,
		DirectionalLight,
		Mesh,
		MeshStandardMaterial,
		PerspectiveCamera,
		Scene,
		WebGLRenderer
	} from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
	import { World } from './world';
	import Stats from 'three/addons/libs/stats.module.js';

	let scene: Scene;
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let controls: OrbitControls;
	let sun: DirectionalLight;
	let ambient: AmbientLight;
	let stats: Stats;
	let world: World;

	$effect(() => {
		const abortController = new AbortController();
		const gui = new GUI();

		// place lil-gui bottom-right
		gui.domElement.style.position = 'fixed';
		gui.domElement.style.right = '0';
		gui.domElement.style.bottom = 'auto';
		gui.domElement.style.top = '10em';
		gui.domElement.style.zIndex = '10';

		// renderer, scene, camera, controls, lights, terrain
		renderer = new WebGLRenderer({
			canvas: document.querySelector('.webgl') as HTMLCanvasElement,
			antialias: true
		});

		scene = new Scene();
		camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		controls = new OrbitControls(camera, document.querySelector('.webgl') as HTMLCanvasElement);

		world = new World(10, 10);
		scene.add(world);

		sun = new DirectionalLight();
		sun.intensity = 3;
		sun.position.set(1, 2, 3);
		scene.add(sun);

		ambient = new AmbientLight(0xffffff, 0.5);
		scene.add(ambient);

		// stats
		stats = new Stats();
		document.body.appendChild(stats.dom);

		camera.position.set(10, 3, 10);
		controls.update();

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
			controls.update();
			stats.update();
			renderer.render(scene, camera);
		});

		// gui
		const worldFolder = gui.addFolder('World');
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

		// cleanup
		return () => {
			abortController.abort();
			gui.destroy();
			renderer.dispose();
			stats.dom.remove();
			scene.clear();
			controls.dispose();
			sun.dispose();
			ambient.dispose();
			world.geometry.dispose();
			(world.material as MeshStandardMaterial).dispose();
		};
	});
</script>

<canvas class="webgl"></canvas>

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
	}
</style>
