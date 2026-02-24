<script lang="ts">
	import {
		Scene,
		PerspectiveCamera,
		WebGLRenderer,
		Mesh,
		Color,
		Vector3,
		Clock,
		BackSide,
		MeshStandardMaterial,
		PointLight,
		Quaternion,
		BufferAttribute,
		CylinderGeometry
	} from 'three';

	let canvas = $state<HTMLCanvasElement>();
	let animationFrameId: number | undefined;

	$effect(() => {
		if (!canvas) return;

		const abortController = new AbortController();
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const scene = new Scene();
		const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new WebGLRenderer({
			antialias: true,
			canvas,
			alpha: true,
			powerPreference: 'high-performance'
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);

		// lights
		const pointLight = new PointLight(0xffffff, 1.5);
		pointLight.position.set(0, 0, 0);
		scene.add(pointLight);

		camera.position.z = 2;

		// tunnel geometry
		const tunnelLength = 100;
		const tunnelRadius = 0.75;
		const tunnelSide = 3;
		const tunnelGeometry = new CylinderGeometry(
			tunnelRadius,
			tunnelRadius,
			tunnelLength,
			tunnelSide,
			100,
			true
		);
		tunnelGeometry.rotateX(Math.PI / 2);
		const tunnelMaterial = new MeshStandardMaterial({
			color: 0xffffff,
			flatShading: true,
			side: BackSide
		});
		const tunnelMesh = new Mesh(tunnelGeometry, tunnelMaterial);
		scene.add(tunnelMesh);

		// quaternion rotation for the tunnel
		const positionAttribute = tunnelGeometry.attributes.position;
		const count = positionAttribute.count;
		const q = new Quaternion();
		const twistAxis = new Vector3(0, 0, 1);
		let twistAmount = 0.15;
		const vertex = new Vector3();
		const tunnelColors = new Float32Array(count * 3);
		const color = new Color();
		const clock = new Clock();

		// color controls
		const BASE_HUR = 0.56;
		const HUR_SPREAD = 0.02;
		const SATURATION = 0;
		const LIGHTNESS = 0.086;

		for (let i = 0; i < count; i++) {
			vertex.fromBufferAttribute(positionAttribute, i);
			const angle = vertex.z * twistAmount;
			q.setFromAxisAngle(twistAxis, angle);
			vertex.applyQuaternion(q);
			positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

			const hue = (BASE_HUR + vertex.z * HUR_SPREAD) % 1;
			color.setHSL(hue, SATURATION, LIGHTNESS);
			tunnelColors[i * 3 + 0] = color.r;
			tunnelColors[i * 3 + 1] = color.g;
			tunnelColors[i * 3 + 2] = color.b;
		}

		tunnelGeometry.setAttribute('color', new BufferAttribute(tunnelColors, 3));
		tunnelMaterial.vertexColors = true;

		let speed = prefersReducedMotion ? 0.001 : 0.004;

		function onResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}
		window.addEventListener('resize', onResize, { signal: abortController.signal });

		function tick() {
			if (abortController.signal.aborted) return;

			const elapsedTime = clock.getElapsedTime();

			// update tunnel animation
			tunnelMesh.position.z += speed;
			tunnelMesh.position.z =
				((tunnelMesh.position.z + tunnelLength / 2) % tunnelLength) - tunnelLength / 2;

			twistAmount = 0.15 + Math.sin(elapsedTime * 0.5) * 0.05;

			renderer.render(scene, camera);
			animationFrameId = requestAnimationFrame(tick);
		}
		tick();

		return () => {
			abortController.abort();
			if (animationFrameId !== undefined) cancelAnimationFrame(animationFrameId);
			scene.remove(tunnelMesh, pointLight);
			tunnelGeometry.dispose();
			tunnelMaterial.dispose();
			renderer.renderLists.dispose();
			renderer.forceContextLoss();
			renderer.dispose();
		};
	});
</script>

<canvas class="webgl" bind:this={canvas}></canvas>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		min-height: 100vh;
		max-inline-size: 100vw;
		display: block;
		background: transparent;
	}
</style>
