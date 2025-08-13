<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	// Reactive variables
	let deferredPrompt = $state(null);
	let isInstallable = $state(false);
	let installStatus = $state('');

	// Effect to listen for PWA events
	$effect(() => {
		console.log('🔧 InstallBtn: Effect started, setting up PWA event listeners');

		function handleBeforeInstallPrompt(event) {
			console.log('🎯 InstallBtn: beforeinstallprompt event fired!');
			event.preventDefault();
			deferredPrompt = event;
			isInstallable = true;
			installStatus = 'App can now be installed';
			console.log('✅ InstallBtn: Button should now be visible, isInstallable =', true);
		}

		function handleAppInstalled() {
			console.log('🎉 InstallBtn: PWA installed successfully');
			isInstallable = false;
			installStatus = 'App installed successfully';
		}

		// Add event listeners
		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		window.addEventListener('appinstalled', handleAppInstalled);

		console.log('👂 InstallBtn: Event listeners added for beforeinstallprompt and appinstalled');

		// Cleanup on destroy
		return () => {
			console.log('🧹 InstallBtn: Cleaning up event listeners');
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
			window.removeEventListener('appinstalled', handleAppInstalled);
		};
	});

	// Install button click handler
	const installApp = async () => {
		console.log('📱 InstallBtn: Install button clicked');
		console.log('📱 InstallBtn: deferredPrompt available?', !!deferredPrompt);

		if (!deferredPrompt) {
			console.log('❌ InstallBtn: No deferredPrompt available, cannot install');
			return;
		}

		installStatus = 'Installing app...';
		console.log('⏳ InstallBtn: Showing install prompt...');

		deferredPrompt.prompt();

		const choiceResult = await deferredPrompt.userChoice;
		console.log('🗳️ InstallBtn: User choice result:', choiceResult.outcome);

		if (choiceResult.outcome === 'accepted') {
			console.log('✅ InstallBtn: User accepted the PWA installation');
			installStatus = 'Installation accepted';
		} else {
			console.log('❌ InstallBtn: User dismissed the PWA installation');
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
		background-color: transparent;
		color: var(--clr-main);
		outline: 3px solid var(--clr-main);
		outline-offset: -7px;
		border: 1px solid var(--clr-main);
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
			color: var(--clr-main);
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
