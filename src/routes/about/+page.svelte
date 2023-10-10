<script>
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import Exclamation from '$lib/Exclamation.svelte';

	onMount(() => {
		gsap.set('.logos', { y: -500 });
		gsap.set('.pagetext', { y: 1000 });
		gsap.set('.about-text', { x: -10000 });

		let tl = gsap.timeline({ defaults: { duration: 2 } });
		tl.to('.logos', { y: 0, ease: 'power2.out' })
			.to('.pagetext', { y: 0, ease: 'expo.out' }, '<')
			.to('.about-text', { x: 0 }, '<');
	});
</script>

<main>
	<div class="logos">
		<img class="roses" src="roses.png" width="350" alt="Roses Logo" />
	</div>

	<div class="pagetext display">
		<h1 class="about-title">ABOUT ME</h1>
		<div class="about-text">
			<p>
				Gabriel Atwell is a self-taught web developer. He started out with the basics: HTML, CSS,
				and JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit, Node.js,
				and GSAP. He has begun to teach himself the backend of web development on his spare time,
				but is a complete frontend developer.
			</p>
			<p>
				The path that Gabriel has chosen is the frontend path, one of his main interests with the
				frontend path is animations, especially animations on the web. Turning a website from being
				a static site to a dynamic site is what Gabriel thinks is really cool.
			</p>
			<p>
				A clean, crisp design is what Gabriel excels at. Visual hierarchy, whitespace, colors,
				typography, scaling, and spacing is what he knows best. He thinks that is the main key for a
				UI developer.
			</p>
			<p>
				<a href="https://www.github.com/gabrielatwell1987/portfolio">Here</a> is the GitHub repo for
				this site.
			</p>
			<div class="exclamation">
				<Exclamation />
			</div>
		</div>
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
	.about-title {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: var(--sky);
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
		padding: 2rem;
	}
	.about-text {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
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
		background-color: var(--black);
		border: 3px solid var(--white);
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
	.roses {
		border-radius: 40%;
	}
	.mobileRoses {
		margin: 0 0 1.5rem 0;
	}
	.exclamation {
		margin: 0 0 0 -63%;
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
			margin: 0 0 -1rem 0;
		}
		.about-text {
			font-size: 0.8rem;
			margin: 0 0 -1rem 0;
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
			margin: 0 0 1rem 0.8em;
			width: 100%;
			height: 100%;
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
		.about-title {
			font-size: 2.5rem;
			margin: 0 0 1rem 0;
		}
		.about-text {
			font-size: 1rem;
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
