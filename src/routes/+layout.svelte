<script>
	import '../app.css';
	import '@picocss/pico/css/pico.min.css';
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
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
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;

			newSW.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('Update available.. Install now?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						location.reload();
					}
				}
			});
		});
	}

	$effect(async () => {
		function setErudaPosition() {
			eruda.position({ x: window.innerWidth - 70, y: window.innerHeight - 120 });
		}

		const eruda = (await import('eruda')).default;
		eruda.init();

		setErudaPosition();

		addEventListener('resize', setErudaPosition);

		isPageLoaded = true;
		detectSWUpdate();

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

<main style="visibility: {isPageLoaded ? 'visible' : 'hidden'};">
	<NavBar />

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
		position: relative;
		overflow: hidden;
		/* Prevent layout shift during loading */
		contain: layout style;
		/* Always reserve space to prevent CLS */
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	/* Reserve space for content to prevent CLS */
	#main-content {
		min-height: calc(100vh - 120px); /* Account for nav and footer */
		contain: layout style;
		/* Additional stability for content loading */
		will-change: auto;
	}

	/* Prevent layout shifts during page transitions */
	main {
		contain: layout;
		isolation: isolate;
	}
</style>
