<script>
	let name = '';
	let email = '';
	let message = '';
</script>

<form method="POST" action="https://formsubmit.co/gatwell702@gmail.com">
	<input type="hidden" name="send_to" value="gatwell702@gmail.com" />
	<fieldset>
		<legend> Contact </legend>
		<label for="name"><span>Name</span></label>
		<input type="text" id="name" name="name" bind:value={name} required />

		<label for="email"><span>Email</span></label>
		<input type="email" id="email" name="email" bind:value={email} required />

		<label for="message"><span>Message</span></label>
		<textarea type="text" id="message" name="message" bind:value={message} rows="5" required />

		<button type="submit">Send</button>
	</fieldset>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-left: 25%;
		margin-bottom: 2rem;
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
		width: 15%;
		margin-left: 42.5%;
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
		font-size: 2rem;
		color: lightskyblue;
		padding: 0 1rem 0 1rem;
	}
	@media (min-width: 200px) {
		form {
			width: 100%;
			margin: 0 25%;
		}
	}
</style>
