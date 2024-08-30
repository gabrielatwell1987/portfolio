<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Image from '$lib/components/Image.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// animations
	onMount(() => {
		const title = document.querySelector('.title');
		const section = document.querySelector('.main');

		gsap.set(title, { skewX: 15, autoAlpha: 0, y: 35 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2 }, 0);

		title.addEventListener('mouseover', () => {
			gsap.to(title, { skewX: -15, duration: 0.25, ease: 'none' });
		});

		title.addEventListener('mouseleave', () => {
			gsap.to(title, { skewX: 15, duration: 0.25, ease: 'none' });
		});

		console.log(section);
	});

	// details animation
	function resetAnimation(event) {
		const detail = event.currentTarget;
		if (detail.open) {
			const summary = detail.querySelector('summary');
			const content = summary.nextElementSibling;

			content.style.display = 'none';
			content.offsetHeight; // Force reflow
			content.style.display = '';

			// Optionally reset animation with class
			content.classList.remove('animate');
			void content.offsetWidth; // Force reflow again
			content.classList.add('animate');
		}
	}
</script>

<svelte:head>
	<title>Sveltekit</title>
	<meta name="description" content="Svelte, Sveltekit" />
	<meta name="keywords" content="Sveltekit" />
</svelte:head>

<section in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }} class="main">
	<!-- title -->
	<h1 class="title">SvelteKit</h1>

	<main>
		<article class="A">
			<Image src="/logos/A.png" alt="A for Atwell" />
		</article>

		<!-- popover -->
		<article class="popover">
			<Popover text="closest to HTML" />
		</article>

		<!-- content -->
		<section>
			<details on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>Framework</b></summary>
				<p class="text">
					I used sveltekit to create this portfolio website. I decided to go with sveltekit because
					of the server-side rendering (SSR) and all of the SEO features, as well as making the
					website really fast. The fact that this, to me, is less than an actual framework as it
					relies heavily on vanilla HTML, CSS, and JavaScript is what I'm looking for.
					<br /><br />
					In comparing all of the frameworks for the best one to use, my list is 1.) Sveltekit 2.) Astro
					3.) React. I like Astro because it is really easy to use, and you can use any other framework's
					components you want. I can use svelte with astro, react with astro, etc. I put react as #3
					because it is really verbose.. but it does the same thing that sveltekit and astro do.
				</p>
			</details>

			<details on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>Based off of basics</b></summary>
				<p class="text">
					I am very knowledgable to the fundamentals of web development. CSS is a real hobby that I
					have because I'm a very visual person. Sveltekit has made it super simple to put my ideas
					on the web.
					<br /><br />
					The framework is based off of html. Javascript is used in a script tag, css is used in a style
					tag, just like you do it inline in html. Everything is scoped, so it makes it really easy to
					build things.
				</p>
			</details>

			<details on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>What is it?</b></summary>
				<p class="text">
					Svelte is a client based compiler that generates optimized javascript. Sveltekit is a
					framework that uses svelte under the hood. Think of how Nuxt is to Vue, or how Next is to
					React. In the end, sveltekit is a new approach to building rich user interfaces.
					Originally, svelte was created as a tool to build components for data visualization. It
					makes creating data visualizations super easy!
					<br /><br />
					Svelte is usually used for SPA's (single page applications), but with sveltekit, you can use
					it's routing features to create a MPA's (multi-page applications). This is what I did with
					this website.
				</p>
			</details>

			<details on:toggle={resetAnimation}>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>Install</b></summary>
				<p class="text">
					You need <a href="https://nodejs.org/"><b>Node.js</b></a> installed. Once you have it
					installed, you will use npm in your terminal. In your terminal, type
					<code class="code">cd folder</code> to change the directory to whatever folder you want to
					create your project in. If you're at where you want to be at, type
					<code class="code">npm create svelte@latest</code>. This will create a new sveltekit
					project. Once you have the project created, you will cd into the project and run
					<code class="code">npm install</code>. This will install all of the dependencies that you
					need to run the project. Once you have the project installed, you will run
					<code class="code">npm run dev</code>
					to start a development server and start the project. Now when you make changes to your code
					and press save, it will update on your development server without having to hit refresh! Also,
					this starts the project on <code class="code">http://localhost:5173</code>.
					<br /><br />
					Once you have the development server running, you can start building your project. You can
					use the <code class="code">src/routes</code> folder to create new pages. You can use the
					<code class="code">src/lib</code> folder to store and create new components or data for
					your project.
					<br /><br />
					You can use the <code class="code">+layout.svelte</code> file to create a layout for your
					project. You can use the <code class="code">+error.svelte</code>
					file to create an error page. And <code class="code">+page.svelte</code> creates a new page.
				</p>

				<div class="structure">
					<Image src="/logos/structure.png" alt="Sveltekit structure" />
				</div>
			</details>

			<!-- video -->
			<div class="iframe">
				<Iframe
					src="https://www.youtube.com/embed/MoGkX4RvZ38?si=xV4--8APNCqD7Ihn"
					title="YouTube video player"
				/>
			</div>

			<!-- learn section -->
			<h3 class="learn">Learn more about Sveltekit</h3>
			<p class="center">
				If you would like to know more about <a
					class="link"
					href="https://svelte.dev"
					aria-label="sveltekit">svelte</a
				>, click the link!
			</p>

			<!-- back button -->
			<div class="back">
				<a href="/blog"><Button title="Back" /></a>
			</div>
		</section>
	</main>
