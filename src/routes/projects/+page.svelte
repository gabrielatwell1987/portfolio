<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 1.9 } });

		tl.to('section', { autoAlpha: 1 })
			.to('.linksize', { autoAlpha: 1, stagger: 0.8 })
			.to('.title', { rotation: 360, duration: 3 }, '<');
	});
</script>

<h1 class="title">PROJECTS</h1>

<section class="content">
	<a class="linksize" href="https://gabe1.vercel.app" target="_blank">Web Dev</a><br />
	<a class="linksize" href="https://gabe2.vercel.app" target="_blank">Scroller</a><br />
	<a class="linksize" href="https://gabe3.vercel.app" target="_blank">Random User</a><br />
	<a class="linksize" href="https://gabe4.vercel.app" target="_blank">Starbucks</a><br />
	<a class="linksize" href="https://formapp-three.vercel.app" target="_blank">Form</a><br />
	<a class="linksize" href="https://kindler.vercel.app" target="_blank">CRUD</a><br />
	<a class="linksize" href="https://github-vert.vercel.app" target="_blank">Github</a><br />
	<a class="linksize" href="https://appity.vercel.app" target="_blank">Code Snippet</a><br />
	<a class="linksize" href="https://pokedex.vercel.app" target="_blank">Pokedex</a><br />
	<a class="linksize" href="https://svelteflix-delta.vercel.app" target="_blank">Svelteflix</a><br
	/>
	<a class="linksize" href="https://blog-until-you-die.vercel.app" target="_blank">Blog</a>

	<div class="logos">
		<img class="newspaper" src="newspaper.jpg" width="350" alt="A newspaper that you can move" />
	</div>
</section>

<style>
	a {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 1rem;
		text-decoration: none;
		font-weight: 700;
		color: var(--black);
	}
	a:hover {
		color: var(--blue);
	}
	.title {
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
		font-size: 4rem;
		color: var(--white);
		margin: 2rem 0;
	}
	.linksize {
		text-align: center;
		background-color: var(--darkgrey);
		border: 3px solid var(--white);
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
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 0.75rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}
		a:hover {
			color: var(--blue);
		}
		.title {
			text-align: center;
			font-family: 'Courier New', Courier, monospace;
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
		}
		section {
			border: 3px solid var(--white);
			border-radius: 10px;
			background-color: var(--black);
			width: 100%;
			padding: 1rem;
			margin: 0;
		}
		.logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			width: 75%;
			height: 100%;
		}
	}
	@media screen and (min-width: 740px) {
		a {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 1rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}
		a:hover {
			color: var(--blue);
		}
		.title {
			text-align: center;
			font-family: 'Courier New', Courier, monospace;
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
		section {
			border: 3px solid var(--white);
			border-radius: 10px;
			background-color: var(--black);
			width: 100%;
			padding: 2rem;
			margin: 0;
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
