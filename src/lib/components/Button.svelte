<script>
	export let title;
</script>

<button>{title}</button>

<style>
	@media (min-width: 200px) {
		button {
			background-color: transparent;
			color: var(--white);
			border: 1px solid var(--white);
			margin: 0 auto;
			border-radius: 8px;
			cursor: pointer;
			font-size: 1.2rem;
			letter-spacing: 1px;
			width: 50%;
			font-family: var(--lexend);
			border-radius: 0.75rem;
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			mix-blend-mode: difference;
			padding: 1rem 1.75rem;
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
		}

		button:hover,
		button:focus {
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}
	}

	@media (min-width: 500px) {
		button {
			width: 35%;
		}
	}

	@media (min-width: 740px) {
		button {
			font-size: 1rem;
			width: 30%;
			font-size: 1rem;
			letter-spacing: 2px;
		}
	}

	@media (min-width: 990px) {
		button {
			width: 25%;
			font-size: 1.25rem;
			margin: 3rem auto;
		}
	}

	@media screen and (min-width: 1200px) {
		button {
			width: 20%;
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
