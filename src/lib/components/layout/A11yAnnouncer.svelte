<script>
	/**
	 * A11yAnnouncer - Accessibility announcer component
	 * Provides a live region for screen reader announcements
	 */
	let { message = '', politeness = 'polite' } = $props();
</script>

<div aria-live={politeness} aria-atomic="true" class="sr-only" role="status">
	{#if message}
		{message}
	{/if}
</div>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
