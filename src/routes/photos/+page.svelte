<script>
	import SEO from '$lib/data/SEO.svelte';
	import Photos from '$lib/components/Photos.svelte';
	import Parallax from '$lib/components/Parallax.svelte';

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

	<Parallax />
</main>
