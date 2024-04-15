<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
</script>

<section
	in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}
	title="a flower background"
>
	<!-- links to my markdown files -->
	<h1 class="title">CSS</h1>
	<CSS />

	<h1 class="title">GSAP</h1>
	<GSAP />

	<!-- back button -->
	<a class="blog-btn-link" href="/blog"><Button title="Back" /></a>
</section>

<style>
	/* desktop */
	.title {
		text-align: center;
		font-size: 6rem;
		font-weight: 900;
		color: var(--white);
		font-family: var(--anta);
		letter-spacing: 2px;
		margin-top: 5rem;
		mix-blend-mode: difference;
	}
	section {
		background: url('/logos/dead-flower.png') no-repeat center center/cover fixed;
	}
</style>
