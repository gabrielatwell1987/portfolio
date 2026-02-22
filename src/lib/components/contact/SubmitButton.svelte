<script>
</script>

<button class="submit-button" type="submit">Submit</button>

<style>
	.submit-button {
		@media (width >= 300px) {
			background-color: transparent;
			font-family: var(--ultra);
			font-size: clamp(var(--h5), 1.5vw, var(--h4));
			font-weight: 900;
			border: 1px solid var(--clr-main);
			outline: 3px solid var(--clr-main);
			color: var(--clr-invert);
			text-shadow:
				0 0 1px var(--clr-main),
				-2px -2px 0 var(--clr-main),
				2px -2px 0 var(--clr-main),
				-2px 2px 0 var(--clr-main),
				2px 2px 0 var(--clr-main),
				-2px 0 0 var(--clr-main),
				2px 0 0 var(--clr-main),
				0 -2px 0 var(--clr-main),
				0 2px 0 var(--clr-main);
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
			user-select: none;
			transition: scale 0.15s ease-out;

			&:not(:hover) {
				opacity: 0.85;
			}

			&:hover {
				outline-offset: 0px;
			}

			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}

			&:active {
				scale: 0.95;
			}
		}

		@media (width >= 500px) {
			text-shadow:
				0 0 1px var(--clr-main),
				-3px -3px 0 var(--clr-main),
				3px -3px 0 var(--clr-main),
				-3px 3px 0 var(--clr-main),
				3px 3px 0 var(--clr-main),
				-3px 0 0 var(--clr-main),
				3px 0 0 var(--clr-main),
				0 -3px 0 var(--clr-main),
				0 3px 0 var(--clr-main);
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
