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
				color: var(--dark-gray);
				transition: color 0.35s ease-in-out;
			}

			&:hover {
				font-size: clamp(1.25rem, 1.25vw, 1.15rem);
			}

			&:focus {
				box-shadow: 0 0 0px var(--off-white);
				background-color: transparent;
			}
		}
	}

	@media (width >= 750px) {
		.nav-link {
			text-decoration: none;
			border-radius: 1px;
			scale: 0.8;
			color: var(--text-color);

			&:hover {
				color: var(--text-color);
				text-shadow: 1px 1px 1px var(--text-color);
				border-bottom: 4px solid var(--text-color);
				height: 2.75rem;
				transition: all 0.15s ease-in-out;
				border-radius: 1px;
			}
		}
	}

	@media (width >= 990px) {
		.nav-link {
			scale: 1;
		}
	}
</style>
