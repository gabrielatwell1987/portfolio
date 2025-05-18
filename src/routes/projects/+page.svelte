<script>
	import SEO from '$lib/data/SEO.svelte';
	import Project from '$lib/components/projects/Project.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Popup from '$lib/components/layout/Popup.svelte';
	import Testimonial from '$lib/components/projects/Testimonial.svelte';
	import adrienne from '$lib/images/adrienne.webp';
	import ViewTransitionLink from '$lib/components/layout/ViewTransitionLink.svelte';
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

<section class="bevel">
	<div class="whole">
		<Project
			title="busy little bat sewing"
			img="/projects/busybatleopard.webp"
			url="https://busybatsewing.com"
			description="sveltekit"
			index={0}
		/>

		<Testimonial
			name="Adrienne Cornelson"
			title="Busy Little Bat Sewing - Owner"
			testimonial="Gabe was a pleasure to work with. He was very responsive and made sure to ask questions when he needed clarification. He took my ideas and made them a reality! I would highly recommend him for any web development project."
			rating="5"
			avatar={adrienne}
		/>
	</div>

	<!--  -->

	<Project
		title="pixipalette"
		img="/projects/pixipalette.webp"
		url="https://pixipalette.vercel.app"
		description="sveltekit"
		index={1}
	/>

	<!--  -->

	<Project
		title="grocery list"
		img="/projects/groceries.webp"
		url="https://legit-shopping-list.vercel.app/"
		description="react"
		index={2}
	/>

	<!--  -->

	<Project
		title="e-commerce product page"
		img="/projects/ecommerce.webp"
		url="https://fake-store-products.vercel.app"
		description="html/css/js"
		index={3}
	/>

	<!--  -->

	<Project
		title="password maker"
		img="/projects/pw-generator.webp"
		url="https://make-a-password.vercel.app/"
		description="sveltekit"
		index={4}
	/>

	<!--  -->

	<Project
		title="think.flow"
		img="/projects/thinkflow.webp"
		url="https://thinkdotflow.vercel.app"
		description="sveltekit"
		index={5}
	/>

	<!--  -->

	<!-- <Project
		title="data visualizations"
		img="/projects/data-v.webp"
		url="https://visual-svelte.vercel.app"
		description="d3/svelte"
		index={5}
	/> -->

	<!--  -->

	<!-- <Project
		title="S.P.A."
		img="/projects/web_dev.webp"
		url="https://gabe1.vercel.app"
		description="HTML/CSS/JS"
	/> -->

	<!--  -->

	<!-- <Project
		title="horizontal scroll"
		img="/projects/scroller.webp"
		url="https://scrollernessly.vercel.app"
		description="html/css/js"
	/> -->

	<!--  -->

	<!-- <Project
	title="nasa api"
	img="/projects/nasa.webp"
	url="https://nasaapi-theta.vercel.app"
	description="React"
	/> -->

	<!--  -->

	<!-- <Project
	title="github search"
	img="/projects/github.webp"
	url="https://github-user-search-api.vercel.app"
	description="svelte"
	/> -->

	<!--  -->

	<!-- <Project
		title="scatterplot chart"
		img="/projects/chart.webp"
		url="https://piechart-brown.vercel.app"
		description="d3 and svelte"
	/> -->

	<!--  -->

	<!-- <Project
	title="random user generator"
	img="/projects/ran_user.webp"
	url="https://gabe3.vercel.app/"
	description="Vue"
	/> -->

	<!--  -->

	<!-- <Project
		title="snippet creator"
		img="/projects/snippet.webp"
		url="https://appity.vercel.app"
		description="Sveltekit"
	/> -->

	<!--  -->

	<!-- <Project
		title="landing page"
		img="/projects/landing.webp"
		url="https://landing-page-tailwind-rust.vercel.app/"
		description="tailwindcss"
	/> -->

	<!--  -->

	<!-- <Project
		title="svelteflix"
		img="/projects/svelteflix.webp"
		url="https://svelteflix-delta.vercel.app/"
		description="Sveltekit"
	/> -->

	<!--  -->

	<!-- <Project
		title="pokedex"
		img="/projects/pokedex.webp"
		url="https://pokedex-sample.vercel.app/"
		description="Sveltekit"
	/> -->

	<!--  -->

	<!-- <Project
		title="starbucks clone"
		img="/projects/starbucks.webp"
		url="https://gabe4.vercel.app"
		description="HTML/CSS/JS"
	/> -->

	<!--  -->

	<!-- <Project
		title="alphamaps"
		img="/projects/alphamaps.webp"
		url="https://alphamaps69.vercel.app"
		description="Three.js"
	/> -->

	<!--  -->

	<!-- <section class="frame">
		<ImageFrame
			src="/logos/frontend_dev.webp"
			alt="Frontend Developer"
			text="distinguish your website"
		/> -->

	<!-- <Figure src="logos/web.webp" alt="A logo that says web" text="building the" /> -->

	<!-- <Avatar src={cartoonGabe} alt="cartoon gabe" name="gabeAtwell" /> -->
</section>

<style>
	.bevel {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		place-items: center;

		@media (width <= 500px) {
			padding: 4em 0;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}

		& .whole {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;
		}
	}

	.bevel:before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--clr-gray);
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
