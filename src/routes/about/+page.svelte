<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	// animations
	onMount(() => {
		gsap.registerPlugin(Draggable);

		const atwell = document.querySelector('.atwell');
		const bio = document.querySelector('.bio');

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

		// bio text animations
		bio.addEventListener('mouseenter', () => {
			gsap.to('.text', { color: '#7d7c84', scaleX: 1.025, duration: 0.5 });
		});

		bio.addEventListener('mouseleave', () => {
			gsap.to('.text', { color: '#eee5e9', scaleX: 1, duration: 0.5 });
		});
	});
</script>

<main>
	<!-- content -->
	<section>
		<article>
			<img class="atwell" src="logos/atwell-a.jpeg" alt="Atwell logo that you can move" />

			<div class="bio">
				<h2 class="main-title">Bio</h2>

				<p class="text">
					My name is Gabriel Atwell and I am a self-taught frontend developer. I started out with
					the basics: HTML, CSS, and JavaScript. I then moved on to more advanced topics such as:
					Svelte/Sveltekit, Node.js, and GSAP but I have begun to teach myself the backend of web
					development on my spare time with backend languages like Python and Go to become more of a
					fullstack developer.
				</p>
				<p class="text">
					I have a passion for creating websites that are clean, crisp, and completely functional. I
					enjoy seeing a physical change when I edit or create code. I also enjoy creating
					animations for the web! I mainly enjoy animating the web because I believe that it makes
					the website look more professional and more appealing to the eye. In the world of web
					development, creating engaging and visually appealing animations is essential to grab the
					attention of users.
				</p>
			</div>

			<!-- set up side by side text -->
			<section class="grid">
				<div class="inline right">
					<h2 class="right title">Frontend</h2>

					<p class="right text">
						The path that Gabe has chosen is the frontend path. One of his main interests is
						animations, especially animations on the web. Turning a website from being a static site
						to a dynamic site is what he thinks makes your website look a million times better, if
						you do it right.
					</p>
				</div>

				<div class="inline left">
					<h2 class="left title">Design Based</h2>

					<p class="left text">
						A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace,
						colors, typography, scaling, and contrast is what he knows best. These topics are the
						main key to make your website designs look professional and appealing to the eye.
					</p>

					<!-- <p class="left text">
						I chose the design for this website because it is sleek and minimalistic. I used the
						fonts Montserrat and Major Mono Display. I also chose the animations that I use on my
						projects and photos pages to help me stand out! On the projects page, I use clip-path on
						hover for the project images. On the photos page, I use scroll trigger and opacity.
					</p> -->
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

<style>
	/* bigger than mobile */
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
			background: url('/logos/bg2.jpg') no-repeat center center/cover fixed;
		}

		article {
			font-size: 0.8rem;
			width: 100%;
			margin: 0 auto;
			border: 5px solid var(--white);
			border-image: linear-gradient(to left, var(--black), var(--lightblack)) 1;
			background-color: transparent;
		}

		h2 {
			font-size: 1.5rem;
			mix-blend-mode: difference;
			color: var(--sky);
			font-family: var(--montserrat);
		}

		a {
			font-size: 1rem;
		}

		a:hover {
			font-size: 1.2rem;
		}

		button {
			background-color: transparent;
			color: var(--smoke);
			border: 1px solid var(--smoke);
			margin: 3rem auto;
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.2rem;
			font-weight: 900;
			letter-spacing: 1px;
			width: 50%;
			font-family: var(--montserrat);
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
		}

		button:hover,
		button:focus {
			opacity: 0.8;
			background-color: var(--smoke);
			color: black;
			outline-offset: 0px;
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
			border-radius: 3rem;
			clip-path: ellipse(40% 47% at 50% 50%);
			transition: clip-path 0.75s ease-in-out;
		}

		.atwell:hover {
			filter: contrast(1.5);
			transition: filter 0.5s ease-in-out;
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

		.text,
		.text:hover {
			mix-blend-mode: difference;
		}
	}
	/* bigger than desktop */
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
			font-size: 1.5rem;
			font-weight: 800;
			letter-spacing: 5px;
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
			border: 3px solid var(--white);
			border-radius: 15px;
			padding: 1rem 2rem;
			background-color: var(--black);
		}

		.right {
			text-align: right;
		}

		.left {
			text-align: left;
		}

		.main-title {
			color: var(--sky);
		}

		.title {
			/* color: var(--black); */
			color: var(--sky);
		}

		.text {
			color: var(--white);
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
