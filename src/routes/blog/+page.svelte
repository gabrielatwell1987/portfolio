<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import Svelte from '$lib/Svelte.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.title', { y: 75, scale: 0 });

		gsap.to('.title', {
			keyframes: [
				{ scale: 3, duration: 1.5 },
				{ scale: 1, duration: 1.5 }
			]
		});
	});
</script>

<main>
	<h1 class="title">TECH STACK</h1>
	<section class="stackLinks">
		<a href="blog/greensock"><GsapIcon /></a>
		<a href="blog/sveltekit"><Svelte /></a>
	</section>
	<br /><br />
</main>

<style>
	a {
		display: block;
		margin: 0 0 0 49%;
	}
	.title {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: var(--white);
		font-size: 4rem;
		font-weight: 800;
		text-align: center;
	}
</style>
