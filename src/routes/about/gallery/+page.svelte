<script>
	import Gallery from '$lib/components/Gallery.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$: console.log('Random Photos');
</script>

<SEO title="Random Photos" description="Random Photo Gallery" keywords="Random Photos" />

<!-- Photo gallery -->
<Gallery />
