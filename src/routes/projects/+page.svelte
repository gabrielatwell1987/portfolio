<script>
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.content', { scale: 0 });
		gsap.set('.linksize', { opacity: 0 });

		let tl = gsap.timeline({ defaults: { duration: 1.9 } });
		tl.to('.content', { scale: 1 })
			// .to('.links', { opacity: 1 })
			.to('.linksize', { opacity: 1, stagger: 0.8 })
			.to('.title', { rotation: 360, duration: 1.5 }, '<');
	});
</script>

<div class="content">
	<h1 class="title">PROJECTS I MADE</h1>

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
	<a class="linksize" href="https://blog-until-you-die.vercel.app" target="_blank"
		>Blog Until You Die</a
	>
</div>

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
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 2.5rem;
		color: var(--white);
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
	@media (min-width: 200px) {
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
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			font-size: 1.25rem;
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
		}
		.content {
			border: 3px solid var(--white);
			border-radius: 8px;
			background-color: var(--black);
			width: 75%;
			padding: 1rem;
			margin: 1rem 0 0 15%;
		}
	}
	@media (min-width: 740px) {
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
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			font-size: 2.5rem;
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
		}
		.content {
			border: 3px solid var(--white);
			border-radius: 8px;
			background-color: var(--black);
			width: 35%;
			padding: 2rem;
			margin: 2rem 0 0 32%;
		}
	}
</style>
