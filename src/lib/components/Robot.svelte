<script>
	import { onMount } from 'svelte';

	export let title;

	onMount(() => {
		const iFrame = document.querySelector('iframe');
	});
</script>

<main>
	<h2>{title}</h2>

	<iframe
		src="https://my.spline.design/robotfollowcursorforlandingpage-887310bccea6e24d681820089ada9b65/"
		frameborder="0"
		width="100%"
		height="100%"
		title="robot"
		aria-label="robot"
	/>

	<h3>The robot will follow your mouse movements.</h3>
</main>

<style>
	iframe {
		width: 50%;
		height: 50rem;
		margin: 0 0 0 24.5%;
		border-radius: 12px;
		margin-bottom: 2rem;
	}

	h2,
	h3 {
		text-align: center;
		margin-top: 0.5rem;
	}

	h2 {
		color: var(--purple);
		margin: 5% 0 2rem 0;
		font-size: clamp(1.75rem, 2vw, 3rem);
		letter-spacing: 4px;
	}

	h3 {
		color: var(--smoke);
		margin: 0;
		margin-top: 0.25rem;
		margin-bottom: 8%;
		font-size: clamp(0.75rem, 2vw, 1.5rem);
	}

	@media (max-width: 768px) {
		iframe {
			width: 100%;
			margin: 0;
		}
	}
</style>
