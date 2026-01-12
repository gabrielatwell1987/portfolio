<script lang="ts">
	import InstallButton from './InstallButton.svelte';
	import Burger from '$lib/components/navigation/Burger.svelte';
	import ThemeToggle from '$lib/components/navigation/ThemeToggle.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import SelectLink from '$lib/components/navigation/SelectLink.svelte';
	// import AtwellUnderline from './AtwellUnderline.svelte';
	import AtwellLogo from './AtwellLogo.svelte';

	let open = $state(false);
	let isClosing = $state(false);
	let isDisplay = $state(false);

	function closeMenu() {
		if (open) {
			isClosing = true;
			setTimeout(() => {
				open = false;
				isClosing = false;
				isDisplay = false;
			}, 500);
		}
	}

	$effect(() => {
		if (open) {
			isDisplay = true;
		}
	});
</script>

<InstallButton />

<nav class="navigation">
	<div class="nav-main">
		<Burger bind:open ariaLabel="Toggle menu" />

		<!-- <AtwellUnderline /> -->
		<AtwellLogo title="atwell" />

		<ThemeToggle />
	</div>

	<ul class="desktop" aria-label="Desktop navigation menu">
		<li><NavLink href="/about" title="About" viewTransitionName="about-heading" /></li>
		<li><NavLink href="/projects" title="Builds" viewTransitionName="build-heading" /></li>
		<li><NavLink href="/learn" title="Learn" viewTransitionName="learn-heading" /></li>
		<SelectLink path1="/hire" path2="/contact" />
	</ul>

	<ul
		class="mobile {open ? 'open' : ''} {isClosing ? 'closing' : ''}"
		id="mobile-menu"
		aria-label="Main navigation menu"
		style="display: {isDisplay ? 'flex' : 'none'};"
	>
		<!-- <li><NavLink href="/" title="Home" onclick={closeMenu} /></li> -->
		<li><NavLink href="/about" title="About Gabe" onclick={closeMenu} /></li>
		<li><NavLink href="/projects" title="Things I've Built" onclick={closeMenu} /></li>
		<li><NavLink href="/learn" title="Learn the Web" onclick={closeMenu} /></li>
		<li><NavLink href="/hire" title="Hire Me" onclick={closeMenu} /></li>
		<li><NavLink href="/contact" title="Contact Me" onclick={closeMenu} /></li>
	</ul>
</nav>

<style>
	:root {
		--100: 100%;
	}

	nav.navigation {
		display: flex;
		justify-content: space-around;
		align-items: center;
		backdrop-filter: blur(0.15rem);
		-webkit-backdrop-filter: blur(0.15rem);
		z-index: 15;
		position: fixed;
		top: 0.25rem;
		width: 100%;
		padding: 0.5rem 5em 0.5rem 1rem;
		margin-inline: auto;
		pointer-events: auto;

		& .nav-main {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 1rem;
			flex: 1;
			width: 100%;

			@media (width > 300px) and (width < 750px) {
				justify-content: space-evenly;
				width: 100%;
			}
		}

		@media (width > 300px) and (width < 750px) {
			width: 100%;
			top: 0.25rem;
			border-radius: var(--radius);
			box-shadow: 0 0 5px var(--clr-gray);
			padding: 1.2rem 0 0.4rem 0;
			height: 3.75rem;
			min-height: 3.75rem;
			justify-content: space-between;
			flex: 1;
		}

		@media (width >= 990px) {
			box-shadow: none;
		}

		@media (width < 750px) {
			justify-content: space-between;
			padding-inline: 0.75rem;
		}
	}

	.desktop {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: clamp(0.25rem, 2vw, 1.5rem);
		font-family: var(--ultra);
		font-weight: 600;
		list-style: none;

		@media (width > 300px) and (width < 750px) {
			display: none;
		}

		@media (width <= 1100px) {
			padding-top: 2rem;
		}
	}

	.mobile {
		position: fixed;
		right: 1em;
		top: 3em;
		z-index: 10;
		overflow: hidden;
		transform: scale(0.9);
		transition:
			opacity 0.3s ease-out,
			transform 0.3s ease-out;
		opacity: 0;
		transform-origin: top left;
		box-shadow: 0 0 0 1px var(--clr-main);

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
			border-radius: 5px;
			padding: 0.75rem;
			background-color: var(--clr-invert);
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
</style>