</section>

<style>
	.main {
		width: 90%;
	}

	main {
		width: 75%;
		margin: 0 auto;
	}

	p {
		text-align: left;
		margin: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		letter-spacing: 1px;
		font-family: var(--montserrat);
		width: 100%;
	}

	.link {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--yellow);
		mix-blend-mode: hard-light;
	}

	.link:hover {
		text-decoration: underline;
	}

	details {
		width: 50%;
		margin-left: 24.5%;
		margin-bottom: 2rem;
	}

	details[open] summary ~ * {
		animation: open 0.5s ease-in-out;
	}

	.learn {
		text-align: center;
		margin: 5rem 0 -0.5rem 0;
		color: var(--sky);
		font-family: var(--anta);
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}

	.title {
		font-size: clamp(3.75rem, 8vw, 10rem);
		font-weight: 800;
		margin: 2rem 0 6rem 0;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--blue);
	}

	.text {
		font-size: clamp(1.05rem, 2vw, 1.5rem);
	}

	.popover {
		background: transparent;
		margin-bottom: -15%;
	}

	@media (min-width: 300px) {
		.main {
			margin: 0 auto;
			margin-right: 1rem;
		}

		details {
			min-width: 5rem;
			width: 10rem;
			margin: 0 auto;
		}

		summary {
			margin-left: -1rem;
			color: var(--yellow);
		}

		.text {
			min-width: 20rem;
			margin: 0 -4.75rem;
			font-family: var(--lexend);
			line-height: 1.5;
			color: var(--white);
		}

		.center {
			text-align: center;
			font-size: clamp(1rem, 2vw, 1.35rem);
			margin-top: -2rem;
			line-height: 1.5;
		}

		.back {
			margin-top: 5%;
			width: 100%;
		}

		a {
			text-decoration: none;
		}

		.A {
			background: transparent;
		}

		.structure {
			margin: 0;
			border-radius: 12px;
		}

		.popover {
			display: none;
		}

		.iframe {
			margin: 0 auto;
			margin-left: -23%;
		}
	}

	@media (min-width: 500px) {
		details {
			width: 15rem;
		}

		.text {
			margin-left: -2.5rem;
		}

		.iframe {
			margin-left: 0;
		}
	}

	@media (min-width: 720px) {
		.center {
			margin-top: -3rem;
		}

		.A {
			margin-left: 15%;
		}

		.main {
			width: 100%;
		}
	}

	@media (min-width: 990px) {
		.spacing {
			letter-spacing: 2px;
		}

		details {
			width: 100%;
		}

		summary {
			font-size: 1.5rem;
		}

		.A {
			margin-left: 35%;
		}

		.back {
			width: 100%;
			margin-inline: auto;
		}

		.structure {
			width: 100%;
			margin: 0 43%;
		}
	}

	@media (min-width: 1024px) {
		summary {
			font-size: 1.75rem;
		}

		.text {
			line-height: 1.65;
		}

		.A {
			margin-left: 28%;
		}

		.center {
			margin-bottom: 5%;
		}

		.popover {
			display: block;
			margin-bottom: -25%;
		}
	}

	@media (min-width: 1400px) {
		.A {
			margin-left: 35%;
		}

		.popover {
			margin-bottom: -20%;
		}
	}

	@keyframes open {
		from {
			opacity: 0;
			margin-top: -10px;
		}
		to {
			opacity: 1;
			margin-top: 0px;
		}
	}
</style>
