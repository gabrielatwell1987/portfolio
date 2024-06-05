<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import SvelteIcon from '$lib/components/SvelteIcon.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	import Image from '$lib/components/Image.svelte';

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

<svelte:head>
	<title>Blog Topics</title>
	<meta name="description" content="Blogs" />
	<meta name="keywords" content="Blog, Sveltekit, GSAP" />
</svelte:head>

<main>
	<!-- text animation -->
	<h1 class="title">. . . .</h1>

	<!-- links to tech stack pages -->
	<section aria-label="icons">
		<a class="gs" href="blog/greensock"><GsapIcon /></a>
		<a class="sk" href="blog/sveltekit"><SvelteIcon /></a>
	</section>

	<!-- animation logo -->
	<div class="animation-link" aria-label="animation">
		<a href="/blog/posts">
			<div class="image">
				<Image src="logos/animation.png" alt="A logo that says web animation techniques." />
			</div>
		</a>
	</div>

	<!-- spacing -->
	<br /><br />
</main>

<style>
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
		filter: opacity(0.25);
		transition: filter 1s ease-in-out;
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
		opacity: 0.25;
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

	@media (min-width: 200px) {
		.title {
			font-size: 2rem;
			display: none;
		}

		.image {
			width: 80%;
			margin: 0 -39%;
		}

		.gs {
			margin-bottom: 20%;
		}

		.gs,
		.sk {
			width: 10rem;
		}

		.animation-link {
			display: none;
		}
	}

	@media (min-width: 500px) {
		.gs {
			margin-bottom: 10%;
		}
	}

	@media (min-width: 720px) {
		.animation-link {
			display: block;
		}

		.image {
			width: 40%;
			margin: 0 -20%;
		}

		.gs {
			margin-bottom: 10%;
		}
	}

	@media (min-width: 990px) {
		.gs {
			margin-bottom: 5%;
		}
	}
</style>
