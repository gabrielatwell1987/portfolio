<script>
</script>

<main class="loader" />

<style>
	.loader {
		width: 5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: transparent;
		border: 2px solid #fff;
		box-shadow: 0 0 0 0 #fff4;
		animation: l2 1.5s infinite linear;
		position: relative;
	}
	.loader:before,
	.loader:after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: 0 0 0 0 #fff4;
		animation: inherit;
		animation-delay: -0.5s;
	}
	.loader:after {
		animation-delay: -1s;
	}
	@keyframes l2 {
		100% {
			box-shadow: 0 0 0 40px #fff6;
		}
	}
</style>
