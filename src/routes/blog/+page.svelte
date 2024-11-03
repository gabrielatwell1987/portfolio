<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import SvelteIcon from '$lib/components/SvelteIcon.svelte';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import Image from '$lib/components/Image.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedHeading from '$lib/components/AnimatedHeading.svelte';

	$effect(() => {
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

		console.log('Blog page');
	});
</script>

<SEO title="Blog Topics" description="a blog about web techniques" keywords="blog topics" />

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<h1 class="title">t o p i c s</h1>

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

		<div class="marginTop">
			<AnimatedHeading title1="seeing" span="is" title2="believing" />
		</div>
	</article>

	<br /><br />
</main>

<style>
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
		font-family: var(--orbitron);
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

	.marginTop {
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
	}

	@media (min-width: 990px) {
		.gs,
		.sk {
			width: 75%;
			margin-bottom: 35%;
		}

		.image {
			margin-top: -20%;
		}

		main {
			margin-bottom: 10%;
		}

		.animation-link {
			margin-bottom: 0;
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
