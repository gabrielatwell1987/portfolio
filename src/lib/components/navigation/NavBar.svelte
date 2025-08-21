<script>
	import Burger from '$lib/components/navigation/Burger.svelte';
	import MainLogo from '$lib/components/navigation/MainLogo.svelte';
	import ThemeToggle from '$lib/components/layout/ThemeToggle.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import InstallButton from '$lib/components/navigation/InstallButton.svelte';
	import SelectLink from '$lib/components/navigation/SelectLink.svelte';

	let open = $state(false);
	let isClosing = $state(false);

	function closeMenu() {
		if (open) {
			isClosing = true;
			setTimeout(() => {
				open = false;
				isClosing = false;
			}, 500); // Match this with your transition duration (1s)
		}
	}
</script>

<nav class="navigation">
	<div class="header-logos">
		<Burger bind:open ariaLabel="Toggle menu" />

		<MainLogo />
	</div>

	<ThemeToggle />

	<ul class="desktop" aria-label="Desktop navigation menu">
		<li><NavLink href="/about" title="About" /></li>
		<li><NavLink href="/projects" title="Builds" /></li>
		<li><NavLink href="/learn" title="Learn" /></li>
		<li><NavLink href="/photos" title="Photos" /></li>
		<SelectLink path1="/hire" path2="/contact" />
	</ul>

	<ul
		class="mobile {open ? 'open' : ''} {isClosing ? 'closing' : ''}"
		id="mobile-menu"
		aria-label="Main navigation menu"
	>
		<li><NavLink href="/landing" title="Home" onclick={closeMenu} /></li>
		<li><NavLink href="/about" title="About Gabe" onclick={closeMenu} /></li>
		<li><NavLink href="/projects" title="Things I've Built" onclick={closeMenu} /></li>
		<li><NavLink href="/learn" title="Learn the Web" onclick={closeMenu} /></li>
		<li><NavLink href="/photos" title="Photos of Me" onclick={closeMenu} /></li>
		<li><NavLink href="/hire" title="Hire Me" onclick={closeMenu} /></li>
		<li><NavLink href="/contact" title="Contact Me" onclick={closeMenu} /></li>
	</ul>
</nav>

<InstallButton />

<style>
	:root {
		--100: 100%;
	}

	nav.navigation {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		backdrop-filter: blur(0.15rem);
		-webkit-backdrop-filter: blur(0.15rem);
		z-index: 15;
		view-transition-name: navigation;
		position: fixed;
		top: 1rem;
		left: 1rem;
		right: 1rem;
		width: calc(100% - 2rem);
		min-height: 5em;
		padding: 0.5rem 1rem;
		margin-inline: auto;
	}

	.header-logos {
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;
	}
	.desktop {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: clamp(0.25rem, 2vw, 1.5rem);
		font-family: var(--orbitron);
		font-weight: 600;
		list-style: none;

		@media (width > 300px) and (width < 750px) {
			visibility: hidden;
		}

		@media (width >= 750px) {
			visibility: visible;
		}

		@media (width <= 1100px) {
			padding-top: 2rem;
		}
	}

	.mobile {
		position: fixed;
		right: 1em;
		top: 4em;
		z-index: 10;
		overflow: hidden;
		transform: scale(0);
		transition:
			opacity 1s ease-in-out,
			transform 0.4s ease-in-out;
		opacity: 0;
		transform-origin: top left;

		&.open {
			transform: scale(1);
			opacity: 1;
		}

		&.closing {
			opacity: 0;
		}

		@media (width > 300px) and (width < 750px) {
			visibility: visible;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1.25rem;
			box-shadow: 0 0 10px 7px var(--clr-gray);
			border-radius: 5px;
			padding: 0.75rem;
			background-color: var(--clr-inverted);
			backdrop-filter: blur(125px);
			list-style: none;
			min-width: 150px;
			width: auto;

			& li {
				padding: 0.15rem;
			}
		}

		@media (width >= 750px) {
			visibility: hidden;
		}
	}

	.header-logos {
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;

		@media (width > 300px) and (width < 750px) {
			justify-content: flex-start;
			height: 100%;
			gap: 0.5rem;
			flex: 0 0 auto;
		}

		@media (width >= 750px) {
			display: flex;
		}
	}

	nav.navigation {
		@media (width > 300px) and (width < 750px) {
			width: 97%;
			left: 1.5%;
			right: 1.5%;
			top: 0.25rem;
			border-radius: var(--radius);
			box-shadow: 0 0 5px var(--clr-gray);
			padding: 1.2rem 0.75rem 0.4rem 0.75rem;
			height: 3.75em;
			min-height: 3.75em;
			justify-content: space-between;
		}

		@media (width >= 750px) {
			height: 5em;
			min-height: 5em;
		}

		@media (width >= 990px) {
			box-shadow: none;
		}

		@media (width < 750px) {
			justify-content: space-between;
			padding-inline: 0.75rem;
		}
	}
</style>
