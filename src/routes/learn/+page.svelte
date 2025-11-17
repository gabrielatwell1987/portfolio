<script>
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

<div class="learn">
	<section>
		<LearnHeading
			title1="learn"
			span="by"
			title2="doing"
			viewTransitionName="learn-heading"
			transitionPath="/learn"
		/>
	</section>

	<article>
		<section aria-label="icons">
			<button
				class="learn-image"
				onclick={() => {
					window.location.href = '/learn/greensock';
				}}
				style="width: clamp(15em, 25vw, 30em);"
				aria-label="greensock"
			>
				<Image
					src="/skills/GSAP-Dark.svg"
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
					src="/skills/Svelte-Dark.svg"
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
				style="grid-column: 1/-1; width: clamp(18em, 46vw, 60em); justify-self: center;"
			>
				<Image
					src="logos/animation.webp"
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
	.learn {
		padding-top: 7em;
		min-height: 100vh;

		@media (width <= 768px) {
			padding-top: 5em;
		}

		& article {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 3em;
			box-shadow: none;
			max-inline-size: 80vw;
			min-height: 86vh;
			background-color: transparent;
			margin-inline: auto;
			margin-top: 10em;

			@media (width <= 768px) {
				margin: 0;
				padding: 3em;
				min-width: 100vw;
				min-height: auto;
				margin-inline: auto;
			}

			& section {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 5vw;

				@media (width <= 500px) {
					grid-template-columns: 1fr;
					gap: 3vw;
					margin-bottom: -1em;
				}

				& button {
					display: block;
					background: none;
					border: none;

					&:first-child {
						margin-top: 5em;

						@media (width <= 768px) {
							margin-top: 2em;
						}

						@media (width <= 500px) {
							margin-top: 0;
						}
					}

					&:last-child {
						@media (width <= 500px) {
							margin-top: 2.5em;
						}
					}

					&:focus,
					&:focus-visible {
						outline: 1px solid var(--clr-main);
						background: transparent;
					}
				}

				& .learn-image {
					margin-inline: auto;
					display: flex;
					align-items: center;
					justify-content: center;
					transition:
						filter 0.5s ease-out,
						scale 0.35s ease-out;

					@media (width >= 720px) {
						margin-top: 0;
					}

					&:not(:hover) {
						filter: opacity(0.95);
						scale: 0.98;
					}
				}
			}
		}
	}

	::view-transition-group(learn-heading) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
