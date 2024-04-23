<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from '$lib/components/Button.svelte';
	import LinkList from '$lib/components/LinkList.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Image from '$lib/components/Image.svelte';

	// animations
	onMount(() => {
		gsap.registerPlugin(Draggable);

		const atwell = document.querySelector('.atwell');

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
	});
</script>

<main in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }} aria-label="bio">
	<section title="a white flower background">
		<article>
			<img
				class="atwell"
				src="logos/atweezy.png"
				alt="An logo that says Gabriel Atwell that you can move."
				width="500"
			/>

			<div class="bio" aria-label="bio">
				<h2 class="main-title">About me</h2>

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

				<article class="text__w hero" aria-label="bio">
					<p class="text margin__b">
						Here is a hero section image that I created with three.js... I currently like the hero
						section that shows when you first come to the website, but I linked this new hero
						section as the home page.
					</p>

					<a href="/about/hero"><Button title="Hero" /></a>
				</article>
			</div>

			<!-- set up side by side text -->
			<Grid />

			<!-- github and codepen links -->
			<LinkList />

			<!-- skills section -->
			<Skills />

			<!-- image gallery -->
			<a href="/about/gallery"><Button title="Gallery" /></a>
		</article>
	</section>
</main>

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

		.text {
			max-width: 90%;
			margin: 0 auto;
		}

		.text,
		.text:hover {
			mix-blend-mode: difference;
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
			font-size: 1.2rem;
			font-weight: 700;
		}

		a:hover {
			font-size: 1.3rem;
		}

		.main-title {
			color: var(--purple);
			font-size: 7rem;
			font-weight: 900;
			font-family: var(--anta);
			text-shadow: 5px 5px 4px var(--dark-gray);
		}

		.text {
			color: var(--white);
			max-width: 75%;
		}

		.bio {
			margin-bottom: -5rem;
		}

		.margin__b {
			margin-bottom: -2rem;
		}

		.text__w {
			width: 75%;
			margin: 0 auto;
		}
	}
</style>
