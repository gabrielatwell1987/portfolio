<script>
	import * as THREE from 'three';

	let canvas;

	$effect(() => {
		if (!canvas) return;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);

		// lights
		const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
		scene.add(ambientLight);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
		directionalLight.position.set(1, 1, 1);
		scene.add(directionalLight);

		function createRibbon(ribbonLength, ribbonWidth, color, offsetX = 0) {
			const geometry = new THREE.BufferGeometry();
			const positions = [];
			const indices = [];
			const uvs = [];

			// Generate initial positions for the ribbon (a wavy line)
			const spinePoints = [];
			for (let i = 0; i <= ribbonLength; i++) {
				const x = (i - ribbonLength / 2) * 0.2 + offsetX;
				const y = Math.sin(i * 0.1) * 2;
				const z = Math.cos(i * 0.1) * 2;
				spinePoints.push(new THREE.Vector3(x, y, z));
			}

			// Create vertices for the ribbon (two rows per segment)
			for (let i = 0; i < spinePoints.length; i++) {
				const point = spinePoints[i];
				const nextPoint = spinePoints[i + 1] || point; // Handle last point
				const direction = new THREE.Vector3().subVectors(nextPoint, point).normalize();
				const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x).normalize();
				const widthFactor = Math.sin((i / ribbonLength) * Math.PI);

				positions.push(
					point.x + perpendicular.x * ribbonWidth * widthFactor,
					point.y + perpendicular.y * ribbonWidth * widthFactor,
					point.z + perpendicular.z * ribbonWidth * widthFactor, // Top vertex
					point.x - perpendicular.x * ribbonWidth * widthFactor,
					point.y - perpendicular.y * ribbonWidth * widthFactor,
					point.z - perpendicular.z * ribbonWidth * widthFactor // Bottom vertex
				);
				uvs.push(i / ribbonLength, 0, i / ribbonLength, 1);
			}

			// Create indices for triangles
			for (let i = 0; i < ribbonLength; i++) {
				const a = i * 2;
				const b = a + 1;
				const c = a + 2;
				const d = a + 3;
				indices.push(a, b, c, b, d, c);
			}

			geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
			geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
			geometry.setIndex(indices);
			geometry.computeVertexNormals();

			// Material and mesh
			const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
			const ribbon = new THREE.Mesh(geometry, material);
			ribbon.position.set(0, 0, 0);
			ribbon.userData = { spinePoints, ribbonWidth, ribbonLength };
			return ribbon;
		}

		const ribbon1 = createRibbon(100, 1.5, '#808080');
		const ribbon2 = createRibbon(50, 0.5, '#444444', 5);
		const ribbon3 = createRibbon(75, 0.75, '#333333', -5);
		scene.add(ribbon1, ribbon2, ribbon3);
		const ribbons = [ribbon1, ribbon2, ribbon3];

		camera.position.z = 10;

		const clock = new THREE.Clock();

		function animate() {
			if (prefersReducedMotion) {
				renderer.render(scene, camera);
				return;
			}
			const time = clock.getElapsedTime();
			ribbons.forEach((ribbon) => {
				ribbon.rotation.x += 0.001;
				ribbon.rotation.y += 0.001;

				// Animate ribbon positions randomly
				const geometry = ribbon.geometry;
				const spinePoints = ribbon.userData.spinePoints;
				const ribbonWidth = ribbon.userData.ribbonWidth;
				const ribbonLength = ribbon.userData.ribbonLength;
				const positionsArray = geometry.attributes.position.array;
				for (let i = 0; i < spinePoints.length; i++) {
					const offset = i * 0.1;
					const randomX = Math.sin(time + offset) * 0.5;
					const randomY = Math.cos(time + offset) * 0.5;
					const randomZ = Math.sin(time * 0.5 + offset) * 0.5;
					spinePoints[i].x += randomX * 0.01;
					spinePoints[i].y += randomY * 0.01;
					spinePoints[i].z += randomZ * 0.01;

					// Recalculate perpendicular for updated spine
					const point = spinePoints[i];
					const nextPoint = spinePoints[i + 1] || point;
					const direction = new THREE.Vector3().subVectors(nextPoint, point).normalize();
					const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x).normalize();
					const widthFactor = Math.sin((i / ribbonLength) * Math.PI);

					// Update geometry vertices with taper
					const baseIndex = i * 6;
					const effectiveWidth = ribbonWidth * widthFactor;
					positionsArray[baseIndex] = point.x + perpendicular.x * effectiveWidth;
					positionsArray[baseIndex + 1] = point.y + perpendicular.y * effectiveWidth;
					positionsArray[baseIndex + 2] = point.z + perpendicular.z * effectiveWidth;
					positionsArray[baseIndex + 3] = point.x - perpendicular.x * effectiveWidth;
					positionsArray[baseIndex + 4] = point.y - perpendicular.y * effectiveWidth;
					positionsArray[baseIndex + 5] = point.z - perpendicular.z * effectiveWidth;
				}
				geometry.attributes.position.needsUpdate = true;
				geometry.computeVertexNormals();
			});

			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		}
		animate();

		return () => {
			renderer.dispose();
			ribbons.forEach((ribbon) => {
				ribbon.geometry.dispose();
				ribbon.material.dispose();
			});
		};
	});
</script>

<canvas
	bind:this={canvas}
	style="position: fixed; top: 0; left: 0; z-index: 0; width: 100vw; height: 100vh; background: var(--clr-invert);"
	aria-hidden="true"
></canvas>

<style>
</style>
