<script>
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

	let {
		modelPath = '/models/television.gltf',
		title,
		content,
		ctaText,
		ctaLink,
		ctaOnclick,
		positionX = 5,
		positionY = 0,
		positionZ = 0,
		rotationX = 0.4,
		rotationY = -0.4,
		rotationZ = 0
	} = $props();
	let canvas;
	let scene, camera, renderer, model;
	let loading = $state(true);
	let error = $state(null);
	let loadingProgress = $state(0);
	let isMobile = $state(false);

	function checkMobile() {
		isMobile = window.innerWidth <= 768;
	}

	function createScene() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			35,
			canvas?.clientWidth / canvas?.clientHeight || 1,
			0.1,
			1000
		);

		// Improved lighting
		const ambientLight = new THREE.AmbientLight(0x808080, 2.0);
		scene.add(ambientLight);

		const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
		keyLight.position.set(10, 10, 5);
		scene.add(keyLight);

		const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
		fillLight.position.set(-10, 5, 5);
		scene.add(fillLight);

		const rimLight = new THREE.DirectionalLight(0xffffff, 1.0);
		rimLight.position.set(0, 0, -10);
		scene.add(rimLight);

		camera.position.set(0, 0, 10);
		camera.lookAt(0, 0, 0);
	}

	function loadModel() {
		const manager = new THREE.LoadingManager();
		manager.onProgress = (url, loaded, total) => {
			loadingProgress = (loaded / total) * 100;
		};

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
		dracoLoader.setDecoderConfig({ type: 'js' });

		const loader = new GLTFLoader(manager);
		loader.setDRACOLoader(dracoLoader);

		loader.load(
			modelPath,
			(gltf) => {
				if (model) {
					scene.remove(model);
				}

				model = gltf.scene;

				if (model.children.length === 0) {
					error = 'Model appears to be empty';
					loading = false;
					return;
				}

				model.traverse((child) => {
					if (child.isMesh) {
						child.frustumCulled = true;
						if (child.material) {
							child.material.precision = 'medium';
						}
					}
				});

				const box = new THREE.Box3().setFromObject(model);

				if (box.isEmpty()) {
					error = 'Model has no geometry';
					loading = false;
					return;
				}

				const size = box.getSize(new THREE.Vector3());
				const center = box.getCenter(new THREE.Vector3());

				// Responsive positioning
				const responsivePositionX = isMobile ? positionX * 0.7 : positionX;
				const responsivePositionY = isMobile ? positionY * 0.8 : positionY;

				model.position.set(
					-center.x + responsivePositionX,
					-center.y + responsivePositionY,
					-center.z + positionZ
				);

				const maxDimension = Math.max(size.x, size.y, size.z);
				const scale = maxDimension > 0 ? 5 / maxDimension : 1;
				const responsiveScale = isMobile ? scale * 0.8 : scale;
				model.scale.setScalar(scale);

				model.rotation.set(rotationX, rotationY, rotationZ);

				const scaledSize = maxDimension * responsiveScale;
				const distance = isMobile ? scaledSize * 3.5 : scaledSize * 2.5;

				const cameraX = isMobile ? -0.5 : -1;
				const cameraY = isMobile ? scaledSize * 0.1 : scaledSize * 0.2;
				const lookAtX = isMobile ? 1 : 2;

				camera.position.set(cameraX, cameraY, distance);
				camera.lookAt(lookAtX, 0, 0);
				camera.updateProjectionMatrix();

				scene.add(model);
				loading = false;
				error = null;

				dracoLoader.dispose();
			},
			(progress) => {
				if (progress.total > 0) {
					loadingProgress = (progress.loaded / progress.total) * 100;
				}
			},
			(err) => {
				console.error('Error loading model:', err);
				error = `Failed to load model: ${err.message}`;
				loading = false;
			}
		);
	}

	function animate() {
		if (!renderer || !scene || !camera) return;
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}

	function repositionModel() {
		if (!model) return;

		const box = new THREE.Box3().setFromObject(model);
		const size = box.getSize(new THREE.Vector3());
		const center = box.getCenter(new THREE.Vector3());

		// Enhanced responsive positioning
		const breakpoints = {
			mobile: window.innerWidth <= 768,
			tablet: window.innerWidth <= 1024 && window.innerWidth > 768,
			laptop: window.innerWidth <= 1440 && window.innerWidth > 1024,
			desktop: window.innerWidth <= 1920 && window.innerWidth > 1440,
			ultrawide: window.innerWidth > 1920
		};

		let scaleMultiplier, positionMultiplierX, positionMultiplierY, cameraDistance, fov;

		if (breakpoints.mobile) {
			scaleMultiplier = 0.7;
			positionMultiplierX = 0.6;
			positionMultiplierY = 0.7;
			cameraDistance = 3.5;
			fov = 50;
		} else if (breakpoints.tablet) {
			scaleMultiplier = 0.85;
			positionMultiplierX = 0.75;
			positionMultiplierY = 0.85;
			cameraDistance = 3;
			fov = 40;
		} else if (breakpoints.laptop) {
			scaleMultiplier = 1;
			positionMultiplierX = 1;
			positionMultiplierY = 1;
			cameraDistance = 2.5;
			fov = 35;
		} else if (breakpoints.desktop) {
			scaleMultiplier = 1.1;
			positionMultiplierX = 1.1;
			positionMultiplierY = 1.1;
			cameraDistance = 2.2;
			fov = 32;
		} else {
			// ultrawide
			scaleMultiplier = 1.2;
			positionMultiplierX = 1.3;
			positionMultiplierY = 1.2;
			cameraDistance = 2;
			fov = 30;
		}

		// Update camera FOV for better mobile viewing
		camera.fov = fov;
		camera.updateProjectionMatrix();

		// Update model position
		model.position.set(
			-center.x + positionX * positionMultiplierX,
			-center.y + positionY * positionMultiplierY,
			-center.z + positionZ
		);

		// Update model scale
		const maxDimension = Math.max(size.x, size.y, size.z);
		const baseScale = maxDimension > 0 ? 5 / maxDimension : 1;
		const responsiveScale = baseScale * scaleMultiplier;
		model.scale.setScalar(responsiveScale);

		// Update camera position
		const scaledSize = maxDimension * responsiveScale;
		const distance = scaledSize * cameraDistance;

		// More nuanced camera positioning
		let cameraX, cameraY, lookAtX;

		if (breakpoints.mobile) {
			cameraX = -0.5;
			cameraY = scaledSize * 0.1;
			lookAtX = 1;
		} else if (breakpoints.tablet) {
			cameraX = -0.7;
			cameraY = scaledSize * 0.15;
			lookAtX = 1.5;
		} else if (breakpoints.laptop) {
			cameraX = -1;
			cameraY = scaledSize * 0.2;
			lookAtX = 2;
		} else if (breakpoints.desktop) {
			cameraX = -1.2;
			cameraY = scaledSize * 0.25;
			lookAtX = 2.2;
		} else {
			// ultrawide
			cameraX = -1.5;
			cameraY = scaledSize * 0.3;
			lookAtX = 2.5;
		}

		camera.position.set(cameraX, cameraY, distance);
		camera.lookAt(lookAtX, 0, 0);
	}

	function handleResize() {
		if (!renderer || !camera || !canvas) return;

		checkMobile();

		// Use the canvas container's actual dimensions
		const rect = canvas.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		// Update camera aspect ratio
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		// Enhanced pixel ratio handling for all screen sizes
		let pixelRatio;
		if (window.innerWidth <= 768) {
			pixelRatio = Math.min(window.devicePixelRatio, 1.5); // Mobile
		} else if (window.innerWidth <= 1024) {
			pixelRatio = Math.min(window.devicePixelRatio, 1.8); // Tablet
		} else if (window.innerWidth <= 1440) {
			pixelRatio = Math.min(window.devicePixelRatio, 2); // Laptop
		} else {
			pixelRatio = Math.min(window.devicePixelRatio, 2.5); // High-res displays
		}

		renderer.setSize(width, height);
		renderer.setPixelRatio(pixelRatio);

		// Reposition model for new screen size
		if (model && scene) {
			repositionModel();
		}
	}

	$effect(() => {
		if (!canvas) return;

		checkMobile();

		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: !isMobile,
			alpha: true,
			powerPreference: isMobile ? 'default' : 'high-performance'
		});

		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.0;

		createScene();
		loadModel();
		animate();

		// Use ResizeObserver for better performance
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				handleResize();
			}
		});

		resizeObserver.observe(canvas);

		// window resize fallback
		window.addEventListener('resize', handleResize);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', handleResize);
			renderer?.dispose();
			scene?.clear();
		};
	});

	$effect(() => {
		if (scene && modelPath && renderer) {
			loading = true;
			error = null;
			loadingProgress = 0;
			loadModel();
		}

		if (model) {
			const box = new THREE.Box3().setFromObject(model);
			const center = box.getCenter(new THREE.Vector3());
			const responsivePositionX = isMobile ? positionX * 0.7 : positionX;
			const responsivePositionY = isMobile ? positionY * 0.8 : positionY;

			model.position.set(
				-center.x + responsivePositionX,
				-center.y + responsivePositionY,
				-center.z + positionZ
			);
			model.rotation.set(rotationX, rotationY, rotationZ);
		}
	});
