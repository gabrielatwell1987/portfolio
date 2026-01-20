<script lang="ts">
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	$effect(() => {
		/*
		 * Loaders
		 */
		const gltfLoader = new GLTFLoader();
		const cubeTextureLoader = new THREE.CubeTextureLoader();

		/**
		 * Base
		 */

		// Canvas
		const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;

		// Scene
		const scene = new THREE.Scene();

		/*
		 * environment maps
		 */
		// ldr cube textures
		const environmentMap = cubeTextureLoader.load([
			'/threejayess/environmentMaps/0/px.png',
			'/threejayess/environmentMaps/0/nx.png',
			'/threejayess/environmentMaps/0/py.png',
			'/threejayess/environmentMaps/0/ny.png',
			'/threejayess/environmentMaps/0/pz.png',
			'/threejayess/environmentMaps/0/nz.png'
		]);
		scene.environment = environmentMap;
		scene.background = environmentMap;
		scene.environmentIntensity = 3;

		/**
		 * Sizes
		 */
		let sizes = $state({
			width: window.innerWidth,
			height: window.innerHeight
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(4, 5, 4);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.target.y = 3.5;
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Use AbortController for event listener management
		const abortController = new AbortController();
		window.addEventListener(
			'resize',
			() => {
				// Update sizes
				sizes.width = window.innerWidth;
				sizes.height = window.innerHeight;

				// Update camera
				camera.aspect = sizes.width / sizes.height;
				camera.updateProjectionMatrix();

				// Update renderer
				renderer.setSize(sizes.width, sizes.height);
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			},
			{ signal: abortController.signal }
		);

		/**
		 * Models
		 */
		let gltfScene: THREE.Group | null = null;
		gltfLoader.load('/threejayess/models/waternoose.glb', (gltf) => {
			gltf.scene.scale.set(3, 3, 3);
			gltf.scene.position.set(0, 1.5, 0);
			gltfScene = gltf.scene;
			scene.add(gltf.scene);
		});

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();
		let animationId: number; // Declare here for cleanup access
		const tick = () => {
			// Time
			const elapsedTime = clock.getElapsedTime();

			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			animationId = window.requestAnimationFrame(tick);
		};

		tick();

		return () => {
			// Cancel animation loop
			if (animationId) window.cancelAnimationFrame(animationId);

			// Abort event listeners
			abortController.abort();

			// Dispose controls
			controls.dispose();

			// Dispose renderer
			renderer.dispose();

			// Dispose environment map
			if (environmentMap) environmentMap.dispose();

			// Dispose GLTF scene and its children (geometries, materials)
			if (gltfScene) {
				gltfScene.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.geometry.dispose();
						if (Array.isArray(child.material)) {
							child.material.forEach((mat) => mat.dispose());
						} else {
							child.material.dispose();
						}
					}
				});
				scene.remove(gltfScene);
			}

			// Clear scene
			while (scene.children.length > 0) {
				const child = scene.children[0];
				if (child instanceof THREE.Mesh) {
					child.geometry.dispose();
					if (Array.isArray(child.material)) {
						child.material.forEach((mat) => mat.dispose());
					} else {
						child.material.dispose();
					}
				}
				scene.remove(child);
			}
		};
	});
</script>

<canvas class="webgl"></canvas>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		outline: none;
	}
</style>
