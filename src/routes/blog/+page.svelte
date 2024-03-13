<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import Svelte from '$lib/components/Svelte.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';

	// animations
	onMount(() => {
		// text animation
		gsap.registerPlugin(TextPlugin);

		gsap.set('.title', {
			color: 'var(--smoke)',
			fontWeight: 900,
			fontSize: '7.5rem',
			fontFamily: 'var(--anta)'
		});

		gsap.to('.title', {
			text: 'B L O G',
			duration: 2.5,
			ease: 'expoScale(0.5,7,power1.in)',
			delay: 0.5
		});
	});
</script>

<main>
	<!-- text animation -->
	<h1 class="title">. . . .</h1>

	<!-- links to tech stack pages -->
	<section>
		<a class="gs" href="blog/greensock"><GsapIcon /></a>
		<a class="sk" href="blog/sveltekit"><Svelte /></a>
	</section>

	<!-- animation logo -->
	<div class="links">
		<a href="/blog/posts"
			><img
				src="logos/animation.png"
				alt="A logo that says web animation techniques."
				class="image"
			/></a
		>
	</div>

	<br /><br />
</main>

<style>
	/* desktop and bigger */
	/* content */
	a {
		display: block;
		margin: 0 0 2rem 49%;
	}

	.title {
		font-family: var(--montserrat);
		color: var(--white);
		font-size: 4rem;
		font-weight: 800;
		text-align: center;
	}

	.gs:hover,
	.sk:hover {
		filter: opacity(0.5);
		transition: filter 0.75s ease-in-out, animation 1s ease-in-out;
		animation: upDown 1.5s ease-in-out infinite;
	}

	.image {
		background-color: transparent;
		color: var(--smoke);
		border: 1px solid var(--smoke);
		width: 40%;
		margin: 0 -18%;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1.25rem;
		font-weight: 900;
		letter-spacing: 1px;
	}

	.image:hover {
		opacity: 0.5;
		background-color: var(--smoke);
		color: black;
		transition: opacity 0.75s ease-in-out;
		animation: wiggle 0.5s ease-in-out infinite;
	}

	section {
		margin-top: 10rem;
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

	@keyframes upDown {
		0%,
		51% {
			transform: translateY(0);
			transition: transform 1s ease-in-out;
		}
		20%,
		70% {
			transform: translateY(10px);
			transition: transform 1s ease-in-out;
		}
		30%,
		80% {
			transform: translateY(15px);
			transition: transform 1s ease-in-out;
		}
		40%,
		90% {
			transform: translateY(10px);
			transition: transform 1s ease-in-out;
		}
		50%,
		100% {
			transform: translateY(0);
			transition: transform 1s ease-in-out;
		}
	}

	@media (min-width: 200px) {
		/* mobile */
		.title {
			font-size: 2rem;
			display: none;
		}

		.image {
			width: 80%;
			margin: 0 -39%;
		}

		.gs,
		.sk {
			width: 10rem;
		}
	}

	@media (min-width: 720px) {
		.image {
			width: 40%;
			margin: 0 -20%;
		}
	}
</style>
