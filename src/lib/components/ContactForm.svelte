<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	import SendButton from '$lib/components/SendButton.svelte';

	let name = '';
	let email = '';
	let message = '';

	onMount(() => {
		const form = document.querySelector('form');

		gsap.set(form, { autoAlpha: 0 });

		gsap.to(form, { autoAlpha: 1, duration: 3.5 });
	});
</script>

<Modal />

<form method="POST" action="https://form.taxi/s/xeyymb58">
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
	:root {
		--100: 100%;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	input,
	textarea {
		font-size: clamp(1.1rem, 2vw, 2rem);
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

	input:user-valid,
	textarea:user-valid {
		outline: 2px solid var(--success);
	}

	input:user-invalid,
	textarea:user-invalid {
		outline: 2px solid var(--fail);
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

	span {
		font-size: clamp(1rem, 2vw, 2rem);
		font-weight: 800;
		letter-spacing: 3px;
		color: var(--smoke);
	}

	#name::-webkit-input-placeholder,
	#email::-webkit-input-placeholder,
	#message::-webkit-input-placeholder {
		color: var(--white);
		font-weight: 100;
	}

	@media screen and (min-width: 320px) {
		form {
			width: 95%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0.25rem;
		}

		fieldset {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: var(--100);
			margin: 0 auto;
		}

		input,
		textarea {
			width: 100%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
			border-radius: 10px;
			caret-color: var(--purple);
			color: var(--white);
		}

		textarea {
			padding: 0.5rem 1rem;
		}

		label {
			font-family: var(--montserrat);
			font-weight: 600;
			text-align: center;
		}

		.send {
			width: var(--100);
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1rem;
			margin-right: 1.5rem;
			margin-left: 5%;
		}
	}

	@media screen and (min-width: 500px) {
		label {
			margin-left: 0;
		}
	}

	@media screen and (min-width: 720px) {
		.send {
			width: var(--100);
			margin-left: 1%;
		}

		::backdrop {
			background: transparent;
		}
	}

	@media (min-width: 900px) {
		.send {
			margin-left: 3%;
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
			margin-bottom: 1rem;
			transform: scale(1.05);
			width: var(--100);
		}

		textarea {
			margin-bottom: 1rem;
			width: var(--100);
		}

		fieldset {
			border: 5px solid var(--white);
			border-image: linear-gradient(to left, var(--smoke), var(--smoke)) 1;
			font-weight: bolder;
			font-size: 2rem;
			padding: 2rem 5rem;
			border-radius: 10px;
			width: 90%;
		}

		.send {
			margin-left: 0;
		}
	}

	@media screen and (min-width: 1350px) {
		input,
		textarea {
			/* font-size: 2rem; */
			padding: 2rem;
		}

		label {
			margin-left: 0;
		}

		.send {
			margin-left: 1%;
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
