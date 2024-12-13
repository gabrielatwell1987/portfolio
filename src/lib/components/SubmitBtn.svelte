<script>
	let isLoading = $state(false);
	let { loading, submit, href } = $props();

	const handleSubmit = async () => {
		isLoading = true;

		// Simulate an async operation (e.g., API call)
		await new Promise((resolve) => setTimeout(resolve, 2500));

		isLoading = false;
	};
</script>

<a {href}>
	<button class="btn" onclick={handleSubmit} disabled={isLoading}>
		<span class="btn-text">{isLoading ? loading : submit}</span>
		{#if isLoading}
			<div class="spinner"></div>
		{/if}
	</button>
</a>

<style>
	.btn {
		position: relative;
		width: 13%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1.1rem;
		border: 2px solid var(--pale);
		border-radius: 8px;
		background-color: transparent;
		color: var(--pale);
		font-family: var(--orbitron);
		font-size: clamp(1rem, 2vw, 2rem);
		letter-spacing: 3px;
		cursor: pointer;
		margin-inline: auto;
	}

	.btn:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}

	.btn-text {
		margin-right: 10px;
		grid-area: stack;
	}

	.spinner {
		width: 2rem;
		height: 2rem;
		border: 2px solid var(--pale);
		border-top-color: transparent;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
		grid-area: stack;
	}

	/* Spinner animation */
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
