<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.greensock', { scale: 0, opacity: 0 });
		gsap.set('.gs-main', { y: 1000 });

		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.to('.greensock', { scale: 1, opacity: 1, ease: 'back.out' }).to('.gs-main', { y: 0 }, '-=3');
	});
</script>

<div class="greensock">
	<GsapIcon />
</div>

<main class="gs-main">
	<h1 class="title">Greensock Animation Platform</h1>
	<h2 class="subtitle">GSAP</h2>
	<p>
		I really enjoy Greensock Animation Platform. I really like animating the websites that I've
		built! GSAP makes it so easy to accomplish! The syntax is really simple to learn which makes the
		learning curve nearly flat. Other than that, it doesn't take up a lot of space to encorporate
		these techniques, which makes your web pages 100,000 times faster.
	</p>
	<p>
		All of the designs that are animated on this website are all from GSAP and my head. I tend to
		think that these animations make the website look a lot better than a static website
	</p>
	<p>GSAP is a great tool to use for any web developer. I highly recommend it!</p>
	<p>
		If you would like to know more about greensock, please click <a href="https://greensock.com"
			>here</a
		>.
	</p>
</main>

<a href="/blog" class="homelink">Back</a>

<style>
	main {
		background-color: var(--lightblack);
		width: 45%;
		border: 3px solid var(--white);
		margin: 0 0 0 27%;
	}
	p {
		text-align: center;
		margin-bottom: 0 0 2rem 0;
		padding: 0.5em 2em;
		padding-top: 2.5em;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: var(--sky);
	}
	a:hover {
		color: var(--white);
	}
	.homelink {
		display: block;
		margin: 3rem 0 0 48%;
	}
	.title {
		font-size: 1.75rem;
		font-weight: 800;
		margin: 2rem 0 2rem 0;
		text-align: center;
	}
	.subtitle {
		font-size: 1rem;
		font-weight: 600;
		margin: 0 0 2rem 0;
		text-align: center;
	}
	.greensock {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5rem 0 3rem 0;
	}
</style>
