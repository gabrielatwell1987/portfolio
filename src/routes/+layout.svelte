<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	let isPageLoaded = $state(false);

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
	<link rel="preconnect" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />

	<link
		rel="preconnect"
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
	{@render children?.()}

	<div class="footer">
		<Footer />
	</div>
</main>

<footer></footer>

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
