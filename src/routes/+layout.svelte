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

	function detectSWUpdate() {
		if (!browser) return;

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js');
		}
	}

	$effect(async () => {
		// Load eruda in development
		if (import.meta.env.DEV) {
			const eruda = (await import('eruda')).default;
			eruda.init();

			function setErudaPosition() {
				eruda.position({ x: window.innerWidth - 70, y: window.innerHeight - 120 });
			}

			setErudaPosition();
			addEventListener('resize', setErudaPosition);
		}

		detectSWUpdate();

		isPageLoaded = true;

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
