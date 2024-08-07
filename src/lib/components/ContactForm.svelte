<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import SendButton from '$lib/components/SendButton.svelte';

	let name = '';
	let email = '';
	let message = '';

	// Animations
	onMount(() => {
		const form = document.querySelector('form');

		gsap.set(form, { autoAlpha: 0, x: -175 });

		gsap.to(form, { autoAlpha: 1, duration: 3.5 });

		// modal
		const modal = document.querySelector('#modal');
		const openModal = document.querySelector('.open-button');
		const closeModal = document.querySelector('.close-button');

		openModal.addEventListener('click', () => {
			gsap.to(modal, { autoAlpha: 1, duration: 2, ease: 'power2.out' });

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

<!-- Modal -->
<button class="open-button" aria-label="open"><i class="fa-regular fa-folder-open" /></button>

<dialog class="modal" id="modal" aria-label="modal">
	<article>
		<header>
			<button rel="prev" class="close-button" aria-label="close"
				><i class="fa-solid fa-xmark" /></button
			>

			<h4>Please contact me for any frontend work!</h4>
		</header>

		<div class="modal-img">
			<Image
				src="/logos/newspaper.jpg"
				alt="frontend newspaper clipping"
				aria-label="newspaper clipping"
			/>
		</div>

		<p class="modal__p">
			If you need help with a website, or if you have any questions, please feel free to contact me.
			I am always happy to help!
		</p>
	</article>
</dialog>

<!-- Contact Form -->
<form method="POST" action="https://form.taxi/s/xeyymb58" aria-hidden="true">
	<fieldset>
		<label for="name"><span>Name</span></label>
		<input type="text" id="name" name="name" bind:value={name} required />

		<label for="email"><span>Email</span></label>
		<input type="email" id="email" name="email" bind:value={email} required />

		<label for="message"><span>Message</span></label>
		<textarea type="text" id="message" name="message" bind:value={message} rows="5" required />

		<div class="send">
			<SendButton />
		</div>
	</fieldset>
</form>

<style>
	@media screen and (min-width: 300px) {
		form {
			width: 100%;
			margin-left: 54.5%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		input {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
			border-radius: 10px;
			caret-color: var(--purple);
			color: var(--white);
			font-size: 1.05rem;
		}

		input:placeholder-shown {
			letter-spacing: 3px;
		}

		input:focus {
			outline: none;
		}

		input:focus-visible {
			outline: 2px solid var(--off-white);
			border: none;
		}

		textarea {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
			border-radius: 10px;
			color: var(--white);
			font-size: 1.05rem;
		}

		textarea:placeholder-shown {
			letter-spacing: 3px;
		}

		textarea:focus {
			outline: none;
		}

		textarea:focus-visible {
			outline: 2px solid var(--off-white);
			border: none;
		}

		label {
			margin-left: 0.25rem;
			font-family: var(--lexend);
			font-weight: 600;
		}

		span {
			font-size: clamp(1rem, 2vw, 2rem);
			font-weight: 800;
			letter-spacing: 3px;
		}

		#name::-webkit-input-placeholder,
		#email::-webkit-input-placeholder,
		#message::-webkit-input-placeholder {
			color: var(--white);
			font-weight: 100;
		}

		.send {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1rem;
		}

		.open-button,
		.close-button {
			display: none;
		}

		.modal__p {
			font-family: var(--lexend);
			font-weight: 200;
			font-size: clamp(1.2rem, 3vw, 2rem);
			color: var(--white);
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
	}

	@media screen and (min-width: 500px) {
		input,
		textarea {
			width: 150%;
		}

		form {
			margin-left: 26%;
		}

		.send {
			margin-left: 20%;
		}
	}

	@media screen and (min-width: 720px) {
		input,
		textarea {
			width: 175%;
		}

		form {
			margin-left: 15%;
		}

		.send {
			width: 100%;
			margin-left: 37%;
		}

		.open-button {
			display: block;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			height: 2%;
			margin-left: 10%;
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

		::backdrop {
			background: transparent;
		}

		.modal h4 {
			font-size: clamp(1.2rem, 3vw, 4rem);
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
	}

	@media screen and (min-width: 1024px) {
		form {
			display: flex;
			flex-direction: column;
		}

		label {
			margin-bottom: 1rem;
			text-align: center;
			transform: scale(1.5);
		}

		input {
			font-size: 1.5rem;
			margin-bottom: 1rem;
			transform: scale(1.05);
			width: 100%;
		}

		textarea {
			font-size: 1rem;
			margin-bottom: 1rem;
			width: 100%;
		}

		fieldset {
			border: 5px solid var(--white);
			border-image: linear-gradient(to left, var(--smoke), var(--smoke)) 1;
			font-weight: bolder;
			font-size: 2rem;
			margin: 2rem;
			padding: 2rem 5rem;
			border-radius: 10px;
			width: 60%;
		}

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

		.close-button {
			color: var(--black);
			border: 2px solid var(--black);
		}

		.send {
			margin-left: 0;
		}
	}

	@media screen and (min-width: 1100px) {
		fieldset {
			width: 65%;
		}

		.modal h4 {
			color: var(--yellow);
		}

		.modal .modal__p {
			color: var(--white);
		}

		.close-button {
			color: var(--white);
			border: 2px solid var(--white);
		}
	}

	@media screen and (min-width: 1350px) {
		.open-button {
			padding: 2rem 3rem;
			scale: 0.5;
		}

		.close-button {
			padding: 2rem 3rem;
			scale: 0.5;
		}

		i {
			font-size: 2rem;
		}

		form {
			margin-left: 10%;
		}

		fieldset {
			width: 75%;
		}

		input {
			font-size: 2rem;
			padding: 2rem;
		}

		textarea {
			font-size: 2rem;
			padding: 2rem;
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
</style>
