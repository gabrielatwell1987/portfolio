<script>
	let { title } = $props();
</script>

<main>
	<h1>{title}</h1>
</main>

<style>
	main {
		@supports (background-clip: text) or (-webkit-background-clip: text) {
			& h1 {
				--bgSize: 200%;
				margin: 2rem auto;
				margin-top: 5%;
				color: transparent;
				font-family: var(--ultra);
				font-size: clamp(var(--h4), 4vw, var(--xxl));
				font-weight: 700;
				letter-spacing: -1px;
				background-image: linear-gradient(
					to right,
					var(--clr-blue),
					var(--clr-main),
					var(--clr-blue),
					var(--clr-main),
					var(--clr-blue)
				);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-size: var(--bgSize);
				animation: animate 5s ease-out infinite;
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
