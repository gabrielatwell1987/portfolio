<script>
	import ThreeCanvas from '$lib/components/ThreeCanvas.svelte';

	$: console.log(ThreeCanvas);
</script>

<svelte:head>
	<title>Welcome</title>
	<meta name="description" content="Gabriel Atwell's Hero Section" />
	<meta name="keywords" content="Hero" />
</svelte:head>

<br /><br />

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

	<h4 class="summary italic">projects I created..</h4>
	<br />
</section>

<style>
	@media screen and (min-width: 200px) {
		section {
			text-align: center;
			font-size: 1.75rem;
			height: 100vh;
			position: relative;
			margin-bottom: 2%;
		}

		h3 {
			margin: 2rem auto;
			margin-top: 10%;
			color: var(--sky);
			font-size: 1.5rem;
			font-weight: 600;
			font-family: var(--anta);
			letter-spacing: 2px;
		}

		h4 {
			color: var(--white);
			font-weight: 400;
			letter-spacing: 0.5px;
			font-family: var(--lexend);
			font-size: clamp(1rem, 1.5vw, 1.75rem);
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
			user-select: none;
		}

		button:hover,
		button:focus {
			border: 1px solid var(--black);
			background-color: var(--white);
			color: var(--black);
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		section {
			position: absolute;
			top: 90%;
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
			font-size: clamp(1rem, 1.5vw, 1.75rem);
			font-weight: 500;
			width: 100%;
			padding: 0 1.25rem;
		}

		.italic {
			font-style: italic;
			font-family: var(--montserrat);
			font-weight: 200;
			color: var(--white);
		}

		.left {
			text-align: left;
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

	@media screen and (min-width: 740px) {
		section {
			text-align: center;
			font-size: 2rem;
			top: 85%;
		}

		button {
			font-size: 1.25rem;
			width: 25%;
			font-size: 1rem;
			letter-spacing: 2px;
		}

		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		h3 {
			font-size: 2.5rem;
			letter-spacing: 7px;
		}

		h4 {
			color: var(--white);
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

	@media screen and (min-width: 990px) {
		section {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
		}

		button {
			width: 35%;
			font-size: 1.5rem;
			margin: 3rem auto;
			padding: 1.5rem 2.5rem;
		}

		.italic {
			margin-top: -2rem;
		}

		.summary {
			width: 50%;
			letter-spacing: 3px;
		}

		section {
			top: 45%;
			left: 50%;
			transform: translate(-50%, -30%);
		}

		h3 {
			font-size: 2.2rem;
			letter-spacing: 10px;
		}
	}

	@media (min-width: 1024px) {
		h3 {
			font-size: 2.25rem;
			width: 90%;
			margin-inline: auto;
		}

		.summary {
			width: 80%;
			margin-inline: auto;
		}

		section {
			top: 40%;
		}
	}

	@media screen and (min-width: 1100px) {
		button {
			width: 15%;
			font-size: 2.5rem;
		}

		h3 {
			font-size: 4.5rem;
		}
	}

	@media screen and (min-width: 1400px) {
		section {
			top: 45%;
		}

		h3 {
			font-size: 5rem;
		}
	}
</style>
