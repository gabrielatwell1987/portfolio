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
	// import Testimonial from '$lib/components/Testimonial.svelte';

	// animations
	$effect(() => {
		const logo = document.querySelector('.logo');
		const section = document.querySelector('section');

		gsap.set('.content', { autoAlpha: 0 });
		gsap.set('.link', { autoAlpha: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 }).to(
			'.link',
			{ autoAlpha: 1, duration: 1.5, ease: 'expo.out' },
			0
		);

		console.log(section);

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
	<a href="/about#useful-links">
		<IconLogo />
	</a>

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
		title="busy little bat sewing co."
		img="/projects/busybatleopard.webp"
		url="https://busybat.vercel.app"
		description="sveltekit"
	/>

	<!-- <Testimonial
		name="Busy Little Bat Sewing"
		title="Owner"
		testimonial="Gabe was a pleasure to work with. He was very professional and made sure I was happy with the final product. I would recommend him to anyone looking for a website."
		rating="5,"
		avatar="/projects/busybatleopard.webp"
	/> -->

	<Project
		title="pixipalette"
		img="/projects/pixipalette.webp"
		url="https://pixipalette.vercel.app"
		description="sveltekit"
	/>

	<Project
		title="grocery list"
		img="/projects/groceries.webp"
		url="https://legit-shopping-list.vercel.app/"
		description="react"
	/>

	<Project
		title="e-commerce product page"
		img="/projects/ecommerce.webp"
		url="https://fake-store-products.vercel.app"
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
		url="https://make-a-password.vercel.app/"
		description="sveltekit"
	/>

	<!-- <Project
		title="github search"
		img="/projects/github.webp"
		url="https://github-user-search-api.vercel.app"
		description="svelte"
	/> -->

	<Project
		title="data visualizations"
		img="/projects/data-v.webp"
		url="https://visual-svelte.vercel.app"
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
		/> -->

	<Avatar src={cartoonGabe} alt="cartoon gabe" name="gabeAtwell" />

	<Figure src="logos/web.webp" alt="A logo that says web" text="building the" />
</section>

<style>
	.bevel {
		position: relative;
	}

	.bevel:before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--text-gray);
		clip-path: polygon(
			0 80px,
			80px 0,
			calc(100% - 80px) 0,
			100% 80px,
			100% calc(100% - 80px),
			calc(100% - 80px) 100%,
			80px 100%,
			0 calc(100% - 80px),
			0 80px,
			5px calc(80px + 2.07px),
			5px calc(100% - 80px - 2.07px),
			calc(80px + 2.07px) calc(100% - 5px),
			calc(100% - 80px - 2.07px) calc(100% - 5px),
			calc(100% - 5px) calc(100% - 80px - 2.07px),
			calc(100% - 5px) calc(80px + 2.07px),
			calc(100% - 80px - 2.07px) 5px,
			calc(80px + 2.07px) 5px,
			5px calc(80px + 2.07px)
		);
	}

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
