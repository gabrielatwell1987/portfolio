<script>
	export let title;
</script>

<button aria-hidden={title}>{title}</button>

<style>
	@media (min-width: 300px) {
		button {
			background-color: transparent;
			font-family: var(--lexend);
			color: var(--yellow);
			border: 1px solid var(--yellow);
			outline: 3px solid var(--yellow);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			font-size: 1.2rem;
			font-weight: 600;
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: 65%;
			border-radius: 0.75rem;
			transition: 750ms;
			outline-offset: -7px;
			mix-blend-mode: difference;
			padding: 1.5rem 2.5rem;
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
			cursor: pointer;
		}

		button:hover,
		button:focus {
			opacity: 0.8;
			color: var(--yellow);
			mix-blend-mode: hard-light;
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}
	}

	@media (min-width: 500px) {
		button {
			width: 30%;
		}
	}

	@media (min-width: 700px) {
		button {
			font-size: 1.5rem;
			width: 22%;
			font-size: 1rem;
			letter-spacing: 2px;
		}
	}

	@media (min-width: 990px) {
		button {
			width: 20%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}
	}

	@media (min-width: 1024px) {
		button {
			width: 27%;
			font-size: 1.5rem;
			margin: 3rem auto;
		}
	}

	@media screen and (min-width: 1200px) {
		button {
			width: 25%;
		}
	}

	@media screen and (min-width: 1300px) {
		button {
			width: 20%;
		}
	}

	@media screen and (min-width: 1400px) {
		button {
			width: 20%;
		}
	}

	@media screen and (min-width: 1500px) {
		button {
			width: 17%;
			font-size: 1.75rem;
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
</style>
