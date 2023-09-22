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
	.sveltekit {
		margin-left: 48%;
	}
	p {
		text-align: center;
		margin-bottom: 2rem;
		padding: 0.5em 2em;
		padding-top: 2.5em;
	}
	main {
		background-color: rgb(49, 49, 49);
		width: 45%;
		border: 3px solid white;
		margin-left: 27%;
		margin-top: 6rem;
	}
	.homelink {
		display: block;
		margin-left: 48%;
		margin-top: 3rem;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: lightskyblue;
	}
	a:hover {
		color: white;
	}
</style>
