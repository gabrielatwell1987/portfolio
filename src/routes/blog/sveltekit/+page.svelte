<script>
	import Svelte from '$lib/Svelte.svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 2 } });
		tl.fromTo('.sk', { opacity: 0, scale: 3 }, { opacity: 1, rotate: -360, scale: 1 });
	});
</script>

<main>
	<h1>The only framework I've ever used</h1>

	<p>
		You may be wondering "How did he create this portfolio site?". The answer is really easy. I used
		sveltekit. It is the only framework I've ever used. I'm pretty good with the fundamentals of
		HTML, CSS, and JS. Well sveltekit is a framework that is heavily based off of the fundamentals,
		so it is what I prefer to use since it is really easy for me. Now, using sveltekit is even more
		of a dream.. It is basically svelte but throwing some backend into it. There is server side
		rendering (SSR) and everything runs smoothly. Also, everything is very fast. You can look into
		it <a href="https://svelte.dev">here</a>.
	</p>

	<div class="sk">
		<Svelte />
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
	p {
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
	}
	.sk {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}
</style>
