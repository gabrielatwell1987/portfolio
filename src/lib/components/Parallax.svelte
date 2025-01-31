<script>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let imageElement = $state(null);

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const parallaxImage = document.querySelector('.parallax-image');

		gsap.to(parallaxImage, {
			scrollTrigger: {
				trigger: '.sticky-wrapper',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				pin: true
			},
			x: 100,
			y: '15vh',
			scale: 3,
			ease: 'none'
		});
	});
</script>

<div class="spacer"></div>

<div class="sticky-wrapper">
	<div class="sticky-container">
		<div class="parallax-image" bind:this={imageElement}></div>
	</div>
</div>

<div class="spacer"></div>

<style>
	.spacer {
		height: 10vh;

		&:nth-child(2) {
			height: 50vh;
		}
	}

	.sticky-wrapper {
		/* width: 100vw; */
		height: 100vh;
		position: relative;
		background-image: url('logos/skullLaptop.svg');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;

		.sticky-container {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;

			.parallax-image {
				width: 300px;
				height: 400px;
				background-image: url('/logos/darkTexture.webp');
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
