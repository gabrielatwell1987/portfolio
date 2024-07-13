<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Image from './Image.svelte';

	let name = '';
	let email = '';
	let message = '';

	// Animations
	onMount(() => {
		gsap.set('form', { autoAlpha: 0, x: -175 });

		gsap.to('form', { autoAlpha: 1, duration: 3.5 });

		// modal
		const modal = document.querySelector('.modal');
		const openModal = document.querySelector('.open-button');
		const closeModal = document.querySelector('.close-button');

		openModal.addEventListener('click', () => {
			modal.showModal();
		});

		closeModal.addEventListener('click', () => {
			modal.close();
		});
	});
</script>

<!-- Modal -->
<button class="open-button" aria-label="open"><i class="fa-regular fa-folder-open" /></button>

<dialog class="modal" id="modal" title="modal">
	<article>
		<header>
			<button rel="prev" class="close-button" aria-label="close"
				><i class="fa-solid fa-xmark" /></button
			>

			<h4>Please contact me for any frontend work!</h4>
		</header>

		<div class="modal-img">
			<Image src="/logos/newspaper.jpg" alt="frontend newspaper clipping" />
		</div>

		<p class="modal__p">
			If you need help with a website, or if you have any questions, please feel free to contact me.
			I am always happy to help!
		</p>
	</article>
</dialog>

<!-- contact form -->
<form method="POST" action="https://form.taxi/s/xeyymb58">
	<fieldset>
		<legend> message me </legend>

		<label for="name"><span>Name</span></label>
		<input type="text" id="name" name="name" placeholder="Your name" bind:value={name} required />

		<label for="email"><span>Email</span></label>
		<input
			type="email"
			id="email"
			name="email"
			placeholder="Your email address"
			bind:value={email}
			required
		/>

		<label for="message"><span>Message</span></label>
		<textarea
			type="text"
			id="message"
			name="message"
			placeholder="Your message"
			bind:value={message}
			rows="5"
			required
		/>

		<button class="send" type="submit">Send</button>
	</fieldset>
</form>

<style>
	@media screen and (min-width: 200px) {
		form {
			width: 100%;
			margin-left: 89.25%;
		}

		input {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
			caret-color: var(--purple);
		}

		input:placeholder-shown {
			letter-spacing: 3px;
		}

		input:focus {
			outline: none;
		}

		input:focus-visible {
			outline: 1px solid var(--white);
		}

		textarea {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
		}

		textarea:placeholder-shown {
			letter-spacing: 3px;
		}

		textarea:focus {
			outline: none;
		}

		textarea:focus-visible {
			outline: 1px solid var(--white);
		}

		legend {
			font-family: var(--anta);
			font-size: clamp(2rem, 5vw, 5rem);
			text-align: center;
			margin-bottom: 0.5rem;
			color: var(--purple);
			text-transform: uppercase;
			text-shadow: 5px 5px 4px var(--dark-gray);
		}

		label {
			margin-left: 0.25rem;
			font-family: var(--lexend);
			font-weight: 600;
		}

		span {
			font-size: clamp(1rem, 2vw, 2rem);
			font-weight: 800;
		}

		#name::-webkit-input-placeholder,
		#email::-webkit-input-placeholder,
		#message::-webkit-input-placeholder {
			color: var(--white);
			font-weight: 100;
		}

		.send {
			background-color: transparent;
			font-family: var(--lexend);
			color: var(--yellow);
			border: 1px solid var(--yellow);
			outline: 3px solid var(--yellow);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			font-size: clamp(1.2rem, 4vw, 2rem);
			font-weight: 600;
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: 45%;
			border-radius: 0.75rem;
			transition: 750ms;
			outline-offset: -7px;
			mix-blend-mode: difference;
			padding: 1.5rem 2.5rem;
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
			cursor: pointer;
		}

		.send:hover,
		.send:focus {
			opacity: 0.8;
			color: var(--yellow);
			mix-blend-mode: hard-light;
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}
		.open-button,
		.close-button {
			display: none;
		}

		.modal__p {
			font-family: var(--lexend);
			font-weight: 200;
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
		.send {
			width: 22%;
		}

		form {
			margin-left: 57%;
		}

		legend {
			text-shadow: -5px 5px 4px var(--dark-gray);
		}
	}

	@media screen and (min-width: 720px) {
		form {
			margin-left: 40.5%;
		}

		.send {
			width: 30%;
		}

		.send:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.open-button {
			display: block;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			height: 2%;
			margin-left: 100%;
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

		::backdrop {
			background: url('/logos/atweezy.png') no-repeat center center/cover;
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
			font-size: 1.5rem;
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

	@media screen and (min-width: 775px) {
		.send {
			width: 30%;
		}

		form {
			margin-left: 38.5%;
		}
	}

	@media screen and (min-width: 850px) {
		form {
			margin-left: 71.25%;
		}

		.send {
			width: 30%;
		}
	}

	@media screen and (min-width: 1024px) {
		form {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin-left: 63.5%;
		}

		label {
			margin-bottom: 1rem;
			text-align: center;
			transform: scale(1.5);
			letter-spacing: 5px;
		}

		input {
			font-size: 1.5rem;
			margin-bottom: 1rem;
			transform: scale(1.05);
		}

		textarea {
			font-size: 1rem;
			margin-bottom: 1rem;
		}

		.send {
			width: 30%;
		}

		fieldset {
			border: 5px solid var(--white);
			border-image: linear-gradient(to left, var(--black), var(--lightblack)) 1;
			font-weight: bolder;
			font-size: 2rem;
			margin: 2rem;
			padding: 2rem 5rem;
			border-radius: 10px;
		}

		legend {
			font-weight: bolder;
			padding: 0 1rem 0 1rem;
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
	}

	@media screen and (min-width: 1100px) {
		form {
			margin-left: 57.5%;
		}

		.modal h4 {
			color: var(--yellow);
		}

		.modal .modal__p {
			color: var(--off-white);
		}
	}

	@media screen and (min-width: 1200px) {
		form {
			margin-left: 54.75%;
		}
	}

	@media screen and (min-width: 1350px) {
		form {
			margin-left: 48.5%;
		}

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

		input {
			font-size: 2rem;
			padding: 2rem;
		}

		textarea {
			font-size: 2rem;
			padding: 2rem;
		}

		.send {
			width: 10%;
			margin-inline: auto;
			letter-spacing: 0;
		}

		.modal__p {
			font-size: 1.1rem;
		}
	}

	@media screen and (min-width: 1500px) {
		form {
			width: 100%;
			margin-left: 43.5%;
		}

		.open-button {
			scale: 0.85;
		}

		.close-button {
			scale: 0.85;
		}
	}

	@media screen and (min-width: 1600px) {
		form {
			width: 100%;
			margin-left: 35.25%;
		}
	}

	@media screen and (min-width: 1920px) {
		form {
			margin: 0 20%;
			margin-left: 34%;
		}
	}
</style>
