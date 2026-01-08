<script>
	import * as THREE from 'three';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import cursorVert from './cursor.vert?raw';
	import cursorFrag from './cursor.frag?raw';

	$effect(() => {
		/**
		 * Base
		 */
		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		// Loaders
		const textureLoader = new THREE.TextureLoader();

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
			pixelRatio: Math.min(window.devicePixelRatio, 2)
		};

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;
			sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

			// Materials
			particlesMaterial.uniforms.uResolution.value.set(
				sizes.width * sizes.pixelRatio,
				sizes.height * sizes.pixelRatio
			);

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(sizes.pixelRatio);
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(0, 0, 18);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true
		});
		renderer.setClearColor('#181818');
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(sizes.pixelRatio);

		/**
		 * Particles
		 */
		const particlesGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);

		const particlesMaterial = new THREE.ShaderMaterial({
			vertexShader: cursorVert,
			fragmentShader: cursorFrag,
			uniforms: {
				uResolution: new THREE.Uniform(
					new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)
				),
				uPictureTexture: new THREE.Uniform(textureLoader.load('/cursor-img/space.png'))
			}
		});
		const particles = new THREE.Points(particlesGeometry, particlesMaterial);
		scene.add(particles);

		/**
		 * Animate
		 */
		const tick = () => {
			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();
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
