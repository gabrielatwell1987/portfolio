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
		<i class="fa-solid fa-share-nodes"></i>
		<span class="desc">share</span>
	</button>
	{#if shareFallback}
		<div class="share-fallback">
			<p>
				Sharing is not supported in this browser.<br /><br />
				On iOS in Safari, tap the <b>Share</b> icon
				<span style="font-size:1.2em;">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						id="Ios-Share--Streamline-Outlined-Material"
						height="24"
						width="24"
					>
						<title>iOS Share Icon</title>
						<path
							fill="var(--clr-main)"
							d="M5.5 23c-0.4 0 -0.75 -0.15 -1.05 -0.45 -0.3 -0.3 -0.45 -0.65 -0.45 -1.05V8.775c0 -0.4 0.15 -0.75 0.45 -1.05 0.3 -0.3 0.65 -0.45 1.05 -0.45h4.225v1.5H5.5V21.5h13V8.775h-4.275v-1.5H18.5c0.4 0 0.75 0.15 1.05 0.45 0.3 0.3 0.45 0.65 0.45 1.05V21.5c0 0.4 -0.15 0.75 -0.45 1.05 -0.3 0.3 -0.65 0.45 -1.05 0.45H5.5Zm5.725 -7.675V3.9l-2.2 2.2 -1.075 -1.075L11.975 1 16 5.025l-1.075 1.075 -2.2 -2.2v11.425h-1.5Z"
							stroke-width="0.5"
						></path>
					</svg>
				</span>
				in Safari's toolbar and choose <b>'Add to Home Screen'</b> to install this app.
			</p>
			<button class="close-button" onclick={closeFallback}>Close</button>
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
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
			color: var(--clr-invert);
			align-items: center;
			cursor: pointer;
		}
		& .desc {
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
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
		background: var(--clr-invert);
		color: var(--clr-main);
		padding: 1em;
		border: 1px solid var(--clr-main);
		border-radius: var(--radius);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		z-index: 2000;

		& button {
			margin-top: 0.5em;
			background: var(--clr-invert);
			color: var(--clr-main);
			border: none;
			padding: 0.5em 1em;
			border-radius: 4px;
			cursor: pointer;
		}

		& .close-button {
			border: 2px solid var(--clr-gray);
		}
	}
</style>
