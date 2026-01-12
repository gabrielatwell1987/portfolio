<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/layout/Card.svelte';
	import TableOfContents from '$lib/components/learn/TableOfContents.svelte';
	import GabeMorph from '$lib/components/learn/GabeMorph.svelte';
	import BackToTop from '$lib/components/learn/BackToTop.svelte';
	import ViewTransitionImage from '$lib/components/layout/view-transitions/ViewTransitionImage.svelte';

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

<section class="table-and-logo" id="top">
	<GabeMorph />

	<TableOfContents />
</section>

<section class="topics" class:mounted>
	<div class="css">
		<div class="tech-stack-logo">
			<ViewTransitionImage
				src="/skills/CSS-Purple.webp"
				alt="new css logo"
				aspectRatio="1/1"
				class="css-logo"
				transitionName="css-image"
			/>

			<CSS aria-label="css" />
		</div>
	</div>

	<div class="gsap">
		<ViewTransitionImage
			src="/skills/GSAP-Dark.svg"
			alt="greensock animation platform"
			aspectRatio="1/1"
			class="gsap-logo"
			transitionName="gsap-image"
		/>

		<GSAP aria-label="greensock" />
	</div>

	<article class="developer-card">
		<Card
			src="/logos/a-dev.webp"
			alt="a logo that says atwell developer"
			href="/projects"
			title="web design + development"
			desc="Trying to make the internet look better.. one website at a time."
			button="Projects"
		/>
	</article>

	<div class="top-button">
		<BackToTop />
	</div>
</section>

<style>
	.table-and-logo {
		padding-top: 5em;
	}

	.topics {
		&.mounted {
			opacity: 1;
			scale: 1;
		}

		& .top-button {
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

		& .developer-card {
			display: flex;
			justify-content: center;
			background: transparent;
			box-shadow: none;
		}

		& .css {
			margin-bottom: 15%;
		}

		& .gsap {
			margin-bottom: 5%;
			position: relative;
			contain: layout;
		}
	}

	:global(::view-transition-old(css-image)),
	:global(::view-transition-new(css-image)),
	:global(::view-transition-old(gsap-image)),
	:global(::view-transition-new(gsap-image)) {
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	:global(::view-transition-old(css-image)),
	:global(::view-transition-old(gsap-image)) {
		animation: scale-down 0.25s ease forwards;
	}

	:global(::view-transition-new(css-image)),
	:global(::view-transition-new(gsap-image)) {
		animation: scale-up 0.25s ease forwards;
	}
</style>
