<script>
	let { src, alt, maxWidth, maxHeight, transitionName = 'expandable-image' } = $props();
	let expanded = $state(false);
	let imgElement = $state();
	let naturalDimensions = $state({ width: 0, height: 0 });
	let isSVG = $derived(src?.endsWith('.svg'));
	let isTransitioning = $state(false);

	function toggleExpand() {
		if (isTransitioning) return; // Prevent multiple transitions

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
			console.log('Natural dimensions:', naturalDimensions); // Debug log
		}
	}

	let displayDimensions = $derived(() => {
		if (!naturalDimensions.width || !naturalDimensions.height) {
			return { width: 300, height: 300 };
		}

		// If no constraints provided, use natural dimensions
		if (!maxWidth && !maxHeight) {
			return {
				width: naturalDimensions.width,
				height: naturalDimensions.height
			};
		}

		// Calculate scaling factors
		let scaleX = maxWidth ? maxWidth / naturalDimensions.width : 1;
		let scaleY = maxHeight ? maxHeight / naturalDimensions.height : 1;

		// Use the smaller scale to maintain aspect ratio
		let scale = Math.min(scaleX, scaleY);

		// Only scale down, never scale up beyond natural dimensions
		scale = Math.min(scale, 1);

		return {
			width: Math.round(naturalDimensions.width * scale),
			height: Math.round(naturalDimensions.height * scale)
		};
	});
</script>

<section class={expanded ? 'expanded' : ''}>
	<button type="button" onclick={toggleExpand} class="img-button">
		<img
			bind:this={imgElement}
			{src}
			{alt}
			onload={handleImageLoad}
			style="width: {displayDimensions.width}px; height: {displayDimensions.height}px; view-transition-name: {transitionName};"
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

				&.svg {
					object-fit: contain;
				}
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

		& img {
			width: 100vw;
			height: 100vh;
			object-fit: contain;

			@media (width <= 768px) {
				width: 100%;
				height: 100%;
			}
		}

		& img.svg {
			filter: brightness(1.1);
		}
	}

	@keyframes scale-up {
		from {
			transform: scale(0.8);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes scale-down {
		from {
			transform: scale(1.2);
			opacity: 1;
		}
		to {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
