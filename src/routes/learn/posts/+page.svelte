<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/layout/Card.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import TableOfContents from '$lib/components/learn/TableOfContents.svelte';
	import GabeMorph from '$lib/components/learn/GabeMorph.svelte';
	import BackToTop from '$lib/components/learn/BackToTop.svelte';
	import ViewTransitionImage from '$lib/components/layout/ViewTransitionImage.svelte';

	let mounted = $state(false);

	$effect(() => {
		console.log(GSAP, CSS);

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
/>

<section class="tocLogo" id="top">
	<GabeMorph />

	<TableOfContents />
</section>

<section class:mounted>
	<div class="css">
		<div class="image">
			<div class="skillImg">
				<ViewTransitionImage
					src="/skills/CSS-Purple.webp"
					alt="new css logo"
					transitionName="css-logo-transition"
				/>
			</div>

			<CSS aria-label="css" />
		</div>
	</div>

	<div class="gsap">
		<div class="skillImg">
			<Image
				src="/skills/GSAP-Dark.svg"
				alt="greensock animation platform"
				aspectRatio="1/1"
				class="gsap-logo"
			/>
		</div>

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
					margin-block: 7rem;

					@media (width <= 768px) {
						width: 85%;
					}
				}
			}
		}

		& .gsap {
			margin-top: -5%;
			margin-bottom: 5%;

			& .skillImg {
				margin-inline: auto;
				margin-block: 7rem;
				max-width: 15em;
				width: 100%;
			}
		}
	}
</style>
