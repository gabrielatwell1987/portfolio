<script>
	import { signOut } from '@auth/sveltekit/client';
</script>

<div>
	<button on:click={signOut}>Sign out</button>
</div>

<style>
	button {
		background-color: transparent;
		color: var(--white);
		padding: 0.5rem 1rem;
		border: none;
		cursor: pointer;
		font-size: clamp(1rem, 2vw, 1.75rem);
		font-weight: 100;
	}

	button:hover {
		color: var(--off-white);
	}
</style>
