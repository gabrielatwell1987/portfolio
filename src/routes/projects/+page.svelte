<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

	// animations
	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.designs', {
			type: 'x, y',
			edgeResistance: 0.65,
			bounds: document.querySelector('.content'),
			throwProps: true
		});

		// SplitType
		const titleText = new SplitType('#title', { types: 'chars' });

		// GSAP
		gsap.set('.linksize', { autoAlpha: 0, scale: 0 });
		gsap.set('.content', { autoAlpha: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 })
			.to('.linksize', { autoAlpha: 1, stagger: 0.8, scale: 1, duration: 2, ease: 'expo.out' }, 0)
			.from('.title', { scale: 0.25, duration: 3 }, 0);

		gsap.from(titleText.chars, {
			duration: 5,
			y: 50,
			scale: 0.1,
			opacity: 0.5,
			stagger: 0.2,
			ease: 'elastic.out(0.5, 0.2)'
		});
	});
</script>

<h1 class="title" id="title">PROJECTS</h1>

<!-- links to my projects -->
<section class="content bevel">
	<!-- spacing -->
	<br /><br />

	<h3 class="linksize name">alphamaps</h3>
	<a class="linksize" href="https://alphamaps69.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/alphamaps.png"
			alt="The first project: Alphamaps, Made with Three.js."
			width="400px"
			height="475px"
		/></a
	><br />

	<h3 class="linksize name">frontend</h3>
	<a class="linksize" href="https://gabe1.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/web_dev.png"
			alt="The second project: frontend."
			width="400px"
			height="475px"
		/></a
	><br />

	<h3 class="linksize name">horizontal scroller</h3>
	<a class="linksize" href="https://gabe2.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/scroller.png"
			alt="The third project: horizontal scroller."
			width="450px"
			height="280px"
		/></a
	><br />

	<h3 class="linksize name">github api</h3>
	<a class="linksize" href="https://adiapp.vercel.app/" target="_blank"
		><img
			class="img"
			src="/projects/github.png"
			alt="The fourth project: Github API."
			width="500px"
			height="400px"
		/></a
	><br />

	<h3 class="linksize name">snippet creator</h3>
	<a class="linksize" href="https://appity.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/snippet.png"
			alt="The fifth project: Snippet Creator."
			width="350px"
			height="600px"
		/></a
	><br />

	<h3 class="linksize name">starbucks clone</h3>
	<a class="linksize" href="https://gabe4.vercel.app" target="_blank"
		><img
			class="img"
			src="/projects/starbucks.png"
			alt="The six project: A starbucks clone."
			width="475px"
			height="300px"
		/></a
	><br />

	<!-- divider -->
	<progress />

	<!-- logo -->
	<div class="logos">
		<img
			class="designs"
			src="logos/designs.png"
			alt="A logo that says Atwell Designs that you can move"
		/>
	</div>
</section>

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		/* content */
		a {
			font-family: var(--montserrat);
			font-size: 0.75rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}

		/* divider */
		progress {
			width: 40%;
			margin: 8% 0 2rem 30%;
		}

		/* content */
		.img {
			border-radius: 8px;
		}

		.img:hover {
			opacity: 0.8;
			transition: opacity 0.25s ease-in-out;
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
			font-family: var(--anta);
			font-size: 2.75rem;
			color: var(--white);
			letter-spacing: 5px;
			text-shadow: 0px 0px 50px var(--smoke);
		}

		/* links */
		.linksize {
			text-align: center;
			background-color: transparent;
			color: var(--purple);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-family: var(--montserrat);
			font-size: 1.25rem;
			/* font-size: 0.8rem; */
			font-weight: 600;
			width: 75%;
			margin: 0 auto;
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		/* content */
		.name {
			font-weight: 600;
		}

		#title {
			font-kerning: none;
		}
	}

	/* bigger than tablet */
	@media screen and (min-width: 740px) {
		/* content */
		a {
			font-size: 1rem;
		}

		img:hover {
			transform: scale(1.1);
			clip-path: polygon(
				0% 15%,
				15% 15%,
				15% 0%,
				85% 0%,
				85% 15%,
				100% 15%,
				100% 85%,
				85% 85%,
				85% 100%,
				15% 100%,
				15% 85%,
				0% 85%
			);
			transition: transform 0.75s ease;
		}

		.content {
			padding: 2rem;
		}

		.title {
			font-size: 4rem;
			letter-spacing: 20px;
			margin: 2rem auto;
		}

		/* links */
		.linksize {
			letter-spacing: 4px;
			font-size: 1.5rem;
		}

		/* content */
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
		/* links */
		.linksize {
			padding: 2rem;
			width: 100%;
			margin: 0 auto;
			letter-spacing: 5px;
			font-size: 2rem;
		}

		/* content */
		.content {
			margin-bottom: -5%;
		}

		.title {
			font-size: 7rem;
			font-weight: 800;
			text-shadow: -5px 5px 4px var(--dark-gray);
		}
	}
</style>
