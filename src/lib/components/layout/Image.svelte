<script>
	/** @type {{src: any, alt: any, width?: any}} */
	let { src, alt, width } = $props();

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

<img use:lazyLoadImg {alt} {width} />

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
