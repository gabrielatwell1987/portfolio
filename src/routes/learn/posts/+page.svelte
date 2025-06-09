<script>
	import CSS from './css.md';
	import GSAP from './gsap.md';
	import Button from '$lib/components/layout/Button.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Card from '$lib/components/layout/Card.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import TableOfContents from '$lib/components/learn/TableOfContents.svelte';
	import GabeMorph from '$lib/components/learn/GabeMorph.svelte';

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
	title="web animation techniques"
	description="Web techniques"
	keywords="animation techniques, web techniques for animation"
/>

<section class="tocLogo">
	<GabeMorph />

	<TableOfContents />
</section>

<section class:mounted>
	<div class="css">
		<div class="image">
			<div class="skillImg">
				<h1>
					<Image src="/skills/CSS-Purple.webp" alt="new css logo" />
				</h1>
			</div>

			<CSS aria-label="css" />
		</div>
	</div>

	<div class="gsap">
		<div class="skillImg">
			<h2>
				<Image src="/skills/GSAP-Dark.svg" alt="greensock animation platform" />
			</h2>
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

	<Button href="/learn" title="Back" />
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
					view-transition-name: css-skill-image;
				}
			}
		}

		& .gsap {
			margin-top: -5%;
			margin-bottom: 5%;

			& .skillImg {
				margin-inline: auto;
				margin-top: 6rem;
				view-transition-name: gsap-skill-image;
			}
		}

		@media (width <= 500px) {
			.css {
				.image {
					.skillImg {
						width: 75%;
					}
				}
			}
		}
	}

	::view-transition-old(css-skill-image),
	::view-transition-new(css-skill-image),
	::view-transition-old(gsap-skill-image),
	::view-transition-new(gsap-skill-image) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(css-skill-image),
	::view-transition-old(gsap-skill-image) {
		animation: scale-fade-out 0.75s ease-out forwards;
	}

	::view-transition-new(css-skill-image),
	::view-transition-new(gsap-skill-image) {
		animation: scale-fade-in 0.75s ease-in forwards;
	}

	@keyframes scale-fade-out {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.8);
		}
	}

	@keyframes scale-fade-in {
		from {
			opacity: 0;
			transform: scale(1.2);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
