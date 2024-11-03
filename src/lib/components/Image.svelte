<script>
	/** @type {{src: any, alt: any}} */
	let { src, alt, width } = $props();
</script>

<img {src} {alt} {width} />

<style>
	img {
		max-width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 2.5%;
		z-index: 9;
		margin-inline: auto;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}
</style>
