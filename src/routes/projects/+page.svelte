<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import Project from '$lib/components/Project.svelte';
	import Figure from '$lib/components/Figure.svelte';
	import Title from '$lib/components/Title.svelte';
	import Image from '$lib/components/Image.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SEO from '$lib/data/SEO.svelte';
	import ImageFrame from '$lib/components/ImageFrame.svelte';

	// animations
	onMount(() => {
		gsap.registerPlugin(Draggable);

		// GSAP
		gsap.set('.link', { autoAlpha: 0, scale: 0 });
		gsap.set('.content', { autoAlpha: 0 });
		gsap.set('.ascii', { yPercent: 25 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 })
			.to('.link', { autoAlpha: 1, stagger: 0.8, scale: 1, duration: 2, ease: 'expo.out' }, 0)
			.from('.title', { scale: 0.25, duration: 3 }, 0)
			.to('.ascii', { yPercent: 0, duration: 1.75 }, 0);
	});

	$: console.log('Projects page');
</script>

<SEO
	title="Projects I've Built"
	description="Gabriel Atwell's Projects"
	keywords="projects, work"
/>

<div class="title">
	<Title title="projects" />
</div>

<!-- links to my projects -->
<section
	class="content bevel"
	in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}
>
	<!-- spacing -->
	<br /><br />

	<!-- logo -->
	<div class="ascii">
		<Image src="logos/ascii.webp" alt="ASCII art" />
	</div>

	<Project
		title="S.P.A."
		img="/projects/web_dev.webp"
		url="https://gabe1.vercel.app"
		description="A single page application"
	/>

	<Project
		title="horizontal scroller"
		img="/projects/scroller.webp"
		url="https://gabe2.vercel.app"
		description="Just scroll down"
	/>

	<Project
		title="grocery list app"
		img="/projects/groceries.webp"
		url="https://react-todo-navy-five.vercel.app/"
		description="A groceries app"
	/>

	<Project
		title="password generator"
		img="/projects/pw-generator.webp"
		url="https://pw-generator-ebon.vercel.app/"
		description="A password generator"
	/>

	<Project
		title="github api"
		img="/projects/github.webp"
		url="https://adiapp.vercel.app"
		description="Search github users"
	/>

	<Project
		title="data visualizations"
		img="/projects/data-v.webp"
		url="https://data-viz-svelte.vercel.app"
		description="Made with d3 and svelte"
	/>

	<!-- <Project
		title="scatterplot chart"
		img="/projects/chart.webp"
		url="https://piechart-brown.vercel.app"
		description="Made with d3 and svelte"
	/> -->

	<!-- <Project
	title="random user generator"
	img="/projects/ran_user.webp"
	url="https://gabe3.vercel.app/"
	description="Made with Vue"
	/> -->

	<!-- <Project
		title="snippet creator"
		img="/projects/snippet.webp"
		url="https://appity.vercel.app"
		description="Create your own snippets"
	/> -->

	<!-- <Project
		title="landing page"
		img="/projects/landing.webp"
		url="https://landing-page-tailwind-rust.vercel.app/"
		description="Made with tailwindcss"
	/> -->

	<!-- <Project
		title="svelteflix"
		img="/projects/svelteflix.webp"
		url="https://svelteflix-delta.vercel.app/"
		description="A netflix clone"
	/> -->

	<!-- <Project
		title="pokedex"
		img="/projects/pokedex.webp"
		url="https://pokedex-sample.vercel.app/"
		description="A pokemon database"
	/> -->

	<!-- <Project
		title="starbucks clone"
		img="/projects/starbucks.webp"
		url="https://gabe4.vercel.app"
		description="A clone of the starbucks website"
	/> -->

	<!-- <Project
		title="alphamaps"
		img="/projects/alphamaps.webp"
		url="https://alphamaps69.vercel.app"
		description="A three.js project"
	/> -->

	<section class="frame">
		<ImageFrame
			src="/logos/frontend_dev.webp"
			alt="Frontend Developer"
			text="Distinguish your website"
		/>
	</section>

	<!-- logo -->
	<div class="logos designs">
		<Figure src="logos/designs.webp" alt="A logo that says Atwell Designs" text="EST. 1987" />
	</div>
</section>

<style>
	.frame {
		display: flex;
		justify-content: center;
	}

	@media screen and (min-width: 300px) {
		:root {
			--100: 100%;
		}

		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			flex-basis: 75%;
			height: var(--100);
		}

		.ascii {
			display: flex;
			justify-content: center;
			margin-bottom: 3%;
			width: clamp(50%, 75%, var(--100));
			margin-left: 10%;
		}

		.title {
			margin-top: 10%;
		}
	}

	@media screen and (min-width: 740px) {
		.content {
			padding: 2rem;
		}

		.logos {
			width: var(--100);
			margin-inline: auto;
		}

		.designs {
			border-radius: 10%;
			margin: 3rem 0;
		}

		.ascii {
			margin-left: 12.5%;
		}

		.title {
			margin-top: 0;
		}
	}

	@media screen and (min-width: 990px) {
		.content {
			margin-bottom: -5%;
		}

		.ascii {
			margin-left: 12%;
		}
	}
</style>
