<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import Lenis from '@studio-freight/lenis';

	// lenis
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
</script>

<h1 class="title">CSS</h1>
<!-- link to my markdown files -->
<CSS />
<h1 class="title">GSAP</h1>
<GSAP />

<style>
	.title {
		text-align: center;
		font-size: 3.5rem;
		font-weight: 900;
		color: var(--blue);
		font-family: var(--nunito);
		letter-spacing: 2px;
		margin-top: 5rem;
	}
</style>
