<script>
	import Button from '$lib/components/Button.svelte';
</script>

<main>
	<form>
		<h2>Log In</h2>

		<input type="email" placeholder="Email" required />
		<input type="password" placeholder="Password" required />

		<Button title="Log In" />
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5%;
		height: 100vh;
		width: 70%;
		margin-inline: auto;
	}

	h2 {
		font-size: clamp(2.5rem, 3vw, 5rem);
		letter-spacing: 5px;
	}

	input {
		font-size: clamp(1.1rem, 2vw, 2rem);
		padding: 2rem;
		border-radius: 12px;
		background: transparent;
		border: 1px solid var(--off-white);
		color: var(--white);
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

	input:user-valid {
		outline: 2px solid var(--success);
	}

	input:user-invalid {
		outline: 2px solid var(--fail);
	}
</style>
