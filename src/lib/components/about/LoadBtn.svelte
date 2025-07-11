<script>
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let isLoading = $state(false);
	let { loading, submit, href, delay } = $props();
	let statusMessage = $state('');

	const handleSubmit = async () => {
		event.preventDefault();

		isLoading = true;
		statusMessage = `Loading ${submit}...`;

		// Simulate an async operation (e.g., API call)
		await new Promise((resolve) => setTimeout(resolve, delay));

		isLoading = false;
		statusMessage = `${submit} loaded successfully`;

		const screenWidth = window.innerWidth;

		// Navigate to the destination
		if (screenWidth <= 500) {
			window.location.href = href;
		} else {
			window.open(href, '_blank', 'noopener,noreferrer');
		}

		// Clear status message after navigation
		setTimeout(() => {
			statusMessage = '';
		}, 1000);
	};
</script>

<A11yAnnouncer message={statusMessage} />

<a
	{href}
	onclick={handleSubmit}
	aria-label="Visit {submit} (opens in new tab)"
	class="btn"
	class:loading={isLoading}
	aria-live="polite"
>
	<span class="btn-text">{isLoading ? loading : submit}</span>

	{#if isLoading}
		<div class="spinner"></div>
	{/if}
</a>

<style>
	a.btn {
		position: relative;
		width: fit-content;
		padding: 0.2em 0.6em;
		border: 1px solid var(--clr-main);
		border-radius: var(--radius);
		outline: 1px solid var(--clr-main);
		color: var(--clr-main);
		background-color: var(--clr-link);
		font-family: var(--bronova);
		font-size: clamp(var(--h6), 1.5vw, var(--h3));
		font-weight: 400;
		cursor: pointer;
		user-select: none;
		margin-inline: auto;
		margin-bottom: 1rem;
		transition: hover 0.3s ease-in-out;
		display: flex;
		align-items: center;
		gap: 0.5em;
		letter-spacing: 1px;
		text-decoration: none;

		&:hover {
			opacity: 0.95;
			outline-offset: 0px;
			filter: drop-shadow(0 0 0.5rem var(--clr-main));
		}

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
		}

		&.loading {
			cursor: not-allowed;
			opacity: 0.75;
		}

		& .btn-text {
			grid-area: stack;
		}

		& .spinner {
			width: 1.5rem;
			height: 1.5rem;
			border: 2px solid var(--clr-main);
			border-top-color: transparent;
			border-radius: 50%;
			animation: spin 0.6s linear infinite;
			grid-area: stack;
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
