<script>
	import gsap from 'gsap';
	import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

	let svgElement;

	$effect(() => {
		gsap.registerPlugin(MorphSVGPlugin);

		const tl = gsap.timeline();

		tl.to('.shape1', {
			duration: 0.5,
			morphSVG: '.shape2',
			transformOrigin: '50% 50%',
			onComplete: () => {
				gsap.delayedCall(0.55, () => {
					svgElement.style.display = 'none';
				});
			}
		});

		return () => {
			tl.kill();
		};
	});
</script>

<div class="overlay" bind:this={svgElement}>
	<svg
		id="demo"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 100 100"
	>
		<defs>
			<radialGradient id="gradient-fill" cx="50%" cy="50%" r="50%">
				<stop offset="0%" style="stop-color:var(--clr-gray);stop-opacity:1" />
				<stop offset="100%" style="stop-color:var(--clr-main);stop-opacity:1" />
			</radialGradient>
			<path class="shape2" d="M 50,15 L 67,32 L 85,50 L 67,68 L 50,85 L 33,68 L 15,50 L 33,32 Z" />
		</defs>

		<path
			class="shape1"
			d="M 50,10 L 48,48 L 10,50 L 48,52 L 50,90 L 52,52 L 90,50 L 52,48 Z"
			fill="url(#gradient-fill)"
			stroke="#000"
			stroke-width="2"
			stroke-linejoin="round"
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
		z-index: 1;
		pointer-events: none;
		background-image: radial-gradient(
			circle,
			transparent 0%,
			transparent 46%,
			var(--darker-blue) 47%,
			#000 60%,
			#000 100%
		);

		#demo {
			background: transparent;
			overflow: visible;
			z-index: 1;
			width: 60dvh;
			height: auto;
		}
	}
</style>
