<script lang="ts">
	import { browser } from '$app/environment';
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
	let expanded = $state<boolean>(false);
	let imgElement = $state<HTMLImageElement>();
	let naturalDimensions = $state<{ width: number; height: number }>({ width: 0, height: 0 });
	let isSVG = $derived(src?.endsWith('.svg'));
	let isTransitioning = $state<boolean>(false);
	let prefersReducedMedia = $state<boolean>(false);

	// prefers-reduced-motion check
	$effect(() => {
		if (!browser) return;

		const abortController = new AbortController();
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => (prefersReducedMedia = media.matches);
		update();
		media.addEventListener('change', update, { signal: abortController.signal });

		return () => abortController.abort();
	});

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
		if (expanded) return `view-transition-name: ${transitionName};`;
		return `view-transition-name: ${transitionName};`;
	});
</script>

<section class={expanded ? 'expanded' : ''}>
	<button type="button" onclick={toggleExpand} class="img-button">
		<img
			bind:this={imgElement}
			{src}
			{alt}
			onload={handleImageLoad}
			style={inlineStyle()}
			class:svg={isSVG}
			loading="lazy"
		/>
	</button>
</section>

<style>
	:global(.expanded) {
		--view-transition-offset: -20em;
		--view-transition-offset-mobile: -18em;
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
			&:focus-visible,
			&:active {
				outline: none;
				box-shadow: none;
			}

			& img {
				object-fit: contain;
				width: 500px;
				outline: none;
				-webkit-user-drag: none;
				user-select: none;

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
		top: var(--view-transition-offset);
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
			top: var(--view-transition-offset-mobile);
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
