<script lang="ts">
	import {
		LoadingManager,
		PlaneGeometry,
		ShaderMaterial,
		Group,
		CubeTexture,
		CubeTextureLoader,
		Scene,
		PerspectiveCamera,
		WebGLRenderer,
		DirectionalLight,
		Vector3,
		ReinhardToneMapping,
		PCFSoftShadowMap,
		Mesh,
		MeshStandardMaterial,
		SRGBColorSpace
	} from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import gsap from 'gsap';

	let loadingComplete = $state<boolean>(false);

	$effect(() => {
		/**
		 * Loaders
		 */
		const loadingBarElement = document.querySelector('.loading-bar') as HTMLElement;
		const loadingManager = new LoadingManager(
			// loaded
			() => {
				gsap.delayedCall(0.5, () => {
					gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0 });
					loadingBarElement.style.transform = 'translateX(100%)';

					gsap.delayedCall(0.5, () => {
						loadingBarElement.style.display = 'none';
						loadingComplete = true;
					});
				});
			},
			// progress
			(itemUrl, itemsLoaded, itemsTotal) => {
				const progressRatio = itemsLoaded / itemsTotal;
				loadingBarElement.style.transform = `scaleX(${progressRatio})`;
			}
		);
		const gltfLoader = new GLTFLoader(loadingManager);
		const cubeTextureLoader = new CubeTextureLoader(loadingManager);

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
		const scene = new Scene();

		/**
		 * Overlay
		 */
		const overlayGeometry = new PlaneGeometry(2, 2, 1, 1);
		const overlayMaterial = new ShaderMaterial({
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
		const overlay = new Mesh(overlayGeometry, overlayMaterial);
		scene.add(overlay);

		// cleanup references
		let model = $state<Group | null>(null);
		let environmentMap = $state<CubeTexture | null>(null);

		/**
		 * Update all materials
		 */
		const updateAllMaterials = () => {
			scene.traverse((child) => {
				if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
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
		environmentMap.colorSpace = SRGBColorSpace;
		// svelte-ignore state_referenced_locally
		scene.background = environmentMap;
		// svelte-ignore state_referenced_locally
		scene.environment = environmentMap;

		/**
		 * Models
		 */
		gltfLoader.load('/threejayess/models/shark.glb', (gltf) => {
			gltf.scene.scale.set(0.5, 0.5, 0.25);
			gltf.scene.position.set(0, 0.1, 0);
			gltf.scene.rotation.y = Math.PI * -0.3;
			scene.add(gltf.scene);

			updateAllMaterials();
		});

		/**
		 * Points of interest
		 */
		const points = [
			{
				position: new Vector3(1.05, 0.3, -0.195),
				element: document.querySelector('.point-0') as HTMLElement
			}
		];

		/**
		 * Lights
		 */
		const directionalLight = new DirectionalLight('#ffffff', 3);
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
		const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(4, 1, -4);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new WebGLRenderer({
			canvas: canvas,
			antialias: true
		});
		renderer.toneMapping = ReinhardToneMapping;
		renderer.toneMappingExposure = 3;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = PCFSoftShadowMap;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Animate
		 */
		let animationId: number;

		const tick = () => {
			controls.update();

			// go through each point
			for (const point of points) {
				const screenPosition = point.position.clone();
				screenPosition.project(camera);

				let translateX = screenPosition.x * sizes.width * 0.5;
				let translateY = -screenPosition.y * sizes.height * 0.5;

				point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
			}

			renderer.render(scene, camera);

			animationId = window.requestAnimationFrame(tick);
		};

		tick();

		return () => {
			abortController.abort();

			gsap.killTweensOf('*');

			if (animationId) {
				cancelAnimationFrame(animationId);
			}

			if (model) {
				model.traverse((child) => {
					if (child instanceof Mesh) {
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

<div class="point point-0">
	<div class="content">
		<h2 class="label" class:visible={loadingComplete}>What am I?</h2>

		<p class="text">A mechanical shark on a movie set for the moon.</p>
	</div>
</div>

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

	.point {
		position: absolute;
		top: 50%;
		left: 50%;

		@media (width >= 768px) {
			top: 35%;
		}

		@media (width <= 768px) {
			top: 70%;
		}

		& .content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			& .label {
				inline-size: clamp(150px, 15vw, 300px);
				block-size: fit-content;
				border-radius: var(--radius);
				background-color: var(--clr-invert);
				border: 1px solid var(--clr-main);
				color: var(--clr-light-gray);
				font-family: var(--bronova-bold);
				font-size: clamp(var(--sm), 2vw, var(--h2));
				text-align: center;
				line-height: 1.2;
				cursor: help;
				user-select: none;

				visibility: hidden;

				&.visible {
					visibility: visible;
				}

				&:hover + .text {
					opacity: 1;
				}
			}

			& .text {
				inline-size: clamp(150px, 15vw, 300px);
				block-size: fit-content;
				border-radius: var(--radius);
				background-color: var(--clr-invert);
				color: var(--clr-gray);
				font-family: var(--bronova);
				font-size: clamp(var(--xs), 1.2vw, var(--h4));
				font-weight: 100;
				text-align: center;
				padding: 1em;
				line-height: 1;
				margin-top: -2em;
				opacity: 0;
				transition: opacity 0.4s ease-in-out;
			}
		}
	}
</style>
