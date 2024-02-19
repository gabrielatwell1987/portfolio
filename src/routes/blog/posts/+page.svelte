<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import { blur } from 'svelte/transition';
</script>

<section
	in:blur={{ amount: 20, delay: 800, duration: 2000 }}
	out:blur={{ amount: 20, duration: 2000 }}
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
		font-size: 3.5rem;
		font-weight: 900;
		color: var(--white);
		font-family: var(--major);
		letter-spacing: 2px;
		margin-top: 5rem;
		mix-blend-mode: difference;
	}
	section {
		background: url('/logos/dead-flower.png') no-repeat center center/cover fixed;
	}
</style>
