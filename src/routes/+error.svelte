<script>
	import { page } from '$app/stores';
	import SEO from '$lib/data/SEO.svelte';

	$: console.log(`There is a ${$page.status} error!`);
</script>

<SEO title="Error!" description="Error Page" keywords="error, gabe's error page" />

<main aria-label="error">
	<h1>Status: {$page.status}</h1>

	<p>{$page.error.message}</p>
</main>

<style>
	main {
		display: grid;
		place-content: center;
		border: 5px solid var(--white);
		border-radius: 5px;
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
	}

	p {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		letter-spacing: 3px;
		line-height: 1.25;
		text-align: left;
		padding: 2rem 4rem;
		color: var(--white);
		font-family: var(--lexend);
		text-align: center;
		text-shadow: 1px 1px 5px var(--smoke);
	}
</style>
