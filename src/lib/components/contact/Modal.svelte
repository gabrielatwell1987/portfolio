<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import Image from '$lib/components/layout/Image.svelte';
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';

	let isOpen = $state(false);
	let modal;
	let previousActiveElement;
	let statusMessage = $state('');

	function openModal() {
		previousActiveElement = document.activeElement;
		modal.showModal();
		statusMessage = 'Contact information modal opened';
		// Small delay to ensure CSS transition starts from initial state
		setTimeout(() => {
			isOpen = true;
			// Focus the close button for keyboard accessibility
			const closeButton = modal.querySelector('.close-button');
			if (closeButton) closeButton.focus();
		}, 20);
	}

	function closeModal() {
		isOpen = false;
		statusMessage = 'Contact information modal closed';
		setTimeout(() => {
			if (!isOpen) {
				modal.close();
				// Return focus to the element that opened the modal
				if (previousActiveElement) {
					previousActiveElement.focus();
				}
			}
		}, 350);
	}

	// Handle escape key to close modal
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<A11yAnnouncer message={statusMessage} />

<button class="open-button" aria-label="Open contact information modal" onclick={openModal}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		style="width: 1.25em; height: 1.25em;"
	>
		<title>Open</title>
		<path
			d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"
			fill="currentColor"
		/>
	</svg>
</button>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	id="modal"
	aria-labelledby="modal-title"
	bind:this={modal}
	class:open={isOpen}
	onkeydown={handleKeydown}
>
	<article>
		<header>
			<button
				rel="prev"
				class="close-button"
				aria-label="Close contact information modal"
				onclick={closeModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 27 27"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<title>Close</title>
					<!-- <line x1="18" y1="12" x2="6" y2="25"></line> -->
					<!-- <line x1="6" y1="12" x2="18" y2="25"></line> -->
					<path d="M6 12 L18 25 M18 12 L6 25" />
				</svg>
			</button>

			<h4 id="modal-title">Please contact me for any work!</h4>
		</header>

		<div class="image">
			<Image
				src="/logos/newspaper.webp"
				alt="newspaper clipping for a frontend developer"
				width="500"
				aspectRatio="16/9"
			/>
		</div>

		<p>
			If you need help with a website or if you have any questions, please feel free to contact me.
			I am always happy to help!
		</p>
	</article>
</dialog>

<style>
	dialog {
		opacity: 0;
		visibility: hidden;
		transform: scale(0.99);
		transition:
			opacity 0.3s ease-out,
			visibility 0.3s ease-out,
			transform 0.3s ease-out;
		background: none;
		-webkit-transition:
			opacity 0.3s ease-out,
			visibility 0.3s ease-out,
			transform 0.3s ease-out;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-perspective: 1000;
		perspective: 1000;
		will-change: opacity, transform;

		&.open {
			opacity: 1;
			visibility: visible;
			width: 100%;
			transform: scale(1);
		}

		@media screen and (width >= 720px) {
			padding: 2rem;
			width: 93%;
			height: 83%;
			margin: 0 auto;
		}

		@media (width <= 768px) {
			transition:
				opacity 0.5s ease-out,
				visibility 0.5s ease-out,
				transform 0.5s ease-out;
		}

		&::backdrop {
			@media (width >= 320px) {
				background: transparent;
				box-shadow: none;
			}
		}

		& article {
			@media (width >= 320px) {
				width: 100%;
				border: 2px solid var(--clr-main);
				border-radius: 1rem;
				background: var(--blackest);
				box-shadow: 0 0 5px 3px var(--dark-blue);

				@media (width <= 500px) {
					padding: 3em 1em;
				}

				& header {
					background: transparent;
					border-bottom: none;

					& h4 {
						font-family: var(--anta);
						font-size: clamp(var(--h5), 1.75vw, var(--h2));
						font-weight: 600;
						line-height: 1;
						color: var(--clr-link);
						margin: -0.5rem 0 -2rem 0;
						letter-spacing: -1px;
					}
				}

				& p {
					font-family: var(--bronova);
					font-size: clamp(var(--h6), 1.25vw, var(--h4));
					font-weight: 100;
					color: var(--white);
					background: transparent;
					padding: 0.2rem;
					hyphens: auto;
					text-wrap: no-wrap;
					letter-spacing: 0px;
				}
			}
		}
	}

	.open-button {
		@media (width >= 320px) {
			display: block;
			font-size: clamp(var(--h2), 4vw, var(--xl));
			font-weight: 800;
			background-color: transparent;
			box-shadow: none;
			width: fit-content;
			outline: none;
			border: none;
			border-radius: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			margin-bottom: 25%;
			cursor: pointer;
			color: var(--clr-inverted);
			text-shadow:
				0 0 1px var(--clr-inverted),
				-5px -5px 0 var(--clr-main),
				5px -5px 0 var(--clr-main),
				-5px 5px 0 var(--clr-main),
				5px 5px 0 var(--clr-main),
				-5px 0 0 var(--clr-main),
				5px 0 0 var(--clr-main),
				0 -5px 0 var(--clr-main),
				0 5px 0 var(--clr-main);

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
			}

			&:hover {
				animation: wiggle 01s ease-in-out infinite;
			}

			& svg {
				cursor: pointer;
				fill: currentColor;
				stroke: var(--clr-main);
				stroke-width: 8;

				@media (width <= 768px) {
					stroke-width: 23;
				}

				&:focus,
				&:focus-visible {
					outline: 1px solid var(--clr-main);
					background: transparent;
				}
			}
		}

		@media screen and (width >= 720px) {
			margin-bottom: 15%;
		}

		@media screen and (width >= 1024px) {
			margin-bottom: 15%;
		}
	}

	.close-button {
		@media (width >= 320px) {
			display: flex;
			font-size: clamp(var(--h2), 4vw, var(--xl));
			font-weight: 800;
			background-color: transparent;
			box-shadow: none;
			width: 4rem;
			height: 4rem;
			min-width: 4rem;
			min-height: 4rem;
			outline: none;
			border: none;
			border-radius: 15px;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			margin-top: -1rem;
			cursor: pointer;
			padding: 0.75rem;
			color: var(--clr-main);

			&:hover {
				animation: wiggle 01s ease-in-out infinite;
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}

			& svg {
				width: 3rem;
				height: 3rem;
				flex-shrink: 0;
				stroke: currentColor;
			}
		}
	}

	h4 {
		@media screen and (width >= 1024px) {
			line-height: 0.95;
		}

		@media screen and (width >= 1100px) {
			padding: 0.5rem;
		}
	}

	p {
		@media screen and (width >= 1024px) {
			line-height: 1.75;
			margin-inline: auto;
			padding: 1rem;
		}
	}

	.image {
		@media screen and (width >= 1024px) {
			margin-block: 1rem;
		}
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}
</style>
