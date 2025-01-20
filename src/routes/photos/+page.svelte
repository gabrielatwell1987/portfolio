<script>
	import SEO from '$lib/data/SEO.svelte';
	import Photos from '$lib/components/Photos.svelte';
	// import MasonryGallery from '$lib/components/MasonryGallery.svelte';

	let delay = $state(100);
	let duration = $state(300);

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
