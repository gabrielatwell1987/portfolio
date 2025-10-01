<script>
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import AnimatedHeading from '$lib/components/learn/AnimatedHeading.svelte';
	import UsefulLinks from '$lib/components/learn/UsefulLinks.svelte';

	$effect(() => {
		document.documentElement.scrollTo(0, 0);
	});
</script>

<SEO
	title="Learn About Web Techniques"
	description="about learning web techniques and web animation basics"
	keywords="topics to learn, web animation basics, topics, web techniques"
/>

<main>
	<section>
		<AnimatedHeading title1="seeing" span="is" title2="believing" />
	</section>

	<article>
		<section aria-label="icons">
			<a class="learn-image" href="learn/greensock" style="width: clamp(10em, 25vw, 30em);">
				<Image
					src="/skills/GSAP-Dark.svg"
					alt="greensock animation platform logo"
					width="350"
					aspectRatio="1/1"
				/>
			</a>

			<a class="learn-image" href="learn/sveltekit" style="width: clamp(10em, 20vw, 30em);">
				<Image
					src="/skills/Svelte-Dark.svg"
					alt="sveltekit web framework logo"
					width="400"
					aspectRatio="1/1"
				/>
			</a>

			<a
				href="/learn/posts"
				class="learn-image"
				style="grid-column: 1/-1; width: clamp(15em, 50vw, 60em); justify-self: center;"
			>
				<Image
					src="logos/animation.webp"
					alt="A logo that says web animation techniques."
					width="600"
					aspectRatio="16/9"
				/>
			</a>
		</section>

		<UsefulLinks />
	</article>
</main>

<style>
	main {
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
			background-color: var(--blacker);
			border-radius: 45em;
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

				& a {
					display: block;

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

					@media (width >= 720px) {
						margin-top: 0;
					}
					transition:
						filter 0.5s ease-out,
						scale 0.35s ease-out;

					&:not(:hover) {
						filter: opacity(0.5);
						scale: 0.98;
					}
				}
			}
		}
	}
</style>
