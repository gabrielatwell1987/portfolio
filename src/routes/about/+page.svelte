<script>
	import { gsap } from 'gsap';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import LetterDrop from '$lib/components/LetterDrop.svelte';
	import Bento from '$lib/components/Bento.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import CardFlip from '$lib/components/CardFlip.svelte';

	// animations
	$effect(() => {
		const tl = gsap.timeline();

		gsap.set('article', { autoAlpha: 0 });
		gsap.set(['.a', '.b'], { yPercent: 25, autoAlpha: 0 });
		gsap.set(['.hero', '.margin__b'], { yPercent: 25, autoAlpha: 0 });

		gsap.to('article', {
			autoAlpha: 1,
			duration: 1,
			ease: 'none'
		});

		tl.to('.a', {
			yPercent: 0,
			autoAlpha: 1,
			duration: 1.25,
			ease: 'power2.out',
			stagger: 0.5,
			delay: 0.3
		})
			.to(
				'.b',
				{
					yPercent: 0,
					autoAlpha: 1,
					duration: 1.25,
					ease: 'power2.out',
					stagger: 0.5,
					delay: 0.4
				},
				'-=1'
			)
			.to(
				['.hero', '.margin__b'],
				{
					yPercent: 0,
					autoAlpha: 1,
					duration: 1.25,
					ease: 'power2.out',
					delay: 0.5
				},
				'-=.75'
			);

		console.log('About page');
	});
</script>

<SEO title="About Gabe" description="About Gabriel Atwell" keywords="about gabe, about gabriel" />

<main transition:fade={{ delay: 250, duration: 300 }} aria-label="bio">
	<section>
		<article>
			<div class="drop">
				<LetterDrop />
			</div>

			<div class="bio" aria-label="bio">
				<p class="text a indent">
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
					<p class="text margin__b">
						Here is a hero section image that I created with three.js... I currently like the hero
						section that shows when you first come to the website, but I linked this new hero
						section as the home page.
					</p>

					<div class="hero">
						<Button href="/about/hero" title="Hero" />
					</div>
				</article>
			</div>

			<!-- skills section -->
			<div class="skills">
				<Skills />
			</div>

			<!-- set up side by side text -->
			<Grid leftTitle="Frontend" rightTitle="Design based" />

			<!-- bento grid -->
			<div class="bento">
				<Bento link="Contact me if you have a question!" />
			</div>

			<!-- card flip -->
			<div class="flip">
				<CardFlip
					src="/logos/sparrow.webp"
					alt="Atwell sparrow logo"
					src2="/logos/microphone.webp"
					alt2="a blue A logo"
				/>
			</div>

			<!-- image gallery -->
			<div class="gallery">
				<Button href="/about/gallery" title="Gallery" />
			</div>
		</article>
	</section>
</main>

<style>
	:root {
		--100: 100%;
	}

	@media screen and (min-width: 300px) {
		main {
			width: var(--100);
			margin-inline: auto;

			.indent {
				text-indent: 2em;
			}

			section {
				display: block;
				margin-inline: auto;
				text-align: center;
				width: var(--100);
				background: url('/logos/white-flower.webp') no-repeat center center/contain fixed;
			}

			article {
				font-size: clamp(0.8rem, 2vw, 1rem);
				width: var(--100);
				margin-inline: auto;
				background-color: transparent;
				box-shadow: none;
			}

			.drop {
				margin-bottom: 15%;
			}

			p {
				line-height: 1.75;
				text-align: left;
			}

			.flip {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.hero,
			.gallery {
				width: var(--100);
				margin-inline: auto;
			}

			.gallery {
				margin-top: 1.5rem;
			}

			.text {
				max-width: var(--100);
				margin-inline: auto;
				font-size: clamp(1.2rem, 1.5vw, 2rem);
				font-weight: 500;
				line-height: 1.5;
			}

			.text-hero {
				font-size: 1.35rem;
				line-height: 1.5;
			}

			.bio {
				color: var(--white);
			}
		}
	}

	@media (min-width: 600px) {
		.hero {
			width: 90%;
		}

		.gallery {
			width: 90%;
		}
	}

	@media screen and (min-width: 990px) {
		section {
			display: block;
			width: var(--100);
			margin: 5rem auto;

			article {
				width: var(--100);
				margin: 0 auto;
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
				margin-top: -20%;
			}
		}
	}

	@media (min-width: 1024px) {
		.hero {
			width: 70%;
		}

		.gallery {
			width: 70%;
		}
	}

	@media (min-width: 1400px) {
		.hero {
			width: 70%;
		}

		.gallery {
			width: 70%;
		}

		.bento {
			margin-top: -30em;
		}

		.flip {
			margin-top: 10em;
		}
	}

	@media (min-width: 1500px) {
		.bento {
			margin-top: -20em;
		}

		.flip {
			margin-top: 5em;
		}
	}
</style>
