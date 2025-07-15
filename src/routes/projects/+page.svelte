<script>
	import SEO from '$lib/data/SEO.svelte';
	import Project from '$lib/components/projects/Project.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Popup from '$lib/components/layout/Popup.svelte';
	import Testimonial from '$lib/components/projects/Testimonial.svelte';
	import adrienne from '$lib/images/adrienne.webp';
	import GithubContributions from '$lib/components/projects/GithubContributions.svelte';
</script>

<SEO
	title="Websites I've Created"
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

<section class="github-section">
	<div class="container">
		<GithubContributions />
	</div>
</section>

<section class="bevel">
	<div class="whole">
		<Project
			title="busy little bat sewing"
			img="/projects/busybatleopard.webp"
			url="https://busybatsewing.com"
			description="sveltekit"
			summary="A custom website for a local business that sells handmade items. The site features a product page, a contact form, and I even created the brand."
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
		summary="A color palette generator that tells users the hex, rgb, and hsl colors of images. I tried making the app as user-friendly as possible."
		index={1}
	/>

	<!--  -->

	<Project
		title="grocery list"
		img="/projects/groceries.webp"
		url="https://legit-shopping-list.vercel.app/"
		description="react"
		summary="A grocery list app that allows users to add, remove, and edit items. The app is built with React and features a simple and intuitive interface."
		index={2}
	/>

	<!--  -->

	<Project
		title="e-commerce product page"
		img="/projects/ecommerce.webp"
		url="https://fake-store-products.vercel.app"
		description="html/css/js"
		summary="My version of an e-commerce product page that features a product image, title, price, and description. I used the fake store API to populate the product data."
		index={3}
	/>

	<!--  -->

	<Project
		title="passcraft"
		img="/projects/passcraft.webp"
		url="https://make-a-password.vercel.app/"
		description="sveltekit"
		summary="If you're like me and have a hard time creating passwords, PassCraft is for you! It generates random passwords based on user input."
		index={4}
	/>

	<!--  -->

	<Project
		title="think.flow"
		img="/projects/thinkflow.webp"
		url="https://thinkdotflow.vercel.app"
		description="sveltekit"
		summary="Custom blog page where you can add, edit, and remove posts. It uses localStorage to save the posts, so they persist even after refreshing the page."
		index={5}
	/>

	<!--  -->

	<!-- <Project
		title="data visualizations"
		img="/projects/data-v.webp"
		url="https://visual-svelte.vercel.app"
		description="d3/svelte"
		summary="What I built to learn data visualization with d3 and svelte. It features a scatterplot chart, bar chart, and line chart."
		index={5}
	/> -->

	<!--  -->

	<!-- <Project
		title="S.P.A."
		img="/projects/web_dev.webp"
		url="https://gabe1.vercel.app"
		description="HTML/CSS/JS"
		summary="A single page application that I built to showcase my skills in HTML, CSS, and JavaScript. It features a responsive design and a simple layout."
	/> -->

	<!--  -->

	<!-- <Project
		title="horizontal scroll"
		img="/projects/scroller.webp"
		url="https://scrollernessly.vercel.app"
		description="html/css/js"
		summary="A horizontal scrolling website that I built to showcase my skills in HTML, CSS, and JavaScript. It features a responsive design and a simple layout."
	/> -->

	<!--  -->

	<!-- <Project
	title="nasa api"
	img="/projects/nasa.webp"
	url="https://nasaapi-theta.vercel.app"
	description="React"
	summary="Built with react using the nasa api."
	/> -->

	<!--  -->

	<!-- <Project
	title="github search"
	img="/projects/github.webp"
	url="https://github-user-search-api.vercel.app"
	description="svelte"
	summary="Search for GitHub users and view their profiles. Built with Svelte."
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
	summary="Generate random users"
	/> -->

	<!--  -->

	<!-- <Project
		title="snippet creator"
		img="/projects/snippet.webp"
		url="https://appity.vercel.app"
		description="Sveltekit"
		summary="Create code snippets and share them with others."
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
</section>

<style>
	:root {
		--100: 100%;
	}

	.github-section {
		padding: 2rem 1rem;
		margin: 2rem 0;
		background: transparent;
		border-radius: 12px;

		@media (width <= 768px) {
			margin: 1rem;
			padding: 1rem;
		}

		& .container {
			max-width: 1200px;
			margin: 0 auto;
			text-align: center;
		}
	}

	.bevel {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		place-items: center;
		margin: 1em;

		@media (width <= 768px) {
			margin: 0;
		}

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

	section {
		padding-top: 2rem;
		overflow: hidden;

		@media screen and (width >= 740px) {
			padding: 2rem;
		}

		@media screen and (width >= 990px) {
			margin-bottom: -5%;
			padding-top: 5rem;
		}
	}

	.popup {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 5%;
	}
</style>
