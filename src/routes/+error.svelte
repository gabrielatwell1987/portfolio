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
	}

	h1 {
		font-size: 5rem;
		margin: 5rem auto;
		text-align: center;
		color: var(--sky);
		font-family: var(--major);
		letter-spacing: 5px;
		margin-bottom: 15%;
	}

	p {
		font-size: 2rem;
		letter-spacing: 3px;
		text-align: left;
		border: 3px solid var(--white);
		border-radius: 12px;
		padding: 1rem 3rem;
		color: var(--white);
		font-family: var(--montserrat);
	}
</style>
