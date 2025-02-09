<script>
	import Image from '$lib/components/Image.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedHeading from '$lib/components/AnimatedHeading.svelte';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		console.log('Blog page');

		document.documentElement.scrollTo(0, 0);
	});
</script>

<SEO
	title="Learn about web techniques"
	description="about learning web techniques and web animation basics"
	keywords="topics to learn, web animation basics, topics, web techniques"
/>

<main>
	<Title title="topics" />

	<article>
		<section aria-label="icons">
			<a class="gs" href="learn/greensock">
				<Image src="/logos/gsapLogo.svg" alt="greensock" width="250" />
			</a>

			<a class="sk" href="learn/sveltekit">
				<Image src="/logos/svelteLogo.png" alt="sveltekit" width="350" />
			</a>
		</section>

		<div class="animation-link" aria-label="animation">
			<a href="/learn/posts">
				<div class="image">
					<Image
						src="logos/animation.webp"
						alt="A logo that says web animation techniques."
						width="2000"
					/>
				</div>
			</a>
		</div>

		<div class="margin">
			<AnimatedHeading title1="seeing" span="is" title2="believing" />
		</div>
	</article>
</main>

<style>
	main {
		padding-top: 5%;
		min-height: 100vh;

		& article {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 3em;
			background: transparent;
			box-shadow: none;
			min-height: 100vh;

			& section {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 3em;
				flex-direction: column;

				& a {
					display: block;
					margin: 0 0 2em 0;

					&:focus,
					&:focus-visible {
						outline: 1px solid var(--text-color);
						background: transparent;
					}
				}

				& .gs,
				& .sk {
					transition: scale 0.25s ease-in-out;
				}

				& .gs:not(:hover),
				& .sk:not(:hover) {
					filter: opacity(0.5);
					scale: 0.97;
					transition:
						filter 1s ease-in-out,
						scale 0.25s ease-in-out;
				}
			}

			& .margin {
				margin-top: 10%;
			}
		}

		& a {
			&:focus,
			&:focus-visible {
				outline: 1px solid var(--text-color);
				background: transparent;
			}
		}
		.image {
			background-color: transparent;
			color: var(--smoke);
			border: 1px solid var(--smoke);
			width: 40%;
			margin: 0 auto;
			border-radius: 8px;
			cursor: pointer;
			letter-spacing: 1px;

			&:hover {
				animation: wiggle 1s ease-in-out infinite;
			}

			&:not(:hover) {
				opacity: 0.5;
				background-color: var(--smoke);
				color: black;
				transition: opacity 0.75s ease-in-out;
			}
		}

		@media (width >= 300px) {
			.gs,
			.sk {
				width: 10em;
				margin-inline: auto;
			}

			.animation-link {
				display: block;

				.image {
					width: 15rem;
					scale: 1.1;
				}
			}
		}

		@media (width >= 720px) {
			.gs,
			.sk,
			.image {
				margin-top: 0;
			}
		}

		@media (width >= 990px) {
			.gs,
			.sk {
				width: 15em;
			}

			.image {
				scale: 1.3;
			}
		}
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
