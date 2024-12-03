<script>
	let deferredPrompt = null;
	let showButton = $state(false);

	// Listen for the beforeinstallprompt event
	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault(); // Prevent the mini-infobar from appearing
		deferredPrompt = e; // Save the event for later use
		showButton = true; // Show the install button
	});

	// Handle the install button click
	const installApp = async () => {
		if (deferredPrompt) {
			deferredPrompt.prompt(); // Show the install prompt
			const { outcome } = await deferredPrompt.userChoice; // Wait for user's choice
			if (outcome === 'accepted') {
				console.log('PWA installed');
			} else {
				console.log('PWA installation dismissed');
			}
			deferredPrompt = null; // Reset the prompt
			showButton = false; // Optionally hide the button
		}
	};

	// Listen for the appinstalled event
	window.addEventListener('appinstalled', () => {
		console.log('PWA installed successfully!');
		showButton = false; // Hide the button
	});
</script>

{#if showButton}
	<button onclick={installApp}>Install</button>
{/if}

<style>
	button {
		width: fit-content;
		padding: 0.5rem 1.1rem;
		font-size: clamp(1rem, 2vw, 1.5rem);
		background-color: var(--blue);
		color: var(--white);
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button:disabled {
		background-color: var(--smoke);
		cursor: not-allowed;
	}
</style>
