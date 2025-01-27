<script>
	/** @type {{src: any, title: any}} */
	let { src, title } = $props();
</script>

<main class="iframe">
	<iframe
		width="560"
		height="360"
		{src}
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
		allowfullscreen
		aria-label={title}
	></iframe>
</main>

<style>
	.iframe {
		margin-inline: auto;
		display: grid;
		place-items: center;
		height: 100vh;

		iframe {
			border: 2px solid var(--dark-gray);
			border-radius: 5px;
		}

		@media (width <= 500px) {
			iframe {
				width: 99%;
				margin-bottom: 5rem;
				margin-right: 1.27rem;
				scale: 0.95;
			}
		}
	}
</style>
