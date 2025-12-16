<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let { alt = 'hero image' } = $props();
	let container;

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const layers = container.querySelectorAll('.parallax-layer');

		layers.forEach((layer, index) => {
			const speed = layer.dataset.speed || (index + 1) * 0.2;

			gsap.to(layer, {
				yPercent: -100 * speed,

				ease: 'none',
				scrollTrigger: {
					trigger: container,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					display: 'block'
				}
			});
		});

		return () => {
			gsap.killTweensOf(layers);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<section bind:this={container} class="parallax-container">
	<!-- slowest -->
	<img
		src="/logos/svelteCode-background.webp"
		{alt}
		class="parallax-layer"
		data-speed="0.1"
		loading="lazy"
	/>

	<!-- middle -->
	<img
		src="/logos/svelteCode-midground.webp"
		{alt}
		class="parallax-layer"
		data-speed="0.3"
		loading="lazy"
	/>

	<!-- fore -->
	<img
		src="/logos/svelteCode-foreground.webp"
		{alt}
		class="parallax-layer"
		data-speed="0.5"
		loading="lazy"
	/>
</section>

<style>
	.parallax-container {
		position: relative;
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		height: 100vh;
		padding-top: 7in;
		/* overflow: hidden; */

		& .parallax-layer {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			will-change: transform;

			&:nth-of-type(2),
			&:nth-of-type(3) {
				display: none;
			}
		}
	}
</style>
