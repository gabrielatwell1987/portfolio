<script>
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

	let {
		modelPath = '/models/television.gltf',
		title,
		content,
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

	function handleResize() {
		if (!renderer || !camera || !canvas) return;

		checkMobile();

		const width = canvas.clientWidth;
		const height = canvas.clientHeight;

		camera.aspect = width / height;
		camera.fov = isMobile ? 45 : 35; // Update FOV on resize
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);

		// Reload model with new responsive settings
		if (model && scene) {
			loadModel();
		}
	}

	$effect(() => {
		if (!canvas) return;

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

		window.addEventListener('resize', handleResize);

		return () => {
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
		height: clamp(400px, 60vh, 600px);
		overflow: hidden;

		& canvas {
			width: 100%;
			height: 100%;
			background: transparent;
		}

		& .text-overlay {
			position: absolute;
			top: 50%;
			left: clamp(25%, 35%, 40%);
			transform: translate(-50%, -50%);
			text-align: center;
			z-index: 5;
			pointer-events: none;
			padding: 0 1rem;
			max-width: 90%;

			& h1 {
				margin: 0 0 clamp(0.5rem, 2vw, 1.5rem) 0;
				background: linear-gradient(135deg, var(--clr-blue), var(--clr-light-gray));
				font-family: var(--bronova-bold);
				font-size: clamp(var(--h3), 9vw, var(--xl));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				line-height: 1.2;
				background-clip: text;
				filter: drop-shadow(0 0 3px var(--clr-inverted));
				letter-spacing: clamp(1px, 0.1em, 2px);
			}

			& p {
				margin: 0;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.3vw, var(--h5));
				line-height: 1.6;
				max-width: min(600px, 90vw);
				color: var(--clr-main);
				letter-spacing: clamp(-0.5px, -0.02em, -1px);
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

		/* @media (max-width: 768px) {
			height: 500px;

			& .text-overlay {
				& h1 {
					font-size: clamp(var(--h5), 8vw, var(--h3));
				}

				& p {
					font-size: clamp(var(--xs), 4vw, var(--sm));
					max-width: 90%;
				}
			}
		} */
	}
</style>
