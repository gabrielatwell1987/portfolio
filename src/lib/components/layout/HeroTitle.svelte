<script>
	let { title } = $props();
</script>

<main>
	<h1>{title}</h1>
</main>

<style>
	main {
		@supports (background-clip: text) or (-webkit-background-clip: text) {
			h1 {
				--bgSize: 200%;
				margin: 2rem auto;
				margin-top: 5%;
				color: transparent;
				font-family: var(--orbitron);
				font-size: clamp(1.5rem, 4vw, 7rem);
				font-weight: 700;
				letter-spacing: 3px;
				background-image: linear-gradient(
					to right,
					var(--clr-blue),
					var(--clr-main),
					var(--clr-blue),
					var(--clr-main),
					var(--clr-blue)
				);
				background-clip: text;
				background-size: var(--bgSize);
				animation: animate 5s ease-in-out infinite;
				-webkit-background-clip: text;
			}
		}
	}

	@keyframes animate {
		0% {
			background-position: 0;
		}

		50% {
			background-position: 50%;
		}

		100% {
			background-position: 0;
		}
	}
</style>
