<script>
	import { fade } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';
	import Photos from '$lib/components/Photos.svelte';
	// import MasonryGallery from '$lib/components/MasonryGallery.svelte';

	$effect(() => {
		console.log(Photos);
	});
</script>

<SEO
	title="Photos of me"
	description="Gabriel Atwell's Photos"
	keywords="photos of gabe, photos of gabriel, images"
/>

<main>
	<Photos />

	<!-- <MasonryGallery /> -->
</main>
