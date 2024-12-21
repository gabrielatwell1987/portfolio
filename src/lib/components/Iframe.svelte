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

	@media (min-width: 300px) {
		iframe {
			display: block;
			margin: 15% auto;
			flex-basis: 120%;
			height: auto;
		}
	}

	@media (min-width: 500px) {
		.iframe {
			margin-inline: auto;
			display: flex;
			justify-content: center;
			align-items: center;

			iframe {
				display: block;
				margin: 10% auto;
				flex-basis: 60%;
				height: 25rem;
			}
		}
	}

	@media (min-width: 750px) {
		.iframe {
			margin-inline: auto;
			display: flex;
			justify-content: center;
			align-items: center;

			iframe {
				flex-basis: 65%;
				height: 30rem;
			}
		}
	}

	@media (min-width: 1500px) {
		.iframe {
			margin-inline: auto;
			display: flex;
			justify-content: center;
			align-items: center;

			iframe {
				flex-basis: 65%;
				height: 35rem;
			}
		}
	}
</style>
