<script>
	import { Hamburger } from 'svelte-hamburgers';
	import MainLogo from '$lib/components/MainLogo.svelte';

	let open;
</script>

<nav>
	<!-- hamburger icon -->
	<div class="header-logos">
		<Hamburger --color="white" type="spin" bind:open />

		<div class="gabe-logo">
			<a class="home" href="/about/hero"><MainLogo /></a>
		</div>
	</div>

	<!-- desktop view -->
	{#if open}
		<div class="desktop-view">
			<a class="nav-link underline" href="/projects" aria-label="projects">Projects</a>
			<a class="nav-link underline" href="/blog" aria-label="blog">Blog</a>
			<a class="nav-link underline" href="/about" aria-label="about">About</a>
			<a class="nav-link underline" href="/photos/carousel" aria-label="photos">Photos</a>
			<a class="nav-link underline" href="/contact" aria-label="contact">Contact</a>
		</div>
	{/if}

	<!-- mobile view -->
	<div class="mobile-view">
		<div class="mobile-links">
			<a class="mobile-link" href="/about/hero" aria-label="home">HOME</a>
			<a class="mobile-link" href="/projects" aria-label="projects">PROJECTS</a>
			<a class="mobile-link" href="/about" aria-label="about">ABOUT</a>
			<a class="mobile-link" href="/photos" aria-label="photos">PHOTOS</a>
			<a class="mobile-link" href="/contact" aria-label="contact">CONTACT</a>
		</div>
	</div>
</nav>

<style>
	/* bigger than desktop */
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
			font-family: var(--montserrat);
			color: var(--white);
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

	/* tablet and bigger */
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

	/* desktop and bigger */
	@media (min-width: 990px) {
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
			margin: 3rem;
		}
	}

	/* desktop and bigger 2 */
	@media (min-width: 1300px) {
		.desktop-view {
			margin-left: 10%;
		}
	}

	@media (min-width: 1440px) {
		.desktop-view {
			margin-left: 25%;
		}
	}
</style>
