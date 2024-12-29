<script>
	import Burger from '$lib/components/Burger.svelte';
	import MainLogo from '$lib/components/MainLogo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import InstallBtn from '$lib/components/InstallBtn.svelte';

	let open = false;

	let isClosing = false;
</script>

<nav>
	<div class="header-logos">
		<Burger bind:open ariaLabel="Toggle menu" />

		<MainLogo />
	</div>

	<div class="toggle">
		<ThemeToggle />
	</div>

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

<InstallBtn />

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
		backdrop-filter: blur(0.75rem);
		-webkit-backdrop-filter: blur(0.25rem);
		z-index: 15;
	}

	.header-logos {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2rem;
		cursor: pointer;
	}

	@media (min-width: 300px) {
		.mobile {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1.25rem;
			margin-top: 17rem;
			z-index: 10;
			box-shadow: 0 0 8px 4px var(--white);
			border-radius: 5px;
			padding: 0.5rem 1rem;
			background-color: var(--blackest);
			font-family: var(--orbitron);
			font-weight: 900;

			max-height: 0;
			overflow: hidden;
			transition:
				max-height 1s ease-in-out,
				opacity 1.22s ease-in-out;
			opacity: 0;

			&.open {
				max-height: 500px;
				opacity: 1;
			}

			&.closing {
				max-height: 0;
				opacity: 0;
			}
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
			padding-top: 2rem;
			padding-left: 1rem;
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
			scale: 0.85;
			text-wrap: nowrap;
		}

		.mobile {
			display: none;
		}

		nav {
			height: 5em;
			width: var(--100);
			scale: 0.76;
		}

		.header-logos {
			display: block;
			margin-left: 15%;
			margin-bottom: 15%;
		}
	}

	@media (min-width: 990px) {
		.desktop {
			display: block;
			width: var(--100);
			margin-inline: auto;
		}

		nav {
			height: 5em;
			width: var(--100);
			margin-top: 1rem;
			scale: 1;
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

		nav {
			scale: 0.8;
		}
	}

	@media (min-width: 1400px) {
		nav {
			margin-right: 5rem;
			scale: 1;
		}

		.toggle {
			margin-left: 15%;
		}
	}

	@media (min-width: 1600px) {
		.desktop {
			margin-left: 15em;
			scale: 1.2;
		}
	}
</style>
