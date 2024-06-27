<script>
	import ImageCarousel from '$lib/components/Carousel.svelte';
	import { onMount } from 'svelte';
	import CarouselTitle from '$lib/components/CarouselTitle.svelte';

	onMount(() => {
		const titleText = new SplitType('.title', { types: 'chars' });
		const main = document.querySelector('main');

		console.log(main);
	});
</script>

<svelte:head>
	<title>Image Carousel</title>
	<meta name="description" content="Gabriel Atwell's Images" />
	<meta name="keywords" content="Image Carousel" />
</svelte:head>

<CarouselTitle title="images" />

<main>
	<ImageCarousel />

	<!-- robot link -->
	<div class="robot" aria-label="robot">
		<p class="robot-text">Mouse Position Robot:</p>
		<a class="btn__link" href="/photos/robot"
			><img class="robot-image" src="/logos/robot.png" alt="A robot made in Spline." /></a
		>
	</div>
</main>

<style>
	main {
		text-align: center;
		font-size: 2.5rem;
		margin: 5rem 0;
		padding-top: 2rem;
	}

	.robot {
		display: block;
		margin-top: 2rem;
	}

	.robot-image {
		display: block;
		width: 20%;
		height: 25%;
		margin: -1rem auto;
		border-radius: 10px;
	}

	.robot-image:hover {
		opacity: 0.5;
		transition: opacity 0.75s ease-in-out;
		animation: wiggle 0.5s ease-in-out infinite;
	}

	.robot-text {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--purple);
		letter-spacing: 5px;
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}

	@media (min-width: 200px) {
		.robot {
			display: none;
		}

		.robot-text {
			font-family: var(--lexend);
		}
	}

	@media (min-width: 720px) {
		.robot {
			display: block;
		}
	}

	@media (min-width: 990px) {
		.robot {
			display: block;
		}
	}
</style>
