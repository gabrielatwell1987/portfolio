<script>
	// import { onMount } from 'svelte';
	// import { VFX } from '@vfx-js/core';
	import Image from '$lib/components/Image.svelte';

	// onMount(() => {
	// 	const img = document.querySelector('img');
	// 	const vfx = new VFX();

	// 	vfx.add(img, { shader: 'rgbShift' });
	// });
</script>

<main>
	<section class="hero-logo">
		<a href="/about/hero">
			<Image src="/logos/atwellUIsans.webp" alt="atwell ui" />
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
</style>
