<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import Image from '$lib/components/layout/Image.svelte';

	let isOpen = $state(false);
	let modal;
	function openModal() {
		modal.showModal();
		// Small delay to ensure CSS transition starts from initial state
		setTimeout(() => {
			isOpen = true;
		}, 20);
	}
	function closeModal() {
		isOpen = false;
		setTimeout(() => {
			if (!isOpen) modal.close();
		}, 350);
	}
</script>

<button class="open-button" aria-label="open button" onclick={openModal}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		style="width: 1.25em; height: 1.25em;"
	>
		<title>Open</title>
		<path
			d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"
		/>
	</svg>
</button>

<dialog id="modal" aria-label="modal" bind:this={modal} class:open={isOpen}>
	<article>
		<header>
			<button rel="prev" class="close-button" aria-label="close button" onclick={closeModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<title>Close</title>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<h4>Please contact me for any work!</h4>
		</header>

		<div class="image">
			<Image
				src="/logos/newspaper.webp"
				alt="newspaper clipping for a frontend developer"
				width="500"
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
						color: var(--purple);
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
			color: var(--clr-pale);
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
				animation: wiggle 01s ease-in-out infinite;
			}

			& svg {
				cursor: pointer;

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
			color: var(--clr-pale);
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
				stroke: var(--clr-pale);
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
