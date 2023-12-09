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
	<!-- <img class="atwell" src="welcome.png" alt="Atwell ui design logo that you can move" /> -->
	<img class="atwell" src="hero.png" alt="Atwell ui design logo that you can move" />

	<h3>Welcome to my portfolio!</h3>
	<h4 class="summary">
		Here you can find past work that I've created and you can contact me for work as well.
	</h4>
	<a class="btn" href="/projects"><button>Projects</button></a>
</main>

<style>
	@media screen and (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
			height: 100vh;
		}
		h3 {
			margin: 2rem auto;
			color: var(--sky);
			font-size: 1.25rem;
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
			height: 75%;
			opacity: 0.75;
		}
		.btn {
			text-decoration: none;
			margin: 0 auto;
		}
		.summary {
			margin: 0 auto;
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
			margin: 2rem auto;
			color: var(--sky);
			font-size: 1.5rem;
		}
		h4 {
			color: var(--white);
			font-size: 1.25rem;
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
