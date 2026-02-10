<script lang="ts">
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/learn/Card.svelte';
	import TableOfContents from '$lib/components/learn/TableOfContents.svelte';
	import GabeMorph from '$lib/components/learn/GabeMorph.svelte';
	import BackToTop from '$lib/components/learn/BackToTop.svelte';
	import ViewTransitionImage from '$lib/components/layout/view-transitions/ViewTransitionImage.svelte';
	import Avatar from '$lib/components/learn/Avatar.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let mounted = $state<boolean>(false);

	$effect(() => {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				mounted = true;
			});
		} else {
			mounted = true;
		}
	});

	// gsap
	$effect(() => {
		if (!mounted) return;

		gsap.registerPlugin(ScrollTrigger);

		const paragraphs = document.querySelectorAll('.content p');
		const images = document.querySelectorAll('.image img');

		images.forEach((img) => {
			gsap.fromTo(
				img,
				{
					scale: 0.8,
					opacity: 0
				},
				{
					scale: 1,
					opacity: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: img,
						start: 'top center+=450'
					}
				}
			);
		});

		paragraphs.forEach((para) => {
			gsap.fromTo(
				para,
				{
					x: -100,
					opacity: 0
				},
				{
					x: 0,
					opacity: 1,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: para,
						start: 'top center+=450'
					}
				}
			);
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
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
				src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/CSS-Purple.webp"
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
			src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/GSAP-Dark.svg"
			alt="greensock animation platform"
			aspectRatio="1/1"
			class="gsap-logo"
			transitionName="gsap-image"
		/>

		<GSAP aria-label="greensock" />
	</div>

	<article class="developer-card">
		<Card
			src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/atwellUI.webp"
			alt="a logo that says atwell developer"
			href="/projects"
			title="web design + development"
			desc="Trying to make the internet look better.. one website at a time."
			button="Projects"
		/>
	</article>

	<Avatar
		src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/wtf2.webp"
		alt="An avatar of Gabriel Atwell, a frontend developer and web designer based in Las Vegas."
		radius="0 3vw 0 0"
		name="Gabriel Atwell"
		center={true}
	/>

	<div class="top-button">
		<BackToTop />
	</div>
</section>

<style>
	.table-and-logo {
		padding-top: 5em;
	}

	.topics {
		margin: 0;

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

		& .gsap {
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
