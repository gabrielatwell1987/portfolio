<script>
	let { width, thickness } = $props();
</script>

<hr class="divider" style="--width: {width}%; --thickness: {thickness}px;" />

<style>
	.divider {
		width: var(--width);
		background-color: var(--white);
		height: var(--thickness);
		margin-inline: auto;
		margin-bottom: 4rem;
		border: none;
		opacity: 0.5;
	}
</style>
