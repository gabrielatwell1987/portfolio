<script lang="ts">
	import HeroTitle from '$lib/components/landing/HeroTitle.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import * as THREE from 'three';

	let animationFrameId: number | undefined;
	let renderer: THREE.WebGLRenderer | undefined;
	let geometry: THREE.CapsuleGeometry | undefined;
	let particlesGeometry: THREE.BufferGeometry | undefined;
	let material: THREE.PointsMaterial | undefined;
	let particlesMaterial: THREE.PointsMaterial | undefined;
	let star: THREE.Texture | undefined;
	let camera: THREE.PerspectiveCamera | undefined;
	let themeObserver: MutationObserver | undefined;
	let resizeListener: (() => void) | undefined;
	let mousemoveListener: ((event: MouseEvent) => void) | undefined;
	let visibilityListener: ((event: Event) => void) | undefined;
	let themeChangeListener: ((event: Event) => void) | undefined;
	const abortController = new AbortController();

	$effect(() => {
		// helper function to convert CSS colors to RGB (strip alpha if present)
		const convertToRGB = (colorValue: string | null): string | null => {
			if (!colorValue) return null;
			try {
				const tempDiv = document.createElement('div');
				tempDiv.style.backgroundColor = colorValue;
				document.body.appendChild(tempDiv);
				const computedStyle = getComputedStyle(tempDiv);
				const computedColor = computedStyle.backgroundColor;
				document.body.removeChild(tempDiv);

				// if still not RGB, try with a canvas for better conversion
				if (computedColor.startsWith('oklab') || computedColor === colorValue) {
					const canvas = document.createElement('canvas');
					canvas.width = 1;
					canvas.height = 1;
					const ctx = canvas.getContext('2d');
					if (!ctx) return null;
					ctx.fillStyle = colorValue;
					ctx.fillRect(0, 0, 1, 1);
					const imageData = ctx.getImageData(0, 0, 1, 1);
					const rgb = imageData.data;
					return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
				}

				// strip alpha from rgba to rgb for THREE.js compatibility
				const rgbaMatch = computedColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
				if (rgbaMatch) {
					return `rgb(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]})`;
				}

				return computedColor;
			} catch (error) {
				console.error('Error converting color:', colorValue, error);
				return null;
			}
		};

		// color helper function
		const isLightColor = (color: string) => {
			const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
			if (match) {
				const r = parseInt(match[1]);
				const g = parseInt(match[2]);
				const b = parseInt(match[3]);
				const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
				return luminance > 0.5;
			}
			return false;
		};

		const bodyStyles = getComputedStyle(document.body);
		const primaryColorRaw = bodyStyles.getPropertyValue('--clr-main').trim();
		const secondaryColorRaw = bodyStyles.getPropertyValue('--clr-inverted').trim();
		const accentColorRaw = bodyStyles.getPropertyValue('--clr-pale').trim();

		const primaryColor = convertToRGB(primaryColorRaw);
		const secondaryColor = convertToRGB(secondaryColorRaw);
		const accentColor = convertToRGB(accentColorRaw);

		const canvasElement = document.createElement('canvas');
		canvasElement.width = 64;
		canvasElement.height = 64;
		const ctx = canvasElement.getContext('2d');
		if (ctx) {
			ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // White star
			ctx.beginPath();
			const spikes = 5;
			const outerRadius = 30;
			const innerRadius = 15;
			const centerX = 32;
			const centerY = 32;
			for (let i = 0; i < spikes * 2; i++) {
				const angle = (i * Math.PI) / spikes;
				const radius = i % 2 === 0 ? outerRadius : innerRadius;
				const x = centerX + Math.cos(angle) * radius;
				const y = centerY + Math.sin(angle) * radius;
				if (i === 0) ctx.moveTo(x, y);
				else ctx.lineTo(x, y);
			}
			ctx.closePath();
			ctx.fill();
			star = new THREE.CanvasTexture(canvasElement);
		} else {
			// Fallback to the original texture if canvas context fails
			const textureLoader = new THREE.TextureLoader();
			star = textureLoader.load(
				'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/star.webp'
			);
		}

		// canvas
		const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;
		if (!canvas) return;

		// scene
		const scene = new THREE.Scene();

		// objects
		geometry = new THREE.CapsuleGeometry(2, 0, 9, 20);

		particlesGeometry = new THREE.BufferGeometry();
		const particlesCount = 1000;
		const positionArray = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount * 3; i++) {
			positionArray[i] = (Math.random() - 0.5) * 5;
		}

		particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

		material = new THREE.PointsMaterial({
			size: 0.015,
			color: primaryColor || '#ffffff' // fallback to white
		});

		particlesMaterial = new THREE.PointsMaterial({
			size: 0.04,
			transparent: true,
			alphaMap: star,
			alphaTest: 0.001,
			color: accentColor || secondaryColor || '#ffffff',
			blending: THREE.AdditiveBlending
		});

		function updateColors() {
			if (!material || !particlesMaterial) return;

			const bodyStyles = getComputedStyle(document.body);
			const newPrimaryColor = bodyStyles.getPropertyValue('--clr-main').trim();
			const newSecondaryColor = bodyStyles.getPropertyValue('--clr-inverted').trim();
			const newAccentColor = bodyStyles.getPropertyValue('--clr-pale').trim();

			// Convert oklab/complex colors to RGB
			let primaryConverted = null;
			let accentConverted = null;
			let secondaryConverted = null;

			if (newPrimaryColor && newPrimaryColor.length > 0) {
				primaryConverted = convertToRGB(newPrimaryColor);
			}
			if (newAccentColor && newAccentColor.length > 0) {
				accentConverted = convertToRGB(newAccentColor);
			}
			if (newSecondaryColor && newSecondaryColor.length > 0) {
				secondaryConverted = convertToRGB(newSecondaryColor);
			}

			// detect theme
			const isLight = primaryConverted ? isLightColor(primaryConverted) : false;

			if (isLight) {
				if (secondaryConverted) {
					material.color.set('#707070');
				} else {
					material.color.set('#707070');
				}
			} else {
				if (primaryConverted) {
					material.color.set('#ffffff');
				} else {
					material.color.set('#ffffff');
				}
			}

			if (accentConverted) {
				particlesMaterial.color.set(accentConverted);
			} else if (secondaryConverted) {
				particlesMaterial.color.set(secondaryConverted);
			} else {
				// fallback
				particlesMaterial.color.set(isLight ? '#b8860b' : '#ffd700');
			}
		}

		// Listen for theme changes
		themeObserver = new MutationObserver(updateColors);
		themeObserver.observe(document.body, {
			attributes: true,
			attributeFilter: ['class', 'style']
		});

		// Also listen for custom theme change events if your ThemeToggle dispatches them
		themeChangeListener = updateColors;
		document.addEventListener('theme-change', themeChangeListener);

		// Test initial color values
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

		resizeListener = () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			if (camera) {
				camera.aspect = sizes.width / sizes.height;
				camera.updateProjectionMatrix();
			}

			if (renderer) {
				renderer.setSize(sizes.width, sizes.height);
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			}
		};
		window.addEventListener('resize', resizeListener);

		/**
		 * Camera
		 */
		// Base camera
		camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 2;
		scene.add(camera);

		/**
		 * Renderer
		 */
		renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			alpha: true,
			antialias: true
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// Mouse
		mousemoveListener = animateParticles;
		document.addEventListener('mousemove', mousemoveListener);

		let mouseX = 0;
		let mouseY = 0;

		function animateParticles(event: MouseEvent) {
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

			sphere.rotation.y = -0.2 * elapsedTime;
			particlesMesh.rotation.y = -0.01 * elapsedTime;

			if (mouseX > 0) {
				particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.0000008);
				particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.0000008);
			}

			if (renderer && camera) {
				renderer.render(scene, camera);
			}

			animationFrameId = window.requestAnimationFrame(tick);
		};

		// Visibility change handler
		visibilityListener = () => {
			if (document.hidden) {
				isAnimating = false;
			} else {
				isAnimating = true;
				tick();
			}
		};

		document.addEventListener('visibilitychange', visibilityListener);

		tick();

		return () => {
			if (animationFrameId) {
				window.cancelAnimationFrame(animationFrameId);
			}

			// Abort all event listeners
			abortController.abort();

			if (themeObserver) {
				themeObserver.disconnect();
			}

			// Dispose Three.js resources
			if (renderer) {
				renderer.dispose();
			}
			if (geometry) {
				geometry.dispose();
			}
			if (particlesGeometry) {
				particlesGeometry.dispose();
			}
			if (material) {
				material.dispose();
			}
			if (particlesMaterial) {
				particlesMaterial.dispose();
			}
			if (star) {
				star.dispose();
			}
		};
	});
