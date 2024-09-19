<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Image from './Image.svelte';

	onMount(() => {
		const modal = document.querySelector('#modal');
		const openModal = document.querySelector('.open-button');
		const closeModal = document.querySelector('.close-button');

		gsap.set(modal, { autoAlpha: 0 });

		openModal.addEventListener('click', () => {
			gsap.to(modal, {
				autoAlpha: 1,
				duration: 2,
				ease: 'power2.out'
			});

			modal.showModal();
		});

		closeModal.addEventListener('click', () => {
			gsap.to(modal, {
				autoAlpha: 0,
				duration: 1,
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
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			height: 2%;
			margin-left: 43%;
			margin-top: 5%;
			outline: none;
			border: 2px solid var(--white);
			border-radius: 15px;
			padding: 1rem 1.5rem;
			outline: none;
			animation: wiggle 0.5s ease-in-out infinite;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		h4 {
			font-size: clamp(1.2rem, 2vw, 3rem);
			font-weight: 600;
			font-family: var(--anta);
			color: var(--yellow);
			margin: 1rem 0 0.5rem 0;
			mix-blend-mode: hard-light;
		}

		article {
			width: 100%;
		}

		.modal {
			text-wrap: balance;
		}

		.modal-img {
			border-radius: 10px;
			width: 80%;
			height: 25%;
			margin: 1rem auto;
		}

		.modal__p {
			font-family: var(--lexend);
			font-weight: 200;
			font-size: clamp(1.1rem, 1vw, 1.75rem);
			color: var(--white);
		}
	}

	@media screen and (min-width: 720px) {
		.open-button {
			display: block;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			height: 2%;
			margin-left: 30%;
			margin-top: 5%;
			outline: none;
			border: 2px solid var(--white);
			border-radius: 15px;
			padding: 1rem 1.5rem;
			outline: none;
			animation: wiggle 0.5s ease-in-out infinite;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.close-button {
			display: flex;
			justify-content: center;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			margin-left: 44%;
			margin-right: 2rem;
			outline: none;
			border: 2px solid var(--white);
			border-radius: 15px;
			padding: 0.75rem 1.25rem;
			outline: none;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.modal {
			padding: 2rem;
			width: 93%;
			height: 83%;
			margin: 0 auto;
		}

		#modal {
			opacity: 0;
			visibility: hidden;
		}

		article {
			border-radius: 1rem;
		}

		.modal h4 {
			font-size: clamp(1.2rem, 2vw, 3rem);
			font-weight: 600;
			font-family: var(--anta);
			color: var(--yellow);
			margin-top: 2rem;
			mix-blend-mode: hard-light;
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
		h4 {
			line-height: 0.95;
		}

		.modal__p {
			line-height: 1.75;
			width: 75%;
			margin: 0 auto;
			padding: 0.5rem;
		}

		.modal h4 {
			color: var(--black);
		}

		.modal .modal__p {
			color: var(--black);
		}

		.open-button {
			margin-left: 25%;
			scale: 0.85;
			margin: 0 0 5% 25%;
		}

		.close-button {
			color: var(--black);
			border: 2px solid var(--black);
			scale: 0.85;
		}
	}

	@media screen and (min-width: 1100px) {
		.modal h4 {
			color: var(--yellow);
		}

		.modal .modal__p {
			color: var(--white);
		}

		.open-button {
			margin-left: 30%;
			scale: 0.9;
		}

		.close-button {
			color: var(--white);
			border: 2px solid var(--white);
			scale: 0.9;
		}
	}

	@media screen and (min-width: 1350px) {
		.open-button,
		.close-button {
			padding: 2rem 3rem;
			scale: 0.85;
		}

		i {
			font-size: 2rem;
		}
	}

	@media screen and (min-width: 1500px) {
		.open-button {
			scale: 0.85;
		}

		.close-button {
			scale: 0.85;
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
