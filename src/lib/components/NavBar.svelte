<script>
	import { Hamburger } from 'svelte-hamburgers';
	import MainLogo from '$lib/components/MainLogo.svelte';

	let open;
</script>

<nav>
	<!-- hamburger icon -->
	<div class="header-logos">
		<div class="hamburger">
			<Hamburger
				--color="var(--white)"
				type="spin"
				bind:open
				ariaLabel="menu"
				--active-color="var(--smoke)"
			/>
		</div>

		<div class="gabe-logo">
			<a class="home" href="/about/hero"><MainLogo /></a>
		</div>
	</div>

	<div class="links">
		<a class="nav-link" href="/projects" aria-label="projects">Projects</a>
		<a class="nav-link" href="/blog" aria-label="blog">Blog</a>
		<a class="nav-link" href="/about" aria-label="about">About</a>
		<a class="nav-link" href="/photos/carousel" aria-label="photos">Photos</a>
		<a class="nav-link" href="/contact" aria-label="contact">Contact</a>
	</div>

	<!-- desktop view -->
	{#if open}
		<div class="links">
			<a class="nav-link" href="/projects" aria-label="projects">Projects</a>
			<a class="nav-link" href="/blog" aria-label="blog">Blog</a>
			<a class="nav-link" href="/about" aria-label="about">About</a>
			<a class="nav-link" href="/photos/carousel" aria-label="photos">Photos</a>
			<a class="nav-link" href="/contact" aria-label="contact">Contact</a>
		</div>
	{/if}
</nav>

<style>
	.links {
		display: block;
		font-weight: bolder;
	}

	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5em;
		width: 100%;
		position: relative;
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
		.links {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1.5rem;
			margin-top: 12rem;
			z-index: 10;
			border: 1px solid var(--white);
			border-radius: 5px;
			padding: 0.5rem 1rem;
			background-color: var(--blackest);
		}

		.header-logos {
			display: block;
			margin-left: 5%;
		}

		.gabe-logo {
			display: none;
		}

		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 4em;
			width: 100%;
			position: fixed;
			top: 0;
			right: 7px;
			z-index: 10;
			backdrop-filter: blur(0.075rem);
		}

		.nav-link {
			font-weight: 800;
		}
	}

	@media (min-width: 700px) {
		.links {
			display: flex;
			margin-top: 0;
			gap: 1.5rem;
			flex-direction: row;
			border: none;
			background-color: transparent;
		}

		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: 100%;
		}

		.header-logos {
			display: block;
			margin-left: 2%;
		}

		.gabe-logo {
			display: block;
		}

		.hamburger {
			display: none;
		}

		.nav-link {
			font-family: var(--montserrat);
			font-size: 1.1rem;
			text-decoration: none;
			font-weight: 600;
			color: var(--white);
		}

		.nav-link:hover {
			color: var(--sky);
			border-bottom: 5px solid var(--sky);
			height: 3rem;
			text-shadow: 2px 2px 1px var(--black);
			transition: border-bottom 0.35s ease-in-out, text-shadow 0.35s ease-in-out;
		}
	}

	@media (min-width: 990px) {
		.nav-link {
			font-size: 1.5rem;
			margin-left: 8rem;
			margin-right: -7rem;
		}

		.links {
			display: block;
			width: 100%;
			margin-left: -8%;
			font-size: 1rem;
			font-weight: bolder;
		}

		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: 100%;
			margin-top: 1rem;
		}

		.header-logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 3rem;
		}

		.gabe-logo {
			display: block;
		}
	}

	@media (min-width: 1100px) {
		.links {
			margin-left: -3%;
		}
	}

	@media (min-width: 1300px) {
		.links {
			margin-left: -3%;
		}
	}

	@media (min-width: 1400px) {
		.links {
			margin-left: 6%;
		}
	}

	@media (min-width: 1600px) {
		.links {
			margin-left: 12.5%;
		}

		.gabe-logo {
			margin-left: 150%;
		}
	}
</style>
