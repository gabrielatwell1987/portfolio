<script>
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
	});
</script>

<button class="open-button" aria-label="open button">
	<i class="fa-regular fa-folder-open"></i>
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
			color: var(--pale);
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

			& i {
				cursor: pointer;
			}
		}

		.close-button {
			display: block;
			font-size: clamp(2.5rem, 4vw, 4rem);
			font-weight: 800;
			background-color: transparent;
			box-shadow: none;
			color: var(--pale);
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

			article {
				width: 100%;
				border-radius: 1rem;
				background: var(--blackest);
				box-shadow: 0 0 5px 3px var(--dark-blue);

				header {
					background: transparent;
					border-bottom: none;

					h4 {
						font-family: var(--anta);
						font-size: clamp(1.5rem, 1.75vw, 3rem);
						font-weight: 600;
						line-height: 1;
						color: var(--purple);
						margin: -0.5rem 0 -2rem 0;
					}
				}

				p {
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
