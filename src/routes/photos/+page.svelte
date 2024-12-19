<script>
	import { fade } from 'svelte/transition';
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
	title="Photos of Me"
	description="Gabriel Atwell's Photos"
	keywords="photos of gabe, photos of gabriel"
/>

<main transition:fade={{ delay: delay, duration: duration }}>
	<Photos />

	<!-- <MasonryGallery /> -->
</main>
