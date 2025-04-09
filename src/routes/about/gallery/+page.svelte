<script>
	import SEO from '$lib/data/SEO.svelte';
	import Gallery from '$lib/components/utils/Gallery.svelte';

	$effect(() => {
		console.log(Gallery);
	});
</script>

<SEO
	title="Random photo gallery"
	description="Random Photo Gallery"
	keywords="random photo gallery, made with gsap"
/>

<Gallery />
