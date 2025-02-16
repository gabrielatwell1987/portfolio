<script>
	import { gsap } from 'gsap';
	import Project from '$lib/components/Project.svelte';
	import Figure from '$lib/components/Figure.svelte';
	import Title from '$lib/components/Title.svelte';
	import IconLogo from '$lib/components/IconLogo.svelte';
	import SEO from '$lib/data/SEO.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import Popup from '$lib/components/Popup.svelte';
	import cartoonGabe from '$lib/images/cartoonGabe.webp';

	// animations
	$effect(() => {
		const logo = document.querySelector('.logo');

		gsap.set('.content', { autoAlpha: 0 });
		gsap.set('.link', { autoAlpha: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 }).to(
			'.link',
			{ autoAlpha: 1, duration: 1.5, ease: 'expo.out' },
			0
		);

		console.log(Project);

		return () => {
			gsap.killTweensOf(logo);
			gsap.killTweensOf('.content');
			gsap.killTweensOf('.link');
		};
	});
</script>

<SEO
	title="Projects I've built"
	description="Work Gabe has done"
	keywords="gabe atwell's projects, gabriel atwell's projects, gabe's work, gabriel's work, projects"
/>

<main>
	<Title title="showcase" />
</main>

<div class="popup">
	<Popup
		title=""
		text="Hover over the project image to reveal the tech stack I used on the project 👍🏻"
	/>
</div>

<section class="content bevel">
	<IconLogo />

	<!-- <Project
		title="S.P.A."
		img="/projects/web_dev.webp"
		url="https://gabe1.vercel.app"
		description="HTML/CSS/JS"
	/> -->

	<!-- <Project
		title="horizontal scroll"
		img="/projects/scroller.webp"
		url="https://scrollernessly.vercel.app"
		description="html/css/js"
	/> -->

	<Project
		title="pixipalette"
		img="/projects/pixipalette.webp"
		url="https://palette-pro-three.vercel.app"
		description="sveltekit"
	/>

	<Project
		title="grocery list"
		img="/projects/groceries.webp"
		url="https://react-todo-navy-five.vercel.app/"
		description="react"
	/>

	<Project
		title="e-commerce product page"
		img="/projects/ecommerce.webp"
		url="https://ecommerceproductpage-bay.vercel.app"
		description="html/css/js"
	/>

	<!-- <Project
		title="nasa api"
		img="/projects/nasa.webp"
		url="https://nasaapi-theta.vercel.app"
		description="React"
	/> -->

	<Project
		title="password maker"
		img="/projects/pw-generator.webp"
		url="https://pw-generator-ebon.vercel.app/"
		description="sveltekit"
	/>

	<Project
		title="github search"
		img="/projects/github.webp"
		url="https://adiapp.vercel.app"
		description="svelte"
	/>

	<Project
		title="data visualizations"
		img="/projects/data-v.webp"
		url="https://data-viz-svelte.vercel.app"
		description="d3/svelte"
	/>

	<!-- <Project
		title="scatterplot chart"
		img="/projects/chart.webp"
		url="https://piechart-brown.vercel.app"
		description="d3 and svelte"
	/> -->

	<!-- <Project
	title="random user generator"
	img="/projects/ran_user.webp"
	url="https://gabe3.vercel.app/"
	description="Vue"
	/> -->

	<!-- <Project
		title="snippet creator"
		img="/projects/snippet.webp"
		url="https://appity.vercel.app"
		description="Sveltekit"
	/> -->

	<!-- <Project
		title="landing page"
		img="/projects/landing.webp"
		url="https://landing-page-tailwind-rust.vercel.app/"
		description="tailwindcss"
	/> -->

	<!-- <Project
		title="svelteflix"
		img="/projects/svelteflix.webp"
		url="https://svelteflix-delta.vercel.app/"
		description="Sveltekit"
	/> -->

	<!-- <Project
		title="pokedex"
		img="/projects/pokedex.webp"
		url="https://pokedex-sample.vercel.app/"
		description="Sveltekit"
	/> -->

	<!-- <Project
		title="starbucks clone"
		img="/projects/starbucks.webp"
		url="https://gabe4.vercel.app"
		description="HTML/CSS/JS"
	/> -->

	<!-- <Project
		title="alphamaps"
		img="/projects/alphamaps.webp"
		url="https://alphamaps69.vercel.app"
		description="Three.js"
	/> -->

	<!-- <section class="frame">
		<ImageFrame
			src="/logos/frontend_dev.webp"
			alt="Frontend Developer"
			text="distinguish your website"
		/>
	</section> -->

	<Avatar src={cartoonGabe} alt="cartoon gabe" name="gabeAtwell" />

	<Figure src="logos/web.webp" alt="A logo that says web" text="building the" />
</section>

<style>
	@media screen and (width >= 300px) {
		:root {
			--100: 100%;
		}

		main {
			padding-top: 5%;
		}

		section {
			padding-top: 2rem;
			overflow: hidden;
		}

		.popup {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 5%;
		}
	}

	@media screen and (width >= 740px) {
		section {
			padding: 2rem;
		}
	}

	@media screen and (width >= 990px) {
		section {
			margin-bottom: -5%;
			padding-top: 5rem;
		}
	}
</style>
