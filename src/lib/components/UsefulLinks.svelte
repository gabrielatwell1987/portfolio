<script>
	import LoadBtn from '$lib/components/LoadBtn.svelte';
</script>

<main class="links">
	<h2>Useful Links:</h2>

	<LoadBtn loading="loading..." submit="Random Gallery" href="/about/gallery" />
	<LoadBtn loading="loading..." submit="JoyOfCode" href="https://joyofcode.xyz" />
	<LoadBtn loading="loading..." submit="Kevin Powell" href="https://kevinpowell.co" />
	<LoadBtn loading="loading..." submit="Traversy Media" href="https://youtube.com/@TraversyMedia" />
	<LoadBtn loading="loading..." submit="Frontend Masters" href="https://frontendmasters.com" />

	<p>Most of these links are resources that I used to learn frontend and design for the web 🚀</p>
</main>

<style>
	@media (min-width: 300px) {
		.links {
			width: 100%;
			margin-inline: auto;
			margin-top: 1.5rem;
			text-align: center;

			h2 {
				margin-bottom: 0.5rem;
				font-size: clamp(1rem, 1.75vw, 1.5rem);
			}

			p {
				color: var(--off-white);
				font-size: clamp(1rem, 1.15rem, 2rem);
				font-style: italic;
				text-align: center;
				margin-top: 2rem;
				line-height: 1.5;
			}
		}
	}

	/* @media (min-width: 600px) {
		.links {
			width: 90%;
		}
	}

	@media screen and (min-width: 990px) {
		.links {
			margin-top: 5%;
		}
	}

	@media (min-width: 1024px) {
		.links {
			width: 70%;
		}
	}

	@media (min-width: 1400px) {
		.links {
			width: 70%;
		}
	} */
</style>
