<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import Svelte from '$lib/components/Svelte.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(TextPlugin);

		gsap.to('.title', {
			text: 'TECH STACK',
			duration: 2.5,
			ease: 'expoScale(0.5,7,power1.in)',
			delay: 0.5
		});
	});
</script>

<main>
	<h1 class="title">.... .....</h1>

	<section>
		<a class="gs" href="blog/greensock"><GsapIcon /></a>
		<a class="sk" href="blog/sveltekit"><Svelte /></a>
	</section>

	<br /><br />
</main>

<style>
	a {
		display: block;
		margin: 0 0 2rem 49%;
	}
	.title {
		font-family: var(--nova);
		color: var(--white);
		font-size: 4rem;
		font-weight: 800;
		text-align: center;
	}
	.gs:hover,
	.sk:hover {
		filter: grayscale(100%);
	}
</style>
