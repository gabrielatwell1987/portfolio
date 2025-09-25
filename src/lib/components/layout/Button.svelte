<script>
	/** @type {{title: any}} */
	let { href, title, class: className = '' } = $props();
</script>

<a {href} class={className}>{title}</a>

<style>
	@media (width >= 300px) {
		a {
			display: inline-block;
			text-decoration: none;
			background-color: transparent;
			font-family: var(--ultra);
			font-size: clamp(var(--h6), 2vw, var(--h3));
			font-weight: 900;
			color: var(--clr-inverted);
			border: 1px solid var(--clr-main);
			outline: 3px solid var(--clr-main);
			text-shadow:
				0 0 1px var(--clr-inverted),
				-1px -1px 0 var(--clr-main),
				1px -1px 0 var(--clr-main),
				-1px 1px 0 var(--clr-main),
				1px 1px 0 var(--clr-main),
				-1px 0 0 var(--clr-main),
				1px 0 0 var(--clr-main),
				0 -1px 0 var(--clr-main),
				0 1px 0 var(--clr-main);
			border-radius: var(--radius);
			outline-offset: -7px;
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 2px;
			width: fit-content;
			transition:
				outline-offset 300ms ease-out,
				opacity 300ms ease-out;
			padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
			opacity: 0.75;

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
				color: var(--clr-main);
			}

			&:hover {
				opacity: 0.95;
				outline-offset: 0px;
			}
		}
	}
</style>
