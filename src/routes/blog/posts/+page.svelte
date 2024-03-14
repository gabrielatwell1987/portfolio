<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section
	transition:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}
	aria-label="markdown blog"
>
	<!-- links to my markdown files -->
	<h1 class="title">CSS</h1>
	<CSS />

	<h1 class="title">GSAP</h1>
	<GSAP />
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
