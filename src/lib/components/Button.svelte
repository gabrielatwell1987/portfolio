<script>
	/** @type {{title: any}} */
	let { href, title } = $props();
</script>

<a {href}><button>{title}</button></a>

<style>
	@media (min-width: 300px) {
		button {
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
			width: clamp(100px, 65%, 300px);
			border-radius: 0.75rem;
			transition: 750ms;
			outline-offset: -7px;
			padding: clamp(0.75rem, 2vw, 1rem) clamp(1.75rem, 3vw, 2rem);
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
			cursor: pointer;
		}

		button:hover,
		button:focus {
			opacity: 0.8;
			color: var(--yellow);
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
