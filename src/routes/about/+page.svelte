<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Bento from '$lib/components/Bento2.svelte';
	import LetterDrop from '$lib/components/LetterDrop.svelte';
	import AtwellCursive from '$lib/components/AtwellCursive.svelte';

	// animations
	onMount(() => {
		const main = document.querySelector('main');

		gsap.set('article', { autoAlpha: 0 });

		gsap.to('article', {
			autoAlpha: 1,
			duration: 1,
			ease: 'none'
		});

		console.log(main);
	});
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="About Gabriel Atwell" />
	<meta name="keywords" content="About Me" />
</svelte:head>

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }} aria-label="bio">
	<section>
		<article>
			<div class="drop">
				<LetterDrop />
			</div>

			<div class="bio" aria-label="bio">
				<p class="text">
					My name is Gabriel Atwell and I am a frontend web developer. I started out with the
					basics: HTML, CSS, and JavaScript. I then moved on to more advanced topics such as:
					Svelte/Sveltekit, Node.js, GSAP, and a little bit of three.js but I have begun to teach
					myself the backend of web development on my spare time with backend languages like Python
					to become more of a fullstack developer.
				</p>
				<p class="text">
					I have a passion for creating websites that are clean, crisp, and completely functional. I
					enjoy seeing a physical change when I edit or create code. I also enjoy creating
					animations for the web! I mainly enjoy animating the web because I believe that it makes
					the website look more professional and more appealing to the eye. In the world of web
					development, creating engaging and visually appealing animations is essential to grab the
					attention of users. I'm a natural problem-solver who thrives on turning complex problems
					into simple, beautiful solutions. I believe in the power of collaboration and continuous
					learning.
				</p>

				<article class="hero text-hero text__w" aria-label="bio">
					<p class="text margin__b">
						Here is a hero section image that I created with three.js... I currently like the hero
						section that shows when you first come to the website, but I linked this new hero
						section as the home page.
					</p>

					<div class="hero">
						<a href="/about/hero"><Button title="Hero" /></a>
					</div>
				</article>
			</div>

			<!-- set up side by side text -->
			<Grid leftTitle="Frontend" rightTitle="Design based" />

			<!-- skills section -->
			<div class="skills">
				<Skills title="Skills" />
			</div>

			<!-- bento grid -->
			<Bento />

			<!-- image gallery -->
			<div class="gallery">
				<a href="/about/gallery"><Button title="Gallery" /></a>
			</div>

			<AtwellCursive />
		</article>
	</section>
</main>

<style>
	@media screen and (min-width: 200px) {
		p {
			line-height: 1.75;
			font-family: var(--montserrat);
			text-align: left;
		}

		main {
			width: 100%;
			margin: 0 auto;
		}

		section {
			display: block;
			margin: 0 auto;
			text-align: center;
			width: 100%;
			background: url('/logos/white-flower.png') no-repeat center center/contain fixed;
		}

		article {
			font-size: 0.8rem;
			width: 100%;
			margin: 0 auto;
			background-color: transparent;
		}

		a {
			font-size: 1rem;
		}

		a:hover {
			font-size: 1.1rem;
		}

		.gallery {
			margin-top: 1.5rem;
			width: 100%;
			margin-inline: auto;
		}

		.hero {
			width: 100%;
			margin-inline: auto;
		}

		.text-hero {
			font-size: 1.35rem;
			line-height: 1.5;
		}

		.text {
			max-width: 95%;
			margin-inline: auto;
			font-size: clamp(1.1rem, 1.75vw, 2rem);
			line-height: 1.35;
			color: var(--white);
			font-weight: 500;
		}

		.text,
		.text:hover {
			mix-blend-mode: difference;
		}

		.drop {
			margin-bottom: 15%;
		}

		a {
			text-decoration: none;
		}
	}

	@media screen and (min-width: 990px) {
		section {
			display: block;
			width: 100%;
			margin: 5rem auto;
		}

		article {
			font-size: 1rem;
			width: 100%;
			margin: 0 auto;
			background-color: transparent;
		}

		a {
			font-size: 1.2rem;
			font-weight: 700;
		}

		a:hover {
			font-size: 1.3rem;
		}

		.text {
			color: var(--white);
			max-width: 75%;
			line-height: 1.5;
		}

		.bio {
			margin-bottom: -5rem;
		}

		.margin__b {
			margin-bottom: -2rem;
		}

		.text__w {
			width: 75%;
			margin: 0 auto;
		}

		.gallery {
			margin-top: 5%;
		}

		.skills {
			margin-top: -25%;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			width: 70%;
			margin-left: 14%;
		}

		.gallery {
			width: 70%;
			margin-left: 15%;
		}
	}

	@media (min-width: 1400px) {
		.hero {
			width: 75%;
			margin-left: 12%;
		}

		.gallery {
			width: 75%;
			margin-left: 12%;
		}
	}
</style>
