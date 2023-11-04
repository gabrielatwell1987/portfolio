<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import Svelte from '$lib/Svelte.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(TextPlugin);

		// gsap.set('.title', { y: 75, scale: 0 });

		// gsap.to('.title', {
		// 	keyframes: [
		// 		{ scale: 3, duration: 1.5 },
		// 		{ scale: 1, duration: 1.5 }
		// 	]
		// });

		gsap.to('.title', {
			text: 'TECH STACK',
			duration: 1.5,
			ease: 'none',
			delay: 0.5
		});
	});
</script>

<main>
	<h1 class="title">.... .....</h1>

	<section>
		<a href="blog/greensock"><GsapIcon /></a>
		<a href="blog/sveltekit"><Svelte /></a>
	</section>

	<br /><br />
</main>

<style>
	a {
		display: block;
		margin: 0 0 2rem 49%;
	}
	.title {
		font-family: 'Courier New', Courier, monospace;
		color: var(--white);
		font-size: 4rem;
		font-weight: 800;
		text-align: center;
	}
</style>
