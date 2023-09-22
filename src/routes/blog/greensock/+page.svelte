<script>
	import GsapIcon from '$lib/GsapIcon.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 3 } });

		tl.fromTo('.greensock', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: 'back.out' });
	});
</script>

<div class="greensock">
	<GsapIcon />
</div>

<main>
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
	.greensock {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5rem;
		margin-bottom: 3rem;
	}
	p {
		text-align: center;
		margin-bottom: 2rem;
		padding: 0.5em 2em;
		padding-top: 2.5em;
	}
	main {
		background-color: rgb(49, 49, 49);
		width: 45%;
		border: 3px solid white;
		margin-left: 27%;
	}
	.homelink {
		display: block;
		margin-left: 48%;
		margin-top: 3rem;
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		color: lightskyblue;
	}
	a:hover {
		color: white;
	}
</style>
