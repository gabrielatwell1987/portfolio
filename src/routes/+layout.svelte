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
	let canonicalUrl = $derived(() => {
		const { origin, pathname } = $page.url;
		// Remove trailing slash except for root path, and ensure consistent formatting
		const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
		// Ensure we always use the canonical domain
		const canonicalOrigin =
			origin.includes('localhost') || origin.includes('127.0.0.1')
				? origin
				: 'https://www.gabrielatwell.com';
		return `${canonicalOrigin}${normalizedPath}`;
	});

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

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Analytics />
<SkipLink />
<ViewTransition />

<!-- loading animation -->
{#if !isPageLoaded}
	<Loading />
{/if}

<main>
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
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		position: relative;
		overflow: hidden;
	}
</style>
