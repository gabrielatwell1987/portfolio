<script>
	import { page } from '$app/stores';
</script>

<main aria-label="error">
	<!-- error page -->
	<h1>{$page.status}</h1>

	<p>{$page.error.message}</p>
</main>

<style>
	main {
		display: grid;
		place-content: center;
		border: 5px solid var(--white);
		border-radius: 5px;
		padding: 1rem 1.5rem;
	}

	h1 {
		font-size: 6rem;
		margin: 5rem auto;
		text-align: center;
		color: var(--sky);
		font-family: var(--anta);
		letter-spacing: 7px;
		margin-bottom: 20%;
		text-shadow: 5px 7.5px 5px var(--smoke);
	}

	p {
		font-size: 2rem;
		letter-spacing: 3px;
		line-height: 1.25;
		text-align: left;
		padding: 2rem 4rem;
		color: var(--white);
		font-family: var(--lexend);
	}
</style>
