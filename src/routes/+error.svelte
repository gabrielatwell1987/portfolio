<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { getDuration, getDelay } from '$lib/data/animationTimings.svelte.js';
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/layout/Image.svelte';

	$effect(() => {
		console.log(`There is a ${$page.status} error!`);
	});
</script>

<SEO
	title="There's been an error!"
	description="You've encountered an error!"
	keywords="error, gabe's error page"
/>

<main aria-label="error" transition:fade={{ getDuration, getDelay }}>
	<div class="image">
		<Image src="/logos/error.webp" alt="an error has occurred" width="300" aspectRatio="1/1" />
	</div>

	<div class="error">
		<h2>You have encountered an error</h2>

		<h1>status: {$page.status}</h1>
	</div>

	<div class="error">
		<p>{$page.error.message}</p>
	</div>
</main>

<style>
	main {
		padding: 1rem 1.5rem;
		height: 80vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& h1 {
			font-size: clamp(var(--h5), 5vw, var(--xxl));
			font-weight: 900;
			-webkit-text-stroke: 1px var(--clr-main);
			margin-inline: auto;
			text-align: center;
			color: var(--clr-blue);
			font-family: var(--orbitron);
			letter-spacing: 7px;
			text-wrap: balance;
		}

		& h2 {
			font-size: clamp(var(--h4), 2.5vw, var(--xl));
			font-weight: 700;
			margin-inline: auto;
			margin-block: 0;
			text-align: center;
			color: var(--clr-main);
			font-family: var(--bronova);
			letter-spacing: 5px;
			text-wrap: balance;
		}

		& p {
			font-family: var(--bronova);
			font-size: clamp(var(--h5), 3vw, var(--h3));
			font-weight: 500;
			letter-spacing: 5px;
			line-height: 1.25;
			text-align: left;
			padding: 2rem 4rem;
			color: var(--clr-gray);
			text-align: center;
			text-wrap: none;
			margin-top: -2em;
			margin-bottom: 3%;
		}

		& .error {
			width: 100%;
		}

		& .image {
			width: clamp(100px, 20vw, 300px);
			margin-inline: auto;
			margin-top: 10rem;
		}
	}
</style>
