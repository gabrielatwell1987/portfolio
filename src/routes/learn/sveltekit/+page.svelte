<script>
	import SEO from '$lib/data/SEO.svelte';
	import Button from '$lib/components/layout/Button.svelte';
	import Iframe from '$lib/components/learn/Iframe.svelte';
	import Image from '$lib/components/layout/Image.svelte';
	import Learn from '$lib/components/learn/Learn.svelte';
	import Title from '$lib/components/layout/Title.svelte';

	let detailsVisible = $state(false);

	// animations
	$effect(() => {
		setTimeout(() => {
			detailsVisible = true;
		}, 100);
	});
</script>

<SEO
	title="Sveltekit Framework"
	description="Build rich user interfaces with Svelte"
	keywords="svelte, sveltekit, svelte how to, sveltekit how to"
/>

<section class="main">
	<div class="separate">
		<Title title="Svelte" />

		<main>
			<div class="centerDetail">
				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 0s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Svelte</b></span>
					</summary>
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
						<Image
							src="/logos/fileLayout.webp"
							alt="how a svelte file looks like"
							aspectRatio="16/9"
						/>
					</div>
				</details>

				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 0.5s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Basics</b></span>
					</summary>
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

				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 1s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Compiler?</b></span>
					</summary>
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

				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 1.5s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Install</b></span>
					</summary>
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
						<Image src="/logos/file-structure.webp" alt="Sveltekit structure" aspectRatio="9/32" />
					</div>
				</details>

				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 2s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Runes</b></span>
					</summary>
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
						<Image
							src="/logos/effects_rune.webp"
							alt="effect rune syntax with gsap"
							aspectRatio="3/4"
						/>
						<br />
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

				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 2.5s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>Snippets</b></span>
					</summary>

					<p class="text">
						Snippets allow you to reuse content within a component, without extracting it out into a
						separate file. Like function declarations, snippets can have an arbitrary number of
						parameters, which can have default values, and you can destructure each parameter. You
						cannot use rest parameters, however.
					</p>

					<div class="structure">
						<Image src="/code/snippet.webp" alt="snippet example in code" aspectRatio="16/9" />
						<br />
					</div>

					<p class="text">
						Snippets can be declared anywhere inside your component. They can reference values
						declared outside themselves, for example in the <code>&lt;script&gt;</code> tag or in
						<code>&lcub;#each ...&rcub;</code> blocks. They can also reference other snippets, but not
						themselves. Snippets are not reactive, so they will not re-run when the state changes. You
						can use them to create reusable components that are not reactive.
					</p>
				</details>

				<details
					name="sveltekit"
					class:animate-in={detailsVisible}
					style="--anim-delay: 3s; visibility: hidden;"
				>
					<!-- svelte-ignore a11y_no_redundant_roles -->
					<summary role="button" class="outline contrast spacing"
						><span class="margin"><b>View Transitions</b></span>
					</summary>

					<p class="text">
						If you have a sveltekit project and you've been trying to use view transitions and
						nothing is working, it's because sveltekit has a different way of doing things. In order
						to make the framework see the correct view transition api code, you need to add the
						following javascript code:
					</p>

					<div class="structure">
						<Image
							src="/code/onNavigate.webp"
							alt="onNavigate example in code"
							aspectRatio="16/9"
						/>
						<br />
					</div>

					<p class="text">
						This makes your view transitions work for a sveltekit project! I have made a <code
							>&lt; ViewTransition /&gt;</code
						>
						component that you can use for your whole project by adding it in
						<code>+layout.svelte</code>.
					</p>
				</details>
			</div>

			<Iframe
				src="https://www.youtube.com/embed/tErKyuUTzsM?si=w9Rly4TIEZuH8sDr"
				title="YouTube video player"
			/>

			<Learn href="https://svelte.dev" title="svelte" />

			<div class="back">
				<Button href="/learn" title="Back" />
			</div>
		</main>
	</div>
</section>

<style>
	:root {
		--100: 100%;
		interpolate-size: allow-keywords;
	}

	.animate-in {
		animation: fadeInUp 1s ease forwards;
		animation-delay: var(--anim-delay, 0s);
	}

	section {
		main {
			& .centerDetail {
				& details {
					max-width: 90vw;
					margin-inline: auto;
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

					& summary {
						color: var(--clr-blue);
						border-color: var(--clr-gray);

						@media (width <= 768px) {
							color: var(--clr-blue);
							border-color: var(--clr-gray);
						}
					}
				}

				& .text {
					color: var(--clr-main);

					& a {
						color: var(--clr-link);
					}
				}
			}

			& .back {
				text-align: center;
			}
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(100px);
			visibility: hidden;
		}
		to {
			opacity: 1;
			transform: translateY(0);
			visibility: visible;
		}
	}
</style>
