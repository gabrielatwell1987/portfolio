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
		transition:
			color 0.35s ease-in-out,
			opacity 0.35s ease-in-out;

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		&:is(:hover) {
			opacity: 0.75;
			color: var(--clr-pale);
		}

		@media (width >= 750px) {
			text-decoration: none;
			border-radius: 1px;
			scale: 0.8;

			&:hover {
				color: var(--clr-pale);
				text-shadow: 0px 0px 1px var(--clr-inverted);
				border-bottom: 4px solid var(--clr-pale);
				height: 2.75rem;
				transition: all 0.15s ease-in-out;
				border-radius: 1px;
				opacity: 0.8;
			}

			&:not(:hover) {
				opacity: 1;
			}
		}

		@media (width >= 990px) {
			scale: 1;
		}
	}
</style>
