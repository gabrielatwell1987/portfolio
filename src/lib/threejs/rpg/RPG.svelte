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
	import Stats from 'three/addons/libs/stats.module.js';

	let scene: Scene;
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;
	let cube: Mesh;
	let controls: OrbitControls;
	let sun: DirectionalLight;
	let ambient: AmbientLight;
	let stats: Stats;

	$effect(() => {
		const abortController = new AbortController();
		const gui = new GUI();

		// place lil-gui bottom-right
		gui.domElement.style.position = 'fixed';
		gui.domElement.style.right = '0';
		gui.domElement.style.bottom = 'auto';
		gui.domElement.style.top = '10em';
		gui.domElement.style.zIndex = '10';

		// renderer, scene, camera, controls, lights
		renderer = new WebGLRenderer({
			canvas: document.querySelector('.webgl') as HTMLCanvasElement,
			antialias: true
		});

		scene = new Scene();
		camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		controls = new OrbitControls(camera, document.querySelector('.webgl') as HTMLCanvasElement);

		sun = new DirectionalLight();
		sun.position.set(1, 2, 3);
		scene.add(sun);
		ambient = new AmbientLight(0xffffff, 0.5);
		scene.add(ambient);

		// cube
		const geometry = new BoxGeometry(1, 1, 1);
		const material = new MeshStandardMaterial({ color: 0x00ff00 });
		cube = new Mesh(geometry, material);
		scene.add(cube);

		// stats
		stats = new Stats();
		document.body.appendChild(stats.dom);

		camera.position.z = 5;
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
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			controls.update();
			stats.update();
			renderer.render(scene, camera);
		});

		// gui
		const cubeFolder = gui.addFolder('Cube');
		cubeFolder.add(cube.position, 'x', -2, 2, 0.1).name('Position X');
		cubeFolder.addColor(cube.material as MeshStandardMaterial, 'color').name('Color');

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
			geometry.dispose();
			material.dispose();
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
