<script>
	/** @type {{src: any, alt: any, width?: any, aspectRatio?: string}} */
	let { src, alt, width, aspectRatio } = $props();

	function lazyLoadImg(node) {
		const observer = new IntersectionObserver(([entry], observer) => {
			if (entry.isIntersecting) {
				node.src = src;
				observer.unobserve(node);
			}
		});
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<img
	use:lazyLoadImg
	{alt}
	{width}
	style={aspectRatio ? `aspect-ratio: ${aspectRatio};` : undefined}
/>

<style>
	img {
		max-width: 100%;
		height: auto;
		object-fit: contain;
		border-radius: 2.5%;
		z-index: 9;
		margin-inline: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
