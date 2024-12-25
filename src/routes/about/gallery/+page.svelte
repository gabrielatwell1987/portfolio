<script>
	import Gallery from '$lib/components/Gallery.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$effect(() => {
		console.log(Gallery);
	});
</script>

<SEO
	title="Random photo gallery"
	description="Random Photo Gallery"
	keywords="random photo gallery, made with gsap"
/>

<!-- Photo gallery -->
<Gallery />
