<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import '@picocss/pico/css/pico.min.css';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import Loading from '$lib/components/layout/Loading.svelte';
	import SkipLink from '$lib/components/layout/SkipLink.svelte';
	import ViewTransition from '$lib/components/layout/ViewTransition.svelte';
	import { createLoadingContext } from '$lib/data/loading.svelte.js';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
	const loading = createLoadingContext();

	function detectSWUpdate() {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/service-worker.js', { type: 'module' })
				.then((registration) => {
					registration.addEventListener('updatefound', () => {
						const newWorker = registration.installing;
						if (newWorker) {
							newWorker.addEventListener('statechange', () => {
								if (
									newWorker &&
									newWorker.state === 'installed' &&
									navigator.serviceWorker.controller
								) {
									newWorker.postMessage({ type: 'SKIP_WAITING' });
								}
							});
						}
					});
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error);
				});
		}
	}

	onMount(() => {
		loading.isLoaded = true;
		detectSWUpdate();
	});
</script>

<SkipLink />
<ViewTransition />

<!-- loading animation -->
{#if !loading.isLoaded}
	<Loading />
{/if}

<NavBar />

<main style="visibility: {loading.isLoaded ? 'visible' : 'hidden'};">
	<div id="main-content" tabindex="-1">
		{@render children()}
	</div>

	<Footer />
</main>

<style>
	:global(body) {
		width: 100%;
		height: 100%;
		min-height: 100vh;
	}

	main {
		min-height: 100vh;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow: hidden;
		opacity: 1;
		transition: opacity 0.3s ease-out;
	}

	#main-content {
		min-height: calc(100vh - 120px);
		will-change: auto;
	}
</style>
