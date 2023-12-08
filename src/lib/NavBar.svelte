<script>
	import { Hamburger } from 'svelte-hamburgers';
	import GabeLogo from '$lib/GabeLogo.svelte';

	let open;
</script>

<nav>
	<div class="header-logos">
		<Hamburger --color="white" type="spin" bind:open />

		<div class="gabe-logo">
			<a class="home" href="/"><GabeLogo /></a>
		</div>
	</div>

	{#if open}
		<div class="desktop-view">
			<a class="link" href="/projects">projects</a>
			<a class="link" href="/blog">stack</a>
			<a class="link" href="/about">about</a>
			<a class="link" href="/photos">photos</a>
			<a class="link" href="/contact">contact</a>
		</div>
	{/if}

	<div class="mobile-view">
		<div class="mobile-links">
			<a class="mobile-link" href="/">HOME</a>
			<a class="mobile-link" href="/projects">PROJECTS</a>
			<a class="mobile-link" href="/about">ABOUT</a>
			<a class="mobile-link" href="/photos">PHOTOS</a>
			<a class="mobile-link" href="/contact">CONTACT</a>
		</div>
	</div>
</nav>

<style>
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
		margin: 0 0 0 25%;
	}
	@media (min-width: 200px) {
		.desktop-view {
			display: none;
		}
		.mobile-view {
			display: block;
			justify-content: space-evenly;
			width: 100%;
			margin: 0 auto;
			font-weight: bold;
		}
		.mobile-links {
			display: flex;
			justify-content: space-evenly;
		}
		.mobile-link {
			font-size: 0.75rem;
			font-family: var(--righteous);
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
			font-family: var(--righteous);
			font-size: 1.2rem;
			text-decoration: none;
			font-weight: 900;
			color: var(--sky);
			margin-left: 8rem;
			margin-right: -7rem;
		}
		.link:hover {
			color: var(--blue);
			font-weight: 900;
			font-size: 1.5rem;
		}
		.desktop-view {
			display: block;
			width: 100%;
			margin-left: 35%;
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
