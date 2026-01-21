<script lang="ts">
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

	let gui: GUI | undefined;

	$effect(() => {
		if (!browser) return;

		gui = new GUI();
		gui.domElement.style.position = 'absolute';
		gui.domElement.style.top = 'auto';
		gui.domElement.style.bottom = '0';
		gui.domElement.style.left = '0';

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
			'/threejayess/environmentMaps/0/px.webp',
			'/threejayess/environmentMaps/0/nx.webp',
			'/threejayess/environmentMaps/0/py.webp',
			'/threejayess/environmentMaps/0/ny.webp',
			'/threejayess/environmentMaps/0/pz.webp',
			'/threejayess/environmentMaps/0/nz.webp'
		]);
		scene.environment = environmentMap;
		scene.background = environmentMap;
		(scene as any).environmentIntensity = 3;

		gui.add(scene, 'backgroundBlurriness').min(0).max(1).step(0.001);
		gui.add(scene, 'backgroundIntensity').min(0).max(10).step(0.001);

		/**
		 * Sizes
		 */
		let sizes = $state({
			width: window.innerWidth,
			height: window.innerHeight
		});
		let isMobile = $derived(sizes.width < 768);

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

		// mouse tracking
		let mouse = $state({ x: 0, y: 0 });
		const raycaster = new THREE.Raycaster();
		const mouseVector = new THREE.Vector2();
		const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.5);
		const intersection = new THREE.Vector3();

		// event listener management
		const abortController = new AbortController();

		window.addEventListener(
			'mousemove',
			(event) => {
				if (isMobile) return;
				mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
				mouseVector.set(mouse.x, mouse.y);
			},
			{ signal: abortController.signal }
		);
		window.addEventListener(
			'click',
			(event) => {
				if (!isMobile) return;
				mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
				mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
				mouseVector.set(mouse.x, mouse.y);
			},
			{ signal: abortController.signal }
		);
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
			gltf.scene.scale.set(1.5, 1.5, 1.5);
			gltf.scene.position.set(0, 1.5, 0);
			gltfScene = gltf.scene;
			scene.add(gltf.scene);

			/*
			 * Top hat
			 */
			const hatGroup = new THREE.Group();

			// hat brim
			const brimGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.02, 16);
			const brimMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
			const brim = new THREE.Mesh(brimGeometry, brimMaterial);
			brim.position.y = -0.05;
			hatGroup.add(brim);

			// white stripe
			const stripeGeometry = new THREE.CylinderGeometry(0.117, 0.11, 0.05, 16);
			const stripeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
			const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
			stripe.position.y = 0;
			hatGroup.add(stripe);

			// hat crown
			const crownGeometry = new THREE.CylinderGeometry(0.1, 0.12, 0.2, 16);
			const crownMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
			const crown = new THREE.Mesh(crownGeometry, crownMaterial);
			crown.position.y = 0.05;
			hatGroup.add(crown);

			// rotate hat to match hand angle
			hatGroup.position.set(0.05, 0.1, 0); // Adjust based on hand position
			hatGroup.rotation.z = Math.PI / 6;

			// add hat to hand
			const rightHand = gltf.scene.getObjectByName('Bip01_R_Hand_065');
			if (rightHand) {
				rightHand.add(hatGroup);

				hatGroup.position.set(-0.2, 1.5, 0);
				gltf.scene.add(hatGroup);
			}
		});

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();
		let animationId: number;
		const tick = () => {
			// Time
			const elapsedTime = clock.getElapsedTime();

			// Update controls
			controls.update();

			// follow cursor
			if (gltfScene) {
				raycaster.setFromCamera(mouseVector, camera);
				raycaster.ray.intersectPlane(plane, intersection);
				if (intersection) {
					gltfScene.position.copy(intersection);

					// model rotation to face the camera
					const direction = new THREE.Vector3(
						camera.position.x - gltfScene.position.x,
						0,
						camera.position.z - gltfScene.position.z
					).normalize();
					const angle = Math.atan2(direction.x, direction.z);
					gltfScene.rotation.y = angle;
				}
			}

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
