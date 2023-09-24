<script>
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import Misfits from '$lib/Misfits.svelte';

	onMount(() => {
		let tl = gsap.timeline({ defaults: { duration: 2 } });
		tl.fromTo('.laptop', { scale: 0 }, { scale: 1 })
			.fromTo('.links', { x: 500 }, { x: 0 }, '<')
			.fromTo('.texts', { x: -500 }, { x: 0 }, '<');
	});
</script>

<div class="content">
	<h1 class="title">Websites that I've built</h1>

	<img class="laptopLogo" src="logo4.png" alt="computer" />

	<div class="links">
		<a class="linksize" href="https://gabe1.vercel.app" target="_blank">Web Dev Website</a><br />
		<a class="linksize" href="https://gabe2.vercel.app" target="_blank">Horizontal Scroller</a><br
		/>
		<a class="linksize" href="https://gabe3.vercel.app" target="_blank">Random User</a><br />
		<a class="linksize" href="https://gabe4.vercel.app" target="_blank">Starbucks Clone</a><br />
		<a class="linksize" href="https://formapp-three.vercel.app" target="_blank">Form Application</a
		><br />
		<a class="linksize" href="https://kindler.vercel.app" target="_blank">CRUD-type Application</a
		><br />
		<a class="linksize" href="https://github-vert.vercel.app" target="_blank">Github API</a><br />
		<a class="linksize" href="https://appity.vercel.app" target="_blank">Code Snippet</a><br />
		<a class="linksize" href="https://pokedex.vercel.app" target="_blank">Pokedex</a><br />
		<a class="linksize" href="https://svelteflix-delta.vercel.app" target="_blank">Netflix Clone</a
		><br />
		<a class="linksize" href="https://blog-until-you-die.vercel.app" target="_blank"
			>Blog Until You Die</a
		>
	</div>
</div>

<style>
	a {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 1.5rem;
		text-decoration: none;
		font-weight: 700;
		color: black;
	}
	a:hover {
		color: blue;
	}
	.title {
		text-align: center;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 2.5rem;
		color: lightskyblue;
	}
	.links {
		text-align: center;
		background-color: darkgrey;
		border: 3px solid white;
		border-radius: 8px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 25%;
		margin-left: 37%;
	}
	.laptopLogo {
		margin-left: 32%;
	}
	@media (max-width: 1250px) {
		.laptopLogo {
			display: none;
		}
		.linksize {
			font-size: 1rem;
		}
		.title {
			font-size: 1.5rem;
			text-align: center;
			margin-left: 3rem;
		}
		.links {
			width: 50%;
			margin-left: 27%;
			background-color: transparent;
			border: none;
		}
		.linksize {
			color: white;
		}
		/* .title {
            margin-left: 3rem;
        } */
	}
</style>
