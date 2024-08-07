<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import Image from '$lib/components/Image.svelte';
	import Popover from '$lib/components/Popover.svelte';

	// animations
	onMount(() => {
		const title = document.querySelector('.title');
		const section = document.querySelector('.main');

		gsap.set(title, { skewX: 15, autoAlpha: 0, y: -200 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to(title, { autoAlpha: 1, duration: 2, ease: 'back.out(4)' }, 0);

		title.addEventListener('mouseover', () => {
			gsap.to(title, { skewX: -15, duration: 0.25, ease: 'none' });
		});

		title.addEventListener('mouseleave', () => {
			gsap.to(title, { skewX: 15, duration: 0.25, ease: 'none' });
		});

		console.log(section);
	});
</script>

<svelte:head>
	<title>Greensock Animation Platform</title>
	<meta name="description" content="Greensock" />
	<meta name="keywords" content="GSAP" />
</svelte:head>

<!-- spacing -->
<br /><br /><br /><br /><br /><br /><br />

<section class="main">
	<!-- title -->
	<h1 class="title">GSAP</h1>

	<main>
		<!-- content -->
		<article class="glass">
			<Image src="/logos/skull-glass.png" alt="a skull inside a glass" />
		</article>

		<!-- popover -->
		<article class="popover">
			<Popover text="the syntax is simple" />
		</article>

		<details>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<summary role="button" class="outline contrast spacing"><b>What is GSAP?</b></summary>
			<p class="detail">
				Greensock Animation Platform (GSAP) is a javascript library that allows you to animate your
				website. I really like animating the websites that I've built from scratch and GSAP makes it
				so easy to accomplish! The syntax is really simple which makes no learning curve at all.
				Other than that, it doesn't take up a lot of space to encorporate these techniques, which
				makes your web pages 100,000 times faster.
			</p>

			<p class="detail">
				Usually, websites use a mixture of GSAP and three js. GSAP makes animating in three js
				simple, so you can actually edit 3D stuff. What's great is that three js is essentially an
				easier webGL, so it makes animating with GSAP really simple!
			</p>
		</details>

		<details>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<summary role="button" class="outline contrast spacing"
				><b>How do you install GSAP?</b></summary
			>
			<p class="detail">
				In the project, you have to <code class="code">npm install gsap</code> (if you have Node.js
				installed) or you can use the CDN (content delivery network). In sveltekit, you have to put
				all of your GSAP code in an <code class="code">onMount</code> function that you have to import.
				This is because onMount is displayed once on initial load. If you were to use a regular script
				tag, it would not work. All of the designs that are animated on this website are all from GSAP.
				I tend to think that these animations make the website look a lot better than a static website.
				GSAP is a great tool to use for any web developer. I highly recommend it!
			</p>

			<p class="detail">
				You can install GSAP on any javascript framework you want to use! It works on Vue, React,
				Svelte, and Angular. GSAP uses integer values to edit the DOM, for the most part.. It's also
				good for vanilla JavaScript.
			</p>
		</details>

		<details>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<summary role="button" class="outline contrast spacing"><b>The syntax</b></summary>
			<p class="detail">
				It is quite simple to use GSAP. You can use <code class="code"
					>gsap.to("element", &lbrace; variables &rbrace;)</code
				>
				to animate TO a state. You can use
				<code class="code">gsap.from("element", &lbrace; variables &rbrace;)</code>
				to animate FROM a state. You can use
				<code class="code"
					>gsap.fromTo("element", &lbrace; variables &rbrace;, &lbrace; variables &rbrace;)</code
				> to animate FROM a state TO another state.
			</p>

			<p class="detail">
				The complete syntax is as follows: <code class="code"
					>gsap.to("element", &lbrace; variables &rbrace;)</code
				>. You can use the following variables: duration, delay, ease, stagger, and onComplete. The
				duration is how long the animation will last. The delay is how long the animation will wait
				before starting. The ease is the easing function that you want to use. The stagger is how
				long the animation will wait before starting. The onComplete is the function that will run
				after the animation is complete.
			</p>
		</details>

		<h3 class="learn">Learn more about GSAP</h3>
		<p class="center">
			If you would like to know more about <a
				class="link"
				href="https://greensock.com"
				aria-label="greensock">greensock</a
			>, click the link!
		</p>

		<!-- video -->
		<Iframe
			src="https://www.youtube.com/embed/M4GCT-2kaoo?si=yj8-27t052nokvkT"
			title="YouTube video player"
		/>

		<!-- back button -->
		<div class="back">
			<a href="/blog"><Button title="Back" /></a>
		</div>
	</main>
</section>
<!-- footer spacing -->
<br />

<style>
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

	.link {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--yellow);
		mix-blend-mode: hard-light;
	}

	.link:hover {
		text-decoration: underline;
	}

	.title {
		font-size: clamp(3.75rem, 8vw, 10rem);
		font-weight: 800;
		margin: 3rem 0 -5rem 0;
		text-align: center;
		color: var(--smoke);
		font-family: var(--anta);
		text-shadow: 0px 0px 25px var(--blue);
	}

	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
		font-family: var(--anta);
		color: var(--sky);
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}

	.detail {
		font-size: clamp(1.25rem, 2vw, 1.5rem);
	}

	.popover {
		background: transparent;
		margin-bottom: -15%;
	}

	@media (min-width: 300px) {
		.main {
			margin: 0 auto;
			margin-right: 1rem;
		}

		.title {
			margin-bottom: -55%;
		}

		details {
			min-width: 5rem;
			width: 10rem;
			margin: 0 auto;
		}

		summary {
			margin-left: -1rem;
			color: var(--yellow);
		}

		.detail {
			min-width: 20rem;
			margin: 0 -4.75rem;
			font-family: var(--lexend);
			line-height: 1.5;
			color: var(--white);
		}

		.center {
			text-align: center;
			font-size: clamp(1rem, 2vw, 1.35rem);
			margin-top: -2rem;
			line-height: 1.5;
		}

		code {
			font-family: var(--mono);
		}

		.back {
			margin-top: 5%;
			width: 100%;
		}

		a {
			text-decoration: none;
		}

		.glass {
			background: transparent;
		}

		.popover {
			display: none;
		}
	}

	@media (min-width: 500px) {
		.detail {
			margin-left: -2.5rem;
		}

		details {
			width: 15rem;
		}
	}

	@media (min-width: 720px) {
		.center {
			margin-top: -3rem;
		}

		.glass {
			margin-left: 3%;
		}

		.back {
			width: 100%;
		}
	}

	@media (min-width: 990px) {
		.title {
			margin-top: 5%;
			margin-bottom: -8%;
		}

		.spacing {
			letter-spacing: 2px;
		}

		summary {
			font-size: 1.5rem;
		}

		details {
			width: 100%;
		}

		.glass {
			margin-left: 30%;
		}

		.back {
			width: 100%;
			margin-inline: auto;
		}
	}

	@media (min-width: 1024px) {
		summary {
			font-size: 1.75rem;
		}

		.glass {
			margin-left: 18%;
		}

		.center {
			margin-bottom: 5%;
		}

		.popover {
			display: block;
			margin-bottom: -25%;
		}
	}

	@media (min-width: 1400px) {
		.glass {
			margin-left: 30%;
		}

		.popover {
			margin-bottom: -20%;
		}
	}
</style>
