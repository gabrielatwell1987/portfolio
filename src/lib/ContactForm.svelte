<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let message = '';

	onMount(() => {
		gsap.set('.form', { y: 300 });

		gsap.to('.form', { y: 0, duration: 1.5 });
	});
</script>

<form class="form" method="POST" action="https://formsubmit.co/gatwell702@gmail.com">
	<input type="hidden" name="send_to" value="gatwell702@gmail.com" />
	<fieldset>
		<legend> Send me a message </legend>
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

		<button type="submit">Send</button>
	</fieldset>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 0 0 25%;
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
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	button {
		font-size: 1rem;
		font-weight: bold;
		text-align: center;
		width: 100%;
	}
	fieldset {
		border: 3px solid whitesmoke;
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
	}
	@media (min-width: 200px) {
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
	@media (min-width: 1024px) {
		form {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin: 0 0 0 25%;
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
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}
		button {
			font-size: 1rem;
			font-weight: bold;
			text-align: center;
			width: 100%;
		}
		fieldset {
			border: 3px solid whitesmoke;
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
		}
	}
</style>
