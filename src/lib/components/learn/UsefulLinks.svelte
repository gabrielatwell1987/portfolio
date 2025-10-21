<script>
	import LoadBtn from '$lib/components/learn/LoadBtn.svelte';
</script>

<main class="links" id="useful-links">
	<h2>Useful Links:</h2>

	<div class="buttons">
		<LoadBtn
			loading="loading..."
			delay={1500}
			submit="Beginner HTML"
			href="https://www.websiteplanet.com/blog/html-guide-beginners/"
		/>
		<LoadBtn loading="loading..." delay={1500} submit="JoyOfCode" href="https://joyofcode.xyz" />
		<LoadBtn
			loading="loading..."
			delay={1500}
			submit="Kevin Powell"
			href="https://kevinpowell.co"
		/>
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
		<LoadBtn
			loading="loading..."
			delay={1500}
			submit="View Transitions"
			href="https://view-transitions.chrome.dev/"
		/>
	</div>

	<p>
		All of these links are resources that I used to learn frontend and design for the web <span
			>🛠️</span
		>
	</p>
</main>

<style>
	.links {
		& .buttons {
			display: grid;
			grid-template-columns: repeat(2, minmax(200px, 1fr));
			gap: 0.25rem;

			@media (width <= 768px) {
				grid-template-columns: 1fr;
			}
		}

		@media (width >= 300px) {
			width: fit-content;
			margin-inline: auto;
			margin-top: 1.5rem;
			text-align: center;

			& h2 {
				margin-top: 2rem;
				margin-bottom: 1.2em;
				margin-inline: auto;
				font-family: var(--bronova);
				font-size: clamp(var(--h6), 2vw, var(--h4));
				font-weight: 600;
				color: var(--clr-main);
				text-shadow:
					0 0 1px var(--clr-main),
					-1px -1px 0 var(--clr-invert),
					1px -1px 0 var(--clr-invert),
					-1px 1px 0 var(--clr-invert),
					1px 1px 0 var(--clr-invert),
					-1px 0 0 var(--clr-invert),
					1px 0 0 var(--clr-invert),
					0 -1px 0 var(--clr-invert),
					0 1px 0 var(--clr-invert);
				letter-spacing: 1px;
				border-bottom: 2px solid var(--clr-main);
				width: fit-content;

				@media (width <= 768px) {
					border-bottom: 1px solid var(--clr-blue);
				}
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
