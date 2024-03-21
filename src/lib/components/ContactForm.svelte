<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let message = '';

	// Animations
	onMount(() => {
		gsap.set('.form', { autoAlpha: 0 });

		gsap.to('.form', { autoAlpha: 1, duration: 3.5 });

		// modal
		const modal = document.querySelector('.modal');
		const openModal = document.querySelector('.open__button');
		const closeModal = document.querySelector('.close__button');

		openModal.addEventListener('click', () => {
			modal.showModal();
		});

		closeModal.addEventListener('click', () => {
			modal.close();
		});
	});
</script>

<!-- Modal -->
<button class="open__button"><i class="fa-regular fa-folder-open" /></button>

<dialog class="modal" id="modal">
	<article>
		<header>
			<button rel="prev" class="close__button"><i class="fa-solid fa-xmark" /></button>

			<h4>Please contact me for any frontend work!</h4>
		</header>

		<img src="logos/newspaper.jpg" alt="frontend newspaper clipping" />

		<p class="modal__p">
			If you need help with a website, or if you have any questions, please feel free to contact me.
			I am always happy to help!
		</p>
	</article>
</dialog>

<!-- contact form -->
<form class="form" method="POST" action="https://formsubmit.co/gatwell702@gmail.com">
	<input type="hidden" name="send_to" value="gatwell702@gmail.com" />

	<fieldset>
		<legend> CONTACT </legend>

		<label for="name"><span>Name</span></label>
		<input type="text" id="name" name="name" placeholder="John Doe" bind:value={name} required />

		<label for="email"><span>Email</span></label>
		<input
			type="email"
			id="email"
			name="email"
			placeholder="john.doe@example.com"
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
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		/* content */
		form {
			width: 100%;
			margin: 0 34.5%;
		}

		input {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
		}

		textarea {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
		}

		legend {
			font-family: var(--anta);
			font-size: 2rem;
			text-align: center;
			margin-bottom: 0.5rem;
			color: var(--purple);
		}

		label {
			margin-left: 0.25rem;
			font-weight: 600;
		}

		img {
			box-shadow: 0 0 2px 2px var(--dark-gray);
			/* box-shadow: 0 0 2px 2px var(--dark-gray); */
		}

		span {
			font-size: 0.95rem;
			font-weight: 800;
		}

		#name::-webkit-input-placeholder,
		#email::-webkit-input-placeholder,
		#message::-webkit-input-placeholder {
			color: var(--white);
			font-weight: 100;
		}

		.send {
			width: 35%;
			margin: 3rem auto;
			border: 1px solid var(--white);
			border-radius: 0.75rem;
			background-color: transparent;
			color: var(--white);
			font-size: 1.25rem;
			text-align: center;
			font-family: var(--montserrat);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			padding: 1rem 1.75rem;
			mix-blend-mode: difference;
		}

		.send:hover,
		.send:focus {
			opacity: 0.8;
			background-color: var(--smoke);
			color: black;
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}
		.open__button,
		.close__button {
			display: none;
		}

		.modal__p {
			font-family: var(--lexend);
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
		/* content */
		.send {
			width: 30%;
		}
	}

	/* bigger than tablet */
	@media screen and (min-width: 720px) {
		/* content */
		span {
			font-size: 1.25rem;
			font-weight: 800;
		}

		.send {
			width: 20%;
			font-size: 2rem;
		}

		.send:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		/* modal */
		.open__button {
			display: block;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			height: 2%;
			margin-left: 100%;
			outline: none;
			border: 2px solid var(--white);
			border-radius: 15px;
			padding: 1rem;
			outline: none;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.close__button {
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
			font-size: 1.5rem;
			font-weight: 600;
			font-family: var(--anta);
			color: var(--purple);
			margin-top: 2rem;
		}

		.modal img {
			border-radius: 10px;
			width: 50%;
			height: 25%;
			margin-left: 23%;
		}

		.modal__p {
			width: 60%;
			margin: 1.5rem auto;
		}

		/* content */
		label:hover {
			font-family: var(--montserrat);
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
		/* content */
		.send {
			width: 25%;
		}
	}

	/* bigger than desktop */
	@media screen and (min-width: 1024px) {
		/* content */
		form {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin: 0 25%;
		}

		label {
			font-size: 1rem;
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
			font-size: 2rem;
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
			font-size: 5rem;
			padding: 0 1rem 0 1rem;
			text-shadow: -5px 5px 4px var(--dark-gray);
		}

		h4 {
			line-height: 0.95;
		}

		p {
			line-height: 2.25;
			width: 75%;
			margin: 0 auto;
		}
	}

	/* way bigger than desktop */
	@media screen and (min-width: 1920px) {
		/* content */
		.send {
			width: 15%;
		}
	}
</style>
