<script>
	import SEO from '$lib/data/SEO.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import AnimatedHeading from '$lib/components/learn/AnimatedHeading.svelte';

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
			<a class="gs" href="learn/greensock" style="width: clamp(10em, 25vw, 30em);">
				<Image
					src="/logos/gsapLogo.svg"
					alt="greensock animation platform logo"
					width="350"
					aspectRatio="1/1"
				/>
			</a>

			<a class="sk" href="learn/sveltekit" style="width: clamp(10em, 25vw, 30em);">
				<Image
					src="/logos/svelteLogo.png"
					alt="sveltekit web framework logo"
					width="400"
					aspectRatio="1/1"
				/>
			</a>
		</section>

		<div class="animation-link" aria-label="animation">
			<a href="/learn/posts">
				<div class="image" style="width: clamp(15em, 25vw, 30em);">
					<Image
						src="logos/animation.webp"
						alt="A logo that says web animation techniques."
						width="400"
						aspectRatio="16/9"
					/>
				</div>
			</a>
		</div>
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
			max-width: 80vw;
			min-height: 86vh;
			background-color: var(--blacker);
			border-radius: 45em;
			margin-inline: auto;

			@media (width <= 768px) {
				margin: 0;
				padding: 3em;
				min-width: 100vw;
				min-height: auto;
				margin-inline: auto;
			}

			& section {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10vw;

				@media (width <= 500px) {
					margin-bottom: -1em;
				}

				& a {
					display: block;
					margin: 0 0 2em 0;

					&:focus,
					&:focus-visible {
						outline: 1px solid var(--clr-main);
						background: transparent;
					}
				}

				& .gs,
				& .sk {
					transition:
						filter 1s ease-in-out,
						scale 0.25s ease-in-out;
				}

				& .gs:not(:hover),
				& .sk:not(:hover) {
					filter: opacity(0.5);
					scale: 0.95;
				}
			}
		}

		& a {
			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}
		}
	}

	.image {
		background-color: transparent;
		color: var(--smoke);
		margin-inline: auto;
		margin-top: 1em;
		border-radius: 8px;
		cursor: pointer;
		letter-spacing: 1px;
		transition: opacity 0.75s ease-in-out;

		&:hover {
			animation: wiggle 0.85s ease-in-out infinite;
		}
	}

	.gs,
	.sk {
		margin-inline: auto;

		@media (width >= 720px) {
			margin-top: 0;
		}
	}

	.animation-link {
		display: block;
		position: relative;
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}
</style>
