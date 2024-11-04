<script>
	import { page } from '$app/stores';
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/Image.svelte';

	$effect(() => {
		console.log(`There is a ${$page.status} error!`);
	});
</script>

<SEO title="Error!" description="Error Page" keywords="error, gabe's error page" />

<main aria-label="error">
	<div class="image">
		<Image src="/logos/error.webp" alt="Error" width="300" />
	</div>

	<div class="error">
		<h1>Status: {$page.status}</h1>
	</div>

	<div class="error"><p>{$page.error.message}</p></div>
</main>

<style>
	main {
		padding: 1rem 1.5rem;
		height: 80vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 6rem);
		font-weight: 900;
		margin: 0 auto;
		text-align: center;
		color: var(--sky);
		font-family: var(--anta);
		letter-spacing: 7px;
		text-shadow: 5px 7.5px 5px var(--smoke);
		text-wrap: balance;
	}

	p {
		font-family: var(--lexend);
		font-size: clamp(1.75rem, 4vw, 4rem);
		font-weight: 500;
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
		width: 100%;
	}

	.image {
		width: clamp(100px, 20vw, 300px);
		margin-inline: auto;
	}
</style>
