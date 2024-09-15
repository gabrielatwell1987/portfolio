<script>
</script>

<main class="loader" />

<style>
	.loader {
		width: 5rem;
		aspect-ratio: 1;
		border: 5px solid var(--purple);
		border-radius: 50%;
		background: transparent;
		box-shadow: 0 0 0 0 var(--blue);
		animation: l2 1.5s infinite linear;
		position: relative;
	}

	.loader:before,
	.loader:after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: 0 0 0 0 var(--dark-blue);
		animation: inherit;
		animation-delay: -0.5s;
	}

	.loader:after {
		animation-delay: -1s;
	}

	@keyframes l2 {
		100% {
			box-shadow: 0 0 0 40px var(--sky);
		}
	}
</style>
