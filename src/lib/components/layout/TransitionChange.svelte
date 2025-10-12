<script>
	import gsap from 'gsap';
	import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

	// let { fillColor, endColor } = $props();
	let svgElement;

	$effect(() => {
		gsap.registerPlugin(MorphSVGPlugin);

		const tl = gsap.timeline({
			repeat: 1,
			yoyo: true
		});

		tl.to('.shape1', {
			duration: 0.5,
			morphSVG: '.shape2',
			onComplete: () => {
				gsap.delayedCall(1.25, () => {
					svgElement.style.display = 'none';
				});
			}
		});

		return () => {
			tl.kill();
		};
	});
</script>

<div class="overlay">
	<svg
		bind:this={svgElement}
		id="demo"
		viewBox="0 -200 500 950"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns:bx="https://boxy-svg.com"
	>
		<defs>
			<path
				class="shape2"
				d="M 246.977 47.68 L 433.221 182.995 L 362.082 401.938 L 131.872 401.938 L 60.733 182.995 Z"
			/>
			<mask id="mask-0">
				<path
					class="shape1"
					d="M 260.519 25.987 L 315.838 185.131 L 484.287 188.564 L 350.026 290.354 L 398.815 451.62 L 260.519 355.385 L 122.223 451.62 L 171.012 290.354 L 36.751 188.564 L 205.2 185.131 Z"
					fill="#ffffff"
				/>
			</mask>
		</defs>
		<image
			width="500"
			height="800"
			x="10"
			y="-150"
			style="mask: url(#mask-0);"
			xlink:href="/logos/a-dev.webp"
		/>
	</svg>
</div>

<style>
	* {
		position: relative;
	}

	.overlay {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		pointer-events: none;

		#demo {
			background: transparent;
			height: 100%;
			overflow: visible;
			z-index: 1;
			width: 60dvh;
			height: auto;
		}
	}
</style>
