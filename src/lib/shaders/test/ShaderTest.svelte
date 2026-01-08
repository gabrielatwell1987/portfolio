<script>
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	// import testVertexShader from './patterns.vert?raw';
	// import testFragmentShader from './patterns.frag?raw';
	import testVertexShader from './cursor.vert?raw';
	import testFragmentShader from './cursor.frag?raw';

	let canvas = $state(null);

	$effect(() => {
		if (!canvas) return;

		// Scene
		const scene = new THREE.Scene();

		// Geometry
		const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

		// Material
		const material = new THREE.ShaderMaterial({
			vertexShader: testVertexShader,
			fragmentShader: testFragmentShader,
			side: THREE.DoubleSide
		});

		// Mesh
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		// sizes
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(0.25, -0.25, 1);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		// renderer
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		//  camera resize
		const handleResize = () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		window.addEventListener('resize', handleResize);

		// animate
		let animationId;
		const animate = () => {
			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call animate again on the next frame
			animationId = window.requestAnimationFrame(animate);
		};

		animate();

		// Cleanup on destroy
		return () => {
			window.removeEventListener('resize', handleResize);
			window.cancelAnimationFrame(animationId);
			renderer.dispose();
			geometry.dispose();
			material.dispose();
			controls.dispose();
		};
	});
</script>

<canvas bind:this={canvas} class="webgl"></canvas>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		outline: none;
	}
</style>
