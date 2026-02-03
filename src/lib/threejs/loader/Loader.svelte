<script lang="ts">
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import gsap from 'gsap';

	$effect(() => {
		/**
		 * Loaders
		 */
		const loadingBarElement = document.querySelector('.loading-bar') as HTMLElement;
		const loadingManager = new THREE.LoadingManager(
			// loaded
			() => {
				gsap.delayedCall(0.5, () => {
					gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0 });
					loadingBarElement.style.transform = 'translateX(100%)';
				});
			},
			// progress
			(itemUrl, itemsLoaded, itemsTotal) => {
				const progressRatio = itemsLoaded / itemsTotal;
				loadingBarElement.style.transform = `scaleX(${progressRatio})`;
			}
		);
		const gltfLoader = new GLTFLoader(loadingManager);
		const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);

		/**
		 * Base
		 */
		// Debug
		const debugObject: { envMapIntensity: number } = {
			envMapIntensity: 2.5
		};

		// Canvas
		const canvas = document.querySelector('canvas.webgl') as HTMLElement;
		if (!canvas) {
			throw new Error('Canvas element not found');
		}

		// Scene
		const scene = new THREE.Scene();

		/**
		 * Overlay
		 */
		const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
		const overlayMaterial = new THREE.ShaderMaterial({
			transparent: true,
			uniforms: { uAlpha: { value: 1.0 } },
			vertexShader: `
                void main() {
                    gl_Position = vec4(position, 1.0);
                }
            `,
			fragmentShader: `
                uniform float uAlpha;

                void main() {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
                }
            `
		});
		const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
		scene.add(overlay);

		// cleanup references
		let model = $state<THREE.Group | null>(null);
		let environmentMap = $state<THREE.CubeTexture | null>(null);

		/**
		 * Update all materials
		 */
		const updateAllMaterials = () => {
			scene.traverse((child) => {
				if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
					// child.material.envMap = environmentMap;
					child.material.envMapIntensity = debugObject.envMapIntensity;
					child.material.needsUpdate = true;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
		};

		/**
		 * Environment map
		 */
		environmentMap = cubeTextureLoader.load([
			'/threejayess/environmentMaps/2/px.webp',
			'/threejayess/environmentMaps/2/nx.webp',
			'/threejayess/environmentMaps/2/py.webp',
			'/threejayess/environmentMaps/2/ny.webp',
			'/threejayess/environmentMaps/2/pz.webp',
			'/threejayess/environmentMaps/2/nz.webp'
		]);

		// svelte-ignore state_referenced_locally
		environmentMap.colorSpace = THREE.SRGBColorSpace;
		// svelte-ignore state_referenced_locally
		scene.background = environmentMap;
		// svelte-ignore state_referenced_locally
		scene.environment = environmentMap;

		/**
		 * Models
		 */
		gltfLoader.load('/threejayess/models/shark.glb', (gltf) => {
			gltf.scene.scale.set(0.5, 0.5, 0.15);
			gltf.scene.position.set(0, -1, 0);
			gltf.scene.rotation.y = Math.PI * 0.5;
			scene.add(gltf.scene);

			updateAllMaterials();
		});

		/**
		 * Lights
		 */
		const directionalLight = new THREE.DirectionalLight('#ffffff', 3);
		directionalLight.castShadow = true;
		directionalLight.shadow.camera.far = 15;
		directionalLight.shadow.mapSize.set(1024, 1024);
		directionalLight.shadow.normalBias = 0.05;
		directionalLight.position.set(0.25, 3, -2.25);
		scene.add(directionalLight);

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		// abort controller
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
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(4, 1, -4);
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
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 3;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

		return () => {
			abortController.abort();

			gsap.killTweensOf('*');

			if (model) {
				model.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.geometry.dispose();
						if (Array.isArray(child.material)) {
							child.material.forEach((mat) => mat.dispose());
						} else {
							child.material.dispose();
						}
					}
				});
			}

			if (environmentMap) {
				environmentMap.dispose();
			}

			controls.dispose();
			renderer.dispose();
			scene.clear();
		};
	});
</script>

<canvas class="webgl"></canvas>
<section class="loading-bar"></section>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		outline: 0;
	}

	.loading-bar {
		position: absolute;
		top: 50%;
		width: 100%;
		height: 1.5em;
		background-color: var(--clr-light-gray);
		transform: scaleX(0);
		transition: transform 0.5s ease;
		transform-origin: top left;
		border-radius: 1vw;
		will-change: transform;
	}
</style>
