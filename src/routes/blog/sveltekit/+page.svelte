<script>
	import { fade } from 'svelte/transition';
	import { gsap } from 'gsap';
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Image from '$lib/components/Image.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import Learn from '$lib/components/Learn.svelte';
	import Title from '$lib/components/Title.svelte';

	let duration = $state(300);
	let delay = $state(100);

	// animations
	$effect(() => {
		const title = document.querySelector('.title');
		const popover = document.querySelector('.popover');

		gsap.set(title, { autoAlpha: 0, y: -100 });
		gsap.set(popover, { y: 75 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2, ease: 'back.out(4)' }, 0);

		return () => {
			gsap.killTweensOf(title);
			gsap.killTweensOf(popover);
		};
	});
</script>

<SEO
	title="Svelte frontend framework"
	description="web framework"
	keywords="svelte, sveltekit, svelte how to, sveltekit how to"
/>

<section transition:fade={{ delay: delay, duration: duration }} class="main">
	<div class="separate">
		<div class="margin">
			<Title title="Svelte" />
		</div>

		<main>
			<Popover text="fundamentals" />

			<div class="centerDetail">
				<details name="sveltekit">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Svelte</b></span>
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

				<details name="sveltekit">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Basics</b></span>
						<i class="fa-solid fa-caret-right" style="color: var(--pale)"></i></summary
					>
					<p class="text">
						I am very knowledgeable to the fundamentals of web development. CSS is a real hobby that
						I have because I'm a very visual person. Sveltekit has made it super simple to put my
						ideas on the web.
						<br /><br />
						The framework is based off of html. Javascript is used in a script tag and css is used in
						a style tag just like you do in a html document. Everything is scoped, so the css inside
						of a component is the css for that component only.
					</p>
				</details>

				<details name="sveltekit">
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Compiler?</b></span>
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

				<details name="sveltekit">
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

				<details name="sveltekit">
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

			<Learn href="https://svelte.dev" title="svelte" />

			<div class="back">
				<Button href="/blog" title="Back" />
			</div>
		</main>
	</div>
</section>

<style>
	:root {
		--100: 100%;
		interpolate-size: allow-keywords;
	}

	section {
		padding-top: 13rem;
		overflow: hidden;
	}

	.margin {
		margin: 0;
		margin-bottom: -35em;
	}

	main {
		width: 75%;
		border-radius: 10px;
		margin: 0 auto;
		margin-bottom: 5rem;
	}

	details {
		width: 50%;
		margin-left: 24.5%;
		margin-bottom: 2rem;
		position: relative;

		border: none;
		outline: none;
		-webkit-appearance: none;
		appearance: none;

		overflow: hidden;
		padding: 1rem;
		inline-size: 100ch;

		&::details-content {
			opacity: 0;
			block-size: 0;
			overflow-y: clip;
			transition:
				content-visibility 1s allow-discrete,
				opacity 1s,
				block-size 1s;
		}

		&[open]::details-content {
			opacity: 1;
			block-size: auto;
		}

		&[open] i {
			animation: rotate 0.5s ease-in-out forwards;
		}

		&:not([open]) i {
			animation: un-rotate 0.5s ease-in-out forwards;
		}
	}

	p.text {
		overflow: hidden;
	}

	p {
		text-align: left;
		margin-bottom: 2rem;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		font-family: var(--bronova);
		width: var(--100);

		& a {
			color: var(--pale);
		}

		& a:hover {
			border-bottom: 2px solid var(--pale);
			border-start-start-radius: 0.5rem;
			border-radius: 0.15rem;
		}
	}

	.text {
		font-size: clamp(1.15rem, 1.25vw, 1.5rem);
	}

	.centerDetail {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		/* margin-top: -40%; */
	}

	.separate {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.structure {
		pointer-events: none;
	}

	@media (min-width: 300px) {
		main {
			margin: 0 auto;
			margin-right: 3rem;
			position: relative;
		}

		details {
			min-width: 5rem;
			width: 17rem;
			margin: 0 auto;
			padding-right: 4rem;
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
			line-height: 1.5;
			color: var(--white);
		}

		code {
			font-family: var(--mono);
		}

		.back {
			margin-top: 5%;
			width: var(--100);
		}

		.iframe {
			margin: 0 auto;
			margin-right: 1.5rem;
		}

		.centerDetail {
			margin-top: 170%;
		}

		.margin {
			margin-left: 0;
			margin-top: -5rem;
			margin-bottom: -30rem;
		}

		.structure {
			margin: 1rem 0;
			border-radius: 12px;
			width: var(--100);
			display: grid;
			place-items: center;
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
	}

	@media (min-width: 720px) {
		.back {
			width: var(--100);
		}

		.centerDetail {
			margin-top: 60%;
		}

		.margin {
			margin-left: 3rem;
			margin-top: -5em;
		}

		.text {
			line-height: 1.75;
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

		.centerDetail {
			margin-top: -50%;
		}
	}

	@media (min-width: 1024px) {
		main {
			margin-top: 10%;
			margin-right: 12rem;
		}
	}

	@media (min-width: 1400px) {
		.centerDetail {
			margin-top: -38%;
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

	@keyframes un-rotate {
		from {
			transform: rotate(90deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>
