<script lang="ts">
	import * as THREE from 'three';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import cursorVert from './cursor.vert?raw';
	import cursorFrag from './cursor.frag?raw';

	let renderer: THREE.WebGLRenderer;
	let controls: OrbitControls;
	let displacement: any = {};
	let particlesGeometry: THREE.PlaneGeometry;
	let particlesMaterial: THREE.ShaderMaterial;
	let resizeListener: (() => void) | undefined;
	let pointerMoveListener: ((event: PointerEvent) => void) | undefined;
	let animationFrameId: number | undefined;

	$effect(() => {
		/**
		 * Base
		 */
		// canvas
		const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;

		// scene
		const scene = new THREE.Scene();

		// loaders
		const textureLoader = new THREE.TextureLoader();

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
			pixelRatio: Math.min(window.devicePixelRatio, 2)
		};

		resizeListener = () => {
			// update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;
			sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

			// materials
			particlesMaterial.uniforms.uResolution.value.set(
				sizes.width * sizes.pixelRatio,
				sizes.height * sizes.pixelRatio
			);

			// update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(sizes.pixelRatio);
		};
		window.addEventListener('resize', resizeListener);

		/**
		 * Camera
		 */
		// base camera
		const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(0, 0, 25);
		scene.add(camera);

		// controls
		controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true
		});
		renderer.setClearColor('#181818');
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(sizes.pixelRatio);

		/**
		 * Displacement
		 */
		displacement = {};
		// canvas
		displacement.canvas = document.createElement('canvas');
		displacement.canvas.width = 128;
		displacement.canvas.height = 128;
		displacement.canvas.style.position = 'fixed';
		displacement.canvas.style.width = '256px';
		displacement.canvas.style.height = '256px';
		displacement.canvas.style.top = 0;
		displacement.canvas.style.left = 0;
		displacement.canvas.style.zIndex = 10;
		displacement.canvas.style.display = 'none';
		document.body.append(displacement.canvas);

		// context
		displacement.context = displacement.canvas.getContext('2d');
		displacement.context.fillStyle = 'black';
		displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height);

		// glow image
		displacement.glowImage = new Image();
		displacement.glowImage.src = '/threejayess/glow.png';

		// interactive plane
		displacement.interactivePlane = new THREE.Mesh(
			new THREE.PlaneGeometry(10, 10),
			new THREE.MeshBasicMaterial({ color: 'red', side: THREE.DoubleSide })
		);
		displacement.interactivePlane.visible = false;
		scene.add(displacement.interactivePlane);

		// raycaster
		displacement.raycaster = new THREE.Raycaster();

		// coordinates
		displacement.screenCursor = new THREE.Vector2(9999, 9999);
		displacement.canvasCursor = new THREE.Vector2(9999, 9999);
		displacement.canvasCursorPrevious = new THREE.Vector2(9999, 9999);

		pointerMoveListener = (event) => {
			// update the mouse variable
			displacement.screenCursor.x = (event.clientX / sizes.width) * 2 - 1;
			displacement.screenCursor.y = -(event.clientY / sizes.height) * 2 + 1;
		};
		window.addEventListener('pointermove', pointerMoveListener);

		displacement.texture = new THREE.CanvasTexture(displacement.canvas);

		/**
		 * Particles
		 */
		particlesGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);
		particlesGeometry.setIndex(null);
		particlesGeometry.deleteAttribute('normal');
		const intensitiesArray = new Float32Array(particlesGeometry.attributes.position.count);
		const anglesArray = new Float32Array(particlesGeometry.attributes.position.count);

		for (let i = 0; i < particlesGeometry.attributes.position.count; i++) {
			intensitiesArray[i] = Math.random();
			anglesArray[i] = Math.random() * Math.PI * 2;
		}
		particlesGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensitiesArray, 1));
		particlesGeometry.setAttribute('aAngle', new THREE.BufferAttribute(anglesArray, 1));

		particlesMaterial = new THREE.ShaderMaterial({
			vertexShader: cursorVert,
			fragmentShader: cursorFrag,
			uniforms: {
				uResolution: new THREE.Uniform(
					new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)
				),
				uPictureTexture: new THREE.Uniform(textureLoader.load('/threejayess/hand.png')),
				uDisplacementTexture: new THREE.Uniform(displacement.texture)
			}
		});
		const particles = new THREE.Points(particlesGeometry, particlesMaterial);
		scene.add(particles);

		/**
		 * Animate
		 */
		const tick = () => {
			controls.update();

			/**
			 * Raycaster
			 */
			displacement.raycaster.setFromCamera(displacement.screenCursor, camera);
			const intersections = displacement.raycaster.intersectObject(displacement.interactivePlane);
			if (intersections.length) {
				const uv = intersections[0].uv;

				displacement.canvasCursor.x = uv.x * displacement.canvas.width;
				displacement.canvasCursor.y = (1 - uv.y) * displacement.canvas.height;
			}

			/**
			 * Displacement
			 */
			// fade out
			displacement.context.globalCompositeOperation = 'source-over';
			displacement.context.globalAlpha = 0.02;
			displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height);

			// speed alpha
			const cursorDistance = displacement.canvasCursorPrevious.distanceTo(
				displacement.canvasCursor
			);
			displacement.canvasCursorPrevious.copy(displacement.canvasCursor);

			const alpha = Math.min(cursorDistance * 0.1, 1);

			// draw glow
			const glowSize = displacement.canvas.width * 0.25;
			displacement.context.globalCompositeOperation = 'lighten';
			displacement.context.globalAlpha = alpha;
			displacement.context.drawImage(
				displacement.glowImage,
				displacement.canvasCursor.x - glowSize * 0.5,
				displacement.canvasCursor.y - glowSize * 0.5,
				glowSize,
				glowSize
			);

			// textures
			displacement.texture.needsUpdate = true;

			renderer.render(scene, camera);

			animationFrameId = window.requestAnimationFrame(tick);
		};

		tick();

		return () => {
			if (animationFrameId) {
				window.cancelAnimationFrame(animationFrameId);
			}

			if (resizeListener) {
				window.removeEventListener('resize', resizeListener);
			}
			if (pointerMoveListener) {
				window.removeEventListener('pointermove', pointerMoveListener);
			}

			if (renderer) {
				renderer.dispose();
			}
			if (controls) {
				controls.dispose();
			}
			if (particlesGeometry) {
				particlesGeometry.dispose();
			}
			if (particlesMaterial) {
				particlesMaterial.dispose();
			}
			if (displacement.texture) {
				displacement.texture.dispose();
			}

			if (displacement.canvas && displacement.canvas.parentNode) {
				displacement.canvas.parentNode.removeChild(displacement.canvas);
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
