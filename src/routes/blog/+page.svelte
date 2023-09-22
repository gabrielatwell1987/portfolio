<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import Svelte from '$lib/Svelte.svelte';
</script>

<main>
	<h1>This is the tech stack I use</h1>
	<a href="blog/greensock"><GsapIcon /></a>
	<p>Greensock</p>
	<a href="blog/sveltekit"><Svelte /></a>
	<p>Sveltekit</p>
</main>

<style>
	h1 {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: lightskyblue;
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
	}
	a {
		display: block;
		margin-left: 49%;
	}
	p {
		text-align: center;
		margin-bottom: 5rem;
	}
</style>
