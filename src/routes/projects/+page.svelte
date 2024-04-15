<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';
	import ProjectLinks from '$lib/components/ProjectLinks.svelte';

	// animations
	onMount(() => {
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

<h1 class="title" id="title">projects</h1>

<!-- links to my projects -->
<section class="content bevel">
	<!-- spacing -->
	<br /><br />

	<ProjectLinks
		title="S.P.A."
		img="/projects/web_dev.png"
		url="https://gabe1.vercel.app"
		description="A single page application"
	/>

	<ProjectLinks
		title="horizontal scroller"
		img="/projects/scroller.png"
		url="https://gabe2.vercel.app"
		description="A horizontal scroller that displays text."
	/>

	<ProjectLinks
		title="github api"
		img="/projects/github.png"
		url="https://adiapp.vercel.app"
		description="An API for github that searches users"
	/>

	<ProjectLinks
		title="snippet creator"
		img="/projects/snippet.png"
		url="https://appity.vercel.app"
		description="Create your own snippets"
	/>

	<ProjectLinks
		title="starbucks clone"
		img="/projects/starbucks.png"
		url="https://gabe4.vercel.app"
		description="A clone of the starbucks website"
	/>

	<ProjectLinks
		title="to-do app"
		img="/projects/react.png"
		url="https://react-todo-navy-five.vercel.app/"
		description="A to-do app made with react"
	/>

	<ProjectLinks
		title="password generator"
		img="/projects/pw-generator.png"
		url="https://pw-generator-ebon.vercel.app/"
		description="A password generator that can save a text file."
	/>

	<ProjectLinks
		title="alphamaps"
		img="/projects/alphamaps.png"
		url="https://alphamaps69.vercel.app"
		description="A three.js project that displays a map of the world"
	/>

	<!-- divider -->
	<progress />

	<!-- logo -->
	<div class="logos">
		<img class="designs" src="logos/designs.png" alt="A logo that says Atwell Designs" />
	</div>
</section>

<style>
	/* bigger than mobile */
	@media screen and (min-width: 200px) {
		/* divider */
		progress {
			width: 40%;
			margin: 15% 0 2rem 30%;
		}

		/* content */

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

	/* bigger than tablet */
	@media screen and (min-width: 740px) {
		/* content */

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
		}

		.designs {
			border-radius: 10%;
			margin: 3rem 0;
			width: 50%;
		}
	}

	/* bigger than desktop */
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
