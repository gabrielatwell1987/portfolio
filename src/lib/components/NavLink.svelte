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
			font-size: clamp(1.25rem, 1.25vw, 1.15rem);
			letter-spacing: 2px;
			font-weight: 800;

			&:hover {
				font-size: clamp(1.25rem, 1.25vw, 1.15rem);
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
				background: transparent;
			}
		}
	}

	@media (min-width: 750px) {
		.nav-link {
			text-decoration: none;
			color: var(--white);
			border-radius: 2px;

			&:hover {
				color: var(--sky);
				border-bottom: 5px solid var(--sky);
				height: 2.75rem;
				text-shadow: 2px 2px 1px var(--blacker);
				transition: all 0.35s ease-in-out;
				border-radius: 2px;
			}
		}
	}

	@media (min-width: 990px) {
		.nav-link {
			margin-left: 5.5rem;
			margin-right: -5.25rem;
		}
	}
</style>
