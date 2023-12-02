<script>
	import Svelte from '$lib/Svelte.svelte';
	import Exclamation from '$lib/Exclamation.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.sveltekit', { y: -500 });
		gsap.set('.sk-main', { y: 1000 });
		gsap.set('.title', { skewX: -15, opacity: 0, y: 35 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to('.sveltekit', { y: 0, ease: 'back.out' })
			.to('.sveltekit', {
				scale: 2,
				x: 490,
				y: 30
			})
			.to('.sk-main', { y: 0 }, 0)
			.to('.title', { opacity: 1 });
	});
</script>

<div class="sveltekit">
	<Svelte />
</div>

<h1 class="title">SvelteKit</h1>

<main class="sk-main">
	<section>
		<h3 class="subtitle">What I used to create this site</h3>
		<p>
			I used sveltekit to create this portfolio website. I decided to go with sveltekit because of
			the server-side rendering (SRR) and all of the SEO features, as well as the speed of
			everything. The fact that this, to me, is less than an actual framework as it relies heavily
			on vanilla HTML, CSS, and JavaScript is what I'm looking for.
		</p>

		<h3 class="subtitle">What I know</h3>
		<p>
			I am very knowledgable to the fundamentals of web development. CSS is a real hobby that I have
			because I'm a very visual person. Sveltekit has made it super simple to put my ideas on the
			web.
		</p>

		<h3 class="subtitle">What is svelte and sveltekit?</h3>
		<p>
			Svelte is a client based compiler that generates optimized javascript. Sveltekit is a
			framework that uses svelte under the hood. Think of how Nuxt is to Vue, or how Next is to
			React. In the end, svelte(kit) is a new approach to building rich user interfaces.
		</p>

		<h3 class="subtitle">Learn more about Sveltekit</h3>
		<p>
			If you would like to know more about svelte and sveltekit, please click <a
				href="https://svelte.dev">here</a
			>.
		</p>

		<iframe
			class="youtube"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/MoGkX4RvZ38?si=xV4--8APNCqD7Ihn"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</section>
</main>

<style>
	main {
		width: 75%;
		margin: 0 auto;
	}
	p {
		text-align: center;
		margin: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
		letter-spacing: 1px;
		font-family: var(--montserrat);
		width: 100%;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--sky);
	}
	a:hover {
		color: var(--white);
	}
	iframe {
		margin: 0 0 0 30%;
	}
	.subtitle {
		text-align: center;
		margin: 2rem 0 -0.5rem 0;
		color: var(--blue);
		font-family: var(--nova);
	}

	.title {
		font-size: 4rem;
		font-weight: 800;
		margin: 2rem 0 4rem 0;
		text-align: center;
		color: var(--sky);
		font-family: var(--nunito);
	}
	.sveltekit {
		margin: 0 0 0 48%;
	}
</style>
