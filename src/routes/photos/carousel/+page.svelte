<script>
	import ImageCarousel from '$lib/components/Carousel.svelte';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	// Animations
	onMount(() => {
		const titleText = new SplitType('.title', { types: 'chars' });

		gsap.from(titleText.chars, {
			duration: 4,
			y: 50,
			opacity: 0.5,
			stagger: 0.15,
			ease: 'elastic.out(1.75, 0.5)'
		});
	});
</script>

<h1 class="title">photos</h1>

<main>
	<ImageCarousel />

	<!-- domino image and link -->
	<div class="domino" aria-label="domino">
		<p class="domino__text">Dominoes:</p>
		<a class="btn__link" href="/photos/domino"
			><img
				class="domino__image"
				src="/logos/dominoes.png"
				alt="A game of dominoes made in Spline."
			/></a
		>
	</div>
</main>

<style>
	/* content */
	main {
		text-align: center;
		font-size: 2.5rem;
		margin: 5rem 0;
		padding-top: 2rem;
	}

	.domino {
		display: block;
		margin-top: 2rem;
	}

	.domino__image {
		display: block;
		width: 20%;
		height: 25%;
		margin: -1rem auto;
		border-radius: 10px;
	}

	.domino__image:hover {
		opacity: 0.5;
		transition: opacity 0.75s ease-in-out;
		animation: wiggle 0.5s ease-in-out infinite;
	}

	.domino__text {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--purple);
		letter-spacing: 5px;
	}

	.title {
		font-size: 8rem;
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

	@media (min-width: 200px) {
		.title {
			font-size: 2.5rem;
		}

		.domino {
			display: none;
		}

		.domino__text {
			font-family: var(--lexend);
		}
	}

	@media (min-width: 720px) {
		.title {
			font-size: 4rem;
		}

		.domino {
			display: block;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-size: 6rem;
		}

		.domino {
			display: block;
		}
	}
</style>
