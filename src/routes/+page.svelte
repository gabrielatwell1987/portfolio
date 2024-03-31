<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	// animations
	onMount(() => {
		// fade the logo in
		gsap.to('main', { autoAlpha: 1, duration: 2.5, ease: 'sine.in' });
	});
</script>

<main aria-label="hero">
	<!-- hero section -->
	<img
		src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		alt="Wireframing and design of a website"
	/>

	<section>
		<!-- hero section text and links -->
		<h3>Frontend Crafted Web Experiences</h3>

		<h4 class="summary">
			I am a frontend developer who loves to create beautiful and functional websites. This
			portfolio is a website that I built from scratch to showcase some projects that I created. I
			look forward to hearing from you so we can discuss your goals for your online needs!
		</h4>

		<a class="btn" href="/projects"><button aria-label="projects">Projects</button></a>

		<h4 class="summary italic">Sample of projects I have created.</h4>
	</section>

	<!-- spacing -->
	<br />
</main>

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
			height: 100vh;
			position: relative;
		}

		h3 {
			margin: 2rem auto;
			margin-top: 10%;
			color: var(--sky);
			font-size: 1.25rem;
			font-weight: 600;
			font-family: var(--anta);
			letter-spacing: 2px;
		}

		h4 {
			color: var(--white);
			font-size: 0.75rem;
			font-weight: 400;
			letter-spacing: 0.5px;
			font-family: var(--lexend);
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

		/* hero section */
		img {
			border-radius: 15px;
			opacity: 0.25;
			transition: opacity 0.75s ease-in-out;
			width: 100%;
			height: 100%;
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
	}

	/* bigger than tablet */
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}

		button {
			font-size: 1rem;
			width: 25%;
			font-size: 1rem;
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

		/* hero section */

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

	/* bigger than desktop */
	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
		}

		/* hero section */
		button {
			width: 30%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}

		.italic {
			margin-top: -2rem;
		}

		.summary {
			width: 50%;
			font-size: 1.1rem;
		}

		img {
			width: 90%;
			height: 100%;
		}

		section {
			top: 30%;
			left: 50%;
			transform: translate(-50%, -30%);
		}

		h3 {
			font-size: 3rem;
			letter-spacing: 10px;
		}
	}

	/* way bigger than desktop */
	@media screen and (min-width: 1100px) {
		button {
			width: 20%;
		}
	}

	@media screen and (min-width: 1920px) {
		button {
			width: 10%;
		}
	}
</style>
