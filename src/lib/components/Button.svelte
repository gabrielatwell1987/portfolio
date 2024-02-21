<script>
	export let title;
</script>

<button>{title}</button>

<style>
	@media (min-width: 200px) {
		button {
			display: block;
			background-color: transparent;
			color: var(--white);
			font-family: var(--montserrat);
			width: 50%;
			height: 10%;
			outline: none;
			border: 1px solid var(--white);
			margin: 1rem auto;
			border-radius: 10px;
			font-size: 1.2rem;
			font-weight: 900;
			border-radius: 5rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			letter-spacing: 1px;
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			margin-top: 2rem;
			margin-bottom: 0.25rem;
			padding: 1rem 1.75rem;
		}

		button:hover,
		button:focus {
			border: 1px solid var(--black);
			background-color: var(--white);
			color: var(--black);
			outline-offset: 0px;
		}
	}

	@media (min-width: 740px) {
		button {
			font-size: 1rem;
			width: 25%;
			font-size: 1rem;
			letter-spacing: 2px;
		}

		button:hover {
			animation: wiggle 0.5s ease-in-out infinite;
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
	}

	@media (min-width: 990px) {
		button {
			width: 30%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}
	}

	@media screen and (min-width: 1100px) {
		button {
			width: 20%;
		}
	}

	@media screen and (min-width: 1920px) {
		button {
			width: 10%;
		}
	}
</style>
