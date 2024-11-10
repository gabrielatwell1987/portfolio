<script>
	import { gsap } from 'gsap';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Image from '$lib/components/Image.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import { fade } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';

	// animations
	$effect(() => {
		const title = document.querySelector('.title');
		const popover = document.querySelector('.popover');

		gsap.set(title, { autoAlpha: 0, y: -100 });
		gsap.set(popover, { y: 75 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2, ease: 'back.out(4)' }, 0);

		console.log('Greensock page');
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

<SEO
	title="Svelte frontend framework"
	description="web framework"
	keywords="sveltekit, sveltekit how-to"
/>

<!-- spacing -->
<br /><br /><br /><br /><br /><br /><br />

<section transition:fade={{ delay: 250, duration: 300 }} class="main">
	<div class="separate">
		<h1 class="title">Svelte</h1>

		<main>
			<article class="popover">
				<Popover text="fundamentals" />
			</article>

			<div class="centerDetail">
				<details name="sveltekit" ontoggle={resetAnimation}>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Framework</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						I used sveltekit to create this portfolio website. I decided to go with sveltekit
						because of the server-side rendering (SSR) and all of the SEO features, as well as
						making the website really fast. The fact that this, to me, is less than an actual
						framework as it relies heavily on vanilla HTML, CSS, and JavaScript is what I'm looking
						for.
						<br /><br />
						In comparing all of the frameworks for the best one to use, my list is 1.) Sveltekit 2.)
						Astro 3.) React. I like Astro because it is really easy to use, and you can use any other
						framework's components you want. I can use svelte with astro, react with astro, etc. I put
						react as #3 because it is really verbose.. but it does the same thing that sveltekit and
						astro do.
					</p>

					<div class="structure">
						<Image src="/logos/fileLayout.webp" alt="how a svelte file looks like" />
					</div>
				</details>

				<details name="sveltekit" ontoggle={resetAnimation}>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Based off basics</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						I am very knowledgeable to the fundamentals of web development. CSS is a real hobby that
						I have because I'm a very visual person. Sveltekit has made it super simple to put my
						ideas on the web.
						<br /><br />
						The framework is based off of html. Javascript is used in a script tag, css is used in a
						style tag, just like you do it inline in html. Everything is scoped, so it makes it really
						easy to build things.
					</p>
				</details>

				<details name="sveltekit" ontoggle={resetAnimation}>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>What is it?</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						Svelte is a client based compiler that generates optimized javascript. Sveltekit is a
						framework that uses svelte under the hood. Think of how Nuxt is to Vue, or how Next is
						to React. In the end, sveltekit is a new approach to building rich user interfaces.
						Originally, svelte was created as a tool to build components for data visualization. It
						makes creating data visualizations super easy!
						<br /><br />
						Svelte is usually used for SPA's (single page applications), but with sveltekit, you can
						use it's routing features to create a MPA's (multi-page applications). This is what I did
						with this website.
					</p>
				</details>

				<details name="sveltekit" ontoggle={resetAnimation}>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Install</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						You need <a href="https://nodejs.org/"><b>Node.js</b></a> installed. Once you have it
						installed, you will use npm in your terminal. In your terminal, type
						<code class="code">cd folder</code> to change the directory to whatever folder you want
						to create your project in. If you're at where you want to be at, type
						<code class="code">npx sv create</code>. This will create a new svelte project with
						sveltekit included. All of the dependencies will be installed when the project is
						created. Once you have the project installed, you will run
						<code class="code">npm run dev</code>
						to start a development server and start the project. Now when you make changes to your code
						and press save, it will update on your development server automatically without having to
						hit refresh! Also, this starts the project on
						<code class="code">http://localhost:5173</code>.
						<br /><br />
						Once you have the development server running, you can start building your project. You can
						use the <code class="code">src/routes</code> folder to create new pages. You can use the
						<code class="code">src/lib</code> folder to store and create new components or data for
						your project.
						<br /><br />
						You can use the <code class="code">+layout.svelte</code> file to create a layout for
						your project. You can use the <code class="code">+error.svelte</code>
						file to create an error page. And <code class="code">+page.svelte</code> creates a new page.
					</p>

					<div class="structure">
						<Image src="/logos/file-structure.webp" alt="Sveltekit structure" />
					</div>
				</details>

				<details name="sveltekit" ontoggle={resetAnimation}>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Runes</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						Runes are symbols that you use in .svelte and .svelte.js / .svelte.ts files to control
						the Svelte compiler. If you think of Svelte as a language, runes are part of the syntax
						— they are keywords.
						<br /><br />
						Runes have a $ prefix and look like functions:
						<code class="code">let message = $state('hello');</code>.
						<br /><br />
						They differ from normal JavaScript functions in important ways, however:
						<br />🔹 You don’t need to import them — they are part of the language
						<br />🔹 They’re not values
						<br />🔹 You can’t assign them to a variable or pass them as arguments to a function -
						Just like JavaScript keywords, they are only valid in certain positions (the compiler
						will help you if you put them in the wrong place)
					</p>

					<p class="text">
						The state rune allows you to create reactive state, which means that your UI reacts when
						it changes: <code class="code">let count = $state(0);</code>
					</p>

					<p class="text">
						Derived state is declared with the $derived rune: <code class="code"
							>let doubled = $derived(count * 2);</code
						>
					</p>

					<p class="text">
						Effects are what make your application do things. When Svelte runs an effect function,
						it tracks which pieces of state (and derived state) are accessed (unless accessed inside
						untrack), and re-runs the function when that state later changes.
						<br /><br />
						You can also create your own effects with the $effect rune, which is useful for animating
						your website, especially with gsap!
						<br />
					</p>

					<div class="structure">
						<Image src="/logos/effects_rune.webp" alt="effect rune syntax with gsap" />
					</div>

					<p class="text">
						The inputs to a component are referred to as props, which is short for properties. You
						pass props to components just like you pass attributes to elements: <code class="code"
							>let &lcub; src, alt &rcub; = $props();</code
						>
						<br /><br />
						Destructuring allows us to declare fallback values, which are used if the parent component
						does not set a given prop:
						<code class="code">let &lcub; alt = "a wild one" &rcub; = $props();</code>
						<br /><br />
						we can use a rest property to get, well, the rest of the props:
						<code class="code">let &lcub; rest, props, ...fun &rcub; = $props();</code>
					</p>
				</details>
			</div>

			<div class="iframe">
				<Iframe
					src="https://www.youtube.com/embed/tErKyuUTzsM?si=w9Rly4TIEZuH8sDr"
					title="YouTube video player"
				/>
			</div>

			<h3 class="learn">Learn more about Sveltekit</h3>
			<p class="center">
				If you would like to know more about <a
					class="link"
					href="https://svelte.dev"
					aria-label="sveltekit">svelte</a
				>, click the link!
			</p>

			<div class="back">
				<Button href="/blog" title="Back" />
			</div>
		</main>
	</div>
