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
			outline: 3px solid var(--clr-main);
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: fit-content;
			border-radius: var(--button-radius);
			transition: 750ms;
			outline-offset: -7px;
			padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
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
				opacity: 1;
				outline-offset: 0px;
			}
		}
	}

	@keyframes right {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(10px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
