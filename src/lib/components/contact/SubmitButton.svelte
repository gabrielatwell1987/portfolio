<script>
</script>

<button type="submit">Submit</button>

<style>
	button {
		@media (min-width: 300px) {
			background-color: transparent;
			font-family: var(--ultra);
			font-size: clamp(var(--h5), 1.5vw, var(--h4));
			font-weight: 900;
			color: var(--clr-main);
			border: 1px solid var(--clr-main);
			outline: 3px solid var(--clr-main);
			text-shadow:
				0 0 2px var(--clr-main),
				-2px -2px 0 var(--clr-inverted),
				2px -2px 0 var(--clr-inverted),
				-2px 2px 0 var(--clr-inverted),
				2px 2px 0 var(--clr-inverted),
				-2px 0 0 var(--clr-inverted),
				2px 0 0 var(--clr-inverted),
				0 -2px 0 var(--clr-inverted),
				0 2px 0 var(--clr-inverted);
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
			margin-top: 2vw;
			margin-bottom: 2%;
			user-select: none;

			&:not(:hover) {
				opacity: 0.85;
			}

			&:hover {
				outline-offset: 0px;
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}

			&:active {
				scale: 0.97;
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
