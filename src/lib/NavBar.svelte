<script>
	import { Hamburger } from 'svelte-hamburgers';

	let open;
</script>

<nav>
	<div class="header-logos">
		<Hamburger type="spin" bind:open />

		<h1 class="h1">GABE|atwell</h1>
	</div>

	{#if open}
		<div class="desktop-view">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/photos">Photos</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Stack</a>
			<a href="/contact">Contact</a>
		</div>
	{/if}

	<div class="mobile-view">
		<div class="mobile-links">
			<a class="mobile-link" href="/">Home</a>
			<a class="mobile-link" href="/about">About</a>
			<a class="mobile-link" href="/photos">Photos</a>
			<a class="mobile-link" href="/projects">Projects</a>
			<a class="mobile-link" href="/contact">Contact</a>
		</div>
	</div>
</nav>

<style>
	a {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 1rem;
		text-decoration: none;
		font-weight: 900;
		color: var(--sky);
		margin-left: 8rem;
		margin-right: -7rem;
	}
	a:hover {
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
	.h1 {
		display: grid;
		place-items: center;
		margin: 0 5rem 0 0;
		width: 15%;
		color: var(--sky);
		font-weight: bolder;
		font-family: 'Courier New', Courier, monospace;
	}
	@media (min-width: 200px) {
		.desktop-view {
			display: none;
		}
		.mobile-view {
			display: block;
			justify-content: space-evenly;
			width: 100%;
			margin: 0 0 0 -77%;
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
			/* display: block;
			width: 100%;
			/* margin-left: -100%; 
			font-size: 1rem;
			font-weight: bolder; */
			display: none;
		}
		.mobile-view {
			display: block;
			width: 100%;
			/* margin-left: -100%; */
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
			/* display: flex;
			justify-content: center;
			align-items: center;
			margin: 2rem;
			outline: none; */
			display: none;
		}
		.h1 {
			display: grid;
			place-items: center;
			margin: 0 5rem 0 0;
			width: 15%;
			color: var(--sky);
			font-weight: bolder;
			font-family: 'Courier New', Courier, monospace;
		}
	}
	@media (min-width: 990px) {
		a {
			/* margin: 0 10px; */
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 1rem;
			text-decoration: none;
			font-weight: 900;
			color: lightskyblue;
			margin-left: 8rem;
			margin-right: -7rem;
		}
		a:hover {
			color: blue;
			font-size: 1.1rem;
		}
		.desktop-view {
			/* margin-right: .5rem; */
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
		.h1 {
			display: grid;
			place-items: center;
			margin: 0 5rem 0 0;
			width: 15%;
			color: var(--sky);
			font-weight: bolder;
			font-family: 'Courier New', Courier, monospace;
		}
	}
</style>
