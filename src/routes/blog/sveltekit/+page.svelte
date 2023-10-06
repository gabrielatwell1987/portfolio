<script>
	import Svelte from '$lib/Svelte.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.fromTo('.sveltekit', { y: -500 }, { y: 0, ease: 'back.out' })
			.to('.sveltekit', {
				scale: 2,
				x: 473,
				y: 30
			})
			.fromTo('.sk-main', { y: 1000 }, { y: 0 }, '-=4');
	});
</script>

<div class="sveltekit">
	<Svelte />
</div>

<main class="sk-main">
	<h1 class="title">Sveltekit</h1>
	<p>
		I used sveltekit to create this portfolio website. I decided to go with sveltekit because of the
		server-side rendering (SRR) and all of the SEO features, as well as the speed of everything. The
		fact that this, to me, is less than an actual framework as it relies heavily on vanilla HTML,
		CSS, and JavaScript is what I'm looking for.
	</p>
	<p>
		I am very knowledgable to the fundamentals of web development. CSS is a real hobby that I have
		because I'm a very visual person. Sveltekit has made it super simple to put my ideas on the web.
	</p>
	<p>
		If you would like to know more about svelte and sveltekit, please click <a
			href="https://svelte.dev">here</a
		>.
	</p>
</main>

<a href="/blog" class="homelink">Back</a>

<style>
	main {
		background-color: var(--lightblack);
		width: 45%;
		border: 3px solid var(--white);
		margin: 6rem 0 0 27%;
	}
	p {
		text-align: center;
		margin: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--sky);
	}
	.homelink {
		display: block;
		margin: 3rem 0 0 48%;
	}
	a:hover {
		color: var(--white);
	}
	.title {
		font-size: 1.75rem;
		font-weight: 800;
		margin: 2rem 0 2rem 0;
		text-align: center;
	}
	.sveltekit {
		margin: 0 0 0 48%;
	}
</style>
