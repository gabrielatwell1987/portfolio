<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let imageElement = $state(null);

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const parallaxImage = document.querySelector('.parallax-image');

		gsap.from(parallaxImage, {
			scrollTrigger: {
				trigger: '.sticky-wrapper',
				start: 'top top',
				end: 'bottom top',
				scrub: 1,
				pin: true
			},
			x: 100,
			yPercent: 50,
			scale: 3,
			ease: 'none'
		});

		return () => {
			gsap.killTweensOf(parallaxImage);
		};
	});
</script>

<div class="sticky-wrapper">
	<div class="sticky-container">
		<div class="parallax-image" bind:this={imageElement}></div>
	</div>
</div>

<style>
	.sticky-wrapper {
		height: 100vh;
		position: relative;
		background-image: url('/logos/skullLaptop.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 3;

		.sticky-container {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;

			.parallax-image {
				width: 300px;
				height: 400px;
				background-image: url('/textures/white.webp');
				background-size: cover;
				background-position: center;

				-webkit-mask-image: url('/icons/skull-icon.svg');
				-webkit-mask-size: contain;
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-position: center;
				mask-image: url('/icons/skull-icon.svg');
				mask-size: contain;
				mask-repeat: no-repeat;
				mask-position: center;

				transition: transform 0.3s ease-out;
			}
		}
	}
</style>
