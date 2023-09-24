<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import Svelte from '$lib/Svelte.svelte';
</script>

<main>
	<h1 class="title">This is the tech stack I use</h1>
	<a href="blog/greensock"><GsapIcon /></a>
	<a href="blog/sveltekit"><Svelte /></a>
</main>

<style>
	a {
		display: block;
		margin-left: 49%;
	}
	.title {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: lightskyblue;
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
	}
</style>
