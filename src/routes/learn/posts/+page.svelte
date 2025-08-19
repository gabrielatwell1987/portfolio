<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/layout/Card.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import TableOfContents from '$lib/components/learn/TableOfContents.svelte';
	import GabeMorph from '$lib/components/learn/GabeMorph.svelte';
	import BackToTop from '$lib/components/learn/BackToTop.svelte';

	let mounted = $state(false);
	let cssEnlarged = $state(false);
	let gsapEnlarged = $state(false);

	function enlargeCssImage() {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				cssEnlarged = !cssEnlarged;
			});
		} else {
			cssEnlarged = !cssEnlarged;
		}
	}

	function enlargeGsapImage() {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				gsapEnlarged = !gsapEnlarged;
			});
		} else {
			gsapEnlarged = !gsapEnlarged;
		}
	}

	$effect(() => {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				mounted = true;
			});
		} else {
			mounted = true;
		}
	});
</script>

<svelte:head>
	<meta name="view-transition" content="same-origin" />
</svelte:head>

<SEO
	title="Web Animation Techniques"
	description="Web techniques"
	keywords="animation techniques, web techniques for animation"
	type="article"
/>

<section class="tocLogo" id="top">
	<GabeMorph />

	<TableOfContents />
</section>

<section class:mounted>
	<div class="css">
		<div class="image">
			<button
				type="button"
				class="skillImg"
				class:enlarged={cssEnlarged}
				onclick={enlargeCssImage}
				style="background: none; border: none; padding: 0;"
			>
				<Image src="/skills/CSS-Purple.svg" alt="new css logo" aspectRatio="1/1" class="css-logo" />
			</button>

			<CSS aria-label="css" />
		</div>
	</div>

	<div class="gsap">
		<button
			type="button"
			class="skillImg"
			class:enlarged={gsapEnlarged}
			onclick={enlargeGsapImage}
			style="background: none; border: none; padding: 0;"
		>
			<Image
				src="/skills/GSAP-Dark.webp"
				alt="greensock animation platform"
				aspectRatio="1/1"
				class="gsap-logo"
			/>
		</button>

		<GSAP aria-label="greensock" />
	</div>

	<article class="card">
		<Card
			src="/logos/a-dev.webp"
			alt="a logo that says atwell developer"
			href="/projects"
			title="web design + development"
			desc="Trying to make the internet look better.. one website at a time."
			button="Projects"
		/>
	</article>

	<div class="back">
		<BackToTop />
	</div>
</section>

<style>
	.tocLogo {
		padding-top: 5em;
	}

	section {
		&.mounted {
			opacity: 1;
			scale: 1;
		}

		& .back {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0;
			margin: 0;

			& :global(.back-button) {
				margin-top: 1em;
				margin-bottom: 0;
			}

			@media (width <= 500px) {
				gap: 1em;
			}
		}

		& .card {
			display: flex;
			justify-content: center;
			background: transparent;
			box-shadow: none;
		}

		& .css {
			margin-bottom: 15%;

			& .image {
				margin-top: 5%;

				& .skillImg {
					width: 25%;
					margin-inline: auto;
					transition: width 300ms ease-in-out;
					outline: none;
					box-shadow: none;
					view-transition-name: css-image;

					@media (width <= 768px) {
						width: 55%;
					}

					&.enlarged {
						transform: scale(5.2);

						@media (width <= 768px) {
							transform: scale(2.8);
						}
					}
				}
			}
		}

		& .gsap {
			margin-top: -5%;
			margin-bottom: 5%;

			& .skillImg {
				margin-inline: auto;
				max-width: 25em;
				width: 100%;
				transition: transform 300ms ease-in-out;
				outline: none;
				box-shadow: none;
				view-transition-name: gsap-image;

				@media (width <= 768px) {
					width: 55%;
				}

				&.enlarged {
					transform: scale(4.2);

					@media (width <= 768px) {
						transform: scale(2.8);
					}
				}
			}
		}
	}

	::view-transition-old(css-image),
	::view-transition-new(css-image) {
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
	}

	::view-transition-old(gsap-image),
	::view-transition-new(gsap-image) {
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
	}
</style>
