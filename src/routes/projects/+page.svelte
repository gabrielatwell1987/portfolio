<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.newspaper', {
			type: 'x, y',
			bounds: document.querySelector('.content'),
			inertia: true
		});

		gsap.set('.linksize', { autoAlpha: 0, scale: 0 });
		gsap.set('.content', { autoAlpha: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 })
			.to('.linksize', { autoAlpha: 1, stagger: 0.8, scale: 1, duration: 2, ease: 'expo.out' }, 0)
			.from('.title', { scale: 0.25, duration: 3 }, 0);
	});
</script>

<h1 class="title">PROJECTS</h1>

<section class="content">
	<h3 class="linksize name">Web Dev Website</h3>
	<a class="linksize" href="https://gabe1.vercel.app" target="_blank"
		><img class="img" src="/projects/web_dev.png" alt="web dev" width="200px" height="275px" /></a
	><br />

	<h3 class="linksize name">Horizontal Scroller</h3>
	<a class="linksize" href="https://gabe2.vercel.app" target="_blank"
		><img class="img" src="/projects/scroller.png" alt="scroller" width="450px" height="280px" /></a
	><br />

	<h3 class="linksize name">Starbucks Clone</h3>
	<a class="linksize" href="https://gabe4.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/starbucks.png"
			alt="starbucks"
			width="500px"
			height="400px"
		/></a
	><br />

	<h3 class="linksize name">Code Snippet</h3>
	<a class="linksize" href="https://appity.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/snippet.png"
			alt="code snippet"
			width="350px"
			height="600px"
		/></a
	><br />

	<h3 class="linksize name">Svelteflix</h3>
	<a class="linksize" href="https://svelteflix-delta.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/svelteflix.png"
			alt="svelteflix"
			width="475px"
			height="300px"
		/></a
	><br />

	<hr />

	<div class="logos">
		<img class="newspaper" src="designs.png" alt="Atwell logo that you can move" />
	</div>
</section>

<style>
	@media screen and (min-width: 200px) {
		a {
			font-family: var(--montserrat);
			font-size: 0.75rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}

		hr {
			border: 0.5px solid var(--white);
			width: 50%;
			margin: 5rem auto;
		}

		.img {
			border-radius: 8px;
			opacity: 0.75;
		}

		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			width: 75%;
			height: 100%;
		}
		.title {
			text-align: center;
			font-family: var(--righteous);
			font-size: 3.75rem;
			color: var(--white);
		}
		.linksize {
			text-align: center;
			background-color: transparent;
			color: var(--sky);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 1rem;
			width: 75%;
			margin: 0 auto;
			font-family: var(--montserrat);
			letter-spacing: 2px;
		}
	}
	@media screen and (min-width: 740px) {
		a {
			font-size: 1rem;
		}

		.content {
			padding: 2rem;
		}

		.title {
			font-size: 4rem;

			margin: 2rem 0;
		}

		.linksize {
			letter-spacing: 4px;
		}

		.logos {
			width: 100%;
		}
		.newspaper {
			border-radius: 10%;
			margin: 3rem 0;
		}
	}
	@media screen and (min-width: 990px) {
		.linksize {
			padding: 1.5rem;
			width: 25%;
			margin: 0 0 0 37%;
		}
	}
</style>
