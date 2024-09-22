<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import SEO from '$lib/data/SEO.svelte';

	// Animations
	onMount(() => {
		const titleText = new SplitType('.title', { types: 'words' });

		gsap.from(titleText.words, {
			duration: 3.5,
			scale: 0,
			opacity: 0,
			ease: 'back'
		});
	});

	$: console.log('Image Carousel page');
</script>

<SEO title="Image Carousel" description="Gabriel Atwell's Images" keywords="image carousel" />

<h1 class="title">images</h1>

<main>
	<Carousel />
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
		letter-spacing: 10px;
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
