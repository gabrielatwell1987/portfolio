<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// animations
	onMount(() => {
		gsap.registerPlugin(Draggable);

		const atwell = document.querySelector('.atwell');
		const bio = document.querySelector('.bio');

		gsap.set('article', { autoAlpha: 0 });

		gsap.to('article', {
			autoAlpha: 1,
			duration: 1,
			ease: 'none'
		});

		Draggable.create(atwell, {
			type: 'x, y',
			edgeResistance: 0.65,
			bounds: document.querySelector('article'),
			throwProps: true
		});

		// // bio text animations
		// bio.addEventListener('mouseenter', () => {
		// 	gsap.to('.text', { scaleX: 1.025, duration: 0.5 });
		// });

		// bio.addEventListener('mouseleave', () => {
		// 	gsap.to('.text', { scaleX: 1, duration: 0.5 });
		// });
	});
</script>

<main transition:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<!-- content -->
	<section>
		<article>
			<!-- <img
				class="atwell"
				src="logos/atwell-a.jpeg"
				alt="An logo that says Atwell that you can move."
			/> -->

			<img
				class="atwell"
				src="logos/atweezy.png"
				alt="An logo that says Gabriel Atwell that you can move."
				width="500"
			/>

			<div class="bio">
				<h2 class="main-title">Bio</h2>

				<p class="text">
					My name is Gabriel Atwell and I am a frontend web developer. I started out with the
					basics: HTML, CSS, and JavaScript. I then moved on to more advanced topics such as:
					Svelte/Sveltekit, Node.js, GSAP, and a little bit of three.js but I have begun to teach
					myself the backend of web development on my spare time with backend languages like Python
					to become more of a fullstack developer.
				</p>
				<p class="text">
					I have a passion for creating websites that are clean, crisp, and completely functional. I
					enjoy seeing a physical change when I edit or create code. I also enjoy creating
					animations for the web! I mainly enjoy animating the web because I believe that it makes
					the website look more professional and more appealing to the eye. In the world of web
					development, creating engaging and visually appealing animations is essential to grab the
					attention of users.
				</p>

				<article class="text-w hero">
					<p class="text margin-b">
						Here is a hero section image that I created with three.js... I currently like the hero
						section that shows when you first come to the website, but I linked this new hero
						section as the home page.
					</p>

					<a href="/about/hero" class="btn-link"
						><button aria-label="hero" class="hero-btn">Hero</button></a
					>
				</article>
			</div>

			<!-- set up side by side text -->
			<section class="grid">
				<div class="inline right">
					<h2 class="right title">Frontend</h2>

					<p class="right">
						The path that Gabe has chosen is the frontend path. One of his main interests is
						animations, especially animations on the web. Turning a website from being a static site
						to a dynamic site is what he thinks makes your website look a million times better, if
						you do it right.
					</p>
				</div>

				<div class="inline left">
					<h2 class="left title">Design Based</h2>

					<p class="left">
						A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace,
						colors, typography, scaling, and contrast is what he knows best. These topics are the
						main key to make your website designs look professional and appealing to the eye.
					</p>
				</div>
			</section>

			<!-- github and codepen links -->
			<div class="dev-links">
				<a class="size" href="https://www.github.com/gabrielatwell1987/portfolio" target="_blank"
					><i class="fa-brands fa-github" /></a
				>

				<a class="size" href="https://codepen.io/gabrielatwell" target="_blank"
					><i class="fa-brands fa-codepen" /></a
				>

				<a
					class="size"
					href="https://www.linkedin.com/in/gabriel-atwell-ab2116231/"
					target="_blank"
				>
					<i class="fa-brands fa-linkedin" />
				</a>

				<a class="size" href="https://discordapp.com/users/1007777351809114112" target="_blank">
					<i class="fa-brands fa-discord" />
				</a>

				<a class="size" href="https://www.reddit.com/user/gatwell702" target="_blank">
					<i class="fa-brands fa-square-reddit" />
				</a>
			</div>

			<!-- skills section -->
			<section class="border">
				<h3 class="skills-title">Skills</h3>
				<ul class="skills">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>Sveltekit</li>
					<li>Greensock</li>
					<li>Node.js</li>
					<li>Git/GitHub</li>
					<li>SCSS</li>
					<li>Tailwind CSS</li>
				</ul>
			</section>

			<!-- image gallery -->
			<a class="btn-link" href="/about/gallery"><button aria-label="gallery">Gallery</button></a>
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
			background: url('/logos/white-flower.png') no-repeat center center/contain fixed;
		}

		article {
			font-size: 0.8rem;
			width: 100%;
			margin: 0 auto;
			background-color: transparent;
		}

		h2 {
			font-size: 2.5rem;
			mix-blend-mode: difference;
			color: var(--purple);
			font-family: var(--montserrat);
		}

		a {
			font-size: 1rem;
		}

		a:hover {
			font-size: 1.1rem;
		}

		button {
			background-color: transparent;
			color: var(--white);
			border: 1px solid var(--white);
			margin: 3rem auto;
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.2rem;
			letter-spacing: 1px;
			width: 50%;
			font-family: var(--montserrat);
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			mix-blend-mode: difference;
			padding: 1rem 1.75rem;
		}

		button:hover,
		button:focus {
			opacity: 0.8;
			background-color: var(--smoke);
			color: black;
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.size {
			font-size: 2rem;
			font-weight: 900;
			color: var(--blue);
		}

		.size:hover {
			font-size: 2rem;
			font-weight: 900;
			color: var(--purple);
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
			transition: clip-path 0.25s ease-in-out;
		}

		.atwell:hover {
			filter: contrast(1.5);
			transition: filter 0.25s ease-in-out;
		}

		/* codepen */
		.fa-codepen,
		.fa-github {
			font-size: 2rem;
			color: var(--blue);
		}

		.fa-codepen:hover,
		.fa-github:hover {
			font-size: 2rem;
			color: var(--purple);
		}

		/* random */
		.dev-links {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 1.5rem;
			margin-top: 1rem;
		}

		.text,
		.text:hover {
			mix-blend-mode: difference;
		}

		/* hero button */
		.hero-btn {
			width: 50%;
		}

		.hero-btn:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		/* skills section */
		.border {
			width: 15%;
			margin: 10% auto;
			display: none;
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

	/* bigger than mobile */
	@media screen and (min-width: 500px) {
		.hero-btn {
			width: 30%;
		}

		.hero-btn:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		button {
			width: 30%;
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

	/* bigger than tablet */
	@media screen and (min-width: 720px) {
		button {
			width: 25%;
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
			font-size: 1.2rem;
			font-weight: 700;
		}

		a:hover {
			font-size: 1.3rem;
		}

		button {
			font-size: 1.5rem;
			letter-spacing: 5px;
			width: 25%;
		}

		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}

		.size {
			font-size: 4.24rem;
		}

		.size:hover {
			font-size: 4.24rem;
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
			color: var(--purple);
			font-size: 7rem;
			font-weight: 900;
			font-family: var(--anta);
			text-shadow: 5px 5px 4px var(--dark-gray);
		}

		.title {
			color: var(--purple);
			font-family: var(--anta);
		}

		.text {
			color: var(--white);
		}

		/* codepen */
		.fa-codepen,
		.fa-github {
			font-size: 5rem;
			color: var(--blue);
		}

		.fa-codepen:hover,
		.fa-github:hover {
			font-size: 5rem;
			color: var(--purple);
		}

		/* random */
		.dev-links {
			margin-top: -20rem;
			margin-left: 0%;
			display: flex;
			justify-content: space-evenly;
		}

		.margin-b {
			margin-bottom: -2rem;
		}

		.text-w {
			width: 75%;
			margin: 0 auto;
		}

		/* Hero Button */
		.hero-btn {
			width: 30%;
		}

		/* skills section */
		.border {
			display: block;
			width: 15rem;
		}

		.skills {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.skills li {
			list-style: none;
			margin: 0 auto;
			padding: 0.5rem 0.75rem;
			width: 100%;
			font-size: 1rem;
			font-weight: 900;
			font-family: var(--montserrat);
			letter-spacing: 1px;
			background-color: var(--lightblack);
			color: var(--white);
			border: 2px solid var(--smoke);
			border-radius: 12px;
			text-align: center;
		}

		.skills-title {
			color: var(--blue);
			font-size: 2.2rem;
			font-weight: 900;
			text-align: center;
			font-family: var(--anta);
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

	/* way bigger than desktop */
	@media screen and (min-width: 1500px) {
		button {
			width: 20%;
		}

		.hero-btn {
			width: 25%;
		}
	}

	@media screen and (min-width: 1920px) {
		button {
			width: 13%;
		}

		.hero-btn {
			width: 15%;
		}
	}
</style>
