<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import SplitType from 'split-type';
	import gsap from 'gsap';
	// import * as dat from "dat.gui";

	onMount(() => {
		// SplitType
		const h1 = document.querySelector('h1');

		const text = new SplitType(h1, {
			types: 'chars'
		});

		// Texture Loader
		const textureLoader = new THREE.TextureLoader();
		const cross = textureLoader.load('/gltf/cross.png');

		// // Debug
		// const gui = new dat.GUI();

		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		// Objects
		const geometry = new THREE.CircleGeometry(1, 50);

		const particlesGeometry = new THREE.BufferGeometry();
		const particlesCount = 5000;
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
			size: 0.005,
			map: cross,
			transparent: true,
			color: 'hsla(187, 64%, 73%, 0.75)',
			blending: THREE.AdditiveBlending
		});

		// Mesh
		const sphere = new THREE.Points(geometry, material);
		const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
		scene.add(sphere, particlesMesh);

		// Lights

		const pointLight = new THREE.PointLight(0xffffff, 0.1);
		pointLight.position.x = 2;
		pointLight.position.y = 3;
		pointLight.position.z = 4;
		scene.add(pointLight);

		// GSAP
		gsap.from(text.chars, {
			duration: 1,
			y: -50,
			opacity: 0,
			stagger: 0.25
		});

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

		// Controls
		// const controls = new OrbitControls(camera, canvas)
		// controls.enableDamping = true

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

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();

			// Update objects
			sphere.rotation.y = 0.5 * elapsedTime;
			particlesMesh.rotation.y = -0.1 * elapsedTime;

			if (mouseX > 0) {
				particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
				particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
			}

			// Update Orbital Controls
			// controls.update()

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();
	});
</script>

<canvas class="webgl" />

<h1><span>A</span>twell Design</h1>

<style>
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: whitesmoke;
		font-size: 3.5rem;
		font-weight: 900;
		font-family: var(--major);
		text-align: center;
		line-height: 1.2;
		letter-spacing: 3px;
		font-kerning: none;
	}

	span {
		color: var(--purple);
	}
	span:hover {
		color: var(--blue);
	}
</style>
