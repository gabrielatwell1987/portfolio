<script lang="ts">
	interface Props {
		message?: string;
		politeness?: 'off' | 'polite' | 'assertive';
		submitStatus?: string;
	}

	let { message = '', politeness = 'polite', submitStatus = '' }: Props = $props();
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
		overflow: clip;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
