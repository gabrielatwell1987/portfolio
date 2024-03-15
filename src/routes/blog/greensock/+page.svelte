<script>
	import GsapIcon from '$lib/components/GsapIcon.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	// animations
	onMount(() => {
		const title = document.querySelector('.title');

		gsap.set(title, { skewX: 15, autoAlpha: 0, y: -200, scale: 0 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, scale: 1, duration: 2, ease: 'back.out(4)' }, 0);

		title.addEventListener('mouseover', () => {
			gsap.to(title, { skewX: -15, duration: 0.25, ease: 'none' });
		});

		title.addEventListener('mouseleave', () => {
			gsap.to(title, { skewX: 15, duration: 0.25, ease: 'none' });
		});
	});
</script>

<!-- title -->
<br /><br /><br /><br /><br /><br /><br />
<h1 class="title">GSAP</h1>

<main>
	<!-- content -->
	<h2 class="subtitle">Greensock Animation Platform</h2>

	<details aria-label="accordian">
		<!-- svelte-ignore a11y-no-redundant-roles -->
		<summary role="button" class="outline contrast">What is GSAP?</summary>
		<p class="detail">
			Greensock Animation Platform (GSAP) is a JavaScript library that allows you to animate your
			website. I really like animating the websites that I've built from scratch and GSAP makes it
			so easy to accomplish! The syntax is really simple which makes no learning curve at all. Other
			than that, it doesn't take up a lot of space to encorporate these techniques, which makes your
			web pages 100,000 times faster.
		</p>

		<p class="detail">
			Usually, websites use a mixture of GSAP and three js. GSAP makes animating in three js simple,
			so you can actually edit 3D stuff. What's great is that three js is built for the web, so it
			makes animating with GSAP really simple!
		</p>
	</details>

	<details aria-label="accordian">
		<!-- svelte-ignore a11y-no-redundant-roles -->
		<summary role="button" class="outline contrast">Install GSAP</summary>
		<p class="detail">
			In the project, you have to npm install gsap (if you have Node.js installed) or you can use
			the CDN (content delivery network). In sveltekit, you have to put all of your GSAP code in an
			onMount function that you have to import. This is because onMount is displayed once on initial
			load. If you were to use a regular script tag, it would not work. All of the designs that are
			animated on this website are all from GSAP. I tend to think that these animations make the
			website look a lot better than a static website. GSAP is a great tool to use for any web
			developer. I highly recommend it!
		</p>

		<p class="detail">
			You can install GSAP on any javascript framework you want to use! It works on Vue, React,
			Svelte, and Angular. GSAP uses integer values to edit the DOM, for the most part.. It's also
			good for vanilla JavaScript.
		</p>
	</details>

	<h3 class="learn">Learn more about GSAP</h3>
	<p class="center">
		If you would like to know more about greensock, please click <a
			href="https://greensock.com"
			aria-label="greensock">here</a
		>.
	</p>

	<!-- video -->
	<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/M4GCT-2kaoo?si=yj8-27t052nokvkT"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</main>
<!-- footer spacing -->
<br />

<style>
	/* content */
	main {
		width: 75%;
		border-radius: 10px;
		margin: 0 auto;
	}

	details {
		width: 50%;
		margin-left: 24.5%;
		margin-bottom: 2rem;
	}

	p {
		text-align: left;
		margin-bottom: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
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
		text-decoration: underline;
	}

	/* video */
	iframe {
		margin: 2rem 0 0 30%;
		border-radius: 5px;
	}

	/* content */
	.title {
		font-size: 7rem;
		font-weight: 800;
		margin: 2rem 0 -5rem 0;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--blue);
	}

	.subtitle {
		font-size: 2rem;
		font-weight: 600;
		margin: -2rem 0 2rem 0;
		text-align: center;
		color: var(--white);
		font-family: var(--montserrat);
	}

	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
		font-family: var(--anta);
		color: var(--purple);
	}

	.center {
		text-align: center;
	}

	@media (min-width: 200px) {
		iframe {
			display: none;
		}

		.title {
			font-size: 2.5rem;
		}

		details {
			min-width: 5rem;
		}

		.detail {
			min-width: 15rem;
			margin-left: -50%;
		}
	}

	@media (min-width: 500px) {
		.detail {
			margin-left: 0;
		}
	}

	@media (min-width: 720px) {
		iframe {
			display: block;
			margin: 0 auto;
		}

		.title {
			font-size: 4rem;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-size: 6rem;
		}
	}
</style>
