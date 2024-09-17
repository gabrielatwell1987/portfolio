<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SplitType from 'split-type';
	import Button from '$lib/components/Button.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Bento from '$lib/components/Bento2.svelte';
	import LetterDrop from '$lib/components/LetterDrop.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AtwellSparrow from '$lib/components/AtwellSparrow.svelte';

	// animations
	onMount(() => {
		const main = document.querySelector('main');

		gsap.set('article', { autoAlpha: 0 });
		gsap.set(['.a', '.b', '.c'], { yPercent: 10, opacity: 0 });

		gsap.to('article', {
			autoAlpha: 1,
			duration: 1,
			ease: 'none'
		});

		const tl = gsap.timeline();

		tl.to('.a', {
			yPercent: 0,
			opacity: 1,
			duration: 2,
			ease: 'power2.out',
			stagger: 0.25,
			delay: 0.3
		})
			.to(
				'.b',
				{
					yPercent: 0,
					opacity: 1,
					duration: 2,
					ease: 'power2.out',
					stagger: 0.25,
					delay: 0.3
				},
				'-=.75'
			)
			.to(
				'.c',
				{
					yPercent: 0,
					opacity: 1,
					duration: 2,
					ease: 'power2.out',
					stagger: 0.25,
					delay: 0.3
				},
				'-=.5'
			);

		console.log(main);
	});
</script>

<SEO title="About Me" description="About Gabriel Atwell" keywords="about me, about gabe" />

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }} aria-label="bio">
	<section>
		<article>
			<div class="drop">
				<LetterDrop />
			</div>

			<div class="bio" aria-label="bio">
				<p class="text a">
					My name is Gabriel Atwell and I am a frontend web developer. I started out with the
					basics: HTML, CSS, and JavaScript. I then moved on to more advanced topics such as
					Svelte/Sveltekit, Node.js, GSAP, and a little bit of three.js but I have begun to teach
					myself the backend of web development on my spare time with backend languages like Python
					to become more of a fullstack developer.
				</p>
				<p class="text b">
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
					<p class="text margin__b c">
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

			<AtwellSparrow />
		</article>
	</section>
</main>

<style>
	:root {
		--100: 100%;
	}

	@media screen and (min-width: 300px) {
		p {
			line-height: 1.75;
			font-family: var(--montserrat);
			text-align: left;
		}

		main {
			width: var(--100);
			margin: 0 auto;
		}

		section {
			display: block;
			margin: 0 auto;
			text-align: center;
			width: var(--100);
			background: url('/logos/white-flower.webp') no-repeat center center/contain fixed;
		}

		article {
			font-size: 0.8rem;
			width: var(--100);
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
			width: var(--100);
			margin-inline: auto;
		}

		.hero {
			width: var(--100);
			margin-inline: auto;
		}

		.text {
			max-width: var(--100);
			margin-inline: auto;
			color: var(--white);
			font-size: clamp(1.1rem, 2vw, 2rem);
			font-weight: 500;
			line-height: 1.35;
		}

		.text,
		.text:hover {
			mix-blend-mode: difference;
		}

		.text-hero {
			font-size: 1.35rem;
			line-height: 1.5;
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
			width: var(--100);
			margin: 5rem auto;
		}

		article {
			font-size: 1rem;
			width: var(--100);
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
			max-width: 90%;
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
			width: 90%;
			margin-left: 5%;
		}

		.gallery {
			width: 75%;
			margin-left: 12%;
		}

		/* .margin__b {
			text-wrap: balance;
		} */
	}
</style>
