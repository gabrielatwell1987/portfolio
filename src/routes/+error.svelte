<script>
	import { page } from '$app/stores';
</script>

<main>
	<h1>{$page.status}</h1>

	<p>{$page.error.message}</p>
</main>

<style>
	h1 {
		font-size: 5rem;
		margin: 5rem auto;
		text-align: center;
		color: var(--sky);
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		letter-spacing: 5px;
	}

	p {
		font-size: 2rem;
		letter-spacing: 3px;
		text-align: left;
		border: 3px solid var(--smoke);
		border-radius: 12px;
		padding: 1rem 2.5rem;
		color: var(--white);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
