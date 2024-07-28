<script>
	import ImageCarousel from '$lib/components/Carousel.svelte';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	// Animations
	onMount(() => {
		const titleText = new SplitType('.title', { types: 'chars' });
		const main = document.querySelector('main');

		gsap.from(titleText.chars, {
			duration: 5,
			y: 75,
			scale: 0.2,
			opacity: 0.5,
			stagger: -0.2,
			ease: 'elastic.out(1.75, 0.5)'
		});

		console.log(main);
	});
</script>

<svelte:head>
	<title>Image Carousel</title>
	<meta name="description" content="Gabriel Atwell's Images" />
	<meta name="keywords" content="Image Carousel" />
</svelte:head>

<h1 class="title">images</h1>

<main>
	<ImageCarousel />
</main>

<style>
	main {
		text-align: center;
		font-size: 2.5rem;
		margin: 5rem 0;
		padding-top: 2rem;
	}

	.title {
		font-size: clamp(3.5rem, 8vw, 8rem);
		font-weight: 900;
		color: var(--purple);
		font-family: var(--anta);
		letter-spacing: 5px;
		text-transform: uppercase;
		margin: 2rem auto;
		text-align: center;
		text-shadow: 5px 5px 4px var(--dark-gray);
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
</style>
