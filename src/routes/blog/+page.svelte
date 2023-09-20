<script>
	import Svelte from '$lib/Svelte.svelte';
	import Gsap from '$lib/gsap.svelte';
</script>

<main>
	<h1>Things I've taught myself</h1>

	<div class="topics">
		<a href="/blog/sveltekit"><Svelte /></a>
		<a href="/blog/gsap"><Gsap /></a>
	</div>
</main>

<style>
	main {
		text-align: center;
	}
	a {
		display: block;
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: white;
		text-decoration: none;
	}
	a:hover {
		color: blue;
	}
	h1 {
		font-size: 2.5rem;
		color: lightskyblue;
		margin-bottom: 2rem;
	}
</style>
