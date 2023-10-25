<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.logos', { y: -500 });
		gsap.set('.pagetext', { y: 1000 });
		gsap.set('.about-text', { y: 10000 });
		gsap.set('.about-title', { y: -10000 });
		gsap.set('main', { scale: 1 });

		let tl = gsap.timeline({ defaults: { duration: 2 } });

		tl.to('.logos', { y: 0, ease: 'power2.out' })
			.to('.pagetext', { y: 0, ease: 'expo.out' }, '<')
			.to('.about-text', { y: 0, duration: 3 }, '<')
			.to('.about-title', { y: 0, duration: 3 }, 0);
	});
</script>

<main class="main">
	<div class="logos">
		<img class="roses" src="roses.png" width="350" alt="Roses Logo" />
	</div>

	<section class="pagetext">
		<h1 class="about-title">ABOUT ME</h1>
		<article class="about-text">
			<img src="folder.png" alt="folder" width="200px" height="270px" />

			<h2 class="subtitle">Bio</h2>

			<p>
				Gabriel Atwell is a self-taught web developer. He started out with the basics: HTML, CSS,
				and JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit, Node.js,
				and GSAP. He has begun to teach himself the backend of web development on his spare time,
				but is a complete frontend developer.
			</p>
			<h2 class="subtitle">Frontend</h2>
			<p>
				The path that Gabriel has chosen is the frontend path, one of his main interests with the
				frontend path is animations, especially animations on the web. Turning a website from being
				a static site to a dynamic site is what Gabriel thinks is really cool.
			</p>
			<h2 class="subtitle">Design Based</h2>
			<p>
				A clean, crisp design is what Gabriel excels at. Visual hierarchy, whitespace, colors,
				typography, scaling, and spacing is what he knows best. He thinks that is the main key for a
				UI developer.
			</p>
			<h2 class="subtitle">Github</h2>
			<p>
				<a href="https://www.github.com/gabrielatwell1987/portfolio">Here</a> is the GitHub repo for
				this site, just in case you want to see the code for this site. Please contact me if you have
				any issues or thoughts on how I could improve this site.
			</p>

			<img class="ribbon" src="gold.png" alt="dots" width="15%" height="2%" />
		</article>
	</section>
</main>

<style>
	.about-title {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: var(--sky);
		font-size: 4rem;
		font-weight: 800;
		text-align: center;
		padding: 2rem;
	}
	.about-text {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
	}
	.pagetext {
		display: block;
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
	.subtitle {
		color: var(--cornflower);
	}
	.ribbon {
		margin: 2rem 0 0 0;
	}
	@media (min-width: 200px) {
		.pagetext {
			display: block;
			margin: 0 0 0 12%;
			padding: 1rem;
			text-align: center;
		}
		.about-title {
			font-size: 1rem;
			margin: 0 0 -1rem 0;
		}
		.about-text {
			font-size: 0.8rem;
			margin: 0 0 -1rem 0;
			background-color: transparent;
		}
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 0 1rem 25%;
			width: 50%;
			height: 75%;
		}
		.subtitle {
			color: cornflowerblue;
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
		.about-title {
			font-size: 4rem;
			margin: 0 0 1rem 0;
		}
		.about-text {
			font-size: 1rem;
		}
		.subtitle {
			color: cornflowerblue;
		}
	}
</style>
