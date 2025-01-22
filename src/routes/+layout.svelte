<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '@picocss/pico/css/pico.min.css';
	import { page } from '$app/stores';
	// import { onNavigate } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import SkipLink from '$lib/components/SkipLink.svelte';
	import ViewTransitions from '$lib/components/ViewTransitions.svelte';

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

	// // view transition
	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => new Promise(resolve));
	// 		// document.startViewTransition(async () => {
	// 		// 	resolve();
	// 		// 	await navigation.complete;
	// 		// });
	// 	});
	// });

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

<!-- loading animation -->
{#if !isPageLoaded}
	<Loading />
{/if}

<SkipLink />

<ViewTransitions />

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

	/* :root::view-transition-old(root) {
		animation: 1s cubic-bezier(0.4, 0, 1, 1) both fade-out;
		300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	} */

	/* :root::view-transition-new(root) {
		animation: 2s cubic-bezier(0, 0, 0.2, 1) 1s both fade-in;
		300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	} */

	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		position: relative;
		overflow: hidden;
	}

	/* @keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	} */

	/* @keyframes fade-out {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	} */

	/* @keyframes slide-from-right {
		from {
			transform: translateX(-50px);
		}
	} */

	/* @keyframes slide-to-left {
		to {
			transform: translateX(50px);
		}
	} */
</style>
