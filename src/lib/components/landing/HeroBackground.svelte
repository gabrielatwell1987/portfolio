<script>
	import * as THREE from 'three';
	import vertexShader from '$lib/shaders/ribbon.vert?raw';
	import fragmentShader from '$lib/shaders/ribbon.frag?raw';

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

		function createRibbon(ribbonLength, ribbonWidth, ribbonThickness, offsetX = 0, phase = 0) {
			const geometry = new THREE.BufferGeometry();
			const positions = [];
			const indices = [];
			const uvs = [];

			const spinePoints = [];
			for (let i = 0; i <= ribbonLength; i++) {
				const x = (i - ribbonLength / 2) * 0.2 + offsetX;
				const y = Math.sin(i * 0.1) * 2;
				const z = Math.cos(i * 0.1) * 2;
				spinePoints.push(new THREE.Vector3(x, y, z));
			}

			for (let i = 0; i < spinePoints.length; i++) {
				const point = spinePoints[i];
				const nextPoint = spinePoints[i + 1] || point;
				const direction = new THREE.Vector3().subVectors(nextPoint, point).normalize();
				const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x).normalize();
				const normal = new THREE.Vector3().crossVectors(direction, perpendicular).normalize();
				const widthFactor = Math.sin((i / ribbonLength) * Math.PI);

				// Create 4 vertices per segment for thickness (top-left, top-right, bottom-left, bottom-right)
				const hw = ribbonWidth * widthFactor; // half width
				const ht = ribbonThickness / 2; // half thickness

				// Top surface
				positions.push(
					point.x + perpendicular.x * hw + normal.x * ht,
					point.y + perpendicular.y * hw + normal.y * ht,
					point.z + perpendicular.z * hw + normal.z * ht,
					point.x - perpendicular.x * hw + normal.x * ht,
					point.y - perpendicular.y * hw + normal.y * ht,
					point.z - perpendicular.z * hw + normal.z * ht
				);

				// Bottom surface
				positions.push(
					point.x + perpendicular.x * hw - normal.x * ht,
					point.y + perpendicular.y * hw - normal.y * ht,
					point.z + perpendicular.z * hw - normal.z * ht,
					point.x - perpendicular.x * hw - normal.x * ht,
					point.y - perpendicular.y * hw - normal.y * ht,
					point.z - perpendicular.z * hw - normal.z * ht
				);

				uvs.push(
					i / ribbonLength,
					0,
					i / ribbonLength,
					1,
					i / ribbonLength,
					0,
					i / ribbonLength,
					1
				);
			}

			for (let i = 0; i < ribbonLength; i++) {
				const base = i * 4;

				// Top surface
				indices.push(base, base + 1, base + 4);
				indices.push(base + 1, base + 5, base + 4);

				// Bottom surface
				indices.push(base + 2, base + 6, base + 3);
				indices.push(base + 3, base + 6, base + 7);

				// Side edges
				indices.push(base, base + 4, base + 2);
				indices.push(base + 2, base + 4, base + 6);

				indices.push(base + 1, base + 3, base + 5);
				indices.push(base + 3, base + 7, base + 5);
			}

			geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
			geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
			geometry.setIndex(indices);
			geometry.computeVertexNormals();

			const ribbon = new THREE.Mesh(geometry);
			ribbon.position.set(0, 0, 0);

			ribbon.userData = {
				spinePoints,
				ribbonWidth,
				ribbonLength,
				ribbonThickness,
				phase,
				rotationSpeedX: 0.001 + Math.random() * 0.002,
				rotationSpeedY: 0.001 + Math.random() * 0.002
			};
			return ribbon;
		}

		const ribbonShaderMaterial = new THREE.ShaderMaterial({
			uniforms: {
				colorA: { value: new THREE.Color('#909090') },
				colorB: { value: new THREE.Color('#444444') },
				time: { value: 0 }
			},
			vertexShader,
			fragmentShader,
			side: THREE.DoubleSide
		});

		// add ribbons
		const ribbon1 = createRibbon(100, 1.5, 0.3, 0, Math.random() * Math.PI * 2);
		const ribbon2 = createRibbon(195, 0.5, 0.15, 2, Math.random() * Math.PI * 2);
		const ribbon3 = createRibbon(275, 2, 0.4, 4, Math.random() * Math.PI * 2);
		// const ribbon4 = createRibbon(75, 1, -6, Math.random() * Math.PI * 2);
		// const ribbon5 = createRibbon(50, 0.25, -4, Math.random() * Math.PI * 2);

		ribbon1.material = ribbonShaderMaterial;
		ribbon2.material = ribbonShaderMaterial;
		ribbon3.material = ribbonShaderMaterial;
		// ribbon4.material = ribbonShaderMaterial;
		// ribbon5.material = ribbonShaderMaterial;

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
			ribbonShaderMaterial.uniforms.time.value = time;

			ribbons.forEach((ribbon) => {
				ribbon.rotation.x += ribbon.userData.rotationSpeedX;
				ribbon.rotation.y += ribbon.userData.rotationSpeedY;

				const geometry = ribbon.geometry;
				const spinePoints = ribbon.userData.spinePoints;
				const ribbonWidth = ribbon.userData.ribbonWidth;
				const ribbonThickness = ribbon.userData.ribbonThickness;
				const ribbonLength = ribbon.userData.ribbonLength;
				const positionsArray = geometry.attributes.position.array;
				const phase = ribbon.userData.phase;

				for (let i = 0; i < spinePoints.length; i++) {
					const offset = i * 0.1;
					const randomX = Math.sin(time + offset + phase) * 0.5;
					const randomY = Math.cos(time + offset + phase) * 0.5;
					const randomZ = Math.sin(time * 0.5 + offset + phase) * 0.5;
					spinePoints[i].x += randomX * 0.01;
					spinePoints[i].y += randomY * 0.01;
					spinePoints[i].z += randomZ * 0.01;

					const point = spinePoints[i];
					const nextPoint = spinePoints[i + 1] || point;
					const direction = new THREE.Vector3().subVectors(nextPoint, point).normalize();
					const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x).normalize();
					const normal = new THREE.Vector3().crossVectors(direction, perpendicular).normalize();
					const widthFactor = Math.sin((i / ribbonLength) * Math.PI);

					const hw = ribbonWidth * widthFactor;
					const ht = ribbonThickness / 2;
					const baseIndex = i * 12;

					// Top surface vertices
					positionsArray[baseIndex] = point.x + perpendicular.x * hw + normal.x * ht;
					positionsArray[baseIndex + 1] = point.y + perpendicular.y * hw + normal.y * ht;
					positionsArray[baseIndex + 2] = point.z + perpendicular.z * hw + normal.z * ht;

					positionsArray[baseIndex + 3] = point.x - perpendicular.x * hw + normal.x * ht;
					positionsArray[baseIndex + 4] = point.y - perpendicular.y * hw + normal.y * ht;
					positionsArray[baseIndex + 5] = point.z - perpendicular.z * hw + normal.z * ht;

					// Bottom surface vertices
					positionsArray[baseIndex + 6] = point.x + perpendicular.x * hw - normal.x * ht;
					positionsArray[baseIndex + 7] = point.y + perpendicular.y * hw - normal.y * ht;
					positionsArray[baseIndex + 8] = point.z + perpendicular.z * hw - normal.z * ht;

					positionsArray[baseIndex + 9] = point.x - perpendicular.x * hw - normal.x * ht;
					positionsArray[baseIndex + 10] = point.y - perpendicular.y * hw - normal.y * ht;
					positionsArray[baseIndex + 11] = point.z - perpendicular.z * hw - normal.z * ht;
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
