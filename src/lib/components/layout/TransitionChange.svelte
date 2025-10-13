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
				gsap.delayedCall(1, () => {
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
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 100 100"
	>
		<defs>
			<radialGradient id="gradient-fill" cx="50%" cy="50%" r="50%">
				<stop offset="0%" style="stop-color:var(--clr-link);stop-opacity:1" />
				<stop offset="100%" style="stop-color:var(--clr-main);stop-opacity:1" />
			</radialGradient>
			<path class="shape2" d="M 50,15 L 85,50 L 50,85 L 15,50 Z" />
		</defs>

		<path
			class="shape1"
			d="M 50,16 L 58,44 L 84,50 L 58,56 L 50,84 L 42,56 L 16,50 L 42,44 Z"
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
		z-index: 10;
		pointer-events: none;

		#demo {
			background: transparent;
			/* height: 100%; */
			overflow: visible;
			z-index: 1;
			width: 60dvh;
			height: auto;
		}
	}
</style>
