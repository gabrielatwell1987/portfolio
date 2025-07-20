<script>
	import Image from '$lib/components/layout/Image.svelte';
	import gsap from 'gsap';

	let { src, alt, width, scale } = $props();

	$effect(() => {
		const tween = gsap.from('.imgClass', {
			display: 'block',
			duration: 3,
			scale: scale,
			opacity: 0,
			ease: 'power2.out',
			stagger: 0.5
		});

		return () => {
			tween.kill();
		};
	});
</script>

<main>
	<div class="imgClass">
		<Image {src} {alt} {width} aspectRatio="16/9" />
	</div>
</main>

<style>
	main {
		position: relative;
	}
</style>
