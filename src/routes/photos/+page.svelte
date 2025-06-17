<script>
	import SEO from '$lib/data/SEO.svelte';
	// import Photos from '$lib/components/photos/Photos.svelte';
	import Masonry from '$lib/components/photos/Masonry.svelte';
	// import Carousel from '$lib/components/photos/Carousel.svelte';

	$effect(() => {
		const main = document.querySelector('main');

		console.log(main);
	});
</script>

<SEO
	title="Photos of Me"
	description="Gabriel Atwell's Photos"
	keywords="photos of gabe, photos of gabriel, images"
/>

<main>
	<!-- <Photos /> -->

	<Masonry />

	<!-- <Carousel /> -->
</main>