</section>
<!-- footer spacing -->
<br />

<style>
	:root {
		--100: 100%;
	}

	main {
		width: 75%;
		border-radius: 10px;
		margin: 0 auto;
	}

	details {
		width: 50%;
		margin-left: 24.5%;
		margin-bottom: 2rem;
		position: relative;
	}

	details[open] i {
		animation: rotate 0.5s ease-in-out forwards;
	}

	details[open] summary ~ * {
		animation: open 0.5s ease-in-out;
	}

	p {
		text-align: left;
		margin-bottom: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		font-family: var(--montserrat);
		width: var(--100);
	}

	.link {
		text-decoration: none;
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		text-decoration: none;
		color: var(--purple);
		font-family: var(--orbitron);
	}

	.link:hover {
		text-decoration: underline;
		color: #fff;
	}

	.title {
		font-size: clamp(3.75rem, 8vw, 10rem);
		font-weight: 800;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: -7em;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--blue);
	}

	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
		font-family: var(--anta);
		color: var(--sky);
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}

	.text {
		font-size: clamp(1.05rem, 1vw, 1.35rem);
	}

	.popover {
		background: transparent;
	}

	.centerDetail {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		margin-top: -40%;
	}

	.separate {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 300px) {
		.main {
			margin: 0 auto;
			margin-right: 1rem;
		}

		details {
			min-width: 5rem;
			width: 17rem;
			margin: 0 auto;
		}

		summary {
			margin-left: -1rem;
			color: var(--off-white);
			border-color: var(--off-white);
			font-family: var(--mono);
			font-size: clamp(1rem, 1.25vw, 1.5rem);
		}

		.text {
			min-width: 20rem;
			margin: 0 -4.75rem;
			margin-left: -2.5rem;
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

		code {
			font-family: var(--mono);
		}

		.back {
			margin-top: 5%;
			width: var(--100);
		}

		.popover {
			display: none;
		}

		.iframe {
			margin: 0 auto;
			margin-left: -15%;
		}

		.centerDetail {
			margin-top: 170%;
		}

		.margin {
			margin-left: 0;
		}

		.structure {
			margin: 1rem 0;
			border-radius: 12px;
			width: var(--100);
			display: grid;
			place-items: center;
		}

		.title {
			margin-bottom: -6em;
		}
	}

	@media (min-width: 500px) {
		.text {
			margin-left: -2.5rem;
		}

		details {
			width: 15rem;
		}

		.iframe {
			margin-left: 0;
		}

		.centerDetail {
			margin-top: 75%;
		}

		.title {
			margin-bottom: -55%;
		}
	}

	@media (min-width: 720px) {
		.center {
			margin-top: -3rem;
		}

		.back {
			width: var(--100);
		}

		.centerDetail {
			margin-top: 60%;
		}

		.margin {
			margin-left: 3rem;
		}

		.title {
			margin-bottom: -45%;
		}
	}

	@media (min-width: 990px) {
		.spacing {
			letter-spacing: 2px;
		}

		details {
			width: var(--100);
		}

		.back {
			width: var(--100);
			margin-inline: auto;
		}

		.popover {
			display: block;
		}

		.centerDetail {
			margin-top: -50%;
		}

		.title {
			margin-bottom: -20%;
		}
	}

	@media (min-width: 1024px) {
		main {
			margin-top: 15%;
		}

		.center {
			margin-bottom: 5%;
		}

		.popover {
			margin-top: -5%;
		}
	}

	@media (min-width: 1200px) {
		.popover {
			margin-top: -10%;
			margin-bottom: 5em;
		}
	}

	@media (min-width: 1400px) {
		.popover {
			margin-top: 15%;
		}

		.title {
			margin-bottom: -30%;
		}

		.centerDetail {
			margin-top: -38%;
		}
	}

	@media (min-width: 1500px) {
		.title {
			margin-bottom: -25%;
		}

		.popover {
			margin-block: 10%;
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

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(90deg);
		}
	}
</style>
