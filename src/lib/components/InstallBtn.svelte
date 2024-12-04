<script>
	// Reactive variables
	let deferredPrompt = null;
	let isInstallable = $state(false);

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
		console.log('no deferred prompt');

		if (!deferredPrompt) return;

		console.log('deferred prompt');
		deferredPrompt.prompt();

		const choiceResult = await deferredPrompt.userChoice;
		console.log('User choice:', choiceResult.outcome);
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the PWA installation');
		} else {
			console.log('User dismissed the PWA installation');
		}

		deferredPrompt = null;
		isInstallable = false;
	}
</script>

<button aria-label="install" onclick={installApp} disabled={!isInstallable}
	><i class="fa-solid fa-download"></i> <span class="desc">install</span></button
>

<style>
	button {
		width: fit-content;
		margin-inline: auto;
		font-size: clamp(1rem, 2vw, 2rem);
		font-weight: 700;
		background-color: var(--blue);
		border-radius: 8px;
		outline: none;
		border: none;
		cursor: pointer;
		z-index: 15;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		&:focus {
			box-shadow: 0 0 0px var(--white);
		}

		& i {
			color: var(--white);
			cursor: pointer;
			align-items: center;
		}

		&:hover {
			opacity: 0.8;
		}

		& .desc {
			font-size: clamp(0.8rem, 1.5vw, 1.5rem);
			margin-top: 0.5rem;
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
