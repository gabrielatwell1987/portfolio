<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';

	let isPageLoaded = false;

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;

			newSW.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('Press okay to update..')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						location.reload();
					}
				}
			});
		});
	}

	onMount(async () => {
		const eruda = (await import('eruda')).default;
		eruda.init();

		isPageLoaded = true;

		detectSWUpdate();
	});
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
{#if !isPageLoaded}
	<Loading />
{/if}

<main>
	<NavBar />
	<br />
	<br />
	<br />
	<slot />

	<div class="footer">
		<Footer />
	</div>
</main>

<footer />

<style>
	main {
		width: 100%;
	}

	.footer {
		margin-top: 7%;
		margin-bottom: -6%;
	}

	:global(body) {
		width: 100%;
		height: 100%;
	}
</style>
