<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.newspaper', {
			type: 'x, y',
			bounds: document.querySelector('.content'),
			inertia: true
		});

		gsap.set('.linksize', { autoAlpha: 0, scale: 0 });
		gsap.set('.content', { autoAlpha: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('.content', { autoAlpha: 1 })
			.to('.linksize', { autoAlpha: 1, stagger: 0.8, scale: 1, duration: 2, ease: 'expo.out' }, 0)
			.from('.title', { scale: 0, duration: 3 }, 0);
	});
</script>

<h1 class="title">PROJECTS</h1>

<section class="content">
	<h3 class="linksize">Web Dev</h3>
	<a class="linksize" href="https://gabe1.vercel.app" target="_blank"
		><img src="/projects/web_dev.png" alt="web dev" width="200px" height="275px" /></a
	><br />

	<h3 class="linksize">Scroller</h3>
	<a class="linksize" href="https://gabe2.vercel.app" target="_blank"
		><img src="/projects/scroller.png" alt="scroller" width="450px" height="280px" /></a
	><br />

	<h3 class="linksize">Random User</h3>
	<a class="linksize" href="https://gabe3.vercel.app" target="_blank"
		><img src="/projects/ran_user.png" alt="random user" width="200px" height="400px" /></a
	><br />

	<h3 class="linksize">Starbucks</h3>
	<a class="linksize" href="https://gabe4.vercel.app" target="_blank"
		><img src="/projects/starbucks.png" alt="starbucks" width="500px" height="400px" /></a
	><br />

	<h3 class="linksize">Form</h3>
	<a class="linksize" href="https://formapp-three.vercel.app" target="_blank"
		><img src="/projects/form.png" alt="form" width="375px" height="225px" /></a
	><br />

	<h3 class="linksize">CRUD</h3>
	<a class="linksize" href="https://kindler.vercel.app" target="_blank"
		><img src="/projects/crud.png" alt="crud" width="200px" height="400px" /></a
	><br />

	<h3 class="linksize">Github</h3>
	<a class="linksize" href="https://github-vert.vercel.app" target="_blank"
		><img src="/projects/github.png" alt="github" width="400px" height="250px" /></a
	><br />

	<h3 class="linksize">Code Snippet</h3>
	<a class="linksize" href="https://appity.vercel.app" target="_blank"
		><img src="/projects/snippet.png" alt="code snippet" width="350px" height="600px" /></a
	><br />

	<h3 class="linksize">Pokedex</h3>
	<a class="linksize" href="https://pokedex.vercel.app" target="_blank"
		><img src="/projects/pokedex.png" alt="pokedex" width="400px" height="185px" /></a
	><br />

	<h3 class="linksize">Svelteflix</h3>
	<a class="linksize" href="https://svelteflix-delta.vercel.app" target="_blank"
		><img src="/projects/svelteflix.png" alt="svelteflix" width="475px" height="300px" /></a
	><br />

	<h3 class="linksize">Blog Until You Die</h3>
	<a class="linksize" href="https://blog-until-you-die.vercel.app" target="_blank"
		><img src="/projects/blog.png" alt="blog" width="500px" height="350px" /></a
	><br />

	<hr />

	<div class="logos">
		<img class="newspaper" src="designs.png" alt="Atwell logo that you can move" />
	</div>
</section>

<style>
	a {
		font-size: 1rem;
		text-decoration: none;
		font-weight: 700;
	}
	.title {
		text-align: center;
		font-size: 4rem;
		color: var(--white);
		margin: 2rem 0;
	}
	.linksize {
		text-align: center;
		border: 0.5px solid var(--white);
		border-radius: 8px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 25%;
		margin: 0 0 0 37%;
	}
	.logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
	.newspaper {
		border-radius: 10%;
		margin: 3rem 0;
	}
	@media screen and (min-width: 200px) {
		a {
			font-family: var(--montserrat);
			font-size: 0.75rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}
		a:hover {
			color: var(--blue);
		}

		.content {
			border-radius: 10px;
			width: 100%;
			padding: 1rem;
			margin: 0;
		}
		img {
			border-radius: 8px;
			opacity: 0.75;
		}
		hr {
			border: 0.5px solid var(--white);
			width: 50%;
			margin: 5rem auto;
		}
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			width: 75%;
			height: 100%;
		}
		.title {
			text-align: center;
			font-family: var(--nova);
			font-size: 3.75rem;
			color: var(--white);
		}
		.linksize {
			text-align: center;
			background-color: transparent;
			color: var(--sky);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 1.5rem;
			width: 75%;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 740px) {
		a {
			font-size: 1rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}
		a:hover {
			color: var(--blue);
		}
		.content {
			border-radius: 10px;
			width: 100%;
			padding: 2rem;
			margin: 0;
		}
		.title {
			text-align: center;
			font-size: 4rem;
			color: var(--white);
			margin: 2rem 0;
		}
		.linksize {
			text-align: center;
			background-color: transparent;
			color: var(--sky);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 2rem;
			letter-spacing: 4px;
		}
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			width: 100%;
			height: 100%;
		}
	}
</style>
