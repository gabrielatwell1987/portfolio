<script>
	/** @type {{title: any}} */
	let { href, title } = $props();
</script>

<a {href}>
	<p>
		<button
			>{title}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1rem">
				<path
					d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
				/>
			</svg>
		</button>
	</p>
</a>

<style>
	@media (width >= 300px) {
		a {
			text-decoration: none;

			& p {
				margin: 0;
				font-size: clamp(1.2rem, 1.5vw, 2rem);
				font-weight: 900;
				color: var(--pale);

				&:hover svg {
					animation: right 1s ease-in-out infinite;
					opacity: 0.75;
				}

				& button {
					background-color: transparent;
					font-family: var(--orbitron);
					font-size: clamp(1.2rem, 1.5vw, 2rem);
					font-weight: 900;
					color: var(--pale);
					border: 1px solid var(--pale);
					outline: 3px solid var(--pale);
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
					cursor: pointer;

					&:hover,
					&:focus {
						opacity: 0.75;
						outline-offset: 0px;
						animation: wiggle 1s ease-in-out infinite;
					}
				}

				@media (width <= 500px) {
					button svg {
						display: none;
					}
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
