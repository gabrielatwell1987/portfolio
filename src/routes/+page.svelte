<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		gsap.to('.atwellLogo', { autoAlpha: 1, duration: 2.5, ease: 'sine.in' });

		Draggable.create('.atwell', {
			type: 'x, y',
			bounds: document.querySelector('main'),
			inertia: true
		});
	});
</script>

<main class="atwellLogo">
	<img class="atwell" src="hero-no-bg.png" alt="Atwell ui design logo that you can move" />

	<h3>Professionally Crafted Web Experiences</h3>
	<h4 class="summary">
		I look forward to hearing from you so we can discuss your goals for your online needs!
	</h4>
	<a class="btn" href="/projects"><button>Projects</button></a>
	<h4 class="summary">Here is a link to some projects I have created.</h4>
</main>
<br /><br /><br />

<style>
	@media screen and (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
			height: 100vh;
		}
		h3 {
			margin: 2rem auto;
			color: var(--blue);
			font-size: 1.25rem;
			font-weight: 800;
			font-family: var(--righteous);
			letter-spacing: 2px;
		}
		h4 {
			color: var(--white);
			font-size: 0.75rem;
			letter-spacing: 0.5px;
		}
		button {
			display: block;
			background-color: var(--sky);
			color: var(--black);
			font-family: var(--montserrat);
			width: 30%;
			outline: none;
			border: 1px solid var(--sky);
			margin: 1rem auto;
			border-radius: 10px;
			font-size: 0.75rem;
			font-weight: bolder;
		}
		.atwell {
			width: 100%;
			height: 50%;
			opacity: 0.75;
		}
		.btn {
			text-decoration: none;
			margin: 0 auto;
		}
		.summary {
			margin: 0 auto;
			font-size: 1rem;
			font-weight: 500;
		}
	}
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
		button {
			font-size: 1rem;
			width: 15%;
		}
		h3 {
			font-size: 2rem;
			letter-spacing: 7px;
		}
		h4 {
			color: var(--white);
			font-size: 1.25rem;
		}
		.atwell {
			height: 75%;
		}
	}
	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
			margin: 5rem 0;
		}
		button {
			width: 17.5%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}
	}
	@media screen and (min-width: 1100px) {
		button {
			width: 12%;
		}
	}
</style>
