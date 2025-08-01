<script>
	import * as THREE from 'three';

	$effect(() => {
		// Helper function to convert CSS colors to RGB
		const convertToRGB = (colorValue) => {
			if (!colorValue) return null;
			try {
				const tempDiv = document.createElement('div');
				tempDiv.style.backgroundColor = colorValue;
				document.body.appendChild(tempDiv);
				const computedStyle = getComputedStyle(tempDiv);
				const computedColor = computedStyle.backgroundColor;
				document.body.removeChild(tempDiv);

				// If still not RGB, try with a canvas for better conversion
				if (computedColor.startsWith('oklab') || computedColor === colorValue) {
					const canvas = document.createElement('canvas');
					canvas.width = 1;
					canvas.height = 1;
					const ctx = canvas.getContext('2d');
					ctx.fillStyle = colorValue;
					ctx.fillRect(0, 0, 1, 1);
					const imageData = ctx.getImageData(0, 0, 1, 1);
					const rgb = imageData.data;
					return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
				}

				return computedColor;
			} catch (error) {
				console.error('Error converting color:', colorValue, error);
				return null;
			}
		};

		// Get CSS custom properties from body element (where ThemeToggle sets them)
		const bodyStyles = getComputedStyle(document.body);
		const primaryColorRaw = bodyStyles.getPropertyValue('--clr-main').trim();
		const secondaryColorRaw = bodyStyles.getPropertyValue('--clr-inverted').trim();
		const accentColorRaw = bodyStyles.getPropertyValue('--clr-pale').trim();

		// Convert colors to RGB format
		const primaryColor = convertToRGB(primaryColorRaw) || '#ffffff';
		const secondaryColor = convertToRGB(secondaryColorRaw) || '#000000';
		const accentColor = convertToRGB(accentColorRaw) || '#ffff00';

		console.log('Initial color conversion:', {
			primaryColorRaw,
			primaryColor,
			secondaryColorRaw,
			secondaryColor,
			accentColorRaw,
			accentColor
		});

		// Texture Loader
		const textureLoader = new THREE.TextureLoader();
		const star = textureLoader.load('/textures/star.webp');

		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		// Objects
		const geometry = new THREE.CapsuleGeometry(2, 0, 9, 20);

		const particlesGeometry = new THREE.BufferGeometry();
		const particlesCount = 1000;
		const positionArray = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount * 3; i++) {
			positionArray[i] = (Math.random() - 0.5) * 5;
		}

		particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

		// Materials - using CSS custom properties
		const material = new THREE.PointsMaterial({
			size: 0.015,
			color: primaryColor || '#ffffff' // fallback to white
		});

		const particlesMaterial = new THREE.PointsMaterial({
			size: 0.04,
			transparent: true,
			alphaMap: star,
			alphaTest: 0.001,
			color: accentColor || secondaryColor || 'hsla(60, 64%, 33%, 0.75)',
			blending: THREE.AdditiveBlending
		});

		// Function to update colors when theme changes
		function updateColors() {
			const bodyStyles = getComputedStyle(document.body);
			const newPrimaryColor = bodyStyles.getPropertyValue('--clr-main').trim();
			const newSecondaryColor = bodyStyles.getPropertyValue('--clr-inverted').trim();
			const newAccentColor = bodyStyles.getPropertyValue('--clr-pale').trim();

			console.log('Raw CSS values:', { newPrimaryColor, newSecondaryColor, newAccentColor });
			console.log('Body classes:', document.body.classList.toString());

			// Convert oklab/complex colors to RGB
			const convertToRGB = (colorValue) => {
				if (!colorValue) return null;
				try {
					const tempDiv = document.createElement('div');
					tempDiv.style.backgroundColor = colorValue; // Use background color instead
					document.body.appendChild(tempDiv);
					const computedStyle = getComputedStyle(tempDiv);
					const computedColor = computedStyle.backgroundColor;
					document.body.removeChild(tempDiv);

					// If still not RGB, try with a canvas for better conversion
					if (computedColor.startsWith('oklab') || computedColor === colorValue) {
						const canvas = document.createElement('canvas');
						canvas.width = 1;
						canvas.height = 1;
						const ctx = canvas.getContext('2d');
						ctx.fillStyle = colorValue;
						ctx.fillRect(0, 0, 1, 1);
						const imageData = ctx.getImageData(0, 0, 1, 1);
						const rgb = imageData.data;
						return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
					}

					return computedColor;
				} catch (error) {
					console.error('Error converting color:', colorValue, error);
					return null;
				}
			};

			// Use CSS variables with conversion - with fallbacks
			let primaryConverted = null;
			let accentConverted = null;
			let secondaryConverted = null;

			if (newPrimaryColor && newPrimaryColor.length > 0) {
				primaryConverted = convertToRGB(newPrimaryColor);
				console.log('Converting primary:', newPrimaryColor, '->', primaryConverted);
			}
			if (newAccentColor && newAccentColor.length > 0) {
				accentConverted = convertToRGB(newAccentColor);
				console.log('Converting accent:', newAccentColor, '->', accentConverted);
			}
			if (newSecondaryColor && newSecondaryColor.length > 0) {
				secondaryConverted = convertToRGB(newSecondaryColor);
				console.log('Converting secondary:', newSecondaryColor, '->', secondaryConverted);
			}

			// Apply colors with fallbacks
			if (primaryConverted) {
				material.color.set(primaryConverted);
			} else {
				// Fallback based on theme
				const isLight = document.body.classList.contains('light');
				material.color.set(isLight ? '#333333' : '#ffffff');
			}

			if (accentConverted) {
				particlesMaterial.color.set(accentConverted);
			} else if (secondaryConverted) {
				particlesMaterial.color.set(secondaryConverted);
			} else {
				// Fallback based on theme
				const isLight = document.body.classList.contains('light');
				particlesMaterial.color.set(isLight ? '#b8860b' : '#ffd700');
			}
		}

		// Listen for theme changes
		const themeObserver = new MutationObserver(updateColors);
		themeObserver.observe(document.body, {
			attributes: true,
			attributeFilter: ['class', 'style']
		});

		// Also listen for custom theme change events if your ThemeToggle dispatches them
		document.addEventListener('theme-change', updateColors);

		// Test initial color values
		console.log('Initial colors check:');
		updateColors();

		// Mesh
		const sphere = new THREE.Points(geometry, material);
		const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
		scene.add(sphere, particlesMesh);

		// Lights
		const pointLight = new THREE.PointLight(0xffffff, 0.1);
		pointLight.position.set(2, 3, 4);
		scene.add(pointLight);

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 2;
		scene.add(camera);

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			alpha: true,
			antialias: true
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Mouse
		document.addEventListener('mousemove', animateParticles);

		let mouseX = 0;
		let mouseY = 0;

		function animateParticles(event) {
			mouseX = event.clientX;
			mouseY = event.clientY;
		}

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();
		let isAnimating = true;

		const tick = () => {
			if (!isAnimating) return;

			const elapsedTime = clock.getElapsedTime();

			// Update objects
			sphere.rotation.y = -0.2 * elapsedTime;
			particlesMesh.rotation.y = -0.01 * elapsedTime;

			if (mouseX > 0) {
				particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.0000008);
				particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.0000008);
			}

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		// Visibility change handler
		function handleVisibilityChange() {
			if (document.hidden) {
				isAnimating = false;
			} else {
				isAnimating = true;
				tick();
			}
		}

		// Listen for visibility changes
		document.addEventListener('visibilitychange', handleVisibilityChange);

		tick();

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			document.removeEventListener('mousemove', animateParticles);
			document.removeEventListener('theme-change', updateColors);
			themeObserver.disconnect();
		};
	});
</script>

<canvas class="webgl" aria-label="hero"></canvas>

<style>
	.webgl {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
		/* Reserve space immediately to prevent CLS */
		min-height: 100vh;
		/* Ensure canvas doesn't cause horizontal scroll */
		max-width: 100vw;
		/* Prevent any layout shifts during loading */
		display: block;
		/* Transparent background - let the Three.js scene handle the visuals */
		background: transparent;
	}
</style>
