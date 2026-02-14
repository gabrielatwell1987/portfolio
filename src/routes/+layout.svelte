<script lang="ts">
	import '../app.css';
	import '@picocss/pico/css/pico.min.css';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import Loading from '$lib/components/layout/Loading.svelte';
	import SkipLink from '$lib/components/layout/SkipLink.svelte';
	import ViewTransition from '$lib/components/layout/view-transitions/ViewTransition.svelte';
	import { createLoadingContext } from '$lib/data/context/loading.svelte';
	import { createThemeContext } from '$lib/data/context/theme.svelte';
	import type { Snippet } from 'svelte';
	import PullToRefresh from '$lib/data/PullToRefresh.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
	const loading = createLoadingContext();
	const theme = createThemeContext();

	$effect(() => {
		if (typeof window === 'undefined') return;

		const abortController = new AbortController();

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/service-worker.js', { type: 'module' })
				.then((registration) => {
					registration.addEventListener(
						'updatefound',
						() => {
							const newWorker = registration.installing;
							if (newWorker) {
								newWorker.addEventListener(
									'statechange',
									() => {
										if (
											newWorker &&
											newWorker.state === 'installed' &&
											navigator.serviceWorker.controller
										) {
											newWorker.postMessage({ type: 'SKIP_WAITING' });
										}
									},
									{ signal: abortController.signal }
								);
							}
						},
						{ signal: abortController.signal }
					);
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error);
				});
		}

		return () => abortController.abort();
	});

	$effect(() => {
		loading.isLoaded = true;
	});
</script>

<PullToRefresh />
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
		overflow-x: clip;
		opacity: 1;
		transition: opacity 0.3s ease-out;
	}

	#main-content {
		min-height: calc(100vh - 120px);
		will-change: auto;
	}
</style>
