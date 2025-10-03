<script>
	import { asClassComponent } from 'svelte/legacy';
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
	let showUpdateMessage = $state(false);

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
									navigator.serviceWorker.controller &&
									!sessionStorage.getItem('updateNotified')
								) {
									sessionStorage.setItem('updateNotified', 'true');
									newWorker.postMessage({ type: 'SKIP_WAITING' });
									showUpdateMessage = true;
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

	function reloadPage() {
		window.location.reload();
	}

	$effect(() => {
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

{#if showUpdateMessage}
	<div class="update-banner">
		<p>New update detected. Reload to apply?</p>
		<button onclick={reloadPage}>Reload</button>
	</div>
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

	.update-banner {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 2px solid var(--clr-main);
		background: var(--clr-inverted);
		color: var(--clr-main);
		padding: 1rem;
		text-align: center;
		z-index: 1000;
		max-width: fit-content;
		height: auto;
		margin-inline: auto;
		font-size: clamp(var(--sm), 2vw, var(--h5));
	}

	.update-banner button {
		padding: 0.5rem 1rem;
		background: var(--clr-inverted);
		color: var(--clr-pale);
		border: 1px solid var(--clr-pale);
		cursor: pointer;
		max-width: 85%;
		margin-inline: auto;
		font-size: clamp(var(--sm), 1.5vw, var(--h6));
		font-weight: 600;
	}
</style>
