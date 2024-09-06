<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { VFX } from '@vfx-js/core';
	import Image from '$lib/components/Image.svelte';

	onMount(() => {
		gsap.set('.hero-logo', { autoAlpha: 0, scale: 0 });

		gsap.to('.hero-logo', {
			duration: 5,
			autoAlpha: 1,
			scale: 1,
			ease: 'back.out',
			delay: 0.75,
			letterSpacing: '15px'
		});

		// vfx
		const img = document.querySelector('img');
		const vfx = new VFX();

		vfx.add(img, {
			shader: 'duotone',
			uniforms: {
				color1: [0.8, 0.8, 0.8, 1],
				color2: [0.3, 0.6, 0.9, 0.75],
				speed: 0.4
			}
		});
		// vfx.add(img, { shader: 'rgbShift' });
	});
</script>

<main>
	<section class="hero-logo">
		<Image src="/logos/mono-atwell.webp" alt="atwell ui" />
	</section>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30vh;
		margin-top: 2.5%;
	}

	.hero-logo {
		width: clamp(90%, 10vw, 90%);
		display: flex;
		justify-content: center;
	}

	@media (max-width: 300px) {
		main {
			height: 7vh;
		}
	}

	@media (max-width: 720px) {
		main {
			height: 20vh;
		}
	}

	@media (max-width: 990px) {
		main {
			height: 30vh;
		}
	}
</style>
