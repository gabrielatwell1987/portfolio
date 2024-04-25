<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import SEO from '$lib/data/SEO.svelte';
</script>

<svelte:head>
	<!-- website theme cdn -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

	<!-- font awesome cdn -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
	/>
</svelte:head>

<!-- data from SEO and analytics -->
<Analytics />
<SEO title="gabe ATWELL" description="Gabriel Atwell's Portfolio" />

<!-- layout -->
<main>
	<NavBar />
	<br />
	<br />
	<br />
	<slot />
</main>

<footer />

<style>
	/* global bg color */
	:global(html, body) {
		background-image: radial-gradient(circle at center, #2f2f2f 0%, #000 60%);
	}

	main {
		width: 100%;
	}
</style>
