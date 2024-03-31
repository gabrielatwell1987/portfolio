<script>
	import ThreeCanvas from '$lib/components/ThreeCanvas.svelte';
</script>

<ThreeCanvas />

<section aria-label="hero">
	<!-- hero section text and links -->
	<h3>Frontend Crafted Web Experiences</h3>

	<h4 class="summary left">
		I am a frontend developer who loves to create beautiful and functional websites. This portfolio
		is a website that I built from scratch to showcase some projects that I created. I look forward
		to hearing from you so we can discuss your goals for your online needs!
	</h4>

	<a class="btn" href="/projects"><button aria-label="projects">Projects</button></a>

	<h4 class="summary italic">Sample of projects I have created.</h4>
</section>

<style>
	/* hero */
	section {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -75%);
		width: 100%;
		margin-top: 35%;
	}

	h3 {
		margin: 2rem auto;
		margin-top: 10%;
		color: var(--sky);
		font-size: 1.75rem;
		font-weight: 600;
		font-family: var(--montserrat);
		letter-spacing: 2px;
	}

	h4 {
		color: var(--white);
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 0.5px;
		font-family: var(--lexend);
		width: 99%;
		margin: 0 auto;
	}

	button {
		display: block;
		background-color: transparent;
		color: var(--white);
		font-family: var(--lexend);
		width: 10%;
		height: 10%;
		outline: none;
		border: 1px solid var(--white);
		margin: 1rem auto;
		border-radius: 10px;
		font-size: 1.2rem;
		border-radius: 5rem;
		filter: drop-shadow(0 0 0.75rem var(--smoke));
		letter-spacing: 1px;
		transition: 750ms;
		outline: 3px solid currentColor;
		outline-offset: -7px;
		margin-top: 2rem;
		margin-bottom: 0.25rem;
		padding: 1rem 1.75rem;
	}

	button:hover,
	button:focus {
		border: 1px solid var(--black);
		background-color: var(--white);
		color: var(--black);
		outline-offset: 0px;
		animation: wiggle 0.5s ease-in-out infinite;
	}

	.summary {
		margin: 0 auto;
		font-size: 1rem;
		font-weight: 500;
		width: 75%;
	}

	.italic {
		font-style: italic;
		font-family: var(--montserrat);
		font-weight: 200;
		font-size: 0.8rem;
		color: var(--white);
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}

	/* mobile */
	@media (min-width: 200px) {
		/* hero */
		section {
			position: absolute;
			top: 99%;
			left: 50%;
			transform: translate(-50%, -99%);
		}

		h3 {
			margin: 2rem auto;
			margin-top: 10%;
			color: var(--sky);
			font-size: 1.25rem;
			letter-spacing: 2px;
		}

		h4 {
			color: var(--white);
			font-size: 0.75rem;
			font-weight: 600;
			letter-spacing: 0.5px;
			font-family: var(--montserrat);
		}

		button {
			display: block;
			background-color: transparent;
			color: var(--white);
			font-family: var(--lexend);
			width: 50%;
			height: 10%;
			outline: none;
			border: 1px solid var(--white);
			margin: 1rem auto;
			border-radius: 10px;
			font-size: 1.2rem;
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			letter-spacing: 1px;
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			margin-top: 2rem;
			margin-bottom: 0.25rem;
			padding: 1rem 1.75rem;
			mix-blend-mode: difference;
			user-select: none;
		}

		button:hover,
		button:focus {
			border: 1px solid var(--black);
			background-color: var(--white);
			color: var(--black);
			outline-offset: 0px;
		}

		section {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}

		.btn {
			text-decoration: none;
			margin: 0 auto;
		}

		.summary {
			margin: 0 auto;
			font-size: 1rem;
			font-weight: 500;
			width: 100%;
			padding: 0 1.25rem;
		}

		.left {
			text-align: left;
		}

		.italic {
			font-style: italic;
			font-family: var(--montserrat);
			font-weight: 200;
			font-size: 0.8rem;
			color: var(--white);
		}
	}

	/* tablet */
	@media (min-width: 740px) {
		/* hero */
		section {
			position: absolute;
			top: -18%;
			left: 50%;
			transform: translate(-50%, -18%);
			width: 100%;
		}

		button {
			font-size: 1rem;
			width: 25%;
			letter-spacing: 2px;
		}

		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		h3 {
			font-size: 2.25rem;
			letter-spacing: 7px;
		}

		h4 {
			color: var(--white);
			font-size: 1.25rem;
		}

		.summary {
			width: 75%;
		}

		@keyframes wiggle {
			0% {
				rotate: 0deg;
				translate: 0 0;
			}
			25% {
				rotate: -2deg;
				translate: -5px 0;
			}
			80% {
				rotate: 2deg;
				translate: 5px 0;
			}
		}
	}

	/* desktop */
	@media (min-width: 990px) {
		/* hero */
		section {
			position: absolute;
			top: -18%;
			left: 50%;
			transform: translate(-50%, -18%);
			width: 100%;
		}

		button {
			width: 30%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}

		.italic {
			margin-top: -1rem;
		}

		.summary {
			width: 50%;
		}
	}

	/* bigger than desktop */
	@media screen and (min-width: 1100px) {
		button {
			width: 20%;
		}
	}

	/* way bigger than desktop */
	@media screen and (min-width: 1920px) {
		button {
			width: 10%;
		}
	}
</style>
