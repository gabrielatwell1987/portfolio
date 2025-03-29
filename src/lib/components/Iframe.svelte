<script>
	/** @type {{src: any, title: any}} */
	let { src, title } = $props();
</script>

<main class="iframe-container">
	<div class="responsive-iframe">
		<iframe
			{src}
			{title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
			allowfullscreen
			aria-label={title}
		></iframe>
	</div>
</main>

<style>
	.iframe-container {
		margin-inline: auto;
		margin-top: 5em;
		margin-bottom: 15em;
		width: 100%;
		max-width: 90vw;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;

		& .responsive-iframe {
			position: relative;
			width: 100%;
			max-width: 1500px;
			height: 0;
			padding-bottom: 56.25%;
			overflow: hidden;
			border: 2px solid var(--dark-gray);
			border-radius: var(--radius);

			& iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border: none;
			}

			@media (width <= 768px) {
				width: 90%;
			}
		}

		@media (width <= 1500px) {
			margin-bottom: 10em;
		}

		@media (width <= 1200px) {
			margin-bottom: 8em;
		}

		@media (width <= 1050px) {
			margin-bottom: 3em;
		}

		@media (width <= 900px) {
			margin-bottom: 2em;
		}

		@media (width <= 768px) {
			height: auto;
			padding: 2rem 0;
			margin-bottom: 8em;
		}
	}
</style>
