<script>
	import gsap from 'gsap';
	import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

	let { fillColor = 'rgba(0, 0, 0, 0)', endColor } = $props();

	$effect(() => {
		gsap.registerPlugin(MorphSVGPlugin);

		const tl = gsap
			.timeline()
			.to(['#star-clip', '#visible-star'], {
				morphSVG: 'M 50 5 L 61 35 L 95 35 L 68 54 L 79 85 L 50 66 L 21 85 L 32 54 L 5 35 L 39 35 Z',
				duration: 1,
				scale: 7,
				ease: 'power2.out'
			})
			.to('#demo', { display: 'none', duration: 0.05, ease: 'power1.inOut' }, '-=.25');

		return () => {
			tl.kill();
		};
	});
</script>

<svg id="demo" class="overlay overlay--2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="star-clip">
			<path id="star-path" d="M 50 50 L 50 50 Z" />
		</clipPath>
	</defs>

	<rect width="100" height="100" fill="#ccc" />
	<rect width="100" height="100" fill="transparent" clip-path="url(#star-clip)" />
	<path id="visible-star" d="M 50 50 L 50 50 Z" fill="none" stroke="black" stroke-width="2" />
</svg>

<style>
	* {
		position: relative;
	}

	#demo {
		background: transparent;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
	}
</style>
