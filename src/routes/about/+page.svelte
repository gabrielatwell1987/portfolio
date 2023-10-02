<script>
	import Exclamation from '$lib/Exclamation.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 3 } });
		tl.fromTo('.logos', { y: -500 }, { y: 0, ease: 'power2.out' })
			.fromTo('.pagetext', { y: 1000 }, { y: 0, ease: 'expo.out' }, '<')
			.fromTo('.mobilepagetext', { y: -500 }, { y: 0 }, '<');
	});
</script>

<main>
	<div class="logos">
		<!-- <img class="dots" src="dots.png" width="350" alt="Dots Logo" />
		<img class="sombrero" src="atwell.png" width="350" alt="Sombrero Logo" /> -->
		<img class="roses" src="roses.png" width="350" alt="Roses Logo" />
	</div>

	<div class="pagetext display">
		<h1 class="about-title">About Gabriel Atwell</h1>
		<p class="p">
			Gabriel Atwell is a self-taught web developer. He started out with the basics: HTML, CSS, and
			JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit, Node.js, and
			GSAP. He has begun to teach himself the backend of web development on his spare time, but is a
			complete frontend developer.
		</p>
		<p class="p">
			The path that Gabriel has chosen is the frontend path, one of his main interests with the
			frontend path is animations, especially animations on the web. Turning a website from being a
			static site to a dynamic site is what Gabriel thinks is really cool.
		</p>
		<p class="p">
			A clean, crisp design is what Gabriel excels at. Visual hierarchy, whitespace, colors,
			typography, scaling, and spacing is what he knows best. He thinks that is the main key for a
			UI developer.
		</p>
	</div>
	<div class="mobilepagetext nodisplay">
		<h1 class="about-title">About Me</h1>
		<img class="mobileRoses" src="roses.png" alt="logo" width="250px" />
		<p>
			This is Gabriel Atwell's portfolio. This website is meant to showcase his frontend skills.
		</p>
	</div>
</main>

<style>
	h1 {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: lightskyblue;
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
	}
	p {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1.2rem;
	}
	.nodisplay {
		display: none;
	}
	.display {
		display: block;
	}
	.mobilepagetext {
		display: none;
	}
	.pagetext {
		padding: 2rem;
		text-align: center;
		background-color: black;
		border: 3px solid white;
		border-radius: 8px;
		width: 75%;
		margin: 0 0 0 12.5rem;
	}
	.logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 0 1rem 1em;
	}
	.p {
		padding: 2rem;
	}
	.roses {
		border-radius: 40%;
	}
	.mobileRoses {
		margin: 0 0 1.5rem 0;
	}
	@media (min-width: 200px) {
		.pagetext {
			display: block;
			margin: 0 0 0 12%;
			padding: 1rem;
			text-align: center;
		}
		.mobilepagetext {
			display: none;
		}
		.about-title {
			font-size: 1rem;
		}
		.p {
			font-size: 0.8rem;
		}
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 0 1rem 25%;
			width: 50%;
			height: 75%;
		}
	}
	@media (min-width: 990px) {
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 0 1rem 1em;
		}
		.pagetext {
			display: block;
			margin: 0 0 0 12%;
			padding: 2rem;
			text-align: center;
		}
		.mobilepagetext {
			display: none;
		}
		h1,
		.p,
		.about-title {
			font-size: 1.5rem;
		}
	}
	/* @media (max-width: 1024px) {
		.logos {
			display: none;
		}
		.pagetext {
			display: none;
		}
		.mobilepagetext {
			width: 55%;
			margin: 0 0 0 24%;
			display: block;
			padding: 0.8rem;
			text-align: center;
			border: none;
			background-color: transparent;
			color: white;
		}
		h1,
		.p,
		.about-title {
			font-size: 1.5rem;
		}
	} */
</style>
