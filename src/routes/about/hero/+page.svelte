<script>
	import ThreeCanvas from '$lib/components/ThreeCanvas.svelte';
	import gsap from 'gsap';
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/Button.svelte';

	$effect(() => {
		const heroTitle = document.querySelector('.hero-title');
		const up = document.querySelector('.up');

		gsap.from('section', { autoAlpha: 0, duration: 1.5, delay: 0.25, ease: 'sine.in' });

		const textTl = gsap.timeline({ defaults: { ease: 'power1.inOut' } }, { paused: true });
		textTl.to(heroTitle, { yPercent: -20 }).from(up, { y: 10 }, 0);
		up.addEventListener('mouseenter', () => textTl.play());
		up.addEventListener('mouseleave', () => textTl.reverse());

		console.log('Three.js hero section');
	});
</script>

<SEO
	title="Three.js hero section"
	description="Welcome to Gabe Atwell's portfolio"
	keywords="hero section, three.js hero section"
/>

<br /><br />

<ThreeCanvas />

<section aria-label="hero">
	<h1 class="hero-title">Frontend Crafted Web Experiences</h1>

	<h4 class="summary left up">
		I am a frontend developer who loves to create beautiful and functional websites. This portfolio
		is a website that I built from scratch to showcase some projects that I created. I look forward
		to hearing from you so we can discuss your goals for your online needs!
	</h4>

	<a href="/projects">
		<Button title="Projects" />
	</a>

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

		h1 {
			margin: 2rem auto;
			margin-top: 10%;
			color: var(--sky);
			font-size: clamp(1.5rem, 3vw, 5rem);
			font-family: var(--anta);
			letter-spacing: 7px;
		}

		h4 {
			color: var(--white);
			letter-spacing: 0.5px;
			font-family: var(--lexend);
			margin-inline: auto;
			margin-bottom: 3%;
			font-weight: 400;
			width: 100%;
			padding: 0 1.25rem;
		}

		section {
			position: absolute;
			top: 80%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}

		.italic {
			font-family: var(--montserrat);
			font-size: clamp(1rem, 1.5vw, 1.5rem);
			font-style: italic;
			font-weight: 200;
			color: var(--white);
		}

		.summary {
			margin: 0 auto;
			font-size: clamp(1rem, 1.75vw, 2rem);
			font-weight: 500;
			width: 100%;
			padding: 0 1.25rem;
			margin-bottom: 3%;
		}

		.left {
			text-align: left;
		}
	}

	@media screen and (min-width: 740px) {
		section {
			text-align: center;
			font-size: 2rem;
			top: 85%;
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

	@media screen and (min-width: 1400px) {
		section {
			top: 45%;
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
