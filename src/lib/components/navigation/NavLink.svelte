<script>
	/** @type {{href: any, title: any}} */
	let { href, title, onclick } = $props();
</script>

<a class="nav-link" {href} {onclick}>{title}</a>

<style>
	.nav-link {
		font-family: var(--bronova-bold);
		font-size: clamp(var(--h6), 1.25vw, var(--h5));
		font-weight: 900;
		letter-spacing: 2px;
		color: var(--clr-main);
		background-color: transparent;
		transition: opacity 0.15s ease-out;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		&:is(:hover) {
			opacity: 0.75;
		}

		@media (width >= 750px) {
			text-decoration: none;
			border-radius: 1px;

			&:hover {
				text-shadow: 0px 0px 1px var(--clr-inverted);
				border-bottom: 4px solid var(--clr-main);
				height: 2.75rem;
				transition: all 0.15s ease-out;
				border-radius: 1px;
			}

			&:not(:hover) {
				opacity: 1;
			}
		}
	}
</style>
