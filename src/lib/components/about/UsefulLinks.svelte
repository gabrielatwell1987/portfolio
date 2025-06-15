<script>
	import LoadBtn from '$lib/components/about/LoadBtn.svelte';
</script>

<main class="links" id="useful-links">
	<h2>Useful Links:</h2>

	<LoadBtn
		loading="loading..."
		delay={1500}
		submit="Beginner HTML"
		href="https://www.websiteplanet.com/blog/html-guide-beginners/"
	/>
	<LoadBtn loading="loading..." delay={1500} submit="JoyOfCode" href="https://joyofcode.xyz" />
	<LoadBtn loading="loading..." delay={1500} submit="Kevin Powell" href="https://kevinpowell.co" />
	<LoadBtn
		loading="loading..."
		delay={1500}
		submit="Creative Coding"
		href="https://creativecodingclub.com"
	/>
	<LoadBtn
		loading="loading..."
		delay={1500}
		submit="Traversy Media"
		href="https://traversymedia.com"
	/>
	<LoadBtn
		loading="loading..."
		delay={1500}
		submit="Frontend Masters"
		href="https://frontendmasters.com"
	/>

	<p>
		All of these links are resources that I used to learn frontend and design for the web <span
			>🛠️</span
		>
	</p>
</main>

<style>
	@media (width >= 300px) {
		.links {
			width: fit-content;
			margin-inline: auto;
			margin-top: 1.5rem;
			text-align: center;

			& h2 {
				margin-top: 2rem;
				margin-bottom: 0.75rem;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.75vw, var(--h5));
				font-weight: 600;
				color: var(--clr-blue);
				letter-spacing: -1px;
			}

			& p {
				color: var(--clr-gray);
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.25rem, var(--h4));
				font-style: italic;
				text-align: center;
				margin-top: 2rem;
				line-height: 1.5;
				letter-spacing: 0px;

				& span {
					font-style: normal;
				}
			}
		}
	}
</style>
