<script>
	/** @type {{src: any, alt: any}} */
	let { src, alt } = $props();
</script>

<img {src} {alt} />

<style>
	img {
		max-width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 2.5%;
		z-index: 9;
	}
</style>
