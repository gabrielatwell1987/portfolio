<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import SvelteIcon from '$lib/components/SvelteIcon.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import Image from '$lib/components/Image.svelte';
	import { fade } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedHeading from '$lib/components/AnimatedHeading.svelte';

	$effect(() => {
		gsap.registerPlugin(TextPlugin);

		gsap.to('.title', {
			text: 'T O P I C S',
			fontFamily: 'var(--orbitron)',
			duration: 2.5,
			ease: 'expoScale(0.5,7,power1.in)',
			delay: 0.5
		});

		console.log('Blog page');
	});
</script>

<SEO title="Blog topics" description="a blog about web techniques" keywords="blog topics" />

<main transition:fade={{ delay: 250, duration: 300 }}>
	<h1 class="title" transition:fade={{ duration: 500 }}>t o p i c s</h1>

	<article>
		<section aria-label="icons">
			<a class="gs" href="blog/greensock">
				<GsapIcon />
			</a>

			<a class="sk" href="blog/sveltekit">
				<SvelteIcon />
			</a>
		</section>

		<div class="animation-link" aria-label="animation">
			<a href="/blog/posts">
				<div class="image">
					<Image
						src="logos/animation.webp"
						alt="A logo that says web animation techniques."
						width="2000"
					/>
				</div>
			</a>
		</div>

		<div class="margin">
			<AnimatedHeading title1="seeing" span="is" title2="believing" />
		</div>
		<!-- <br /> -->
	</article>
</main>

<style>
	article {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 20%;
		background: transparent;
		box-shadow: none;

		a {
			display: block;
			margin: 0 0 2rem 50%;
		}

		a:focus {
			box-shadow: 0 0 0px var(--off-white);
			background: transparent;
		}

		.gs:not(:hover),
		.sk:not(:hover) {
			filter: opacity(0.5);
			transition: filter 1s ease-in-out;
		}

		.image:hover {
			animation: wiggle 1s ease-in-out infinite;
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
	}

	.image {
		background-color: transparent;
		color: var(--smoke);
		border: 1px solid var(--smoke);
		width: 40%;
		margin: 0 auto;
		border-radius: 8px;
		cursor: pointer;
		letter-spacing: 1px;
	}

	.title {
		color: var(--sky);
		text-shadow: 5px 5px 5px var(--dark-gray);
		filter: drop-shadow(0px 0px 0.75rem var(--white));
		font-size: clamp(2.75rem, 10.5vw, 15rem);
		font-weight: 800;
		text-align: center;
		margin-top: 5%;
		font-family: var(--orbitron);
	}

	@media (min-width: 300px) {
		.image {
			width: 15rem;
			margin-right: 10%;
			margin: 0 -95%;
			scale: 1.1;
		}

		.gs,
		.sk {
			width: 10rem;
		}

		.gs,
		.sk,
		.image {
			margin-top: -5em;
		}

		.animation-link {
			display: block;
		}

		.margin {
			margin-top: 15%;
			margin-bottom: 25%;
		}
	}

	@media (min-width: 500px) {
		.image {
			width: 60%;
			margin: 0 -30%;
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

		.gs,
		.sk,
		.image {
			margin-top: 0;
		}
	}

	@media (min-width: 990px) {
		.gs,
		.sk {
			width: 75%;
			margin-bottom: 35%;
		}

		.image {
			margin-top: -20%;
			scale: 1.3;
		}

		main {
			margin-bottom: -12%;
		}

		.animation-link {
			margin-bottom: 0;
		}

		article {
			margin-top: 2%;
			margin-right: 5%;
		}

		.margin {
			margin-bottom: 13%;
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
