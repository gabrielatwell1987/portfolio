<script>
	import Gallery from '$lib/components/Gallery.svelte';
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

<!-- Photo gallery -->
<Gallery />

<style>
</style>
