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
			color: var(--white);
			border-radius: 2px;
			scale: 0.8;

			&:hover {
				color: var(--sky);
				border-bottom: 5px solid var(--sky);
				height: 2.75rem;
				text-shadow: 3px 3px 1px var(--black);
				transition: all 0.15s ease-in-out;
				border-radius: 2px;
			}
		}
	}

	@media (width >= 990px) {
		.nav-link {
			scale: 1;
		}
	}
</style>
