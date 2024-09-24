<script>
	import { onMount } from 'svelte';
	import { VFX } from '@vfx-js/core';
	import Image from '$lib/components/Image.svelte';

	onMount(() => {
		const img = document.querySelector('img');
		const vfx = new VFX();

		vfx.add(img, { shader: 'rgbShift' });
	});
</script>

<main>
	<section class="hero-logo">
		<a href="/about/hero">
			<Image src="/logos/atwellUI1.webp" alt="atwell ui" />
		</a>
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
		user-select: none;
	}

	.hero-logo {
		width: clamp(80%, 12vw, 90%);
		display: flex;
		justify-content: center;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		background: transparent;
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
