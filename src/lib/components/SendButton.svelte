<script>
</script>

<button class="send" type="submit" aria-label="send">Send</button>

<style>
	@media (min-width: 300px) {
		.send {
			background-color: transparent;
			font-family: var(--lexend);
			color: var(--yellow);
			border: 1px solid var(--yellow);
			outline: 3px solid var(--yellow);
			filter: drop-shadow(0 0 0.75rem var(--smoke));
			font-size: clamp(1.2rem, 4vw, 2rem);
			font-weight: 600;
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: 100%;
			border-radius: 0.75rem;
			transition: 750ms;
			outline-offset: -7px;
			mix-blend-mode: difference;
			padding: 1.5rem 2.5rem;
			margin-top: 10%;
			margin-bottom: 2%;
			user-select: none;
		}

		.send:hover,
		.send:focus {
			opacity: 0.8;
			color: var(--yellow);
			mix-blend-mode: hard-light;
			outline-offset: 0px;
			animation: wiggle 0.5s ease-in-out infinite;
		}
	}

	@media (min-width: 500px) {
		.send {
			width: 70%;
			font-size: 1.25rem;
		}
	}

	@media (min-width: 720px) {
		.send {
			width: 30%;
			font-size: 1.5rem;
		}

		.send:hover {
			animation: wiggle 0.5s ease-in-out infinite;
		}
	}

	@media (min-width: 775px) {
		.send {
			width: 30%;
		}
	}

	@media (min-width: 850px) {
		.send {
			width: 30%;
		}
	}

	@media (min-width: 1024px) {
		.send {
			width: 30%;
		}
	}

	@media (min-width: 1350px) {
		.send {
			width: 15%;
			margin-inline: auto;
			letter-spacing: 0;
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
