<script>
	import { page } from '$app/stores';
</script>

<main>
	<h1>{$page.status}</h1>

	<p>{$page.error.message}</p>
</main>

<style>
	main {
		display: grid;
		place-content: center;
		border: 5px solid var(--white);
		border-radius: 8px;
		padding: 0.75rem 1.5rem;
	}

	h1 {
		font-size: 6rem;
		margin: 5rem auto;
		text-align: center;
		color: var(--sky);
		font-family: var(--major);
		letter-spacing: 7px;
		margin-bottom: 20%;
		text-shadow: 0 0 0.75rem var(--smoke);
	}

	p {
		font-size: 2rem;
		letter-spacing: 3px;
		text-align: left;
		border: 3px solid var(--white);
		border-radius: 12px;
		padding: 2rem 4rem;
		color: var(--smoke);
		font-family: var(--montserrat);
	}
</style>
