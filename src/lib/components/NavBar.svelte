<script>
	import { Hamburger } from 'svelte-hamburgers';
	import MainLogo from '$lib/components/MainLogo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let open;
</script>

<nav>
	<!-- hamburger icon -->
	<div class="header-logos">
		<div class="hamburgerMenu">
			<Hamburger
				--color="var(--white)"
				type="spin"
				bind:open
				ariaLabel="menu"
				--active-color="var(--white)"
			/>
		</div>

		<div class="gabe-logo">
			<a class="home" href="/"><MainLogo /></a>
		</div>
	</div>

	<div class="toggle">
		<ThemeToggle />
	</div>

	<!-- desktop view -->
	<div class="desktop">
		<a class="nav-link" href="/about">About</a>
		<a class="nav-link" href="/projects">Projects</a>
		<a class="nav-link" href="/blog">Blog</a>
		<a class="nav-link" href="/photos">Photos</a>
		<a class="nav-link" href="/contact">Contact</a>
	</div>

	<!-- mobile view -->
	{#if open}
		<div class="mobile">
			<a class="nav-link" href="/">Home</a>
			<a class="nav-link" href="/about">About</a>
			<a class="nav-link" href="/projects">Projects</a>
			<a class="nav-link" href="/blog">Blog</a>
			<a class="nav-link" href="/photos">Photos</a>
			<a class="nav-link" href="/contact">Contact</a>
		</div>
	{/if}
</nav>

<style>
	:root {
		--100: 100%;
	}

	.desktop {
		display: block;
		font-family: var(--orbitron);
	}

	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5em;
		width: var(--100);
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

	.home {
		user-select: none;
		background: transparent;
	}

	@media (min-width: 300px) {
		.mobile {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1.25rem;
			margin-top: 15.5rem;
			z-index: 10;
			border: 1px solid var(--white);
			border-radius: 5px;
			padding: 0.5rem 1rem;
			background-color: var(--blackest);
			font-family: var(--orbitron);
			font-weight: 800;
		}

		.mobile a:is(:hover) {
			color: var(--white);
		}

		.desktop {
			display: none;
		}

		.header-logos {
			display: block;
			margin-left: 25%;
		}

		.gabe-logo {
			display: none;
		}

		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 4em;
			width: var(--100);
			position: fixed;
			top: 0;
			right: 7px;
			z-index: 10;
			backdrop-filter: blur(0.075rem);
		}

		.nav-link {
			font-size: clamp(1.1rem, 2vw, 1.5rem);
			letter-spacing: 2px;
		}

		.nav-link:hover {
			font-size: clamp(1.1rem, 2vw, 1.5rem);
		}

		.toggle {
			position: absolute;
			top: -2%;
			left: 3%;
			margin-left: 10%;
		}
	}

	@media (min-width: 750px) {
		.desktop {
			width: var(--100);
			display: flex;
			align-items: center;
			margin-top: 0;
			gap: 1rem;
			flex-direction: row;
			border: none;
			background-color: transparent;
			margin-left: 30%;
			scale: 1.3;
			text-wrap: nowrap;
		}

		a {
			transition: transform 0.25s ease-in-out;
			font-weight: 400;
		}

		a:hover {
			transform: scale(1.1);
			font-weight: 600;
		}

		.mobile {
			display: none;
		}

		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 5em;
			width: var(--100);
			scale: 0.75;
		}

		.header-logos {
			display: block;
			margin-left: 2%;
		}

		.gabe-logo {
			display: block;
			margin-left: -7rem;
		}

		.hamburgerMenu {
			display: none;
		}

		.nav-link {
			text-decoration: none;
			font-weight: 600;
			color: var(--white);
		}

		.nav-link:hover {
			color: var(--sky);
			border-bottom: 5px solid var(--sky);
			height: 3rem;
			text-shadow: 2px 2px 1px var(--blacker);
			transition: all 0.35s ease-in-out;
		}

		.toggle {
			top: 15%;
			left: 12%;
		}
	}

	@media (min-width: 800px) {
		.toggle {
			top: 15%;
			left: 12%;
		}

		nav {
			scale: 0.75;
		}
	}

	@media (min-width: 900px) {
		.desktop {
			margin-left: 30%;
		}
	}

	@media (min-width: 990px) {
		.nav-link {
			margin-left: 5rem;
			margin-right: -5.25rem;
		}

		.desktop {
			display: block;
			width: var(--100);
			margin-left: 15%;
		}

		nav {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			height: 5em;
			width: var(--100);
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
			margin-left: 5%;
		}

		.toggle {
			top: 10%;
			left: 18%;
		}
	}

	@media (min-width: 1024px) {
		.nav-link {
			margin-left: 5rem;
			margin-right: -5rem;
		}

		.desktop {
			margin-left: 20%;
			width: var(--100);
			line-height: 2;
			scale: 1.3;
			text-wrap: nowrap;
		}

		.toggle {
			left: 22%;
			z-index: 10;
		}

		nav {
			margin-right: 7.5%;
		}
	}

	@media (min-width: 1100px) {
		.desktop {
			margin-left: 25%;
			line-height: 1.5;
		}

		.gabe-logo {
			display: block;
			margin-left: 75%;
		}

		.toggle {
			left: 26%;
		}
	}

	@media (min-width: 1200px) {
		.toggle {
			left: 24%;
		}
	}

	@media (min-width: 1300px) {
		.desktop {
			margin-left: 30%;
		}

		.gabe-logo {
			display: block;
			margin-left: 75%;
		}

		.toggle {
			top: 10%;
			left: 26%;
		}
	}

	@media (min-width: 1400px) {
		.desktop {
			margin-left: 20%;
		}

		.gabe-logo {
			display: block;
			margin-left: 175%;
		}

		.toggle {
			left: 21%;
		}

		nav {
			scale: 0.9;
			margin-right: 0;
		}
	}

	@media (min-width: 1500px) {
		.desktop {
			margin-left: 25%;
		}

		.gabe-logo {
			margin-left: 150%;
		}

		.toggle {
			left: 22%;
			top: 15%;
		}

		.nav-link {
			margin-left: 5.75rem;
			margin-right: -5rem;
			font-weight: 800;
		}
	}

	@media (min-width: 1600px) {
		.desktop {
			margin: 0.85% 0 0 29%;
		}

		.gabe-logo {
			margin-left: 150%;
		}

		.toggle {
			left: 20.5%;
			top: 15%;
		}

		.nav-link {
			margin-left: 5.75rem;
			margin-right: -5rem;
		}
	}
</style>
