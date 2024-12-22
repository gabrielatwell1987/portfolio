<script>
	/** @type {{src: any, title: any}} */
	let { src, title } = $props();
</script>

<main class="iframe">
	<iframe
		width="560"
		height="315"
		{src}
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
		aria-label={title}
	></iframe>
</main>

<style>
	.iframe {
		margin-inline: auto;
		display: flex;
		justify-content: center;
		align-items: center;

		iframe {
			margin: 3rem 0 0 19%;
			border: 2px solid var(--dark-gray);
			padding: 0.5rem;
			border-radius: 5px;
		}
	}

	@media (min-width: 750px) {
		.iframe {
			iframe {
				margin: 6rem 0;
			}
		}
	}
</style>
