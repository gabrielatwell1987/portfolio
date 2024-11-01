<script>
	import { run } from 'svelte/legacy';

	import { page } from '$app/stores';
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/Image.svelte';

	run(() => {
		console.log(`There is a ${$page.status} error!`);
	});
</script>

<SEO title="Error!" description="Error Page" keywords="error, gabe's error page" />

<main aria-label="error">
	<Image src="/logos/error.webp" alt="Error" />

	<div class="error">
		<h1>Status: {$page.status}</h1>
	</div>

	<div class="error"><p>{$page.error.message}</p></div>
</main>

<style>
	main {
		display: grid;
		place-content: center;
		padding: 1rem 1.5rem;
		margin-top: 10%;
		height: 100vh;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 6rem);
		margin: 5rem auto;
		text-align: center;
		color: var(--sky);
		font-family: var(--anta);
		letter-spacing: 7px;
		margin-bottom: 20%;
		text-shadow: 5px 7.5px 5px var(--smoke);
		text-wrap: balance;
	}

	p {
		font-family: var(--lexend);
		font-size: clamp(1.75rem, 4vw, 4rem);
		letter-spacing: 5px;
		line-height: 1.25;
		text-align: left;
		padding: 2rem 4rem;
		color: var(--white);
		text-align: center;
		text-shadow: 1px 1px 5px var(--smoke);
		text-wrap: none;
		margin-bottom: 3%;
	}

	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10%;
		width: 100%;
	}
</style>
