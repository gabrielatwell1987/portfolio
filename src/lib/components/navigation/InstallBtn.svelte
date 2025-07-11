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
			event.preventDefault(); // Prevent automatic prompt
			deferredPrompt = event; // Store the event
			isInstallable = true; // Show the install button
			installStatus = 'App can now be installed';
			console.log('PWA install prompt fired');
		}

		function handleAppInstalled() {
			console.log('PWA installed');
			isInstallable = false; // Hide the install button
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
		if (!deferredPrompt) return;

		installStatus = 'Installing app...';

		deferredPrompt.prompt(); // Show the prompt

		const choiceResult = await deferredPrompt.userChoice;
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the PWA installation');
			installStatus = 'Installation accepted';
		} else {
			console.log('User dismissed the PWA installation');
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
		background-color: var(--dark-pale);
		color: var(--black);
		border-radius: 8px;
		outline: none;
		border: none;
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

		&:hover {
			opacity: 0.9;
		}

		&:not(:hover) {
			opacity: 1;
		}

		&:focus {
			box-shadow: 0 0 0px var(--white);
		}

		& i {
			font-size: clamp(var(--sm), 1.5vw, var(--h5));
			color: var(--black);
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
