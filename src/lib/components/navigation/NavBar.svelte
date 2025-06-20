<script>
	import Burger from '$lib/components/navigation/Burger.svelte';
	import MainLogo from '$lib/components/navigation/MainLogo.svelte';
	import ThemeToggle from '$lib/components/layout/ThemeToggle.svelte';
	import NavLink from '$lib/components/navigation/NavLink.svelte';
	import InstallBtn from '$lib/components/navigation/InstallBtn.svelte';
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

<nav>
	<div class="header-logos">
		<Burger bind:open ariaLabel="Toggle menu" />

		<MainLogo />
	</div>

	<ThemeToggle />

	<div class="desktop">
		<NavLink href="/about" title="About" />
		<NavLink href="/projects" title="Work" />
		<NavLink href="/learn" title="Learn" />
		<NavLink href="/photos" title="Photos" />
		<SelectLink path1="/hire" path2="/contact" />
	</div>

	<div class="mobile {open ? 'open' : ''} {isClosing ? 'closing' : ''}">
		<NavLink href="/landing" title="Home" onclick={closeMenu} />
		<NavLink href="/about" title="About Gabe" onclick={closeMenu} />
		<NavLink href="/projects" title="Work I've Done" onclick={closeMenu} />
		<NavLink href="/learn" title="Learn the Web" onclick={closeMenu} />
		<NavLink href="/photos" title="Photos of Me" onclick={closeMenu} />
		<NavLink href="/hire" title="Hire Me" onclick={closeMenu} />
		<NavLink href="/contact" title="Contact Me" onclick={closeMenu} />
	</div>
</nav>

<InstallBtn />

<style>
	:root {
		--100: 100%;
	}

	nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-inline: auto;
		backdrop-filter: blur(0.15rem);
		-webkit-backdrop-filter: blur(0.15rem);
		z-index: 15;
		view-transition-name: navigation;
		margin: 1rem;
		position: sticky;
		top: 0;
		/* animation: slide-right 0.05s ease-in-out forwards; */
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
		gap: 2rem;
		font-family: var(--orbitron);
		font-weight: 600;

		@media (width > 300px) and (width < 750px) {
			display: none;
		}

		@media (width >= 750px) {
			display: flex;
			gap: 0.25rem;
			scale: 0.9;
		}

		@media (width >= 990px) {
			gap: 1.5rem;
			scale: 1;
		}
	}

	.mobile {
		@media (width > 300px) and (width < 750px) {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1.25rem;
			z-index: 10;
			box-shadow: 0 0 10px 7px var(--clr-gray);
			border-radius: 5px;
			padding: 0.75rem;
			background-color: var(--clr-inverted);
			backdrop-filter: blur(125px);

			min-width: 150px;
			width: auto;
			position: absolute;
			right: 0;
			top: 10%;

			translate: 100% 0;
			overflow: hidden;
			transition:
				opacity 1s ease-in-out,
				translate 0.65s ease-in-out;
			opacity: 0;

			&.open {
				translate: 0 0;
				opacity: 1;
			}

			&.closing {
				translate: 100% 0;
				opacity: 0;
			}
		}

		@media (width >= 750px) {
			display: none;
		}
	}

	.header-logos {
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;

		@media (width > 300px) and (width < 750px) {
			justify-content: center;
			height: 100%;
		}

		@media (width >= 750px) {
			display: flex;
		}

		@media (width < 750px) {
			flex: 1;
			justify-content: flex-start;
			gap: 0.5rem;
		}
	}

	nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-inline: auto;
		backdrop-filter: blur(0.15rem);
		-webkit-backdrop-filter: blur(0.15rem);
		z-index: 15;
		view-transition-name: navigation;
		margin: 1rem;
		position: sticky;
		top: 0;
		animation: slide-right 2s ease-in-out forwards;

		@media (width > 300px) and (width < 750px) {
			width: 97%;
			margin-inline: auto;
			margin-block: 0.25rem;
			border-radius: var(--radius);
			box-shadow: 0 0 5px var(--clr-gray);
			padding: 1.2rem 0 0.4rem 0;
			height: 3.75em;
		}

		@media (width >= 750px) {
			margin: 1rem;
			height: 5em;
		}

		@media (width >= 990px) {
			box-shadow: none;
		}

		@media (width < 750px) {
			justify-content: space-between;
			padding-inline: 0.75rem;
		}
	}

	/* @keyframes slide-right {
		from {
			translate: -100% 0;
		}

		to {
			translate: 0 0;
		}
	} */
</style>
