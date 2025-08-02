<script>
</script>

<button type="submit">
	Send
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem">
		<title>Right Arrow</title>
		<path
			d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
		/>
	</svg>
</button>

<style>
	button {
		@media (min-width: 300px) {
			background-color: transparent;
			font-family: var(--orbitron);
			font-size: clamp(var(--h6), 1.5vw, var(--h4));
			font-weight: 900;
			color: var(--clr-gray);
			border: 1px solid var(--clr-gray);
			outline: 3px solid var(--clr-gray);
			outline-offset: -7px;
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: fit-content;
			border-radius: var(--radius);
			transition: 750ms;
			padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
			margin-top: 2vw;
			margin-bottom: 2%;
			user-select: none;

			&:hover {
				opacity: 0.95;
				outline-offset: 0px;
			}

			&:hover svg {
				animation: right 1s ease-in-out infinite;
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
				color: var(--clr-main);
			}

			& svg {
				@media (width <= 500px) {
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
