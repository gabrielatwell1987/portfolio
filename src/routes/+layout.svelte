<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Analytics from '$lib/data/Analytics.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '@picocss/pico/css/pico.min.css';

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
	<link rel="canonical" href={canonicalUrl} />

	<!-- Request Metrics -->
	<script>
		(function (t, e, n, r) {
			function a() {
				return e && e.now ? e.now() : null;
			}
			if (!n.version) {
				n._events = [];
				n._errors = [];
				n._metadata = {};
				n._urlGroup = null;
				window.RM = n;
				n.install = function (e) {
					n._options = e;
					var a = t.createElement('script');
					a.async = true;
					a.crossOrigin = 'anonymous';
					a.src = r;
					var o = t.getElementsByTagName('script')[0];
					o.parentNode.insertBefore(a, o);
				};
				n.identify = function (t, e) {
					n._userId = t;
					n._identifyOptions = e;
				};
				n.sendEvent = function (t, e) {
					n._events.push({ eventName: t, metadata: e, time: a() });
				};
				n.setUrlGroup = function (t) {
					n._urlGroup = t;
				};
				n.track = function (t, e) {
					n._errors.push({ error: t, metadata: e, time: a() });
				};
				n.addMetadata = function (t) {
					n._metadata = Object.assign(n._metadata, t);
				};
			}
		})(
			document,
			window.performance,
			window.RM || {},
			'https://cdn.requestmetrics.com/agent/current/rm.js'
		);
		RM.install({
			token: 'w9zu3ep:q8zu6pd'
		});
	</script>
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
