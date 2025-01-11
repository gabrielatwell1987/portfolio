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
				font-family: var(--anta);
				font-size: clamp(1.75rem, 4vw, 7rem);
				font-weight: 700;
				letter-spacing: 3px;
				background-image: linear-gradient(
					to right,
					var(--sky),
					var(--off-white),
					var(--white),
					var(--off-white),
					var(--sky)
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