</script>

<canvas class="webgl" aria-label="hero"></canvas>

<section aria-label="hero" class="hero-content">
	<HeroTitle title="Frontend Crafted Web Experiences" />

	<h4 class="summary">
		I am a frontend developer who loves to create beautiful and functional websites. This website
		showcases my skills with some projects that I created. I look forward to hearing from you so we
		can discuss your goals for your online needs!
	</h4>

	<div class="button-wrapper">
		<Button href="/projects" title="Creations" />
	</div>
</section>

<style>
	.webgl {
		position: absolute;
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

	.hero-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		max-inline-size: 1200px;
		padding: 2rem;
		min-height: 60vh;
		backdrop-filter: blur(1px);
		border-radius: 12px;
		margin-top: 2.5em;

		@media (width <= 768px) {
			padding: 1rem;
			min-height: 50vh;
		}

		& > * {
			contain: layout;
		}

		& :global(h1) {
			min-height: 3rem;
		}

		& :global(button) {
			min-height: 2.5rem;
			min-width: 8rem;
		}

		& .summary {
			color: var(--clr-main);
			font-family: var(--bronova);
			font-size: clamp(var(--sm), 2vw, var(--h5));
			font-weight: 400;
			line-height: 1.6;
			letter-spacing: 1px;
			max-inline-size: 600px;
			margin: 1.5rem auto;
			text-align: left;
			min-height: 3rem;

			@media (width >= 990px) {
				letter-spacing: 2px;
				max-inline-size: 90%;
			}

			@media (width <= 768px) {
				text-align: center;
				font-size: clamp(var(--xs), 4vw, var(--sm));
			}
		}

		& .button-wrapper {
			margin-top: 2rem;
			min-height: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-content {
			backdrop-filter: none;
			transition: none;
		}
	}
</style>
