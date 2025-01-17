<script>
	// import Image from '$lib/components/Image.svelte';
	import gsap from 'gsap';

	$effect(() => {
		const asciiTl = gsap.timeline();

		asciiTl.from('.ascii', {
			opacity: 0,
			scale: 1.2,
			x: -100,
			duration: 5,
			ease: 'slow(0.7, 0.7, false)'
		});
	});
</script>

<main class="ascii">
	<img src="/logos/ascii.webp" alt="ASCII Art" />
</main>

<style>
	.ascii {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		margin: 0;
	}
</style>
