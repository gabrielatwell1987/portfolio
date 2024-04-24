<script>
	export let url;
	export let name;
</script>

<iframe
	width="560"
	height="315"
	src={url}
	title={name}
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
	aria-label={name}
/>

<style>
	iframe {
		margin: 2rem 0 0 30%;
		border: 2px solid var(--dark-gray);
		padding: 0.25rem;
		border-radius: 5px;
	}

	@media (min-width: 200px) {
		iframe {
			display: none;
		}
	}

	@media (min-width: 720px) {
		iframe {
			display: block;
			margin: 0 auto;
		}
	}
</style>
