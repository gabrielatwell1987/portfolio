<script>
	import Title from '$lib/components/layout/Title.svelte';
	import images from '$lib/components/photos/images.json';

	let selectedImage = $state(null);
	let isOpen = $state(false);
	let popoverImage = $state(null);

	function openPopover(img) {
		// If a popover is already open, close it first
		if (isOpen) {
			isOpen = false;
			setTimeout(() => {
				selectedImage = img;
				const popover = document.getElementById('image-popover');
				popover.showPopover();

				// Trigger animation after popover is shown
				setTimeout(() => {
					isOpen = true;
				}, 10);
			}, 50);
		} else {
			selectedImage = img;
			const popover = document.getElementById('image-popover');
			popover.showPopover();

			// Trigger animation after popover is shown
			setTimeout(() => {
				isOpen = true;
			}, 10);
		}
	}

	function closePopover() {
		isOpen = false;

		// Wait for animation to complete before hiding
		setTimeout(() => {
			const popover = document.getElementById('image-popover');
			popover.hidePopover();
			selectedImage = null;
		}, 1000);
	}

	function handleImageLoad(event) {
		const img = event.target;
		const naturalWidth = img.naturalWidth;
		const naturalHeight = img.naturalHeight;

		// Calculate the scale factor to fit within viewport constraints
		const maxWidth = window.innerWidth * 0.8;
		const maxHeight = window.innerHeight * 0.8;

		const scaleX = maxWidth / naturalWidth;
		const scaleY = maxHeight / naturalHeight;
		const scale = Math.min(scaleX, scaleY, 1); // Don't scale up

		// Set the exact dimensions to match aspect ratio
		img.style.width = `${naturalWidth * scale}px`;
		img.style.height = `${naturalHeight * scale}px`;
	}
</script>

<Title title="pics of me" />

<section>
	<div class="masonry">
		{#each images as img, i}
			<button type="button" style="animation-delay: {i * 0.2}s;" onclick={() => openPopover(img)}>
				<img src={img.src} alt={img.alt} loading="lazy" />
			</button>
		{/each}
	</div>
</section>

<!-- Popover for enlarged image -->
<div id="image-popover" popover="auto" class:open={isOpen}>
	{#if selectedImage}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			bind:this={popoverImage}
			src={selectedImage.src}
			alt={selectedImage.alt}
			onclick={closePopover}
			onload={handleImageLoad}
		/>
	{/if}
</div>

<style>
	:root {
		--100: 100%;
		--animation-duration: 0.75s;
		--stagger-delay: 0.75s;
		--subtle-rgb: 40, 40, 40;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 0;
		width: 100%;
		margin: 0;

		& .masonry {
			columns: 1;
			column-gap: 0;
			margin: 0.5rem;
			margin-top: 1rem;
			padding: 0;
			width: 100%;

			/* Medium screens (2 columns) */
			@media (width >= 768px) {
				columns: 2;
				margin: 5em;
			}

			/* Desktop (3 columns) */
			@media (width >= 1024px) {
				columns: 3;
				margin: 10em;
			}

			& button {
				display: block;
				width: 100%;
				padding: 0;
				margin: 0;
				border: none;
				background: none;
				cursor: pointer;
				line-height: 0;
				font-size: 0;
				animation: fadeIn var(--animation-duration) ease-out forwards;
				opacity: 0;
				overflow: hidden;

				&:focus {
					border: none;
					outline: none;
					box-shadow: none;
				}
			}

			& img {
				width: 100%;
				height: auto;
				aspect-ratio: auto;
				padding: 0;
				margin: 0;
				display: block;
				transform: scale(1);
				transition: transform 0.3s ease-out;
				cursor: pointer;
				border: none;
				outline: none;
			}
		}
	}

	/* Popover styles */
	#image-popover {
		padding: 0;
		background: transparent;
		transform: scale(0.9);
		opacity: 0;
		border: none;
		border-radius: 0;
		transition:
			transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
			opacity 0.3s ease-out;
		margin: auto;
		inset: 0;

		&.open {
			transform: scale(1);
			opacity: 1;
		}

		& img {
			cursor: pointer;
			box-shadow: 0 0 10px var(--clr-inverted);
			border: 2px solid var(--clr-main);
			border-radius: var(--radius);
			display: block;
		}

		&::backdrop {
			background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
			backdrop-filter: blur(4px);
			-webkit-backdrop-filter: blur(4px);
			opacity: 0;
			transition: opacity 0.3s ease-out;
		}

		&.open::backdrop {
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
