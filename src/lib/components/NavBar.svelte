<script>
	import { Hamburger } from 'svelte-hamburgers';
	import SVGLogo from '$lib/components/SVGLogo.svelte';

	let open;
</script>

<nav>
	<!-- hamburger icon -->
	<div class="header__logos">
		<Hamburger --color="white" type="spin" bind:open />

		<div class="gabe__logo">
			<a class="home" href="/about/hero"><SVGLogo /></a>
		</div>
	</div>

	<!-- desktop view -->
	{#if open}
		<div class="desktop__view">
			<a class="nav__link" href="/projects" aria-label="projects">Projects</a>
			<a class="nav__link" href="/blog" aria-label="blog">Blog</a>
			<a class="nav__link" href="/about" aria-label="about">About</a>
			<a class="nav__link" href="/photos/carousel" aria-label="photos">Photos</a>
			<a class="nav__link" href="/contact" aria-label="contact">Contact</a>
		</div>
	{/if}
</nav>

<style>
	/* bigger than desktop */
	/* content */
	.desktop__view {
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

	.header__logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2rem;
	}

	.gabe__logo {
		margin: 0 0 0 25%;
	}

	/* mobile and bigger */
	@media (min-width: 200px) {
		/* content */
		.desktop__view {
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

		.header__logos {
			display: block;
			margin-left: -2%;
		}

		.gabe__logo {
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
		}

		.nav__link {
			font-weight: 800;
		}
	}

	/* tablet and bigger */
	@media (min-width: 700px) {
		/* content */
		.desktop__view {
			display: flex;
			margin-top: 0;
			gap: 2.5rem;
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

		.header__logos {
			display: block;
		}

		.gabe__logo {
			display: none;
		}
	}

	/* desktop and bigger */
	@media (min-width: 990px) {
		/* content */
		.nav__link {
			font-family: var(--montserrat);
			font-size: 1.5rem;
			text-decoration: none;
			font-weight: 600;
			color: var(--white);
			margin-left: 8rem;
			margin-right: -7rem;
		}

		.nav__link:hover {
			color: var(--dark-gray);
			border-bottom: 5px solid var(--dark-gray);
			height: 3rem;
			text-shadow: 2px 2px 1px var(--lightblack);
			transition: border-bottom 0.35s ease-in-out, text-shadow 0.35s ease-in-out;
		}

		.desktop__view {
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
		}

		.header__logos {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 3rem;
		}

		.gabe__logo {
			display: block;
		}
	}

	/* desktop and bigger 2 */
	@media (min-width: 1300px) {
		/* content */
		.desktop__view {
			margin-left: -3%;
		}
	}

	@media (min-width: 1400px) {
		/* content */
		.desktop__view {
			margin-left: 6%;
		}
	}

	@media (min-width: 1600px) {
		/* content */
		.desktop__view {
			margin-left: 15%;
		}
	}
</style>
