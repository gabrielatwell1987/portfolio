<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let deferredPrompt = $state(null);
	let isInstallable = $state(false);
	let installStatus = $state('');
	let isIOS = $state(false);

	let shareFallback = $state(false);

	// Detect iOS
	$effect(() => {
		const ua = window.navigator.userAgent;
		isIOS =
			/iphone|ipad|ipod/i.test(ua) &&
			!window.MSStream &&
			!window.matchMedia('(display-mode: standalone)').matches;
	});

	// PWA install prompt for non-iOS
	$effect(() => {
		if (isIOS) return;

		function handleBeforeInstallPrompt(event) {
			event.preventDefault();
			deferredPrompt = event;
			isInstallable = true;
			installStatus = 'App can now be installed';
		}

		function handleAppInstalled() {
			isInstallable = false;
			installStatus = 'App installed successfully';
		}

		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		window.addEventListener('appinstalled', handleAppInstalled);

		return () => {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
			window.removeEventListener('appinstalled', handleAppInstalled);
		};
	});

	const installApp = async () => {
		if (!deferredPrompt) return;
		installStatus = 'Installing app...';
		deferredPrompt.prompt();
		const choiceResult = await deferredPrompt.userChoice;
		installStatus =
			choiceResult.outcome === 'accepted' ? 'Installation accepted' : 'Installation declined';
		deferredPrompt = null;
		isInstallable = false;
		setTimeout(() => (installStatus = ''), 3000);
	};

	// iOS share handler
	const shareApp = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: document.title,
					text: 'Check out this app!',
					url: window.location.href
				});
			} catch (e) {
				installStatus = 'Share cancelled';
				setTimeout(() => (installStatus = ''), 2000);
			}
		} else {
			// installStatus = 'Sharing not supported';
			// setTimeout(() => (installStatus = ''), 2000);
			shareFallback = true;
		}
	};

	const closeFallback = () => {
		shareFallback = false;
	};
</script>

<A11yAnnouncer message={installStatus} />

{#if isIOS}
	<button aria-label="Share this app" onclick={shareApp}>
		<i class="fa-solid fa-share-from-square"></i>
		<span class="desc">share</span>
	</button>
	{#if shareFallback}
		<div class="share-fallback">
			<p>
				Sharing is not supported in this browser.<br />
				On iOS, tap the <b>Share</b> icon <span style="font-size:1.2em;">&#x1f5d2;</span> in
				Safari's toolbar and choose <b>Add to Home Screen</b> to install this app.
			</p>
			<button onclick={closeFallback}>Close</button>
		</div>
	{/if}
{:else}
	<button aria-label="Install this app as a PWA" onclick={installApp} hidden={!isInstallable}>
		<i class="fa-solid fa-download"></i>
		<span class="desc">install</span>
	</button>
{/if}

<style>
	button {
		width: fit-content;
		margin-inline: auto;
		font-family: var(--bronova);
		font-size: clamp(var(--sm), 2vw, var(--h4));
		font-weight: 700;
		background-color: var(--clr-main);
		color: var(--clr-invert);
		outline: 3px solid var(--clr-invert);
		outline-offset: -7px;
		border: 1px solid var(--clr-invert);
		border-radius: var(--radius);
		transition: 250ms;
		cursor: pointer;
		pointer-events: auto;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		align-items: center;
		gap: 1rem;
		position: fixed;
		bottom: 1em;
		left: 1em;
		opacity: 1;
		view-transition-name: installbtn;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
			color: var(--clr-main);
		}

		&:hover {
			opacity: 0.95;
			outline-offset: 0px;
		}

		& i {
			font-size: clamp(var(--sm), 1.5vw, var(--h5));
			color: var(--clr-invert);
			align-items: center;
			cursor: pointer;
		}
		& .desc {
			font-size: clamp(var(--sm), 1.5vw, var(--h5));
			font-weight: 900;
			margin-top: 0.5rem;
			cursor: pointer;
		}

		@media (width >= 750px) {
			bottom: 3rem;
			left: 2rem;
		}

		@media (width <= 500px) {
			margin: 1rem;
		}
	}

	.share-fallback {
		position: fixed;
		bottom: 5em;
		left: 1em;
		right: 1em;
		background: var(--clr-main, #222);
		color: var(--clr-invert, #fff);
		padding: 1em;
		border-radius: var(--radius, 8px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		z-index: 2000;

		& button {
			margin-top: 0.5em;
			background: var(--clr-invert, #fff);
			color: var(--clr-main, #222);
			border: none;
			padding: 0.5em 1em;
			border-radius: 4px;
			cursor: pointer;
		}
	}
</style>
