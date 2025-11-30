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

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<A11yAnnouncer message={statusMessage} />

<button class="open-button" aria-label="Open contact information modal" onclick={openModal}>
	<svg
		width="800px"
		height="800px"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 10V13M12 16H12.01M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
			stroke="var(--clr-main)"
			fill="var(--clr-invert)"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
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
					width="800px"
					height="800px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.58579 4.58579C4.73329 4.43829 4.90386 4.31386 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.0961 4.31386 19.2667 4.43829 19.4142 4.58579M4.58579 4.58579C4.43829 4.73329 4.31386 4.90386 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.31386 19.0961 4.43829 19.2667 4.58579 19.4142M4.58579 4.58579L19.4142 19.4142M19.4142 4.58579C19.5617 4.73329 19.6861 4.90386 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.8C20 17.9201 20 18.4802 19.782 18.908C19.6861 19.0961 19.5617 19.2667 19.4142 19.4142M19.4142 4.58579L4.58579 19.4142M4.58579 19.4142C4.73329 19.5617 4.90386 19.6861 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.0961 19.6861 19.2667 19.5617 19.4142 19.4142"
						fill="none"
						stroke="var(--clr-main)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>

			<h4>Please contact me for any work!</h4>
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
						font-family: var(--bronova-bold);
						font-size: clamp(var(--h5), 1.75vw, var(--h2));
						font-weight: 600;
						line-height: 1;
						color: var(--sky);
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

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
			}

			&:hover {
				animation: wiggle 01s ease-out infinite;
			}

			&:active {
				scale: 0.97;
			}

			& svg {
				cursor: pointer;
				stroke-width: calc(5px + 1vw);
				width: clamp(1.5em, 4vw, 5em);
				height: clamp(1.5em, 4vw, 5em);

				&:focus,
				&:focus-visible {
					outline: 1px solid var(--clr-main);
					background: transparent;
				}

				@media (width <= 768px) {
					stroke-width: calc(5px + 5vw);
					margin-bottom: 0.8rem;
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
				animation: wiggle 01s ease-out infinite;
			}

			&:active {
				scale: 0.97;
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
