<script>
	let { width, thickness } = $props();
</script>

<hr
	class="divider"
	style="--width: {width}%; --thickness: {thickness}px; --min-width: {width /
		2}%; --max-width: {width}%;"
/>

<style>
	.divider {
		width: var(--width);
		background-color: var(--text-color);
		height: var(--thickness);
		margin-inline: auto;
		margin-bottom: 4rem;
		border: none;
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		opacity: 0.5;
		animation: shrink 6s ease-in-out infinite;
	}

	@keyframes shrink {
		0% {
			width: var(--max-width);
		}

		50% {
			width: var(--min-width);
		}

		100% {
			width: var(--max-width);
		}
	}
</style>
