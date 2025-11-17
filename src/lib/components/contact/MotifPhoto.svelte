<script>
	// let { img } = $props();
	let { content } = $props();
</script>

<div class="hire-wrapper">
	<!-- <img src={img} alt="gabe atwell" /> -->
	{#if content.startsWith('<svg')}
		<div class="svg-container">
			{@html content}
		</div>
	{:else}
		<img src={content} alt="decorative motif" />
	{/if}
</div>

<style>
	.hire-wrapper {
		position: relative;
		width: fit-content;
		margin: 0;
		padding: 0;
		margin-inline: auto;

		& .svg-container {
			width: clamp(200px, 30vw, 750px);
			height: clamp(200px, 30vw, 750px);
			display: flex;
			align-items: center;
			justify-content: center;
			margin-inline: auto;
			z-index: 1;

			& :global(svg) {
				width: 100%;
				height: 100%;
				border-radius: 10% var(--radius);
			}
		}

		& img {
			width: clamp(200px, 30vw, 750px);
			height: clamp(200px, 30vw, 750px);
			border-radius: 10% var(--radius);
			display: block;
			margin-inline: auto;
			z-index: 1;
		}
	}
</style>
