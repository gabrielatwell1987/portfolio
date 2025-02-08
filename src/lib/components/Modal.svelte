<script>
	import '@fortawesome/fontawesome-free/css/all.css';
	import gsap from 'gsap';
	import Image from './Image.svelte';

	$effect(() => {
		const modal = document.querySelector('#modal');
		const openModal = document.querySelector('.open-button');
		const closeModal = document.querySelector('.close-button');

		gsap.set(modal, { autoAlpha: 0 });

		openModal.addEventListener('click', () => {
			gsap.to(modal, {
				autoAlpha: 1,
				duration: 2,
				width: '100%',
				ease: 'power2.out'
			});

			modal.showModal();
		});

		closeModal.addEventListener('click', () => {
			gsap.to(modal, {
				autoAlpha: 0,
				duration: 1.75,
				ease: 'power2.out',
				onComplete: () => modal.close()
			});
		});

		return () => {
			gsap.killTweensOf(modal);
		};
	});
</script>

<button class="open-button" aria-label="open button">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="scale: 12;">
		<path
			d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"
		/>
	</svg>
</button>

<dialog id="modal" aria-label="modal">
	<article>
		<header>
			<button rel="prev" class="close-button" aria-label="close button">
				<i class="fa-solid fa-xmark"></i>
			</button>

			<h4>Please contact me for any work!</h4>
		</header>

		<div class="image">
			<Image src="/logos/newspaper.webp" alt="frontend newspaper clipping" width="500" />
		</div>

		<p>
			If you need help with a website or if you have any questions, please feel free to contact me.
			I am always happy to help!
		</p>
	</article>
</dialog>

<style>
	@media (min-width: 320px) {
		.open-button {
			display: block;
			font-size: clamp(2.5rem, 4vw, 4rem);
			font-weight: 800;
			background-color: transparent;
			box-shadow: none;
			color: var(--dark-pale);
			width: 5%;
			height: 5%;
			outline: none;
			border: none;
			border-radius: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			margin-bottom: 25%;
			cursor: pointer;

			&:hover {
				animation: wiggle 01s ease-in-out infinite;
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
			}

			& svg {
				cursor: pointer;
			}
		}

		.close-button {
			display: block;
			font-size: clamp(2.5rem, 4vw, 4rem);
			font-weight: 800;
			background-color: transparent;
			box-shadow: none;
			color: var(--dark-pale);
			width: 5%;
			height: 5%;
			outline: none;
			border: none;
			border-radius: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			margin-top: -1rem;
			cursor: pointer;

			&:hover {
				animation: wiggle 01s ease-in-out infinite;
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
			}

			& i {
				cursor: pointer;
			}
		}

		dialog {
			background: none;

			&::backdrop {
				background: transparent;
				box-shadow: none;
			}

			& article {
				width: 100%;
				border-radius: 1rem;
				background: var(--blackest);
				box-shadow: 0 0 5px 3px var(--dark-blue);

				& header {
					background: transparent;
					border-bottom: none;

					& h4 {
						font-family: var(--anta);
						font-size: clamp(1.5rem, 1.75vw, 3rem);
						font-weight: 600;
						line-height: 1;
						color: var(--purple);
						margin: -0.5rem 0 -2rem 0;
					}
				}

				& p {
					font-family: var(--bronova);
					font-size: clamp(1.15rem, 1.25vw, 2rem);
					font-weight: 100;
					color: var(--white);
					background: transparent;
					padding: 0.2rem;
					hyphens: auto;
					text-wrap: no-wrap;
				}
			}
		}
	}

	@media screen and (min-width: 720px) {
		dialog {
			padding: 2rem;
			width: 93%;
			height: 83%;
			margin: 0 auto;
		}

		.open-button {
			margin-bottom: 15%;
		}
	}

	@media screen and (min-width: 1024px) {
		h4 {
			line-height: 0.95;
		}

		p {
			line-height: 1.75;
			margin-inline: auto;
			padding: 1rem;
		}

		.image {
			margin-block: 1rem;
		}

		.open-button {
			margin-bottom: 15%;
		}
	}

	@media screen and (min-width: 1100px) {
		h4 {
			padding: 0.5rem;
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
