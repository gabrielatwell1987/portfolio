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

		gsap.set(form, { autoAlpha: 0, x: -175 });

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
	@media screen and (min-width: 300px) {
		:root {
			--100: 100%;
		}

		form {
			width: var(--100);
			/* margin-left: 54.5%; */
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		/* fieldset {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: var(--100);
			margin: 0 auto;
		} */

		input {
			width: 131%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
			border-radius: 10px;
			caret-color: var(--purple);
			color: var(--white);
			font-size: 1.05rem;
			margin-left: -15%;
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

		textarea {
			width: 131%;
			background-color: transparent;
			border: 2px solid var(--dark-gray);
			border-radius: 10px;
			color: var(--white);
			font-size: 1.05rem;
			margin-left: -15%;
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
			margin-left: -1rem;
			font-family: var(--montserrat);
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
			width: var(--100);
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1rem;
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
			margin-left: 0.25%;
		}

		/* form {
			margin-left: 19%;
		} */

		.send {
			margin-left: 21%;
		}

		label {
			margin-left: 5%;
		}
	}

	@media screen and (min-width: 720px) {
		input,
		textarea {
			width: 175%;
		}

		/* form {
			margin-left: 15%;
		} */

		.send {
			width: var(--100);
			margin-left: 37%;
		}

		::backdrop {
			background: transparent;
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
			width: var(--100);
		}

		textarea {
			font-size: 1rem;
			margin-bottom: 1rem;
			width: var(--100);
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

		.send {
			margin-left: 0;
		}
	}

	@media screen and (min-width: 1100px) {
		fieldset {
			width: 65%;
		}
	}

	@media screen and (min-width: 1350px) {
		/* form {
			margin-left: 10%;
		} */

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
</style>
