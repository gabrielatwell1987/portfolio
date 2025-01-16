<script>
	let isLoading = $state(false);
	let { loading, submit, href, delay } = $props();

	const handleSubmit = async () => {
		event.preventDefault();

		isLoading = true;

		// Simulate an async operation (e.g., API call)
		await new Promise((resolve) => setTimeout(resolve, delay));

		isLoading = false;

		const screenWidth = window.innerWidth;

		// Navigate to the destination
		if (screenWidth <= 500) {
			window.location.href = href;
		} else {
			window.open(href, '_blank', 'noopener,noreferrer');
		}
	};
</script>

<a {href} onclick={handleSubmit}>
	<button class="btn" disabled={isLoading}>
		<span class="btn-text">{isLoading ? loading : submit}</span>

		{#if isLoading}
			<div class="spinner"></div>
		{/if}
	</button>
</a>

<style>
	a {
		cursor: pointer;
		width: fit-content;
		text-decoration: none;

		.btn {
			position: relative;
			width: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.2em 0.6em;
			border: 1px solid var(--pale);
			outline: 3px solid var(--pale);
			color: var(--pale);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			border-radius: 0.75rem;
			background-color: transparent;
			font-family: var(--opensans);
			font-size: clamp(1.1rem, 1.5vw, 2rem);
			font-weight: 900;
			cursor: pointer;
			user-select: none;
			margin-inline: auto;
			margin-bottom: 1rem;

			&:disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}

			&:hover {
				opacity: 0.75;
				outline-offset: 0px;
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
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
