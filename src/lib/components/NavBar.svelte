<script>
	import { Hamburger } from 'svelte-hamburgers';
	import SVGLogo from '$lib/components/SVGLogo.svelte';

	let open;
</script>

<nav>
	<!-- hamburger icon -->
	<div class="header-logos">
		<Hamburger --color="white" type="spin" bind:open />

		<div class="gabe-logo">
			<a class="home" href="/about/hero"><SVGLogo /></a>
		</div>
	</div>

	<!-- desktop view -->
	{#if open}
		<div class="desktop-view">
			<a class="nav-link" href="/projects" aria-label="projects">Projects</a>
			<a class="nav-link" href="/blog" aria-label="blog">Blog</a>
			<a class="nav-link" href="/about" aria-label="about">About</a>
			<a class="nav-link" href="/photos/carousel" aria-label="photos">Photos</a>
			<a class="nav-link" href="/contact" aria-label="contact">Contact</a>
		</div>
	{/if}
</nav>

<style>
	/* bigger than desktop */
	/* content */
	.desktop-view {
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

	/* mobile and bigger */
	@media (min-width: 200px) {
		/* content */
		.desktop-view {
			/* display: none; */
			/* display: block; */
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1rem;
			margin-top: 10rem;
		}

		.header-logos {
			display: block;
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
		}

		.nav-link {
			font-weight: 800;
		}
	}

	/* tablet and bigger */
	@media (min-width: 740px) {
		/* content */
		.desktop-view {
			display: flex;
			margin-top: 0;
			gap: 2.5rem;
			flex-direction: row;
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
		}

		.gabe-logo {
			display: none;
		}
	}

	/* desktop and bigger */
	@media (min-width: 990px) {
		/* content */
		.nav-link {
			font-family: var(--montserrat);
			font-size: 1.5rem;
			text-decoration: none;
			font-weight: 600;
			color: var(--white);
			margin-left: 8rem;
			margin-right: -7rem;
		}

		.nav-link:hover {
			color: var(--dark-gray);
			border-bottom: 5px solid var(--dark-gray);
			height: 3rem;
			text-shadow: 2px 2px 1px var(--lightblack);
			transition: border-bottom 0.35s ease-in-out, text-shadow 0.35s ease-in-out;
		}

		.desktop-view {
			display: block;
			width: 100%;
			margin-left: -9%;
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
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 3rem;
		}

		.gabe-logo {
			display: block;
		}
	}

	/* desktop and bigger 2 */
	@media (min-width: 1300px) {
		/* content */
		.desktop-view {
			margin-left: 10%;
		}
	}

	@media (min-width: 1440px) {
		/* content */
		.desktop-view {
			margin-left: 25%;
		}
	}
</style>
