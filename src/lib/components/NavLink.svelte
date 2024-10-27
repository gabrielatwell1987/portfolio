<script>
	export let href;
	export let title;
</script>

<a class="nav-link" {href}>{title}</a>

<style>
	a:is(:hover) {
		color: var(--white);
	}

	@media (min-width: 300px) {
		.nav-link {
			font-size: clamp(1.1rem, 2vw, 1.5rem);
			letter-spacing: 2px;
		}

		.nav-link:hover {
			font-size: clamp(1.1rem, 2vw, 1.5rem);
		}
	}

	@media (min-width: 750px) {
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
	}

	@media (min-width: 990px) {
		.nav-link {
			margin-left: 5rem;
			margin-right: -5.25rem;
		}
	}

	@media (min-width: 1024px) {
		.nav-link {
			margin-left: 5rem;
			margin-right: -5rem;
		}
	}

	@media (min-width: 1500px) {
		.nav-link {
			margin-left: 5.75rem;
			margin-right: -5rem;
			font-weight: 800;
		}
	}

	@media (min-width: 1600px) {
		.nav-link {
			margin-left: 5.75rem;
			margin-right: -5rem;
		}
	}
</style>
