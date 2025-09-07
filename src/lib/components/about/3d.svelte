<script>
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let canvas;
	let scene, camera, renderer, model;
	let modelPath = $state('/models/television.gltf');
	let loading = $state(true);
	let error = $state(null);
	let loadingProgress = $state(0);

	function createScene() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			35, // Even smaller FOV for better framing
			canvas?.clientWidth / canvas?.clientHeight || 1,
			0.1,
			1000
		);

		// Improved lighting
		const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
		directionalLight.position.set(10, 10, 5);
		scene.add(directionalLight);

		// Initial camera position - will be adjusted after model loads
		camera.position.set(0, 0, 10);
		camera.lookAt(0, 0, 0);
	}

	function loadModel() {
		// Create loading manager for better progress tracking
		const manager = new THREE.LoadingManager();
		manager.onProgress = (url, loaded, total) => {
			loadingProgress = (loaded / total) * 100;
		};

		// Pass the loading manager to the GLTFLoader constructor
		const loader = new GLTFLoader(manager);

		loader.load(
			modelPath,
			(gltf) => {
				// Remove existing model first
				if (model) {
					scene.remove(model);
				}

				model = gltf.scene;

				// Check if model has any geometry
				if (model.children.length === 0) {
					error = 'Model appears to be empty';
					loading = false;
					return;
				}

				// Get model bounds
				const box = new THREE.Box3().setFromObject(model);

				if (box.isEmpty()) {
					error = 'Model has no geometry';
					loading = false;
					return;
				}

				const size = box.getSize(new THREE.Vector3());
				const center = box.getCenter(new THREE.Vector3());

				// Center the model at origin
				model.position.set(-center.x, -center.y, -center.z);

				// Calculate scale to fit model in view with padding
				const maxDimension = Math.max(size.x, size.y, size.z);
				const scale = maxDimension > 0 ? 3 / maxDimension : 1;
				model.scale.setScalar(scale);

				// Add static rotation to the model for a skewed look
				model.rotation.set(
					-0.15, // Slight downward tilt (negative = looking down)
					0.1, // Skew to the right
					0 // No roll
				);

				// Position camera to see the entire model with padding
				const scaledSize = maxDimension * scale;
				const distance = scaledSize * 2.5; // More distance for better framing

				// Position camera slightly above center and back
				camera.position.set(0, scaledSize * 0.2, distance);
				camera.lookAt(0, 0, 0);

				// Ensure camera settings are updated
				camera.updateProjectionMatrix();

				scene.add(model);
				loading = false;
				error = null;
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

		const width = canvas.clientWidth;
		const height = canvas.clientHeight;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}

	$effect(() => {
		if (!canvas) return;

		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance'
		});

		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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
	});
</script>

<div class="wrapper">
	<canvas bind:this={canvas}></canvas>

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
	.wrapper {
		position: relative;
		width: 100%;
		height: 600px; /* Increased height */

		& canvas {
			width: 100%;
			height: 100%;
			background: transparent;
		}

		& .loading {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: rgba(0, 0, 0, 0.9);
			color: white;
			padding: 20px;
			border-radius: 8px;
			font-family: sans-serif;
			text-align: center;
			min-width: 200px;

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
				font-size: 0.9em;
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
			padding: 15px;
			border-radius: 8px;
			font-family: sans-serif;
			text-align: center;
			max-width: 80%;
		}
	}
</style>
