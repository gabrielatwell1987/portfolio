<script>
	import { browser } from '$app/environment';
	import { navigating } from '$app/stores';
	import '../app.css';
	import '@picocss/pico/css/pico.min.css';
	import Analytics from '$lib/data/Analytics.svelte';
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Loading from '$lib/components/layout/Loading.svelte';
	import SkipLink from '$lib/components/layout/SkipLink.svelte';
	import ViewTransition from '$lib/components/layout/ViewTransition.svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
	let isPageLoaded = $state(false);

	async function detectSWUpdate() {
		if (!browser) return;

		if (import.meta.env.DEV) {
			return;
		}

		if (!('serviceWorker' in navigator)) {
			return;
		}

		try {
			const registration = await navigator.serviceWorker.ready;

			if (!registration) {
				return;
			}

			registration.addEventListener('updatefound', () => {
				const newSW = registration.installing;

				if (!newSW) return;

				newSW.addEventListener('statechange', () => {
					if (newSW.state === 'installed') {
						if (confirm('Updating to the latest version. Reload now?')) {
							newSW.postMessage({ type: 'SKIP_WAITING' });
							location.reload();
						}
					}
				});
			});
		} catch (error) {
			if (import.meta.env.DEV) {
				console.log('Service worker detection failed:', error);
			}
		}
	}

	$effect(async () => {
		// Only load eruda in development
		if (import.meta.env.DEV) {
			try {
				function setErudaPosition() {
					eruda.position({ x: window.innerWidth - 70, y: window.innerHeight - 120 });
				}

				const eruda = (await import('eruda')).default;
				eruda.init();

				setErudaPosition();

				addEventListener('resize', setErudaPosition);
			} catch (error) {
				console.warn('Failed to load eruda:', error);
			}
		}

		isPageLoaded = true;

		// Only try to detect SW updates and register SW in production
		if (!import.meta.env.DEV) {
			// Register service worker
			if ('serviceWorker' in navigator) {
				try {
					await navigator.serviceWorker.register('/service-worker.js');
					console.log('Service Worker registered');
					// Detect updates after registration
					detectSWUpdate();
				} catch (err) {
					console.error('Service Worker registration failed:', err);
				}
			}
		}

		// navigating
		if ($navigating) {
			if (document.startViewTransition) {
				document.startViewTransition();
			}
		}
	});
</script>

<Analytics />
<SkipLink />
<ViewTransition />

<!-- loading animation -->
{#if !isPageLoaded}
	<Loading />
{/if}

<NavBar />

<main style="visibility: {isPageLoaded ? 'visible' : 'hidden'};">
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
