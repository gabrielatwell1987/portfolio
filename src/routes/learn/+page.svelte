<script lang="ts">
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import LearnHeading from '$lib/components/learn/LearnHeading.svelte';
	import UsefulLinks from '$lib/components/learn/UsefulLinks.svelte';
	import BgCircles from '$lib/components/utils/BgCircles.svelte';

	$effect(() => {
		document.documentElement.scrollTo(0, 0);
	});
</script>

<SEO
	title="Learn About Web Techniques"
	description="about learning web techniques and web animation basics"
	keywords="topics to learn, web animation basics, topics, web techniques"
/>

<BgCircles stroke="var(--clr-gray)" />

<div class="learn-wrapper">
	<section class="learn-header">
		<LearnHeading
			title1="make"
			span="&"
			title2="learn"
			viewTransitionName="learn-heading"
			transitionPath="/learn"
		/>
	</section>

	<article class="topic-links">
		<section aria-label="icons" class="learn-icons">
			<button
				class="learn-image"
				onclick={() => {
					window.location.href = '/learn/greensock';
				}}
				style="width: clamp(15em, 25vw, 30em);"
				aria-label="greensock"
			>
				<Image
					src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/GSAP-Dark.svg"
					alt="greensock animation platform logo"
					width="350"
					aspectRatio="1/1"
				/>
			</button>

			<button
				class="learn-image"
				onclick={() => {
					window.location.href = '/learn/sveltekit';
				}}
				style="width: clamp(10em, 16.5vw, 30em);"
			>
				<Image
					src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/Svelte-Dark.svg"
					alt="sveltekit web framework logo"
					width="400"
					aspectRatio="1/1"
				/>
			</button>

			<button
				onclick={() => {
					window.location.href = '/learn/posts';
				}}
				class="learn-image"
				style="grid-column: 1/-1; width: clamp(18em, 40vw, 60em); justify-self: center;"
			>
				<Image
					src="https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/animation.webp"
					alt="A logo that says web animation techniques."
					width="600"
					aspectRatio="16/9"
				/>
			</button>
		</section>

		<UsefulLinks />
	</article>
</div>

<style>
	.learn-wrapper {
		padding-top: 7em;
		min-height: 100vh;
		background: linear-gradient(
			to bottom,
			oklch(from var(--clr-gray) 0.35 c h) 0%,
			var(--clr-invert) 30%,
			var(--clr-invert) var(--100)
		);

		@media (width <= 768px) {
			padding-top: 5em;
		}

		& .topic-links {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			box-shadow: none;
			max-inline-size: 80vw;
			min-height: 86vh;
			background-color: transparent;
			margin-inline: auto;
			margin-bottom: 0;

			@media (width <= 768px) {
				margin: 0;
				padding: 3em;
				min-inline-size: 100vw;
				min-block-size: auto;
				margin-inline: auto;
			}

			& .learn-icons {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 5vw;

				@media (width <= 500px) {
					grid-template-columns: 1fr;
					gap: 0;
				}

				& .learn-image {
					display: block;
					background: none;
					border: none;
					margin-inline: auto;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 0;
					transition:
						filter 0.5s ease-out,
						scale 0.35s ease-out;

					&:not(:hover) {
						filter: opacity(0.95);
					}

					&:focus-visible {
						outline: 1px solid var(--clr-main);
						background: transparent;
					}

					&:active {
						scale: 0.97;
					}
				}
			}
		}
	}
</style>
