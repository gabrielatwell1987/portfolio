<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	// Reactive variables
	let deferredPrompt = $state(null);
	let isInstallable = $state(false);
	let installStatus = $state('');

	// Effect to listen for PWA events
	$effect(() => {
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

		// Add event listeners
		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		window.addEventListener('appinstalled', handleAppInstalled);

		// Cleanup on destroy
		return () => {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
			window.removeEventListener('appinstalled', handleAppInstalled);
		};
	});

	// Install button click handler
	const installApp = async () => {
		if (!deferredPrompt) {
			console.log('❌ InstallButton: No deferredPrompt available, cannot install');
			return;
		}

		installStatus = 'Installing app...';

		deferredPrompt.prompt();

		const choiceResult = await deferredPrompt.userChoice;

		if (choiceResult.outcome === 'accepted') {
			installStatus = 'Installation accepted';
		} else {
			installStatus = 'Installation declined';
		}

		// Reset after interaction
		deferredPrompt = null;
		isInstallable = false;

		// Clear status after a delay
		setTimeout(() => {
			installStatus = '';
		}, 3000);
	};
</script>

<A11yAnnouncer message={installStatus} />

<button aria-label="Install this app as a PWA" onclick={installApp} hidden={!isInstallable}>
	<i class="fa-solid fa-download"></i>

	<span class="desc">install</span>
</button>

<style>
	button {
		width: fit-content;
		margin-inline: auto;
		font-family: var(--bronova);
		font-size: clamp(var(--sm), 2vw, var(--h4));
		font-weight: 700;
		background-color: var(--clr-main);
		color: var(--clr-inverted);
		outline: 3px solid var(--clr-inverted);
		outline-offset: -7px;
		border: 1px solid var(--clr-inverted);
		border-radius: var(--radius);
		opacity: 0.75;
		transition: 500ms;
		cursor: pointer;
		pointer-events: auto;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		align-items: center;
		gap: 1rem;
		position: fixed;
		bottom: 4rem;
		left: 1rem;
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
			color: var(--clr-inverted);
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
</style>
