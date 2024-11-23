<script>
	/** @type {{href: any, title: any}} */
	let { href, title } = $props();
</script>

<a aria-hidden="true" class="nav-link" {href}>{title}</a>

<style>
	a:is(:hover) {
		color: var(--white);
	}

	@media (min-width: 300px) {
		.nav-link {
			font-size: clamp(1.25rem, 1.5vw, 1.5rem);
			letter-spacing: 2px;

			&:last-child {
				border-bottom: none;
			}

			&:hover {
				font-size: clamp(1.25rem, 1.5vw, 1.5rem);
			}
		}
	}

	@media (min-width: 750px) {
		.nav-link {
			text-decoration: none;
			font-weight: 600;
			color: var(--white);
			border-radius: 3px;

			&:hover {
				color: var(--sky);
				border-bottom: 5px solid var(--sky);
				height: 3rem;
				text-shadow: 2px 2px 1px var(--blacker);
				transition: all 0.35s ease-in-out;
			}
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
