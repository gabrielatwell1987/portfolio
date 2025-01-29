<script>
	import '../app.css';
	import '@picocss/pico/css/pico.min.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import SkipLink from '$lib/components/SkipLink.svelte';
	import ViewTransition from '$lib/components/ViewTransition.svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
	let isPageLoaded = $state(false);

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;

			newSW.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('Update available.. Download now?')) {
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
	});

	let canonicalUrl = $derived($page.url.origin + $page.url.pathname);
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
	}

	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		position: relative;
		overflow: hidden;
	}
</style>
