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
		background-color: var(--clr-main);
		height: var(--thickness);
		margin-inline: auto;
		margin-bottom: 4rem;
		border: none;
		border-top-left-radius: 2px;
		border-top-right-radius: 2px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		opacity: 0.5;
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
