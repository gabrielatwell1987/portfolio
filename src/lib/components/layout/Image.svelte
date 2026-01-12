<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		width?: string;
		height?: string;
		aspectRatio?: string;
		style?: string;
		class?: string;
	}

	let { src, alt, width, height, aspectRatio, style, class: className }: Props = $props();

	let imageError = $state(false);

	let computedHeight = $derived.by(() => {
		if (height) return height;
		if (width && aspectRatio) {
			const [w, h] = aspectRatio.split('/').map(Number);
			if (w && h) {
				return Math.round((Number(width) * h) / w);
			}
		}
		return undefined;
	});
</script>

<div class="image-container">
	<img
		{src}
		{alt}
		{width}
		class={className}
		height={computedHeight}
		style="{aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''}{style ? ` ${style}` : ''}"
		class:hidden={imageError}
		class:has-width={!!width}
	/>

	{#if imageError}
		<div class="error-message">
			We failed to load the image of '{alt}' 😵‍💫
		</div>
	{/if}
</div>

<style>
	.image-container {
		position: relative;
		display: flex;
		align-items: center;

		& img {
			max-inline-size: 100%;
			height: auto;
			object-fit: contain;
			border-radius: var(--radius);
			z-index: 9;
			margin-inline: auto;
			display: block;
			pointer-events: none;

			&:not(.has-width) {
				width: 100%;
			}

			&.hidden {
				display: none;
			}
		}

		& .error-message {
			position: absolute;
			inset: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			background: var(--clr-invert);
			border: 1px solid var(--clr-main);
			color: var(--clr-main);
			white-space: pre-wrap;
			padding: 1em;
			pointer-events: none;
			z-index: 1;
			font-weight: bold;
			font-size: clamp(var(--xs), 1vw, var(--h6));
			border-radius: var(--radius);
			white-space: normal;
			box-sizing: border-box;

			@media (width <= 500px) {
				padding: 0.25em;
				width: 40vw;
			}
		}
	}
</style>
