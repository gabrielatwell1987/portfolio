<script lang="ts">
	import { scale } from 'svelte/transition';
	interface Props {
		src: string;
		alt: string;
		maxWidth?: number;
		maxHeight?: number;
		transitionName?: string;
		aspectRatio?: string;
		class?: string;
	}

	let {
		src,
		alt,
		maxWidth,
		maxHeight,
		transitionName = 'expandable-image',
		aspectRatio,
		class: className
	}: Props = $props();
	let expanded = $state(false);
	let imgElement = $state<HTMLImageElement>();
	let naturalDimensions = $state({ width: 0, height: 0 });
	let isSVG = $derived(src?.endsWith('.svg'));
	let isTransitioning = $state(false);

	function toggleExpand() {
		if (isTransitioning) return;

		if (document.startViewTransition) {
			isTransitioning = true;
			document
				.startViewTransition(() => {
					expanded = !expanded;
				})
				.finished.then(() => {
					isTransitioning = false;
				});
		} else {
			expanded = !expanded;
		}
	}

	function handleImageLoad() {
		if (imgElement) {
			naturalDimensions = {
				width: imgElement.naturalWidth,
				height: imgElement.naturalHeight
			};
		}
	}

	let displayDimensions = $derived(() => {
		if (!naturalDimensions.width || !naturalDimensions.height) {
			return { width: 300, height: 300 };
		}

		if (!maxWidth && !maxHeight) {
			return {
				width: naturalDimensions.width,
				height: naturalDimensions.height
			};
		}

		let scaleX = maxWidth ? maxWidth / naturalDimensions.width : 1;
		let scaleY = maxHeight ? maxHeight / naturalDimensions.height : 1;

		let scale = Math.min(scaleX, scaleY);

		scale = Math.min(scale, 1);

		return {
			width: Math.round(naturalDimensions.width * scale),
			height: Math.round(naturalDimensions.height * scale)
		};
	});

	let inlineStyle = $derived(() => {
		const dims = displayDimensions();
		if (expanded && !isTransitioning) {
			return `view-transition-name: ${transitionName};`;
		}
		return `view-transition-name: ${transitionName}; width: ${dims.width}px; height: ${dims.height}px;`;
	});
</script>

<section class={expanded ? 'expanded' : ''} class:transitioning={isTransitioning}>
	<button type="button" onclick={toggleExpand} class="img-button">
		<img
			bind:this={imgElement}
			{src}
			{alt}
			onload={handleImageLoad}
			style={inlineStyle()}
			class:svg={isSVG}
		/>
	</button>
</section>

<style>
	:global(.expanded) {
		--view-transition-offset: -20em;
	}

	section {
		cursor: pointer;
		width: fit-content;
		z-index: 500;

		& .img-button {
			padding: 0;
			border: none;
			background: none;
			cursor: pointer;
			width: fit-content;
			display: block;

			&:focus,
			&:focus-visible {
				outline: none;
				box-shadow: none;
			}

			& img {
				object-fit: contain;

				@media (width <= 768px) {
					scale: 0.75;
				}

				&.svg {
					object-fit: contain;
				}
			}
		}

		&:not(.expanded) .img-button img {
			object-fit: contain;

			@media (width <= 768px) {
				width: 60vw;
				height: auto;
			}

			&.svg {
				object-fit: contain;
			}
		}
	}

	.expanded {
		position: fixed;
		top: var(--view-transition-offset, -17em);
		left: 0;
		background: transparent;
		display: grid;
		place-items: center;
		z-index: 9999;
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 20px;
		box-sizing: border-box;

		@media (width <= 768px) {
			width: 100dvw;
			height: 100dvh;
			padding: 0.5em;
		}

		& .img-button {
			width: 100vw;
			height: 100vh;
			display: grid;
			place-items: center;
			margin: 0;
			padding: 0;

			@media (width <= 768px) {
				width: 100%;
				height: 100%;
			}
		}

		&:not(.transitioning) img {
			width: clamp(300px, 80vw, 1200px);
			height: auto;
			max-height: 80vh;

			@media (width <= 768px) {
				width: clamp(200px, 90vw, 100%);
				max-height: 70vh;
			}
		}

		& img.svg {
			filter: brightness(1.1);
		}
	}
</style>
