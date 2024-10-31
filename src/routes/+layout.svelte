<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
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
					if (confirm('We need to update the app. Do you want to reload the page?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						location.reload();
					}
				}
			});
		});
	}

	onMount(async () => {
		function setErudaPosition() {
			eruda.position({ x: window.innerWidth - 70, y: window.innerHeight - 120 });
		}

		const eruda = (await import('eruda')).default;
		eruda.init();

		setErudaPosition();

		addEventListener('resize', setErudaPosition);

		isPageLoaded = true;

		detectSWUpdate();
	});

	$: canonicalUrl = $page.url.origin + $page.url.pathname;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
	/>

	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Analytics />

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
	:global(body) {
		width: 100%;
		height: 100%;
	}

	main {
		width: 100%;
	}

	.footer {
		margin-top: 7%;
		margin-bottom: -6%;
	}
</style>
