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

		// shapes
		const shapes = [];

		// star
		const starShape = new THREE.Shape();
		const outerRadius = 1;
		const innerRadius = 0.5;
		const points = 5;
		const starPoints = [];
		for (let i = 0; i < points * 2; i++) {
			const angle = (i * Math.PI) / points;
			const radius = i % 2 === 0 ? outerRadius : innerRadius;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;
			starPoints.push({ x, y });
		}
		starShape.moveTo(starPoints[0].x, starPoints[0].y);
		for (let i = 0; i < starPoints.length; i++) {
			const current = starPoints[i];
			const next = starPoints[(i + 1) % starPoints.length];
			const cpX = (current.x + next.x) / 2;
			const cpY = (current.y + next.y) / 2;
			starShape.quadraticCurveTo(cpX, cpY, next.x, next.y);
		}
		starShape.closePath();

		const materials = [
			new THREE.MeshBasicMaterial({ color: 0x242424 }),
			new THREE.MeshBasicMaterial({ color: 0x2c2c2c }),
			new THREE.MeshBasicMaterial({ color: 0x0a0a0a })
		];

		for (let i = 0; i < 10; i++) {
			let geometry;
			const isStar = Math.random() < 0.5; // 50% chance for star or sphere
			if (isStar) {
				// Random depth between 0.2 and 1 for each star
				const randomDepth = 0.2 + Math.random() * 0.8;
				geometry = new THREE.ExtrudeGeometry(starShape, {
					depth: randomDepth,
					bevelEnabled: false
				});
			} else {
				geometry = new THREE.SphereGeometry(0.5, 16, 16);
			}
			const material = materials[Math.floor(Math.random() * materials.length)];
			const mesh = new THREE.Mesh(geometry, material);
			if (isStar) {
				const edges = new THREE.EdgesGeometry(geometry);
				const lineMaterial = new THREE.LineBasicMaterial({ color: 0x111111 });
				const wireframe = new THREE.LineSegments(edges, lineMaterial);
				mesh.add(wireframe);
			}
			mesh.position.set(
				(Math.random() - 0.5) * 20,
				(Math.random() - 0.5) * 20,
				(Math.random() - 0.5) * 20
			);
			mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
			mesh.userData = {
				initialX: mesh.position.x,
				initialY: mesh.position.y,
				initialZ: mesh.position.z,
				offset: Math.random() * Math.PI * 2
			};
			shapes.push(mesh);
			scene.add(mesh);
		}

		camera.position.z = 10;

		const clock = new THREE.Clock();

		function animate() {
			if (prefersReducedMotion) {
				renderer.render(scene, camera);
				return;
			}
			const time = clock.getElapsedTime();
			shapes.forEach((shape, index) => {
				shape.rotation.x += 0.001;
				shape.rotation.y += 0.001;
				// Smooth floating motion using sine waves
				const offset = shape.userData.offset;
				shape.position.x = shape.userData.initialX + Math.sin(time + offset) * 0.2;
				shape.position.y = shape.userData.initialY + Math.cos(time + offset) * 0.2;
				shape.position.z = shape.userData.initialZ + Math.sin(time * 0.5 + offset) * 0.2;
			});
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		}
		animate();

		return () => {
			renderer.dispose();
			shapes.forEach((shape) => {
				shape.geometry.dispose();
				shape.material.dispose();
				if (shape.children.length > 0) {
					shape.children.forEach((child) => {
						child.geometry.dispose();
						child.material.dispose();
					});
				}
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
