<script>
	let { items = [] } = $props();

	// Debug: Check what items we're receiving
	$effect(() => {
		console.log('Details component items:', items);
	});
</script>

{#if items && items.length > 0}
	{#each items as item, index}
		<details
			name="details-group"
			style="--anim-delay: {index * 0.5}s; visibility: hidden;"
			class="animate-in"
		>
			<!-- svelte-ignore a11y_no_redundant_roles -->
			<summary role="button" class="outline contrast spacing">
				<span class="margin"><b>{item.summary}</b></span>
			</summary>
			<div class="text">
				{@html item.content}
			</div>
		</details>
	{/each}
{:else}
	<p>No details available</p>
{/if}

<style>
	:root {
		--100: 100%;
		interpolate-size: allow-keywords;
	}

	.animate-in {
		animation: fadeInUp 1s ease forwards;
		animation-delay: var(--anim-delay, 0s);
	}

	details {
		max-width: 90vw;
		margin-inline: auto;
		position: relative;
		border: none;
		outline: none;
		-webkit-appearance: none;
		appearance: none;
		overflow: hidden;
		padding: 1rem;
		inline-size: 100ch;

		&::details-content {
			opacity: 0;
			block-size: 0;
			overflow-y: clip;
			transition:
				content-visibility 1s allow-discrete,
				opacity 1s,
				block-size 1s;
		}

		&[open]::details-content {
			opacity: 1;
			block-size: auto;
		}
	}

	summary {
		color: var(--clr-blue);
		border-color: var(--clr-gray);
		cursor: pointer;
		font-weight: 600;

		@media (width <= 768px) {
			color: var(--clr-blue);
			border-color: var(--clr-gray);
		}
	}

	.text {
		color: var(--clr-main);
		line-height: 1.6;

		:global(a) {
			color: var(--clr-link);
		}

		:global(code) {
			background-color: #f1f5f9;
			padding: 0.125rem 0.25rem;
			border-radius: 0.25rem;
			font-family: 'Courier New', monospace;
		}

		:global(pre) {
			background-color: #1e293b;
			color: #e2e8f0;
			padding: 1rem;
			border-radius: 0.5rem;
			overflow-x: auto;
			margin: 1rem 0;
		}

		:global(p) {
			margin: 0;
			margin-bottom: 0.2rem;
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(100px);
			visibility: hidden;
		}
		to {
			opacity: 1;
			transform: translateY(0);
			visibility: visible;
		}
	}
</style>
