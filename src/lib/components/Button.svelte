<script>
	export let title;
</script>

<button>{title}</button>

<style>
	@media (min-width: 300px) {
		button {
			background-color: transparent;
			font-family: var(--orbitron);
			font-size: clamp(1.2rem, 2vw, 2rem);
			font-weight: 900;
			color: var(--yellow);
			border: 1px solid var(--yellow);
			outline: 3px solid var(--yellow);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: clamp(100px, 65%, 300px);
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
