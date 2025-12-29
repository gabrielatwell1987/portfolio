<script>
	import SEO from '$lib/data/SEO.svelte';
	import bio from '$lib/components/about/bio.json';
	import Button from '$lib/components/layout/Button.svelte';
	import Grid from '$lib/components/about/Grid.svelte';
	import Bento from '$lib/components/about/Bento.svelte';
	import CardFlip from '$lib/components/about/CardFlip.svelte';
	import AboutHero from '$lib/components/about/AboutHero.svelte';
	// import Preloader from '$lib/components/about/Preloader.svelte';
	import Skills from '$lib/components/about/Skills.svelte';
	import Slider from '$lib/components/about/Slider.svelte';
	import PWAInstall from '$lib/components/about/PWAInstall.svelte';
	import PWAVideo from '$lib/components/about/PWAVideo.svelte';

	let isDesktop = $state(false);

	$effect(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)');

		isDesktop = mediaQuery.matches;

		const handler = (e) => {
			isDesktop = e.matches;
		};

		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	});
</script>

<SEO
	title="About Gabe"
	description="All about Gabriel Atwell"
	keywords="about gabe, about gabriel, gabe's bio"
/>

<!-- <Preloader /> -->

<div class="about-me" aria-label="bio">
	<section class="about-section">
		<article id="bio">
			<div class="hero-section">
				<AboutHero alt="svelte code" title="Gabe" viewTransitionName="about-heading" />
			</div>

			<div class="biography" aria-label="bio">
				{#each bio as paragraph}
					<p class="bio-paragraph indent">{@html paragraph.text}</p>
				{/each}

				<article class="hero-text" aria-label="bio" data-hero-mobile>
					<p class="bio-paragraph" data-content-width>
						Here is another hero section that I created but I like the current hero section that
						shows when you first come to the website. This hero section was built with three.js..
						Check out it out!
					</p>

					<div class="hero-text">
						<div class="hero-button">
							<Button href="/about/hero" title="Hero" />
						</div>
					</div>
				</article>

				<p class="bio-paragraph indent">
					Please note: This is a <span>pwa</span> (progressive web app) so you can install it on your
					device if you want to! This makes your website able to be used on any device.. mobile, tablet,
					laptop, and desktop. It's like having a mobile app that is not made with native technologies!
					There is also offline capabilities, so if your internet goes out, you can still access the
					site because your device downloads and caches the whole site!
				</p>

				<div data-flex-container>
					<PWAInstall
						title="How to install the PWA"
						popoverTitle="How to install the PWA:"
						text="It works on Android and iPhone. If you're using an iPhone device, you have to tap the share icon in the Safari browser and choose the 'Add to Home Screen' option.. that's the only way to save a pwa on an iOS device. On an iMac, follow the same steps using Safari but choose 'Add to Dock' instead."
						text2="If you're on an Android device you should see an install button on the bottom-right of the screen. If you press it, an installation prompt should appear. The prompt will only appear after some user interactions (clicks)."
						text3="Other than mobile devices, you should see the install button (on tablet, laptop, desktop). If you are having any issues or you have any questions, please feel free to contact me!"
					/> <span>and</span>
					<PWAVideo
						title="Watch: Building a PWA with Svelte"
						videoSrc="https://www.youtube.com/embed/_wiOcdEVgks?si=hJdrXH9vH_ENofpF"
					/>
				</div>
			</div>

			{#if isDesktop}
				<Slider />
			{:else}
				<Skills />
			{/if}

			<Grid leftTitle="Frontend" rightTitle="Design Based" />

			<Bento />

			<CardFlip
				src="/logos/heart-skull.webp"
				alt="Atwell sparrow logo"
				src2="/logos/skull-glass.webp"
				alt2="a blue A logo"
			/>
		</article>
	</section>
</div>

<style>
	:root {
		--100: 100%;
	}

	.about-me {
		width: var(--100);
		margin-inline: auto;
		padding-top: 0;

		& .hero-section {
			margin-top: clamp(-9.75em, -12vw, -3em);
			margin-bottom: 4em;

			@media (width <= 768px) {
				margin-bottom: 2em;
			}
		}

		& .about-section {
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

			& .biography {
				color: var(--white);
				position: relative;
				padding-top: clamp(1em, 8vw, 6em);

				@media screen and (width >= 990px) {
					margin-bottom: -5rem;
				}

				& .hero-button {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 15vw;
					margin: 2rem auto 0;
					padding: 0;
					width: fit-content;
					padding-block: 2rem;

					@media (width <= 500px) {
						gap: 10vw;
						width: 100%;
						margin-inline: auto;
						padding-block: 0;
					}
				}

				& .indent {
					text-indent: 2em;
				}

				& .bio-paragraph {
					max-inline-size: var(--100);
					margin-inline: auto;
					font-size: clamp(var(--h6), 1.5vw, var(--h4));
					font-weight: 500;
					line-height: 1.5;
					text-wrap: none;
					z-index: 7;
					color: var(--clr-main);

					@media screen and (width >= 990px) {
						max-inline-size: 90%;
						line-height: 1.75;
					}

					& span {
						font-weight: 800;
					}
				}

				& [data-content-width] {
					@media screen and (width >= 990px) {
						margin-bottom: -2rem;
					}
				}

				& [data-hero-mobile] {
					@media screen and (width >= 990px) {
						width: 75%;
						margin: 0 auto;
					}
				}

				& [data-flex-container] {
					display: flex;
					justify-content: flex-start;
					gap: 0.75em;
					padding-left: calc(5em - 1rem);

					@media (width <= 768px) {
						padding-left: 0;
						justify-content: center;
					}

					& span {
						padding-top: 0.25rem;

						@media (width <= 768px) {
							padding-top: 0.5rem;
						}

						@media (width <= 500px) {
							padding-top: 2rem;
						}
					}
				}
			}
		}

		& p {
			text-align: left;
			color: var(--clr-main);
		}

		& .hero-text {
			width: var(--100);
			margin-inline: auto;
			color: var(--clr-main);
			font-size: var(--h5);

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
