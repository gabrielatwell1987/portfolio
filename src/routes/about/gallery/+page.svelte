<script>
	import Gallery from '$lib/components/Gallery.svelte';

	$: console.log('Random Photos');
</script>

<svelte:head>
	<title>Random Photos</title>
	<meta name="description" content="Random Photo Gallery" />
	<meta name="keywords" content="Random Photos" />
</svelte:head>

<!-- Photo gallery -->
<Gallery />
