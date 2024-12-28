<script>
	// Reactive variables
	let deferredPrompt = $state(null);
	let isInstallable = $state(false);

	// Effect to listen for PWA events
	$effect(() => {
		function handleBeforeInstallPrompt(event) {
			event.preventDefault(); // Prevent automatic prompt
			deferredPrompt = event; // Store the event
			isInstallable = true; // Show the install button
			console.log('PWA install prompt fired');
		}

		function handleAppInstalled() {
			console.log('PWA installed');
			isInstallable = false; // Hide the install button
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

	// Function to handle installation
	const installApp = async () => {
		if (!deferredPrompt) return;

		deferredPrompt.prompt(); // Show the prompt

		const choiceResult = await deferredPrompt.userChoice;
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the PWA installation');
		} else {
			console.log('User dismissed the PWA installation');
		}

		// Reset after interaction
		deferredPrompt = null;
		isInstallable = false;
	};
</script>

<button aria-label="install" onclick={installApp} hidden={!isInstallable}
	><i class="fa-solid fa-download"></i> <span class="desc">install</span></button
>

<style>
	button {
		width: fit-content;
		margin-inline: auto;
		font-size: clamp(1rem, 2vw, 2rem);
		font-weight: 700;
		background-color: var(--dark-pale);
		color: var(--blackest);
		border-radius: 8px;
		outline: none;
		border: none;
		cursor: pointer;
		pointer-events: auto;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		position: fixed;
		bottom: 4rem;
		left: 1rem;

		&:focus {
			box-shadow: 0 0 0px var(--white);
		}

		& i {
			color: var(--blackest);
			align-items: center;
		}

		& .desc {
			font-size: clamp(0.8rem, 1.5vw, 1.5rem);
			margin-top: 0.5rem;
		}
	}

	@media (min-width: 750px) {
		button {
			bottom: 3rem;
			left: 2rem;
		}
	}

	@media (max-width: 500px) {
		button {
			margin: 1rem;

			& .desc {
				display: none;
			}
		}
	}
</style>
