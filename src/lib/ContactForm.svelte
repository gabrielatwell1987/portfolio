<script>
</script>

<form method="POST">
	<label for="name"><span>Name</span></label>
	<input type="text" name="name" required />

	<label for="email"><span>Email</span></label>
	<input type="email" name="email" required />

	<label for="message"><span>Message</span></label>
	<textarea type="text" name="message" rows="5" required />

	<button type="submit">Send</button>
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
</style>