</script>

<div class="container">
	<!-- 3D model canvas taking full container -->
	<canvas bind:this={canvas}></canvas>

	<!-- Text content overlapping and centered -->
	{#if title || content}
		<div class="text-overlay">
			{#if title}
				<h1>{title}</h1>
			{/if}

			{#if content}
				<p>{content}</p>
			{/if}

			{#if ctaText}
				{#if ctaLink}
					<a href={ctaLink} class="cta-button">
						{ctaText}
					</a>
				{:else if ctaOnclick}
					<button onclick={ctaOnclick} class="cta-button">
						{ctaText}
					</button>
				{:else}
					<button class="cta-button">
						{ctaText}
					</button>
				{/if}
			{/if}
		</div>
	{/if}

	<!-- Loading and error states -->
	{#if loading}
		<div class="loading">
			<p>Loading 3D model...</p>
			<div class="progress-bar">
				<div class="progress-fill" style="width: {loadingProgress}%"></div>
			</div>
			<p class="progress-text">{Math.round(loadingProgress)}%</p>
		</div>
	{:else if error}
		<p class="error">{error}</p>
	{/if}
</div>

<style>
	.container {
		position: relative;
		width: 100%;
		height: clamp(350px, calc(50vh + 5vw), 700px);
		overflow: hidden;

		& canvas {
			width: 100%;
			height: 100%;
			background: transparent;
		}

		& .text-overlay {
			position: absolute;
			top: 50%;
			left: clamp(25%, calc(30% + 2vw), 55%);
			transform: translate(-50%, -50%);
			text-align: center;
			z-index: 5;
			pointer-events: none;
			padding: 0 1rem;
			max-width: clamp(250px, calc(80% - 2rem), 650px);

			& h1 {
				margin: 0 0 clamp(0.5rem, 2vw, 1.5rem) 0;
				background: linear-gradient(135deg, var(--clr-inverted), var(--clr-light-gray));
				font-family: var(--bronova-bold);
				font-size: clamp(var(--h3), calc(4vw + 0.5rem), var(--xl));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				-webkit-text-stroke: 1px var(--clr-main);
				line-height: 0.91;
				background-clip: text;
				filter: drop-shadow(0 0 3px var(--clr-inverted));
				letter-spacing: clamp(1px, 0.1em, 2px);
			}

			& p {
				margin: 0 0 0 1em;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), calc(1.2vw + 0.3rem), var(--h5));
				line-height: clamp(1.3, calc(1.1 + 0.1vw), 1.6);
				max-width: min(550px, 85vw);
				color: var(--clr-main);
				letter-spacing: clamp(-0.3px, -0.01em, -1px);
			}

			& .cta-button {
				display: inline-block;
				text-decoration: none;
				background-color: transparent;
				font-family: var(--orbitron);
				font-size: clamp(var(--h6), 1.5vw, var(--h4));
				font-weight: 900;
				color: var(--clr-main);
				border: 1px solid var(--clr-main);
				border-radius: var(--radius);
				outline: 3px solid var(--clr-main);
				outline-offset: -7px;
				margin-inline: auto;
				cursor: pointer;
				letter-spacing: 1px;
				width: fit-content;
				transition:
					outline-offset 300ms ease-out,
					opacity 300ms ease-out;
				padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
				margin-top: 10%;
				margin-bottom: 2%;
				user-select: none;
				opacity: 0.75;
				pointer-events: auto;

				&:focus,
				&:focus-visible {
					outline: 1px solid var(--clr-main);
					background: transparent;
					color: var(--clr-main);
				}

				&:hover {
					opacity: 0.95;
					outline-offset: 0px;
				}
			}
		}

		/* Mobile optimizations */
		@media (max-width: 768px) {
			height: clamp(320px, 45vh, 480px);

			& .text-overlay {
				left: 50%;
				max-width: 88%;
			}
		}

		/* Tablet optimizations */
		@media (min-width: 769px) and (max-width: 1024px) {
			height: clamp(400px, 55vh, 580px);

			& .text-overlay {
				left: clamp(35%, 42%, 48%);
			}
		}

		/* Large desktop optimizations */
		@media (min-width: 1441px) {
			height: clamp(500px, 65vh, 750px);

			& .text-overlay {
				left: clamp(30%, 38%, 45%);
				max-width: clamp(400px, 75%, 700px);
			}
		}

		/* Ultra-wide optimizations */
		@media (min-width: 1921px) {
			height: clamp(600px, 70vh, 800px);

			& .text-overlay {
				left: clamp(25%, 35%, 40%);
			}
		}

		& .loading {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: rgba(0, 0, 0, 0.9);
			color: white;
			padding: clamp(15px, 4vw, 20px);
			border-radius: 8px;
			font-family: sans-serif;
			text-align: center;
			min-width: clamp(180px, 50vw, 200px);
			z-index: 10;

			& .progress-bar {
				width: 100%;
				height: 8px;
				background: rgba(255, 255, 255, 0.2);
				border-radius: 4px;
				margin: 10px 0;
				overflow: hidden;

				& .progress-fill {
					height: 100%;
					background: linear-gradient(90deg, #007acc, #00bfff);
					transition: width 0.3s ease;
					border-radius: 4px;
				}
			}

			& .progress-text {
				margin: 5px 0 0 0;
				font-size: clamp(0.8em, 2vw, 0.9em);
				opacity: 0.8;
			}
		}

		& .error {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: rgba(255, 0, 0, 0.9);
			color: white;
			padding: clamp(12px, 3vw, 15px);
			border-radius: 8px;
			font-family: sans-serif;
			font-size: clamp(0.875rem, 2vw, 1rem);
			text-align: center;
			max-width: 80%;
			z-index: 10;
		}
	}
</style>
