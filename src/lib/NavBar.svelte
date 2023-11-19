<script>
	import { Hamburger } from 'svelte-hamburgers';
	import GabeLogo from '$lib/GabeLogo.svelte';

	let open;
</script>

<nav>
	<div class="header-logos">
		<Hamburger type="spin" bind:open />

		<!-- <h1 class="h1">GABE|atwell</h1> -->

		<div class="gabe-logo">
			<a class="home" href="/"><GabeLogo /></a>
		</div>
	</div>

	{#if open}
		<div class="desktop-view">
			<a class="link" href="/about">about</a>
			<a class="link" href="/photos">photos</a>
			<a class="link" href="/projects">projects</a>
			<a class="link" href="/blog">stack</a>
			<a class="link" href="/contact">contact</a>
		</div>
	{/if}

	<div class="mobile-view">
		<div class="mobile-links">
			<a class="mobile-link" href="/">HOME</a>
			<a class="mobile-link" href="/about">ABOUT</a>
			<a class="mobile-link" href="/photos">PHOTOS</a>
			<a class="mobile-link" href="/projects">PROJECTS</a>
			<a class="mobile-link" href="/contact">CONTACT</a>
		</div>
	</div>
</nav>

<style>
	.link {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 1rem;
		text-decoration: none;
		font-weight: 900;
		color: var(--sky);
		margin-left: 8rem;
		margin-right: -7rem;
	}
	.link:hover {
		color: var(--blue);
	}
	.desktop-view {
		display: block;
		font-weight: bolder;
	}
	.mobile-view {
		display: none;
	}
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5em;
		width: 100%;
	}
	.header-logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2rem;
	}
	.gabe-logo {
		margin: 0 0 0 12%;
	}
	@media (min-width: 200px) {
		.desktop-view {
			display: none;
		}
		.mobile-view {
			display: block;
			justify-content: space-evenly;
			width: 100%;
			margin: 0 0 0 -75%;
			font-weight: bold;
		}
		.mobile-links {
			display: flex;
			justify-content: space-evenly;
		}
		.mobile-link {
			font-size: 0.5rem;
		}
		.header-logos {
			display: none;
		}
		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 4em;
			width: 100%;
		}
	}
	@media (min-width: 740px) {
		.desktop-view {
			display: none;
		}
		.mobile-view {
			display: block;
			width: 100%;
			font-size: 1rem;
			font-weight: bolder;
		}
		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: 100%;
		}
		.header-logos {
			display: none;
		}
	}
	@media (min-width: 990px) {
		.link {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 1rem;
			text-decoration: none;
			font-weight: 900;
			color: lightskyblue;
			margin-left: 8rem;
			margin-right: -7rem;
		}
		.link:hover {
			color: blue;
			font-size: 1.1rem;
		}
		.desktop-view {
			display: block;
			width: 100%;
			margin-left: 16%;
			font-size: 1rem;
			font-weight: bolder;
		}
		.mobile-view {
			display: none;
		}
		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: 100%;
		}
		.header-logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 2rem;
		}
	}
</style>
