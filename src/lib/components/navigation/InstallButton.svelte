<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let deferredPrompt = $state(null);
	let isInstallable = $state(false);
	let installStatus = $state('');
	let isIOS = $state(false);
	let shareFallback = $state(false);
	let shareClicked = $state(false);

	// Detect iOS
	$effect(() => {
		const ua = window.navigator.userAgent;
		const isAppleMobile = /iphone|ipad|ipod/i.test(ua);
		const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
		const isMacSafari = /macintosh/i.test(ua) && isSafari;
		isIOS =
			(isAppleMobile &&
				!window.MSStream &&
				!window.matchMedia('(display-mode: standalone)').matches) ||
			isMacSafari;
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
	const shareApp = () => {
		shareFallback = true;
		shareClicked = true;
	};

	const closeFallback = () => {
		shareFallback = false;
	};
</script>

<A11yAnnouncer message={installStatus} />

{#if isIOS}
	{#if !shareClicked}
		<button aria-label="Share this app" onclick={shareApp}>
			<i class="fa-solid fa-share-from-square"></i>
			<span class="desc">install</span>
		</button>
	{/if}
	{#if shareFallback}
		<div class="apple-instructions">
			<p><u>On iOS:</u></p>
			<p>
				open the Safari browser. Tap the Share icon
				<span>
					(<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						id="Apple-Share-Icon"
						height="21"
						width="21"
						class="share-icon"
					>
						<title>iOS Share Icon</title>
						<path
							fill="var(--clr-main)"
							d="M5.5 23c-0.4 0 -0.75 -0.15 -1.05 -0.45 -0.3 -0.3 -0.45 -0.65 -0.45 -1.05V8.775c0 -0.4 0.15 -0.75 0.45 -1.05 0.3 -0.3 0.65 -0.45 1.05 -0.45h4.225v1.5H5.5V21.5h13V8.775h-4.275v-1.5H18.5c0.4 0 0.75 0.15 1.05 0.45 0.3 0.3 0.45 0.65 0.45 1.05V21.5c0 0.4 -0.15 0.75 -0.45 1.05 -0.3 0.3 -0.65 0.45 -1.05 0.45H5.5Zm5.725 -7.675V3.9l-2.2 2.2 -1.075 -1.075L11.975 1 16 5.025l-1.075 1.075 -2.2 -2.2v11.425h-1.5Z"
							stroke="var(--clr-link)"
							stroke-width=".8"
						></path>
					</svg>)
				</span>
				in Safari's toolbar and choose <b>'Add to Home Screen'</b> to install this app.
			</p>
			<p><u>On iMac:</u></p>
			<p>
				Do the same process but choose <b>'Add to Dock'</b> to install this app.
			</p>
			<button data-close-button onclick={closeFallback}>Close</button>
		</div>
	{/if}
{:else}
	<button aria-label="Install this app as a PWA" onclick={installApp} hidden={!isInstallable}>
		<i class="fa-solid fa-file-arrow-down"></i>
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
		transition: 300ms;
		cursor: pointer;
		pointer-events: auto;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		position: fixed;
		bottom: 1em;
		right: 1em;
		opacity: 1;
		view-transition-name: installbtn;

		@media (width <= 768px) {
			bottom: 2.5em;
		}

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
			bottom: 1em;
			right: 2em;
		}

		@media (width <= 500px) {
			margin: 1em;
		}
	}

	.apple-instructions {
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
		animation: slideUp 0.5s ease-out forwards;

		& button {
			margin-top: 0.5em;
			background: var(--clr-invert);
			color: var(--clr-main);
			border: none;
			padding: 0.5em 1em;
			border-radius: 4px;
			cursor: pointer;
		}

		& p {
			font-size: clamp(var(--sm), 1.2vw, var(--h6));
			margin-bottom: 0.5em;

			&:nth-of-type(1),
			&:nth-of-type(3) {
				font-family: var(--bronova-bold);
			}

			& b {
				font-weight: 900;
				color: var(--clr-link);
			}

			& .share-icon {
				display: inline-block;
				width: clamp(var(--h6), 1.2vw, var(--h4));
				height: auto;
				vertical-align: middle;
				max-width: 100%;
				max-height: 100%;
			}
		}

		& [data-close-button] {
			bottom: 2em;
			border: 1px solid var(--clr-main);

			@media (width <= 500px) {
				bottom: -1.5em;
			}
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(50%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
