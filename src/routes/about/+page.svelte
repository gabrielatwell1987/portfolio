<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		const atwell = document.querySelector('.atwell');

		gsap.set('article', { autoAlpha: 0 });

		gsap.to('article', {
			autoAlpha: 1,
			duration: 3.5,
			ease: 'none'
		});

		Draggable.create(atwell, {
			type: 'x, y',
			bounds: document.querySelector('article'),
			inertia: true
		});
	});
</script>

<main>
	<section>
		<article>
			<img class="atwell" src="atwell-a.jpeg" alt="Atwell logo that you can move" />

			<h2>Bio</h2>

			<p>
				Gabe is a self-taught web developer. He started out with the basics: HTML, CSS, and
				JavaScript. He then moved on to more advanced topics such as: Svelte/Sveltekit, Node.js, and
				GSAP. He has begun to teach himself the backend of web development on his spare time, but is
				a complete frontend developer.
			</p>

			<h2>Frontend</h2>

			<p>
				The path that Gabe has chosen is the frontend path, one of his main interests with the
				frontend path is animations, especially animations on the web. Turning a website from being
				a static site to a dynamic site is what he thinks makes your website look a million times
				better, if you do it right.
			</p>

			<h2>Design Based</h2>

			<p>
				A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace, colors,
				typography, scaling, and spacing is what he knows best. He learned that these topics are the
				main key for a UI developer.
			</p>

			<h2>Github</h2>

			<p>
				<a class="github-link" href="https://www.github.com/gabrielatwell1987/portfolio">Here</a> is
				a link to the GitHub repo for this site, just in case you want to see the code for this site
				or if you see something that needs to be fixed, you can make a pull request. Please contact me
				if you have any issues or thoughts on how I could improve this site. It is greatly appreciated!
			</p>

			<a class="btn-link" href="/about/gallery"><button>Gallery</button></a>
		</article>
	</section>
</main>

<style>
	@media screen and (min-width: 200px) {
		p {
			line-height: 1.75;
			font-family: var(--montserrat);
		}
		main {
			width: 100%;
			margin: 0 auto;
		}
		section {
			display: block;
			margin: 0 auto;
			/* padding: 1rem; */
			text-align: center;
			width: 100%;
		}
		article {
			font-size: 0.8rem;
			width: 100%;
			margin: 0 auto;
			border: 1px solid var(--white);
			border-radius: 10px;
			background-color: transparent;
		}
		h2 {
			font-size: 1.5rem;
			mix-blend-mode: difference;
			color: var(--sky);
			font-family: var(--nova);
		}
		a {
			font-size: 0.9rem;
		}
		a:hover {
			font-size: 1.2rem;
		}
		.btn-link {
			font-size: 1.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
			font-family: var(--montserrat);
		}
		.btn-link:hover {
			font-size: 1.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
		}
		.atwell {
			margin: 3.5% 0;
			border-radius: 40%;
		}
		.github-link {
			font-size: 1.24rem;
			font-weight: 700;
		}
		.github-link:hover {
			font-size: 1.25rem;
			text-decoration: none;
		}
	}
	@media screen and (min-width: 990px) {
		p {
			line-height: 2.5;
		}
		section {
			display: block;
			/* padding: 2rem; */
			width: 100%;
			margin: 5rem auto;
		}
		article {
			font-size: 1rem;
			width: 100%;
			margin: 0 auto;
			border: 1px solid var(--white);
			border-radius: 10px;
			background-color: transparent;
		}
		h2 {
			font-size: 2.5rem;
		}
		a {
			font-size: 0.9rem;
		}
		a:hover {
			font-size: 1.2rem;
		}

		button {
			background-color: var(--sky);
			color: var(--black);
			border: 1px solid var(--black);
			width: 25%;
			margin: 3rem auto;
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.5rem;
			font-weight: 900;
		}
		button:hover {
			opacity: 0.8;
			background-color: var(--lightblack);
			color: var(--sky);
		}
		.btn-link {
			font-size: 2.5rem;
			font-weight: bolder;
			text-decoration: none;
			color: var(--smoke);
		}
	}
</style>
