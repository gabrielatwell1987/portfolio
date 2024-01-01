<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	// lenis
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	// animations
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

<svelte:head>
	<!-- font awesome cdn -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
	/>
</svelte:head>

<main>
	<!-- content -->
	<section>
		<article>
			<img class="atwell" src="atwell-a.jpeg" alt="Atwell logo that you can move" />

			<h2>Bio</h2>

			<p>
				Gabe is a self-taught web developer. I started out with the basics: HTML, CSS, and
				JavaScript. I then moved on to more advanced topics such as: Svelte/Sveltekit, Node.js, and
				GSAP. I have begun to teach myself the backend of web development on my spare time, but I am
				a complete frontend developer.
			</p>
			<p>
				I have a passion for creating websites that are clean, crisp, and completely functional. I
				enjoy seeing a physical change when I edit or create code. I also enjoy creating animations
				for the web! I mainly enjoy animating the web because I believe that it makes the website
				look more professional and more appealing to the eye. In the world of web development,
				creating engaging and visually appealing animations is essential to grab the attention of
				users.
			</p>

			<!-- set up side by side text -->
			<section class="grid">
				<div class="inline right">
					<h2 class="right">Frontend</h2>

					<p>
						The path that Gabe has chosen is the frontend path, one of his main interests with the
						frontend path is animations, especially animations on the web. Turning a website from
						being a static site to a dynamic site is what he thinks makes your website look a
						million times better, if you do it right.
					</p>
				</div>

				<div class="inline left">
					<h2 class="left">Design Based</h2>

					<p>
						A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace,
						colors, typography, scaling, and spacing is what he knows best. He learned that these
						topics are the main key for a UI developer.
					</p>
				</div>
			</section>

			<!-- github and codepen links -->
			<div class="dev-links">
				<p>
					<a class="github-link" href="https://www.github.com/gabrielatwell1987/portfolio"
						><i class="fa-brands fa-github" /></a
					>
				</p>

				<p>
					<a href="https://codepen.io/gabrielatwell"><i class="fa-brands fa-codepen" /></a>
				</p>
			</div>

			<!-- image gallery -->
			<a class="btn-link" href="/about/gallery"><button>Gallery</button></a>
		</article>
	</section>
</main>

<h1>TESTING</h1>

<style>
	@media screen and (min-width: 200px) {
		p {
			line-height: 1.75;
			font-family: var(--montserrat);
			text-align: left;
		}
		main {
			width: 100%;
			margin: 0 auto;
		}
		section {
			display: block;
			margin: 0 auto;
			text-align: center;
			width: 100%;
		}
		article {
			font-size: 0.8rem;
			width: 100%;
			margin: 0 auto;
			border: 0.5px solid var(--white);
			border-radius: 10px;
			background-color: transparent;
		}
		h2 {
			font-size: 1.5rem;
			mix-blend-mode: difference;
			color: var(--sky);
			font-family: var(--righteous);
		}
		a {
			font-size: 0.9rem;
		}
		a:hover {
			font-size: 1.2rem;
		}
		button {
			background-color: transparent;
			color: var(--smoke);
			border: 1px solid var(--smoke);
			width: 30%;
			margin: 3rem auto;
			border-radius: 8px;
			cursor: pointer;
			font-size: 0.8rem;
			font-weight: 900;
			letter-spacing: 1px;
			width: 40%;
			font-family: var(--righteous);
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
		}
		button:hover {
			opacity: 0.8;
			background-color: var(--smoke);
			color: black;
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
		.atwell:hover {
			outline: 2px solid var(--white);
		}
		.github-link {
			font-size: 1.24rem;
			font-weight: 700;
		}
		.github-link:hover {
			font-size: 1.25rem;
			text-decoration: none;
		}
		.fa-codepen,
		.fa-github {
			font-size: 3rem;
			color: var(--blue);
		}
		.fa-codepen:hover,
		.fa-github:hover {
			color: var(--sky);
		}
		.dev-links {
			margin-top: 2.5rem;
			margin-left: 43%;
		}
	}
	@media screen and (min-width: 990px) {
		p {
			line-height: 2.5;
		}
		section {
			display: block;
			width: 100%;
			margin: 5rem auto;
		}
		article {
			font-size: 1rem;
			width: 100%;
			margin: 0 auto;
			background-color: transparent;
		}
		h2 {
			font-size: 3rem;
			letter-spacing: 5px;
		}
		a {
			font-size: 0.9rem;
		}
		a:hover {
			font-size: 1.2rem;
		}

		button {
			font-family: var(--righteous);
			font-size: 1.5rem;
			letter-spacing: 2px;
			width: 20%;
		}
		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}
		.btn-link {
			font-size: 2.5rem;
		}
		.grid {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			margin: 7% 0 -20% 0;
			gap: 8rem;
		}
		.inline {
			display: inline-block;
			margin: 0 auto;
		}
		.right {
			text-align: right;
		}
		.left {
			text-align: left;
		}
		.fa-codepen,
		.fa-github {
			font-size: 5rem;
			color: var(--blue);
		}
		.dev-links {
			margin-top: -20rem;
			margin-left: 0%;
			display: flex;
			justify-content: space-evenly;
		}
		@keyframes wiggle {
			0% {
				rotate: 0deg;
				translate: 0 0;
			}
			25% {
				rotate: -2deg;
				translate: -5px 0;
			}
			80% {
				rotate: 2deg;
				translate: 5px 0;
			}
		}
	}
</style>
