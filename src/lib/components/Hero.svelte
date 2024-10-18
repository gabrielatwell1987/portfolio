<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const heroTitle = document.querySelector('.hero-title');
		const up = document.querySelector('.up');

		gsap.from('section', { autoAlpha: 0, duration: 2.5, ease: 'sine.in' });

		const textTl = gsap.timeline({ defaults: { ease: 'power1.inOut' } }, { paused: true });
		textTl.to(heroTitle, { yPercent: -20 }).from(up, { y: 10 }, 0);
		up.addEventListener('mouseenter', () => textTl.play());
		up.addEventListener('mouseleave', () => textTl.reverse());
	});
</script>

<main>
	<img
		src="https://images.pexels.com/photos/20853116/pexels-photo-20853116/free-photo-of-programming-code-on-a-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		alt="Wireframing and design of a website"
	/>

	<section aria-label="hero">
		<h3 class="hero-title">Frontend Crafted Web Experiences</h3>

		<h4 class="summary left up">
			I am a frontend developer who loves to create beautiful and functional websites. This
			portfolio is a website that I built from scratch to showcase some projects that I created. I
			look forward to hearing from you so we can discuss your goals for your online needs!
		</h4>

		<a class="btn" role="button" href="/projects">Projects</a>

		<h4 class="summary italic">projects I created..</h4>
	</section>

	<br />
</main>

<style>
	@media screen and (min-width: 300px) {
		main {
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
			font-size: clamp(1.5rem, 5vw, 4rem);
			font-family: var(--anta);
			letter-spacing: 7px;
		}

		h4 {
			color: var(--white);
			font-weight: 400;
			letter-spacing: 0.5px;
			font-family: var(--lexend);
			font-size: clamp(1rem, 1.5vw, 1.75rem);
		}

		a {
			display: block;
			background-color: transparent;
			color: var(--white);
			font-family: var(--orbitron);
			font-size: 1.2rem;
			font-weight: 500;
			width: 50%;
			height: 10%;
			outline: none;
			border: 1px solid var(--white);
			margin: 1rem auto;
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			letter-spacing: 1px;
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			margin-top: 3rem;
			margin-bottom: 0.25rem;
			padding: 1rem 1.75rem;
			user-select: none;
		}

		a:hover,
		a:focus {
			border: 1px solid var(--black);
			background-color: var(--white);
			color: var(--black);
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		img {
			border-radius: 15px;
			opacity: 0.25;
			transition: opacity 0.75s ease-in-out;
			width: 100%;
			height: 100%;
			object-fit: cover;
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
			margin: 1rem auto;
		}

		.summary {
			margin: 0 auto;
			font-size: clamp(1rem, 1.5vw, 1.75rem);
			font-weight: 500;
			width: 100%;
			padding: 0 1.25rem;
			margin-bottom: 3%;
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
	}

	@media screen and (min-width: 500px) {
		a {
			width: 40%;
		}
	}

	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}

		a {
			font-size: 1.25rem;
			width: 45%;
			font-size: 1rem;
			letter-spacing: 2px;
		}

		a:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.summary {
			width: 85%;
		}
	}

	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
		}

		a {
			width: 40%;
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
			margin-top: 1rem;
		}

		img {
			width: 90%;
			height: 100%;
		}
	}

	@media (min-width: 1024px) {
		h3 {
			width: 90%;
			margin-inline: auto;
		}

		.summary {
			width: 80%;
			margin-inline: auto;
		}
	}

	@media screen and (min-width: 1100px) {
		a {
			width: 30%;
			font-size: 2rem;
		}
	}

	@media screen and (min-width: 1400px) {
		a {
			width: 25%;
		}
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
</style>
