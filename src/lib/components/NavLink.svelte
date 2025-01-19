<script>
	/** @type {{href: any, title: any}} */
	let { href, title } = $props();
</script>

<a class="nav-link" {href}>{title}</a>

<style>
	@media (width >= 300px) {
		.nav-link {
			font-family: var(--bronova);
			font-size: clamp(1.25rem, 1.25vw, 1.15rem);
			font-weight: 900;
			letter-spacing: 2px;
			color: var(--white);

			&:is(:hover) {
				color: var(--smoke);
			}

			&:hover {
				font-size: clamp(1.25rem, 1.25vw, 1.15rem);
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
				background: transparent;
			}
		}
	}

	@media (width >= 750px) {
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

	@media (width >= 990px) {
		.nav-link {
			margin-left: 5.5rem;
			margin-right: -5.25rem;
		}
	}
</style>
