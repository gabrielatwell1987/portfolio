<script>
	export let src;
	export let title;
</script>

<iframe
	width="560"
	height="315"
	{src}
	{title}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
	aria-label={title}
/>

<style>
	iframe {
		margin: 2rem 0 0 30%;
		border: 2px solid var(--dark-gray);
		padding: 0.5rem;
		border-radius: 5px;
	}

	@media (min-width: 200px) {
		iframe {
			display: block;
			margin: 15% auto;
			width: 119%;
			margin-right: 5%;
		}
	}

	@media (min-width: 500px) {
		iframe {
			display: block;
			margin: 10% auto;
			width: 50%;
		}
	}
</style>
