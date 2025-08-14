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
			font-family: var(--orbitron);
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
			font-weight: 900;
			color: var(--clr-main);
			border: 1px solid var(--clr-main);
			border-radius: var(--radius);
			outline: 3px solid var(--clr-main);
			outline-offset: -7px;
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
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
