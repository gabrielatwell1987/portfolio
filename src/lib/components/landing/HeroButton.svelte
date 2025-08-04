<script>
	/** @type {{title: any}} */
	let { href, title, class: className = '' } = $props();
</script>

<a {href} class={className}>
	{title}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem">
		<title>Right Arrow</title>
		<path
			d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
		/>
	</svg>
</a>

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

			&:hover svg {
				animation: right 1s ease-in-out infinite;
			}

			@media (width <= 500px) {
				& svg {
					display: none;
				}
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
