<script>
	import Svelte from '$lib/components/Svelte.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	// animations
	onMount(() => {
		const sveltekit = document.querySelector('.sveltekit');
		const title = document.querySelector('.title');
		const sk = document.querySelector('.sk-main');

		gsap.set(sveltekit, { y: -500 });
		gsap.set(sk, { y: 1000 });
		gsap.set(title, { skewX: 15, autoAlpha: 0, y: 35, scale: 0 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(sveltekit, { y: 0, ease: 'back.out' })
			.to(sveltekit, {
				scale: 2,
				x: 490,
				y: 30,
				ease: 'back.out(4)',
				duration: 2
			})
			.to(sk, { y: 0 }, 0)
			.to(title, { autoAlpha: 1, scale: 1, delay: 3, duration: 2.25 }, 0);

		title.addEventListener('mouseover', () => {
			gsap.to(title, { skewX: -15, duration: 0.25, ease: 'none' });
		});

		title.addEventListener('mouseleave', () => {
			gsap.to(title, { skewX: 15, duration: 0.25, ease: 'none' });
		});
	});
</script>

<!-- sveltekit icon logo -->
<div class="sveltekit">
	<Svelte />
</div>

<h1 class="title">SvelteKit</h1>

<main class="sk-main">
	<!-- content -->
	<section>
		<details>
			<summary><h3 class="subtitle">The framework I used</h3></summary>
			<p>
				I used sveltekit to create this portfolio website. I decided to go with sveltekit because of
				the server-side rendering (SSR) and all of the SEO features, as well as the speed of
				everything. The fact that this, to me, is less than an actual framework as it relies heavily
				on vanilla HTML, CSS, and JavaScript is what I'm looking for.
			</p>
		</details>

		<details>
			<summary><h3 class="subtitle">What I know</h3></summary>
			<p>
				I am very knowledgable to the fundamentals of web development. CSS is a real hobby that I
				have because I'm a very visual person. Sveltekit has made it super simple to put my ideas on
				the web.
			</p>
		</details>

		<details>
			<summary><h3 class="subtitle">What is svelte and sveltekit?</h3></summary>
			<p>
				Svelte is a client based compiler that generates optimized javascript. Sveltekit is a
				framework that uses svelte under the hood. Think of how Nuxt is to Vue, or how Next is to
				React. In the end, sveltekit is a new approach to building rich user interfaces.
			</p>
		</details>

		<h3 class="subtitle">Learn more about Sveltekit</h3>
		<p class="center">
			If you would like to know more about svelte and sveltekit, please click <a
				href="https://svelte.dev">here</a
			>.
		</p>

		<!-- video -->
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
	/* desktop and bigger */
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

	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--sky);
	}

	a:hover {
		color: var(--white);
	}
	iframe {
		margin: 2rem 0 0 30%;
	}

	details {
		width: 50%;
		margin-left: 24.5%;
		margin-bottom: 5rem;
	}

	.subtitle {
		text-align: center;
		margin: 2rem 0 -0.5rem 0;
		color: var(--blue);
		font-family: var(--righteous);
	}

	.title {
		font-size: 4rem;
		font-weight: 800;
		margin: 2rem 0 6rem 0;
		text-align: center;
		color: var(--sky);
		font-family: var(--pacifico);
		text-shadow: 0px 0px 25px var(--white);
	}

	.sveltekit {
		margin: 5% 0 5% 48%;
	}

	.center {
		text-align: center;
	}
</style>
