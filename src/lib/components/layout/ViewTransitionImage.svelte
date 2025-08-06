<script>
	let { src, alt, maxWidth, maxHeight, transitionName = 'expandable-image' } = $props();
	let expanded = $state(false);
	let imgElement = $state();
	let naturalDimensions = $state({ width: 0, height: 0 });
	let isSVG = $derived(src?.endsWith('.svg'));

	function toggleExpand() {
		// Temporarily disable other view transitions during image expansion
		const existingTransitionElements = document.querySelectorAll('[style*="view-transition-name"]');
		existingTransitionElements.forEach((el) => {
			if (el !== imgElement) {
				el.style.viewTransitionName = 'none';
			}
		});

		if (document.startViewTransition) {
			document
				.startViewTransition(() => {
					expanded = !expanded;
				})
				.finished.then(() => {
					// Re-enable other view transitions after completion
					existingTransitionElements.forEach((el) => {
						if (el !== imgElement) {
							el.style.removeProperty('view-transition-name');
						}
					});
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

	// Calculate display dimensions with proper constraint handling
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

		// // Start with natural dimensions
		// let width = naturalDimensions.width;
		// let height = naturalDimensions.height;

		// // Apply maxWidth constraint if provided
		// if (maxWidth) {
		// 	width = Math.min(maxWidth, naturalDimensions.width);
		// }

		// // Apply maxHeight constraint if provided
		// if (maxHeight) {
		// 	height = Math.min(maxHeight, naturalDimensions.height);
		// }

		// return { width, height };

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
	section {
		cursor: pointer;
		width: fit-content;
		z-index: 500;
	}

	.img-button {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		width: fit-content;
		display: block;
	}

	img {
		object-fit: contain;
	}

	img.svg {
		object-fit: contain;
	}

	.expanded {
		position: fixed;
		inset: 0;
		background: rgb(0 0 0 / 0.9);
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
	}

	.expanded .img-button {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
		margin: 0;
		padding: 0;

		@media (width <= 768px) {
			width: 100%;
			height: 100%;
			max-width: 100dvw;
			max-height: 100dvh;
		}
	}

	.expanded img {
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		margin: 0;
		padding: 0;

		@media (width <= 768px) {
			width: 100%;
			height: 100%;
			max-width: calc(100dvw - 1em);
			max-height: calc(100dvh - 1em);
		}
	}

	.expanded img.svg {
		filter: brightness(1.1);
	}

	::view-transition-old(testing),
	::view-transition-new(testing) {
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	::view-transition-old(testing) {
		animation: scale-down 0.25s ease forwards;
	}

	::view-transition-new(testing) {
		animation: scale-up 0.25s ease forwards;
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
