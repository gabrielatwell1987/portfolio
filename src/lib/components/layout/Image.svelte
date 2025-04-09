<script>
	/** @type {{src: any, alt: any}} */
	let { src, alt, width } = $props();

	let imageElement;

	$effect(() => {
		const observer = new IntersectionObserver(([entry], observer) => {
			if (entry.isIntersecting) {
				imageElement.src = src;
				observer.unobserve(imageElement);
			}
		});

		observer.observe(imageElement);

		return () => observer.disconnect();
	});
</script>

<img {src} {alt} {width} bind:this={imageElement} />

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
		align-items: center;
	}
</style>
