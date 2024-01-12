<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	// lenis
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	// animations
	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.designs', {
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

<!-- links to my projects -->
<section class="content">
	<h3 class="linksize name">WEB DEV WEBSITE</h3>
	<a class="linksize" href="https://gabe1.vercel.app" target="_blank"
		><img class="img" src="/projects/web_dev.png" alt="web dev" width="200px" height="275px" /></a
	><br />

	<h3 class="linksize name">HORIZONTAL SCROLLER</h3>
	<a class="linksize" href="https://gabe2.vercel.app" target="_blank"
		><img class="img" src="/projects/scroller.png" alt="scroller" width="450px" height="280px" /></a
	><br />

	<h3 class="linksize name">STARBUCKS CLONE</h3>
	<a class="linksize" href="https://gabe4.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/starbucks.png"
			alt="starbucks"
			width="500px"
			height="400px"
		/></a
	><br />

	<h3 class="linksize name">CODE SNIPPET</h3>
	<a class="linksize" href="https://appity.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/snippet.png"
			alt="code snippet"
			width="350px"
			height="600px"
		/></a
	><br />

	<h3 class="linksize name">NETFLIX CLONE</h3>
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

	<!-- logo -->
	<div class="logos">
		<img class="designs" src="logos/designs.png" alt="Atwell logo that you can move" />
	</div>
</section>

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		a {
			font-family: var(--montserrat);
			font-size: 0.75rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}

		hr {
			border: 0.5px solid var(--smoke);
			border-radius: 100vw;
			width: 50%;
			margin: 5rem auto;

			--size: 3px;
			height: var(--size);
			box-shadow: 0 calc(var(--size) * 2) 0 var(--smoke), 0 calc(var(--size) * 4) 0 var(--blue),
				0 calc(var(--size) * 6) 0 var(--lightblack);
		}

		.img {
			border-radius: 8px;
			opacity: 0.5;
		}

		.img:hover {
			opacity: 1;
			transition: opacity 0.5s ease-in-out;
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
			font-size: 2.75rem;
			color: var(--white);
			letter-spacing: 5px;
			text-shadow: 0px 0px 50px var(--smoke);
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
			font-size: 0.8rem;
			width: 75%;
			margin: 0 auto;
			font-family: var(--montserrat);
			letter-spacing: 2px;
			font-style: italic;
		}
	}

	/* bigger than tablet */
	@media screen and (min-width: 740px) {
		a {
			font-size: 1rem;
		}

		hr {
			border: 1px solid var(--smoke);
		}

		.content {
			padding: 2rem;
		}

		.title {
			font-size: 4rem;
			letter-spacing: 20px;
			margin: 2rem 0;
		}

		.linksize {
			letter-spacing: 4px;
			font-size: 1rem;
		}

		.logos {
			width: 100%;
		}

		.designs {
			border-radius: 10%;
			margin: 3rem 0;
		}
	}

	/* bigger than desktop */
	@media screen and (min-width: 990px) {
		.linksize {
			padding: 1.5rem;
			width: 25%;
			margin: 0 0 0 37%;
			letter-spacing: 10px;
		}
	}
</style>
