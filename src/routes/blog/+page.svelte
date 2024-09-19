<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import SvelteIcon from '$lib/components/SvelteIcon.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { onMount } from 'svelte';
	import Image from '$lib/components/Image.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SEO from '$lib/data/SEO.svelte';

	// animations
	onMount(() => {
		const main = document.querySelector('main');

		// text animation
		gsap.registerPlugin(TextPlugin);

		gsap.set('.title', {
			color: 'var(--off-white)'
		});

		gsap.to('.title', {
			text: 'T O P I C S',
			fontFamily: 'var(--orbitron)',
			duration: 2.5,
			ease: 'expoScale(0.5,7,power1.in)',
			delay: 0.5
		});

		console.log(main);
	});
</script>

<SEO title="Blog Topics" description="a blog about web techniques" keywords="blog topics" />

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<h1 class="title">. . . . . .</h1>

	<!-- links to tech stack pages -->
	<article>
		<section aria-label="icons">
			<a class="gs" href="blog/greensock"><GsapIcon /></a>

			<a class="sk" href="blog/sveltekit"><SvelteIcon /></a>
		</section>

		<div class="animation-link" aria-label="animation">
			<a href="/blog/posts">
				<div class="image">
					<Image src="logos/animation.webp" alt="A logo that says web animation techniques." />
				</div>
			</a>
		</div>
	</article>

	<br /><br />
</main>

<style>
	section {
		margin-top: 10rem;
	}

	article {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 20%;
		background: transparent;
	}

	a {
		display: block;
		margin: 0 0 2rem 49%;
	}

	.title {
		color: var(--white);
		font-size: clamp(2.75rem, 8vw, 10rem);
		font-weight: 800;
		text-align: center;
		margin-top: 5%;
	}

	.gs:not(:hover),
	.sk:not(:hover) {
		filter: opacity(0.5);
		transition: filter 1s ease-in-out;
	}

	.image {
		background-color: transparent;
		color: var(--smoke);
		border: 1px solid var(--smoke);
		width: 40%;
		margin: 0 auto;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1.25rem;
		font-weight: 900;
		letter-spacing: 1px;
	}

	.image:hover {
		animation: wiggle 0.5s ease-in-out infinite;
	}

	.image:not(:hover) {
		opacity: 0.5;
		background-color: var(--smoke);
		color: black;
		transition: opacity 0.75s ease-in-out;
	}

	.animation-link {
		margin-top: 10%;
	}

	@media (min-width: 300px) {
		.image {
			width: 15rem;
			margin-right: 10%;
			margin: 0 -95%;
		}

		.gs,
		.sk {
			width: 10rem;
		}

		.animation-link {
			display: block;
		}

		article {
			margin-top: -20%;
		}
	}

	@media (min-width: 500px) {
		.image {
			width: 60%;
			margin: 0 -30%;
		}

		article {
			margin-top: -15%;
		}
	}

	@media (min-width: 720px) {
		.image {
			width: 40%;
			margin: 0 -21%;
		}

		.gs {
			margin-bottom: 10%;
		}
	}

	@media (min-width: 990px) {
		.gs,
		.sk {
			width: 75%;
			margin-bottom: 5%;
		}

		.image {
			margin-top: -20%;
			margin-left: -17%;
		}

		main {
			margin-bottom: 10%;
		}

		section {
			margin-left: 2.5%;
		}

		article {
			margin-top: 2%;
			margin-right: 5%;
		}
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
