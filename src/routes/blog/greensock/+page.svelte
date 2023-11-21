<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import Exclamation from '$lib/Exclamation.svelte';
	import { gsap } from 'gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.greensock', { autoAlpha: 0 });
		gsap.set('.title', { skewX: 15, opacity: 0, y: -200 });
		gsap.set('.exclamation', { scale: 2, x: 200, y: 30 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to('.greensock', { autoAlpha: 1, duration: 10, ease: 'back.out' }, 0).to(
			'.title',
			{ opacity: 1, duration: 10, ease: 'back.out' },
			0
		);
	});
</script>

<div class="greensock">
	<GsapIcon />
</div>
<br /><br /><br /><br /><br /><br /><br />
<h1 class="title">GSAP</h1>

<main class="gs-main">
	<aside class="exclamation">
		<Exclamation />
	</aside>

	<h2 class="subtitle">Greensock Animation Platform</h2>

	<h3 class="heading">What is GSAP?</h3>
	<p>
		Greensock Animation Platform (GSAP) is a JavaScript library that allows you to animate your
		website. I really like animating the websites that I've built from scratch and GSAP makes it so
		easy to accomplish! The syntax is really simple which makes no learning curve at all. Other than
		that, it doesn't take up a lot of space to encorporate these techniques, which makes your web
		pages 100,000 times faster.
	</p>

	<h3 class="heading">How I used GSAP</h3>

	<p>
		In the project, you have to npm install gsap. In sveltekit, you have to put all of your GSAP
		code in an onMount function that you have to import. This is because onMount is displayed once
		on initial load. If you were to use a regular script tag, it would not work. All of the designs
		that are animated on this website are all from GSAP. I tend to think that these animations make
		the website look a lot better than a static website. GSAP is a great tool to use for any web
		developer. I highly recommend it!
	</p>

	<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/M4GCT-2kaoo?si=yj8-27t052nokvkT"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>

	<h3 class="learn">Learn more about GSAP</h3>
	<p>
		If you would like to know more about greensock, please click <a href="https://greensock.com"
			>here</a
		>.
	</p>
</main>

<style>
	main {
		background-color: var(--lightblack);
		width: 45%;
		border: 3px solid var(--white);
		border-radius: 10px;
		margin: 0 0 0 27%;
	}
	p {
		text-align: center;
		margin-bottom: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
		line-height: 2.5;
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
		margin: 0 0 0 7.5rem;
	}
	.heading {
		text-align: center;
		margin: 5rem 0 0 0;
	}
	.title {
		font-size: 4rem;
		font-weight: 800;
		margin: 2rem 0 -5rem 0;
		text-align: center;
		color: var(--sky);
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.subtitle {
		font-size: 2rem;
		font-weight: 600;
		margin: -2rem 0 2rem 0;
		text-align: center;
		color: var(--cornflower);
		font-family: 'Merriweather', serif;
	}
	.greensock {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5rem 0 3rem 0;
	}
	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
	}
	.exclamation {
		margin: 2rem 0 2rem 48%;
	}
</style>
