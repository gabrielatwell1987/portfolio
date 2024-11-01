<script>
	import { Hamburger } from 'svelte-hamburgers';
	import MainLogo from '$lib/components/MainLogo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';

	let open = $state(false);
	let isClosing = false;
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

		<MainLogo />
	</div>

	<div class="toggle">
		<ThemeToggle />
	</div>

	<!-- desktop view -->
	<div class="desktop">
		<NavLink href="/about" title="About" />
		<NavLink href="/projects" title="Projects" />
		<NavLink href="/blog" title="Blog" />
		<NavLink href="/photos" title="Photos" />
		<NavLink href="/contact" title="Contact" />
	</div>

	<div class="mobile {open ? 'open' : ''} {isClosing ? 'closing' : ''}">
		<NavLink href="/" title="Home" />
		<NavLink href="/about" title="About" />
		<NavLink href="/projects" title="Projects" />
		<NavLink href="/blog" title="Blog" />
		<NavLink href="/photos" title="Photos" />
		<NavLink href="/contact" title="Contact" />
	</div>
</nav>

<style>
	:root {
		--100: 100%;
	}

	.desktop {
		display: block;
		font-family: var(--orbitron);
		margin-left: clamp(100px, 30%, 200px);
	}

	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 5em;
		width: var(--100);
		position: relative;
		margin-inline: auto;
		backdrop-filter: blur(0.25rem);
		-webkit-backdrop-filter: blur(0.25rem);
	}

	.header-logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2rem;
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

			max-height: 0;
			overflow: hidden;
			transition: max-height 1s ease-in-out, opacity 1.22s ease-in-out;
			opacity: 0;
		}

		.mobile.open {
			max-height: 500px;
			opacity: 1;
		}

		.mobile.closing {
			max-height: 0;
			opacity: 0;
		}

		.desktop {
			display: none;
		}

		.header-logos {
			display: block;
			margin-left: 25%;
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
		}

		.toggle {
			margin-top: 1rem;
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
			margin-left: 10%;
			scale: 1.1;
			text-wrap: nowrap;
		}

		.mobile {
			display: none;
		}

		nav {
			height: 5em;
			width: var(--100);
		}

		.header-logos {
			display: block;
			margin-left: 15%;
		}

		.hamburgerMenu {
			display: none;
		}
	}

	@media (min-width: 990px) {
		.desktop {
			display: block;
			width: var(--100);
		}

		nav {
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
	}

	@media (min-width: 1024px) {
		.desktop {
			width: var(--100);
			line-height: 2;
			scale: 1;
			text-wrap: nowrap;
		}

		.toggle {
			z-index: 10;
		}

		nav {
			margin-right: 2rem;
		}
	}

	@media (min-width: 1100px) {
		.desktop {
			line-height: 1.5;
			margin-left: 0;
		}

		.toggle {
			margin-left: 10%;
		}
	}

	@media (min-width: 1400px) {
		nav {
			margin-right: 0;
		}
	}

	@media (min-width: 1600px) {
		.desktop {
			margin-left: 15em;
			scale: 1.2;
		}
	}
</style>
