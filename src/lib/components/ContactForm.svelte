<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let message = '';

	onMount(() => {
		gsap.set('.form', { autoAlpha: 0 });

		gsap.to('.form', { autoAlpha: 1, duration: 3.5 });

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

<button class="open-button"><i class="fa-regular fa-folder-open" /></button>

<dialog class="modal" id="modal">
	<div class="column border">
		<img src="logos/newspaper.jpg" alt="frontend newspaper clipping" />

		<h4>Please contact me for any frontend work!</h4>

		<p>
			If you need a logo designed, help with web presence, or animations for your website... you can
			count on me.
		</p>
	</div>

	<button class="close-button"><i class="fa-solid fa-xmark" /></button>
</dialog>

<!-- contact me form -->
<form class="form" method="POST" action="https://formsubmit.co/gatwell702@gmail.com">
	<input type="hidden" name="send_to" value="gatwell702@gmail.com" />

	<fieldset>
		<legend> CONTACT </legend>

		<label for="name"><span>Name</span></label>
		<input type="text" id="name" name="name" placeholder="Your name" bind:value={name} required />

		<label for="email"><span>Email</span></label>
		<input
			type="email"
			id="email"
			name="email"
			placeholder="Your email"
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

		<button class="button" type="submit">Send</button>
	</fieldset>
</form>

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
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
			font-family: var(--major);
			font-size: 2rem;
			text-align: center;
			margin-bottom: 0.5rem;
			color: var(--smoke);
		}

		label {
			margin-left: 0.25rem;
			font-weight: 600;
		}

		.button {
			width: 35%;
			margin: 0 auto;
			border: 1px solid var(--white);
			border-radius: 8px;
			background-color: transparent;
			color: var(--white);
			font-size: 1.2rem;
			font-weight: 900;
			text-align: center;
			font-family: var(--montserrat);
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
		}

		.button:hover,
		.button:focus {
			opacity: 0.8;
			background-color: var(--smoke);
			color: black;
			outline-offset: 0px;
		}
		.open-button,
		.close-button {
			display: none;
		}
	}
	/* bigger than tablet */
	@media screen and (min-width: 750px) {
		.button {
			width: 20%;
			font-size: 1rem;
		}

		.button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		/* modal */

		.open-button {
			display: block;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--smoke);
			width: 4%;
			height: 2%;
			margin-left: 100%;
			outline: none;
			border: 2px solid var(--smoke);
			border-radius: 5px;
		}

		.open-button:hover {
			border: 2px solid var(--white);
			color: var(--white);
		}

		.close-button {
			display: block;
			font-size: 1.2rem;
			font-weight: 800;
			background-color: transparent;
			color: var(--white);
			width: 4%;
			margin-left: 35%;
			margin-right: 2rem;
			outline: none;
			border: 2px solid var(--white);
			border-radius: 5px;
		}

		.close-button:hover {
			color: var(--smoke);
			border: 2px solid var(--smoke);
		}

		.modal {
			padding: 2rem;
			width: 93%;
			height: 83%;
			margin: 0 auto;
		}

		::backdrop {
			background: url('/logos/smoky.png') no-repeat center center/cover;
		}

		.modal h4 {
			font-size: 1.5rem;
			font-weight: 900;
			font-family: var(--montserrat);
			color: var(--blue);
			margin-top: 2rem;
		}

		.modal img {
			border-radius: 10px;
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

	/* bigger than desktop */
	@media screen and (min-width: 1024px) {
		form {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin: 0 25%;
		}

		label {
			font-size: 1rem;
			margin-bottom: 0.5rem;
			text-align: center;
		}

		input {
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}

		textarea {
			font-size: 1rem;
			margin-bottom: 1rem;
		}

		.button {
			width: 25%;
			font-size: 1.5rem;
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
			font-size: 2.75rem;
			padding: 0 1rem 0 1rem;
			text-shadow: -5px 5px 4px var(--dark-gray);
		}
	}
</style>
