<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';

	// animations
	onMount(() => {
		const title = document.querySelector('.title');

		gsap.set(title, { skewX: 15, autoAlpha: 0, y: 35 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2 }, 0);

		title.addEventListener('mouseover', () => {
			gsap.to(title, { skewX: -15, duration: 0.25, ease: 'none' });
		});

		title.addEventListener('mouseleave', () => {
			gsap.to(title, { skewX: 15, duration: 0.25, ease: 'none' });
		});
	});
</script>

<section class="main">
	<!-- title -->
	<h1 class="title">SvelteKit</h1>

	<main>
		<!-- content -->
		<section>
			<details aria-label="accordian">
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>Framework</b></summary>
				<p class="detail">
					I used sveltekit to create this portfolio website. I decided to go with sveltekit because
					of the server-side rendering (SSR) and all of the SEO features, as well as making the
					website really fast. The fact that this, to me, is less than an actual framework as it
					relies heavily on vanilla HTML, CSS, and JavaScript is what I'm looking for.
				</p>

				<p class="detail">
					In comparing all of the frameworks for the best one to use, my list is 1.) Sveltekit 2.)
					Astro 3.) React. I like Astro because it is really easy to use, and you can use any other
					framework's components you want. I can use svelte with astro, react with astro, etc. I put
					react as #3 because it is really verbose.. but it does the same thing that sveltekit and
					astro do.
				</p>
			</details>

			<details aria-label="accordian">
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>Basics</b></summary>
				<p class="detail">
					I am very knowledgable to the fundamentals of web development. CSS is a real hobby that I
					have because I'm a very visual person. Sveltekit has made it super simple to put my ideas
					on the web.
				</p>

				<p class="detail">
					The framework is based off of html. Javascript is used in a script tag, css is used in a
					style tag, just like you do it inline in html. Everything is scoped, so it makes it really
					easy to build things.
				</p>
			</details>

			<details aria-label="accordian">
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button" class="outline contrast spacing"><b>Definitions</b></summary>
				<p class="detail">
					Svelte is a client based compiler that generates optimized javascript. Sveltekit is a
					framework that uses svelte under the hood. Think of how Nuxt is to Vue, or how Next is to
					React. In the end, sveltekit is a new approach to building rich user interfaces.
				</p>
			</details>

			<h3 class="learn">Learn more about Sveltekit</h3>
			<p class="center">
				If you would like to know more about <a
					class="link"
					href="https://svelte.dev"
					aria-label="sveltekit">svelte</a
				>, click the link!
			</p>

			<!-- video -->
			<Iframe
				url="https://www.youtube.com/embed/MoGkX4RvZ38?si=xV4--8APNCqD7Ihn"
				name="YouTube video player"
			/>

			<!-- back button -->
			<a href="/blog"><Button title="Back" /></a>
		</section>
	</main>
</section>

<style>
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

	.learn {
		text-align: center;
		margin: 5rem 0 -0.5rem 0;
		color: var(--sky);
		font-family: var(--anta);
	}

	.title {
		font-size: 7rem;
		font-weight: 800;
		margin: 2rem 0 6rem 0;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--blue);
	}

	@media (min-width: 200px) {
		.main {
			margin: 0 auto;
		}

		.title {
			font-size: 2.5rem;
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

		.detail {
			min-width: 20rem;
			/* margin-left: -30%; */
			margin: 0 -4.75rem;
			font-family: var(--lexend);
		}

		.center {
			text-align: center;
			font-size: 1rem;
			margin-top: -2rem;
		}

		.learn {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 500px) {
		details {
			width: 15rem;
		}

		.detail {
			margin-left: -2.5rem;
		}
	}

	@media (min-width: 720px) {
		.title {
			font-size: 4rem;
		}

		.learn {
			font-size: 1.75rem;
		}

		.center {
			font-size: 1.25rem;
			margin-top: -3rem;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-size: 6rem;
		}

		.spacing {
			letter-spacing: 2px;
		}

		details {
			width: 100%;
		}
	}
</style>
