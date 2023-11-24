<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let message = '';

	onMount(() => {
		const button = document.querySelector('.button');

		gsap.from('.form', { opacity: 0, duration: 3 });
	});
</script>

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
		font-size: 1rem;
		margin-bottom: 1rem;
		width: 100%;
	}
	textarea {
		font-size: 1rem;
		margin-bottom: 1rem;
	}
	.button {
		font-size: 1rem;
		font-weight: bold;
		text-align: center;
		width: 100%;
	}
	.button:hover {
		opacity: 0.9;
	}
	fieldset {
		border: 0.5px solid var(--white);
		border-radius: 10px;
		font-weight: bolder;
		font-size: 2rem;
		margin: 2rem;
		padding: 2rem 5rem;
		border-radius: 8px;
	}
	legend {
		font-weight: bolder;
		font-size: 1.75rem;
		color: var(--white);
		padding: 0 1rem 0 1rem;
		font-family: var(--courier);
	}
	@media screen and (min-width: 200px) {
		form {
			width: 100%;
			margin: 0 25%;
		}
		input {
			width: 100%;
		}
		textarea {
			width: 100%;
		}
	}
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
			width: 100%;
		}
		textarea {
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}
		.button {
			font-size: 1rem;
			font-weight: bold;
			text-align: center;
			width: 100%;
			border: 1px solid var(--white);
			background-color: var(--cadet);
		}
		.button:hover {
			opacity: 0.9;
		}
		fieldset {
			border: 0.5px solid var(--white);
			font-weight: bolder;
			font-size: 2rem;
			margin: 2rem;
			padding: 2rem 5rem;
			border-radius: 8px;
		}
		legend {
			font-weight: bolder;
			font-size: 1.75rem;
			color: var(--white);
			padding: 0 1rem 0 1rem;
			font-family: var(--courier);
		}
	}
</style>
