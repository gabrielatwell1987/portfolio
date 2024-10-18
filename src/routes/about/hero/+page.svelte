<script>
	import ThreeCanvas from '$lib/components/ThreeCanvas.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import SEO from '$lib/data/SEO.svelte';

	onMount(() => {
		const heroTitle = document.querySelector('.hero-title');
		const up = document.querySelector('.up');

		gsap.from('main', { autoAlpha: 0, duration: 2.5, ease: 'sine.in' });

		const textTl = gsap.timeline({ defaults: { ease: 'power1.inOut' } }, { paused: true });
		textTl.to(heroTitle, { yPercent: -20 }).from(up, { y: 10 }, 0);
		up.addEventListener('mouseenter', () => textTl.play());
		up.addEventListener('mouseleave', () => textTl.reverse());
	});

	$: console.log('Three.js hero section');
</script>

<SEO
	title="atwellUI"
	description="Welcome to Gabe Atwell's portfolio"
	keywords="hero section, three.js hero section"
/>

<br /><br />

<ThreeCanvas />

<section aria-label="hero">
	<h3 class="hero-title">Frontend Crafted Web Experiences</h3>

	<h4 class="summary left up">
		I am a frontend developer who loves to create beautiful and functional websites. This portfolio
		is a website that I built from scratch to showcase some projects that I created. I look forward
		to hearing from you so we can discuss your goals for your online needs!
	</h4>

	<a class="btn" role="button" href="/projects">Projects</a>

	<h4 class="italic">projects I created..</h4>
	<br />
</section>

<style>
	@media screen and (min-width: 300px) {
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
			font-size: clamp(1.5rem, 5vw, 4rem);
			font-family: var(--anta);
			letter-spacing: 7px;
		}

		h4 {
			color: var(--white);
			letter-spacing: 0.5px;
			font-family: var(--lexend);
			font-size: clamp(1.25rem, 2vw, 1.75rem);
			margin-inline: auto;
			margin-bottom: 3%;
			font-weight: 500;
			width: 100%;
			padding: 0 1.25rem;
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
			border-radius: 10px;
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
			display: flex;
			justify-content: center;
			align-items: center;
		}

		a:hover,
		a:focus {
			border: 1px solid var(--black);
			background-color: var(--white);
			color: var(--black);
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		section {
			position: absolute;
			top: 80%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}

		.btn {
			text-decoration: none;
			margin: 1rem auto;
		}

		.italic {
			font-style: italic;
			font-family: var(--montserrat);
			font-weight: 200;
			color: var(--white);
		}

		.summary {
			margin: 0 auto;
			font-size: clamp(1rem, 1.5vw, 1.75rem);
			font-weight: 500;
			width: 100%;
			padding: 0 1.25rem;
			margin-bottom: 3%;
		}

		.left {
			text-align: left;
		}
	}

	@media screen and (min-width: 500px) {
		a {
			width: 30%;
		}
	}

	@media screen and (min-width: 740px) {
		section {
			text-align: center;
			font-size: 2rem;
			top: 85%;
		}

		a {
			font-size: 1.25rem;
			width: 25%;
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
		section {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -30%);
		}

		a {
			width: 35%;
			font-size: 1.5rem;
			margin: 3rem auto;
			padding: 1.5rem 2.5rem;
		}

		.italic {
			margin-top: 1rem;
		}

		.summary {
			width: 50%;
			letter-spacing: 3px;
			margin-top: 1rem;
		}
	}

	@media (min-width: 1024px) {
		section {
			top: 40%;
		}

		.summary {
			width: 80%;
			margin-inline: auto;
		}
	}

	@media screen and (min-width: 1100px) {
		a {
			width: 30%;
			padding: 2.2rem 1rem;
			font-size: 2rem;
			align-content: center;
		}
	}

	@media screen and (min-width: 1400px) {
		section {
			top: 45%;
		}

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
