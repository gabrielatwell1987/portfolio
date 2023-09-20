<script>
	import Gsap from '$lib/gsap.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 2 } });

		tl.fromTo('.gsap', { opacity: 0, x: -500 }, { opacity: 1, rotate: -360, x: 0, duration: 1.5 });
	});
</script>

<main>
	<h1>Greensock Animation Platform</h1>
	<p class="paragraph1">
		I am really big into animations, and especially animating the websites I have created. Greensock
		(GSAP) makes it really simple. So I tried adding GSAP to my sveltekit website and it didn't
		work!
	</p>
	<p class="paragraph2">
		So after looking into it I found out what to do: I have to add my GSAP code in an 'onMount'
		import into my sveltekit project. Not to get into it, but the onMount tells sveltekit that what
		is inside the onMount code block runs once when the page is loaded clientside, which is perfect
		for my animations. I know I haven't explained this very well, so if you want to learn more,
		click <a href="https://greensock.com/docs/">here</a>
	</p>

	<div class="gsap">
		<Gsap />
	</div>

	<a class="blog" href="/blog">Back</a>
</main>

<style>
	main {
		text-align: center;
	}
	h1 {
		font-size: 2.5rem;
		color: lightskyblue;
		margin-bottom: 4rem;
	}
	.paragraph1 {
		font-size: 1.25rem;
		/* margin-bottom: 2rem; */
		width: 50%;
		margin-left: 25%;
		margin-bottom: 1.5rem;
	}
	.paragraph2 {
		font-size: 1.25rem;
		/* margin-bottom: 2rem; */
		width: 50%;
		margin-left: 25%;
	}
	a {
		text-decoration: none;
		color: rgb(76, 76, 248);
	}
	a:hover {
		color: white;
	}
	.blog {
		font-size: 1rem;
		display: block;
		margin-top: 2rem;
	}
</style>
