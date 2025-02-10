<script>
	import Burger from '$lib/components/Burger.svelte';
	import MainLogo from '$lib/components/MainLogo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import InstallBtn from '$lib/components/InstallBtn.svelte';

	let open = $state(false);
	let isClosing = $state(false);
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
		<NavLink href="/contact" title="Contact" />
	</div>

	<div class="mobile {open ? 'open' : ''} {isClosing ? 'closing' : ''}">
		<NavLink href="/landing" title="Home" />
		<NavLink href="/about" title="About" />
		<NavLink href="/projects" title="Work" />
		<NavLink href="/learn" title="Learn" />
		<NavLink href="/photos" title="Photos" />
		<NavLink href="/contact" title="Contact" />
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
		height: 5em;
		margin-inline: auto;
		backdrop-filter: blur(0.15rem);
		-webkit-backdrop-filter: blur(0.15rem);
		z-index: 15;
		view-transition-name: navigation;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		margin: 1rem;
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
	}

	@media (width > 300px) {
		.mobile {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 1.25rem;
			margin-top: 15.5rem;
			z-index: 10;
			box-shadow: 0 0 10px 7px var(--text-gray);
			border-radius: 5px;
			padding: 0.75rem;
			background-color: var(--text-anti);
			font-weight: 900;

			translate: 100% 0;
			overflow: hidden;
			transition:
				opacity 1.22s ease-in-out,
				translate 1.22s ease-in-out;
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

		.desktop {
			display: none;
		}

		.header-logos {
			display: block;
		}

		nav {
			margin: 0;
			width: var(--100);
			background-color: transparent;
		}
	}

	@media (width >= 750px) {
		.desktop {
			display: flex;
			gap: 0.25rem;
			scale: 0.9;
		}

		.mobile {
			display: none;
		}

		.header-logos {
			display: flex;
		}

		nav {
			margin: 1rem;
		}
	}

	@media (width >= 990px) {
		.desktop {
			gap: 1.5rem;
			scale: 1;
		}
	}
</style>
