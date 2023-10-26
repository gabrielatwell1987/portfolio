<script>
	import Svelte from '$lib/Svelte.svelte';
	import Exclamation from '$lib/Exclamation.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.sveltekit', { y: -500 });
		gsap.set('.sk-main', { y: 1000 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to('.sveltekit', { y: 0, ease: 'back.out' })
			.to('.sveltekit', {
				scale: 2,
				x: 473,
				y: 30
			})
			.to('.sk-main', { y: 0 }, '-=4');
	});
</script>

<div class="sveltekit">
	<Svelte />
</div>

<main>
	<h1 class="title">SvelteKit</h1>

	<div class="exclamation">
		<Exclamation />
	</div>

	<section class="sk-grid">
		<h2 class="subtitle">What I used to create this site</h2>
		<p>
			I used sveltekit to create this portfolio website. I decided to go with sveltekit because of
			the server-side rendering (SRR) and all of the SEO features, as well as the speed of
			everything. The fact that this, to me, is less than an actual framework as it relies heavily
			on vanilla HTML, CSS, and JavaScript is what I'm looking for.
		</p>
		<h2 class="subtitle">What I know</h2>
		<p>
			I am very knowledgable to the fundamentals of web development. CSS is a real hobby that I have
			because I'm a very visual person. Sveltekit has made it super simple to put my ideas on the
			web.
		</p>
		<h2 class="subtitle">What is svelte and sveltekit?</h2>
		<p>
			Svelte is a client based compiler that generates optimized javascript. Sveltekit is a
			framework that uses svelte under the hood. Think of how Nuxt is to Vue, or how Next is to
			React. In the end, svelte(kit) is a new approach to building rich user interfaces.
		</p>
		<h2 class="subtitle">Learn more about Sveltekit</h2>
		<p>
			If you would like to know more about svelte and sveltekit, please click <a
				href="https://svelte.dev">here</a
			>.
		</p>
	</section>
</main>

<a href="/blog" class="homelink">Back</a>

<style>
	main {
		background-color: var(--lightblack);
		width: 45%;
		border: 3px solid var(--white);
		border-radius: 10px;
		margin: 6rem 0 0 27%;
	}
	p {
		text-align: center;
		margin: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--sky);
	}
	.subtitle {
		text-align: center;
		margin: 2rem 0 -0.5rem 0;
		color: var(--cornflower);
	}
	.homelink {
		display: block;
		margin: 3rem 0 0 48%;
	}
	a:hover {
		color: var(--white);
	}
	.title {
		font-size: 4rem;
		font-weight: 800;
		margin: 2rem 0 -1rem 0;
		text-align: center;
		color: var(--sky);
	}
	.sveltekit {
		margin: 0 0 0 48%;
	}
	.exclamation {
		margin: 5rem 0 0 48%;
	}
</style>
