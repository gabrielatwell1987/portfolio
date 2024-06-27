<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';
	import Project from '$lib/components/Project.svelte';
	import Figure from '$lib/components/Figure.svelte';

	// animations
	onMount(() => {
		// SplitType
		const titleText = new SplitType('#title', { types: 'chars' });

		const section = document.querySelector('section');

		// GSAP
		gsap.set('.linksize', { autoAlpha: 0, scale: 0 });
		gsap.set('.content', { autoAlpha: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 })
			.to('.linksize', { autoAlpha: 1, stagger: 0.8, scale: 1, duration: 2, ease: 'expo.out' }, 0)
			.from('.title', { scale: 0.25, duration: 3 }, 0);

		gsap.from(titleText.chars, {
			duration: 5,
			y: 75,
			scale: 0.2,
			opacity: 0.5,
			stagger: 0.2,
			ease: 'elastic.out(0.5, 0.2)'
		});

		console.log(section);
	});
</script>

<svelte:head>
	<title>Projects I've Built</title>
	<meta name="description" content="Gabriel Atwell's Projects" />
	<meta name="keywords" content="Projects, Work" />
</svelte:head>

<h1 class="title" id="title">projects</h1>

<!-- links to my projects -->
<section class="content bevel">
	<!-- spacing -->
	<br /><br />

	<Project
		title="S.P.A."
		img="/projects/web_dev.png"
		url="https://gabe1.vercel.app"
		description="A single page application"
	/>

	<Project
		title="horizontal scroller"
		img="/projects/scroller.png"
		url="https://gabe2.vercel.app"
		description="Just scroll down"
	/>

	<Project
		title="github api"
		img="/projects/github.png"
		url="https://adiapp.vercel.app"
		description="Search github users"
	/>

	<!-- <Project
		title="scatterplot chart"
		img="/projects/chart.png"
		url="https://piechart-brown.vercel.app"
		description="Made with d3 and svelte"
	/> -->

	<Project
		title="data visualizations"
		img="/projects/data-v.png"
		url="https://data-viz-svelte.vercel.app"
		description="Made with d3 and svelte"
	/>

	<Project
		title="snippet creator"
		img="/projects/snippet.png"
		url="https://appity.vercel.app"
		description="Create your own snippets"
	/>

	<Project
		title="password generator"
		img="/projects/pw-generator.png"
		url="https://pw-generator-ebon.vercel.app/"
		description="A password generator"
	/>

	<!-- <Project
		title="to-do app"
		img="/projects/react.png"
		url="https://react-todo-navy-five.vercel.app/"
		description="A React to-do app"
	/> -->

	<!-- <Project
		title="random user generator"
		img="/projects/ran_user.png"
		url="https://gabe3.vercel.app/"
		description="Made with Vue"
	/> -->

	<!-- <Project
		title="landing page"
		img="/projects/landing.png"
		url="https://landing-page-tailwind-rust.vercel.app/"
		description="Made with tailwindcss"
	/> -->

	<!-- <Project
		title="svelteflix"
		img="/projects/svelteflix.png"
		url="https://svelteflix-delta.vercel.app/"
		description="A netflix clone"
	/> -->

	<!-- <Project
		title="pokedex"
		img="/projects/pokedex.png"
		url="https://pokedex-sample.vercel.app/"
		description="A pokemon database"
	/> -->

	<!-- <Project
		title="starbucks clone"
		img="/projects/starbucks.png"
		url="https://gabe4.vercel.app"
		description="A clone of the starbucks website"
	/> -->

	<!-- <Project
		title="alphamaps"
		img="/projects/alphamaps.png"
		url="https://alphamaps69.vercel.app"
		description="A three.js project"
	/> -->

	<!-- logo -->
	<div class="logos designs">
		<!-- <img class="designs" src="logos/designs.png" alt="A logo that says Atwell Designs" /> -->
		<Figure src="logos/designs.png" alt="A logo that says Atwell Designs" text="EST. 1987" />
	</div>
</section>

<style>
	@media screen and (min-width: 200px) {
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			flex-basis: 75%;
			height: 100%;
		}

		.title {
			text-align: center;
			font-family: var(--anta);
			font-size: 2.75rem;
			color: var(--white);
			letter-spacing: 5px;
			text-shadow: 0px 0px 50px var(--smoke);
			text-transform: uppercase;
		}

		#title {
			font-kerning: none;
		}
	}

	@media screen and (min-width: 740px) {
		.content {
			padding: 2rem;
		}

		.title {
			font-size: 4rem;
			letter-spacing: 20px;
			margin: 2rem auto;
		}

		.logos {
			width: 100%;
			margin-inline: auto;
		}

		.designs {
			border-radius: 10%;
			margin: 3rem 0;
			/* width: 50%; */
		}
	}

	@media screen and (min-width: 990px) {
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
