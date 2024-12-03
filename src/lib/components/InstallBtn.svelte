<script>
	// Reactive variables
	let deferredPrompt = null;
	let isInstallable = false;

	$effect(() => {
		// Effect to handle 'beforeinstallprompt' and 'appinstalled' events
		$effect(() => {
			function onBeforeInstallPrompt(event) {
				console.log('PWA install prompt fired');

				event.preventDefault(); // Prevent the default browser install prompt
				deferredPrompt = event; // Save the prompt event
				isInstallable = true; // Show the install button
			}

			function onAppInstalled() {
				console.log('PWA installed');
				isInstallable = false; // Hide the install button
			}

			window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
			window.addEventListener('appinstalled', onAppInstalled);

			// Cleanup listeners on destroy
			return () => {
				window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
				window.removeEventListener('appinstalled', onAppInstalled);
			};
		});
	});

	// Function to handle the installation
	async function installApp() {
		if (!deferredPrompt) return;

		deferredPrompt.prompt();

		const choiceResult = await deferredPrompt.userChoice;

		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the PWA installation');
		} else {
			console.log('User dismissed the PWA installation');
		}

		deferredPrompt = null;
		isInstallable = false;
	}
</script>

<button aria-label="install" onclick={installApp}><i class="fa-solid fa-download"></i></button>

<style>
	button {
		width: fit-content;
		margin-inline: auto;
		font-size: clamp(1rem, 2vw, 2rem);
		font-weight: 700;
		background-color: var(--blue);
		outline: none;
		border: none;
		cursor: pointer;
		z-index: 16;
	}

	button:focus {
		box-shadow: 0 0 0px var(--white);
	}

	button i {
		color: var(--white);
		cursor: pointer;
	}

	button:hover {
		color: var(--sky);
	}
</style>
