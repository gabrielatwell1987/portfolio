<script>
</script>

<main class="loader" />

<style>
	.loader {
		width: 5.5rem;
		aspect-ratio: 1;
		position: relative;
	}

	.loader:before,
	.loader:after {
		content: '';
		position: absolute;
		border-radius: 50px;
		box-shadow: 0 0 0 3px inset #fff;
		animation: loader 2.5s infinite;
	}

	.loader:after {
		animation-delay: -1.25s;
	}

	@keyframes loader {
		0% {
			inset: 0 32.5px 32.5px 0;
		}
		12.5% {
			inset: 0 32.5px 0 0;
		}
		25% {
			inset: 32.5px 32.5px 0 0;
		}
		37.5% {
			inset: 32.5px 0 0 0;
		}
		50% {
			inset: 32.5px 0 0 32.5px;
		}
		62.5% {
			inset: 0 0 0 32.5px;
		}
		75% {
			inset: 0 0 32.5px 32.5px;
		}
		87.5% {
			inset: 0 0 32.5px 0;
		}
		100% {
			inset: 0 32.5px 32.5px 0;
		}
	}
</style>
