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
			background-color: transparent;

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--text-color);
				background: transparent;
			}

			&:is(:hover) {
				color: var(--dark-gray);
				transition: color 0.35s ease-in-out;
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
				opacity: 0.5;
			}

			&:not(:hover) {
				opacity: 1;
			}
		}
	}

	@media (width >= 990px) {
		.nav-link {
			scale: 1;
		}
	}
</style>
