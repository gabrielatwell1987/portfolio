<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import SvelteIcon from '$lib/components/SvelteIcon.svelte';
	import Image from '$lib/components/Image.svelte';
	import { fade } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';
	import AnimatedHeading from '$lib/components/AnimatedHeading.svelte';
	import Title from '$lib/components/Title.svelte';

	$effect(() => {
		console.log('Blog page');
	});
</script>

<SEO title="Blog topics" description="a blog about web techniques" keywords="blog topics" />

<main transition:fade={{ delay: 300, duration: 500 }}>
	<Title title="topics" />

	<article>
		<section aria-label="icons">
			<a class="gs" href="blog/greensock">
				<GsapIcon />
			</a>

			<a class="sk" href="blog/sveltekit">
				<SvelteIcon />
			</a>
		</section>

		<div class="animation-link" aria-label="animation">
			<a href="/blog/posts">
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
		<!-- <br /> -->
	</article>
</main>

<style>
	main {
		padding-top: 5%;
	}

	article {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 20%;
		background: transparent;
		box-shadow: none;

		a {
			display: block;
			margin: 0 0 2rem 50%;
		}

		a:focus {
			box-shadow: 0 0 0px var(--off-white);
			background: transparent;
		}

		.gs:not(:hover),
		.sk:not(:hover) {
			filter: opacity(0.5);
			transition: filter 1s ease-in-out;
		}

		.image:hover {
			animation: wiggle 1s ease-in-out infinite;
		}

		.image:not(:hover) {
			opacity: 0.5;
			background-color: var(--smoke);
			color: black;
			transition: opacity 0.75s ease-in-out;
		}

		.animation-link {
			margin-top: 10%;
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
	}

	@media (min-width: 300px) {
		.image {
			width: 15rem;
			margin-right: 10%;
			margin: 0 -95%;
			scale: 1.1;
		}

		.gs,
		.sk {
			width: 10rem;
		}

		.gs,
		.sk,
		.image {
			margin-top: -5em;
		}

		.animation-link {
			display: block;
		}

		.margin {
			margin-top: 15%;
			margin-bottom: 25%;
		}
	}

	@media (min-width: 500px) {
		.image {
			width: 60%;
			margin: 0 -30%;
		}
	}

	@media (min-width: 720px) {
		.image {
			width: 40%;
			margin: 0 -21%;
		}

		.gs {
			margin-bottom: 10%;
		}

		.gs,
		.sk,
		.image {
			margin-top: 0;
		}
	}

	@media (min-width: 990px) {
		.gs,
		.sk {
			width: 75%;
			margin-bottom: 35%;
		}

		.image {
			margin-top: -20%;
			scale: 1.3;
		}

		main {
			margin-bottom: -12%;
		}

		.animation-link {
			margin-bottom: 0;
		}

		article {
			margin-top: 2%;
			margin-right: 5%;
		}

		.margin {
			margin-bottom: 13%;
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
