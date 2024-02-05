<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Discord from '$lib/components/Discord.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import '../app.css';
	import LinkedIn from '$lib/components/LinkedIn.svelte';
	import Reddit from '$lib/components/Reddit.svelte';
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
<main class="desktop">
	<NavBar />
	<br />
	<slot />
</main>

<footer />

<style>
	:global(html, body) {
		background-color: #0f0f0f;
	}

	.desktop {
		width: 100%;
	}
</style>
