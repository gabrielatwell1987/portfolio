<script>
	import gsap from 'gsap';
	import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

	let { color1, color2, middleColor, endColor } = $props();

	$effect(() => {
		gsap.registerPlugin(MorphSVGPlugin);

		const tl1 = gsap
			.timeline({
				defaults: {
					ease: 'none'
				}
			})
			.to('#first', { morphSVG: '#middle', duration: 0.4 })
			.to('#first', { morphSVG: '#end', duration: 0.2 });

		const tl2 = gsap
			.timeline({
				defaults: {
					ease: 'none'
				}
			})
			.to('#second', { morphSVG: '#middle', duration: 0.5 })
			.to('#second', { morphSVG: '#end', duration: 0.3, ease: 'power1' });

		const main = gsap
			.timeline()
			.add(tl1)
			.add(tl2, 0.6)
			.to('#demo', { display: 'none', duration: 0.4, ease: 'power1.inOut' });

		return () => {
			main.kill();
			tl1.kill();
			tl2.kill();
		};
	});
</script>

<svg id="demo" class="overlay overlay--2" viewBox="0 0 100 100" preserveAspectRatio="none">
	<!-- end -->
	<path
		d="M -7.02 1.43 C -2.73 -4.51 12.1 -2.88 50.66 -2.88 C 88.57 -2.88 108.88 -2.47 109.96 0.12 L 121.52 139.94 L 121.37 157.73 L -24.93 158.32 C -24.84 158.79 -25.51 139.95 -26.26 136.05 C -26.37 135.95 -12.42 8.9 -7.02 1.43 Z"
		style="fill: rgb({endColor});"
		id="end"
	></path>

	<!-- middle -->
	<path
		d="M -9.12 66.2 C -4.83 60.26 12.51 24.75 51.07 24.75 C 88.98 24.75 108.04 64.05 109.12 66.64 L 121.52 139.94 L 121.37 157.73 L -24.93 158.32 C -24.84 158.79 -25.51 139.95 -26.26 136.05 C -26.37 135.95 -14.52 73.67 -9.12 66.2 Z"
		style="fill: {middleColor};"
		id="middle"
	></path>

	<!-- start1 -->
	<path
		d="M -14.22 112.67 C -9.93 106.73 9.63 101.25 48.19 101.25 C 86.1 101.25 122.34 102.71 123.42 105.3 L 122.22 139.11 L 122.07 156.9 L -24.23 157.49 C -24.14 157.96 -24.81 139.12 -25.56 135.22 C -25.67 135.12 -19.62 120.14 -14.22 112.67 Z"
		style="stroke-width: 1; fill: {color1};"
		id="first"
	></path>

	<!-- start2 -->
	<path
		d="M -14.22 112.67 C -9.93 106.73 9.63 101.25 48.19 101.25 C 86.1 101.25 122.34 102.71 123.42 105.3 L 122.22 139.11 L 122.07 156.9 L -24.23 157.49 C -24.14 157.96 -24.81 139.12 -25.56 135.22 C -25.67 135.12 -19.62 120.14 -14.22 112.67 Z"
		style="fill: {color2}; stroke-width: 1;"
		id="second"
	>
	</path>
</svg>

<style>
	* {
		position: relative;
	}

	#middle,
	#end {
		visibility: hidden;
	}

	#demo {
		outline: 1px solid red;
		background: #1d1d1d;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
