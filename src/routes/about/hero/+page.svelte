<script>
	import ThreeCanvas from '$lib/components/ThreeCanvas.svelte';
</script>

<ThreeCanvas />

<section class="hero-text">
	<!-- hero section text and links -->
	<h3>Frontend Crafted Web Experiences</h3>

	<h4 class="summary">
		I am a frontend developer who loves to create beautiful and functional websites. This portfolio
		is a website that I built from scratch to showcase some projects that I created. I look forward
		to hearing from you so we can discuss your goals for your online needs!
	</h4>

	<a class="btn" href="/projects"><button aria-label="projects">Projects</button></a>

	<h4 class="summary italic">Some projects I have created.</h4>
</section>

<style>
	.hero-text {
		position: absolute;
		top: 120%;
		left: 50%;
		transform: translate(-50%, -120%);
		width: 100%;
	}

	h3 {
		margin: 2rem auto;
		margin-top: 10%;
		color: var(--sky);
		font-size: 2rem;
		font-weight: 900;
		font-family: var(--montserrat);
		letter-spacing: 2px;
	}

	h4 {
		color: var(--white);
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 0.5px;
		font-family: var(--montserrat);
		width: 50%;
		margin: 0 auto;
	}

	button {
		display: block;
		background-color: transparent;
		color: var(--white);
		font-family: var(--montserrat);
		width: 10%;
		height: 10%;
		outline: none;
		border: 1px solid var(--white);
		margin: 1rem auto;
		border-radius: 10px;
		font-size: 1.2rem;
		font-weight: 900;
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
</style>
