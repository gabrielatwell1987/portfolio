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
			stagger: -0.2,
			ease: 'elastic.out(1.75, 0.5)'
		});
	});
</script>

<h1 class="title">images</h1>

<main>
	<ImageCarousel />

	<!-- robot link -->
	<div class="robot" aria-label="robot">
		<p class="robot-text">Robot:</p>
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

		.robot {
			display: none;
		}

		.robot-text {
			font-family: var(--lexend);
		}
	}

	@media (min-width: 720px) {
		.title {
			font-size: 4rem;
		}

		.robot {
			display: block;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-size: 6rem;
		}

		.robot {
			display: block;
		}
	}
</style>
