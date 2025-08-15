<script>
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import Grid from '$lib/components/about/Grid.svelte';
	import Skills from '$lib/components/about/Skills.svelte';
	import Bento from '$lib/components/about/Bento.svelte';
	import CardFlip from '$lib/components/about/CardFlip.svelte';
	import Tooltip from '$lib/components/about/Tooltip.svelte';
	import UsefulLinks from '$lib/components/about/UsefulLinks.svelte';
	import AboutHero from '$lib/components/about/AboutHero.svelte';
</script>

<SEO
	title="About Gabe"
	description="All about Gabriel Atwell"
	keywords="about gabe, about gabriel, gabe's bio"
/>

<main aria-label="bio">
	<section>
		<article id="bio">
			<div class="hero-section">
				<AboutHero src="/logos/svelteCode.webp" alt="svelte code" title="About Me" />
			</div>

			<div class="bio" aria-label="bio">
				<p class="text indent">
					My name is Gabriel Atwell and I am a frontend web developer. I started out with the
					basics: HTML, CSS, and JavaScript. I then moved on to more advanced topics such as
					Svelte/Sveltekit, Node.js, GSAP, and a little bit of three.js but I have begun to teach
					myself the backend of web development on my spare time with backend languages like <a
						href="https://go.dev"
						target="_blank"
						style="font-weight: 600;">Go</a
					>
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
					<p class="text content_width">
						Here is another hero section that I created but I like the current hero section (with a
						static image) that shows when you first come to the website. This hero section was built
						with three.js.. Check out it out!
					</p>

					<div class="hero">
						<div class="icons">
							<Button href="/about/hero" title="Hero" />

							<Tooltip title="💡" hover="made with three.js" />
						</div>
					</div>
				</article>

				<p class="text indent">
					Please note: This is a <span>pwa</span> (progressive web app) so you can install it on your
					device if you want to! This makes your website able to be used on any device.. mobile, tablet,
					laptop, and desktop. It's like having a mobile app that is not made with native technologies!
					It works on Android and iPhone. On your iphone you have to tap the share icon in the Safari
					browser and choose the 'Add to Home Screen' option.. that's the only way to save a pwa on an
					iOS device. There is also offline capabilities, so if your internet goes out, you can still
					access the site because your device downloads and caches the whole site! If you don't have
					it installed, you should see an install button on the bottom-left of the screen. If you press
					it, an installation prompt should appear. The prompt will only appear after some user interactions
					(clicks). If you have any questions, please feel free to contact me!
				</p>
			</div>

			<Skills />

			<Grid leftTitle="Frontend" rightTitle="Design Based" />

			<Bento />

			<CardFlip
				src="/logos/heart-skull.webp"
				alt="Atwell sparrow logo"
				src2="/logos/skull-glass.webp"
				alt2="a blue A logo"
			/>

			<UsefulLinks />
		</article>
	</section>
</main>

<style>
	:root {
		--100: 100%;
	}

	main {
		width: var(--100);
		margin-inline: auto;
		padding-top: 0;

		& .hero-section {
			margin-top: clamp(-9.75em, -12vw, -3em);
		}

		& section {
			display: block;
			margin-inline: auto;
			text-align: center;
			width: var(--100);
			color: var(--clr-main);
			margin-top: 0;

			@media screen and (width >= 990px) {
				display: block;
				width: var(--100);
				margin: 0 auto;
			}

			& article {
				font-size: clamp(var(--xs), 2vw, var(--sm));
				width: var(--100);
				margin-inline: auto;
				background-color: transparent;
				box-shadow: none;
				color: var(--clr-main);

				@media screen and (width >= 990px) {
					width: var(--100);
					margin-inline: auto;
				}
			}

			& .bio {
				color: var(--white);
				position: relative;

				@media screen and (width >= 990px) {
					margin-bottom: -5rem;
				}

				& .icons {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 15vw;
					margin: 2rem auto 0;
					padding: 0;
					width: fit-content;
				}

				& .indent {
					text-indent: 2em;
				}

				& .text {
					max-width: var(--100);
					margin-inline: auto;
					font-size: clamp(var(--h6), 1.5vw, var(--h4));
					font-weight: 500;
					line-height: 1.5;
					text-wrap: none;
					z-index: 7;
					color: var(--clr-main);

					@media screen and (width >= 990px) {
						max-width: 90%;
						line-height: 1.75;
					}

					& span {
						color: var(--clr-pale);
						font-weight: 600;
					}
				}

				& .text-hero {
					font-size: var(--h5);
				}

				& .content_width {
					@media screen and (width >= 990px) {
						margin-bottom: -2rem;
					}
				}

				& .text__w {
					@media screen and (width >= 990px) {
						width: 75%;
						margin: 0 auto;
					}
				}
			}
		}

		& p {
			text-align: left;
			color: var(--clr-main);
		}

		& .hero {
			width: var(--100);
			margin-inline: auto;
			color: var(--clr-main);

			@media (width >= 600px) {
				width: 90%;
			}

			@media (width >= 1024px) {
				width: 70%;
			}

			@media (width >= 1400px) {
				width: 70%;
			}
		}
	}
</style>
