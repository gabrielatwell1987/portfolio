<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { duration, delay } from '$lib/data/timings.svelte.js';
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/layout/Image.svelte';

	$effect(() => {
		console.log(`There is a ${$page.status} error!`);
	});
</script>

<SEO
	title="Error Page"
	description="You've encountered an error!"
	keywords="error, gabe's error page"
/>

<main aria-label="error" transition:fade={{ duration, delay }}>
	<div class="image">
		<Image src="/logos/error.webp" alt="an error has occurred" width="300" />
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
			font-size: clamp(2rem, 5vw, 6rem);
			font-weight: 900;
			margin-inline: auto;
			text-align: center;
			color: var(--text-blue);
			font-family: var(--orbitron);
			letter-spacing: 7px;
			text-shadow: 5px 7.5px 5px var(--smoke);
			text-wrap: balance;
		}

		& h2 {
			font-size: clamp(1.5rem, 2.5vw, 3rem);
			font-weight: 700;
			margin-inline: auto;
			margin-block: 0;
			text-align: center;
			color: var(--text-color);
			font-family: var(--bronova);
			letter-spacing: 5px;
			text-wrap: balance;
		}

		& p {
			font-family: var(--bronova);
			font-size: clamp(1.75rem, 3vw, 2rem);
			font-weight: 500;
			letter-spacing: 5px;
			line-height: 1.25;
			text-align: left;
			padding: 2rem 4rem;
			color: var(--text-color);
			text-align: center;
			text-shadow: 1px 1px 5px var(--smoke);
			text-wrap: none;
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
