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
	<h4 class="summary italic">Here is a link to some projects I have created.</h4>
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
			background-color: transparent;
			color: var(--smoke);
			font-family: var(--righteous);
			width: 30%;
			outline: none;
			border: 1px solid var(--smoke);
			margin: 1rem auto;
			border-radius: 10px;
			font-size: 0.75rem;
			font-weight: 900;
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
		.italic {
			font-style: italic;
			font-size: 0.75rem;
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
			font-size: 2rem;
			letter-spacing: 2px;
		}
		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
			border: 1px solid black;
			background-color: var(--smoke);
			color: black;
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
