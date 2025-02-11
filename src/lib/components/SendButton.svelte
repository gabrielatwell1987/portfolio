<script>
</script>

<button type="submit">
	<p>
		Send <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem">
			<path
				d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
			/>
		</svg>
	</p>
</button>

<style>
	@media (min-width: 300px) {
		button {
			background-color: var(--text-pale);
			font-family: var(--orbitron);
			font-size: clamp(1.2rem, 1.5vw, 2rem);
			font-weight: 900;
			color: var(--text-button);
			border: 1px solid var(--text-button);
			outline: 3px solid var(--text-button);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: fit-content;
			border-radius: 0.75rem;
			transition: 750ms;
			outline-offset: -7px;
			padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;

			&:hover {
				opacity: 0.75;
				outline-offset: 0px;
				animation: wiggle 1s ease-in-out infinite;
			}

			& p {
				margin: 0;
				font-size: clamp(1.2rem, 1.5vw, 2rem);
				font-weight: 900;
				color: var(--light-color);

				&:hover svg {
					animation: right 1s ease-in-out infinite;
				}
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--text-color);
				background: transparent;
				color: var(--text-color);
			}

			@media (width <= 500px) {
				& svg {
					display: none;
				}
			}
		}
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
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
