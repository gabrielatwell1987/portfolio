<script>
	import * as THREE from 'three';

	$effect(() => {
		// Texture Loader
		const textureLoader = new THREE.TextureLoader();
		const star = textureLoader.load('/textures/star.webp');

		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		// Objects
		const geometry = new THREE.CapsuleGeometry(2, 0, 9, 20);

		const particlesGeometry = new THREE.BufferGeometry();
		const particlesCount = 1000;
		const positionArray = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount * 3; i++) {
			positionArray[i] = (Math.random() - 0.5) * 5;
		}

		particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

		// Materials

		const material = new THREE.PointsMaterial({
			size: 0.009
		});

		const particlesMaterial = new THREE.PointsMaterial({
			size: 0.04,
			transparent: true,
			alphaMap: star,
			alphaTest: 0.001,
			color: 'hsla(60, 64%, 33%, 0.75)',
			blending: THREE.AdditiveBlending
		});

		// Mesh
		const sphere = new THREE.Points(geometry, material);
		const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
		scene.add(sphere, particlesMesh);

		// Lights

		const pointLight = new THREE.PointLight(0xffffff, 0.1);
		pointLight.position.set(2, 3, 4);
		scene.add(pointLight);

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 2;
		scene.add(camera);

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			alpha: true,
			antialias: true
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Mouse
		document.addEventListener('mousemove', animateParticles);

		let mouseX = 0;
		let mouseY = 0;

		function animateParticles(event) {
			mouseX = event.clientX;
			mouseY = event.clientY;
		}

		/**
		 * Animate
		 */

		const clock = new THREE.Clock();
		let isAnimating = true;

		const tick = () => {
			if (!isAnimating) return;

			const elapsedTime = clock.getElapsedTime();

			// Update objects
			sphere.rotation.y = -0.2 * elapsedTime;
			particlesMesh.rotation.y = -0.01 * elapsedTime;

			if (mouseX > 0) {
				particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.0000008);
				particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.0000008);
			}

			// Update Orbital Controls
			// controls.update()

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		// Visibility change handler
		function handleVisibilityChange() {
			if (document.hidden) {
				isAnimating = false;
			} else {
				isAnimating = true;
				tick();
			}
		}

		// Listen for visibility changes
		document.addEventListener('visibilitychange', handleVisibilityChange);

		tick();

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	});
</script>

<canvas class="webgl" aria-label="hero"></canvas>

<style>
	@media (max-width: 997px) {
		.webgl {
			margin-bottom: 15%;
		}
	}

	@media (min-width: 990px) {
		.webgl {
			height: 100vh;
			width: 70vw;
		}
	}
</style>
