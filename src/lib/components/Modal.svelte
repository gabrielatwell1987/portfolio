<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Image from './Image.svelte';

	onMount(() => {
		const modal = document.querySelector('#modal');
		const openModal = document.querySelector('.open-button');
		const closeModal = document.querySelector('.close-button');

		gsap.set(modal, { autoAlpha: 0 });

		openModal.addEventListener('click', () => {
			gsap.to(modal, {
				autoAlpha: 1,
				duration: 1.5,
				width: '100%',
				ease: 'power2.out'
			});

			modal.showModal();
		});

		closeModal.addEventListener('click', () => {
			gsap.to(modal, {
				autoAlpha: 0,
				duration: 0.75,
				ease: 'power2.out',
				onComplete: () => modal.close()
			});
		});
	});
</script>

<button class="open-button">
	<i class="fa-regular fa-folder-open" />
</button>

<dialog class="modal" id="modal" aria-label="modal">
	<article>
		<header>
			<button rel="prev" class="close-button">
				<i class="fa-solid fa-xmark" />
			</button>

			<h4>Please contact me for any frontend work!</h4>
		</header>

		<div class="modal-img">
			<Image src="/logos/newspaper.webp" alt="frontend newspaper clipping" />
		</div>

		<p class="modal__p">
			If you need help with a website, or if you have any questions, please feel free to contact me.
			I am always happy to help!
		</p>
	</article>
</dialog>

<style>
	@media (min-width: 320px) {
		.open-button,
		.close-button {
			display: block;
			font-size: clamp(1.75rem, 2vw, 3rem);
			font-weight: 800;
			background-color: transparent;
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
			cursor: pointer;
		}

		.open-button:hover,
		.close-button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.open-button:focus,
		.close-button:focus {
			box-shadow: 0 0 5px var(--off-white);
		}

		article {
			width: 100%;
			border-radius: 1rem;
		}

		header {
			background: transparent;
		}

		.modal-img {
			border-radius: 10px;
			width: 80%;
			height: 25%;
			margin: 1rem auto;
		}

		.modal h4 {
			font-family: var(--anta);
			font-size: clamp(1.2rem, 2vw, 3rem);
			font-weight: 600;
			color: var(--sky);
			margin: 2rem 0 -0.75rem 0;
		}

		.modal__p {
			font-family: var(--lexed);
			font-size: clamp(1.05rem, 2vw, 2rem);
			font-weight: 200;
			color: var(--white);
			background: transparent;
			padding: 0.2rem;
		}
	}

	@media screen and (min-width: 720px) {
		.modal {
			padding: 2rem;
			width: 93%;
			height: 83%;
			margin: 0 auto;
		}

		.modal-img {
			border-radius: 10px;
			width: 50%;
			height: 25%;
			margin-left: 23%;
			margin-bottom: 1rem;
		}

		.modal__p {
			width: 60%;
			margin: 1.5rem auto;
		}
	}

	@media screen and (min-width: 1024px) {
		.modal h4 {
			line-height: 0.95;
		}

		.modal__p {
			line-height: 1.75;
			width: 75%;
			margin: 0 auto;
			padding: 1rem;
		}

		.open-button {
			margin-bottom: 5%;
		}
	}

	@media screen and (min-width: 1100px) {
		.modal h4 {
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
