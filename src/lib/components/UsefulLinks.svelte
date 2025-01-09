<script>
	import LoadBtn from '$lib/components/LoadBtn.svelte';
</script>

<main class="links">
	<LoadBtn loading="loading..." submit="Random Gallery" href="/about/gallery" />

	<h2>Useful Links:</h2>

	<LoadBtn loading="loading..." submit="JoyOfCode" href="https://joyofcode.xyz" />
	<LoadBtn loading="loading..." submit="Kevin Powell" href="https://kevinpowell.co" />
	<LoadBtn loading="loading..." submit="Traversy Media" href="https://traversymedia.com" />
	<LoadBtn loading="loading..." submit="Frontend Masters" href="https://frontendmasters.com" />
	<LoadBtn loading="loading..." submit="Creative Coding" href="https://creativecodingclub.com" />

	<p>Most of these links are resources that I used to learn frontend and design for the web 🚀</p>
</main>

<style>
	@media (min-width: 300px) {
		.links {
			width: fit-content;
			margin-inline: auto;
			margin-top: 1.5rem;
			text-align: center;

			h2 {
				margin-top: 2rem;
				margin-bottom: 0.75rem;
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
</style>
