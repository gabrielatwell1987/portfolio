<script>
</script>

<button class="send" type="submit">Send <i class="fa-solid fa-angle-right" /></button>

<style>
	@media (min-width: 300px) {
		.send {
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
			width: 55%;
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

	@media (min-width: 768px) {
		.send {
			width: 23%;
			margin-inline: auto;
			letter-spacing: 0;
		}
	}

	@media (min-width: 1350px) {
		.send {
			width: 17%;
			margin-inline: auto;
			letter-spacing: 0;
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
