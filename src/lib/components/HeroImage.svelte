<script>
	import { fade } from 'svelte/transition';
	import { duration } from '$lib/data/timings.svelte.js';

	let { src, alt, title } = $props();
</script>

<div class="image-hero" transition:fade={{ duration: duration }}>
	<img {src} {alt} />

	<h1>{title}</h1>
</div>

<style>
	.image-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
		margin-bottom: 5rem;

		img {
			width: fit-content;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, transparent);
			border-radius: 0.5em;
		}

		h1 {
			margin-block: -1.2em;
			padding-bottom: 1.5rem;
			font-size: clamp(2rem, 4vw, 5rem);
			font-weight: 700;
			text-shadow: 0 0 5px var(--smoke);
			color: var(--sky);
			font-family: var(--orbitron);

			@media (width <= 500px) {
				padding-bottom: 0;
				mix-blend-mode: normal;
			}
		}
	}
</style>
