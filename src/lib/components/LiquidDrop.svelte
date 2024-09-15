<script>
</script>

<div class="container">
	<span class="drop" />
</div>

<svg>
	<defs>
		<filter id="gooey">
			<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
			<feColorMatrix
				in="blur"
				values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -20"
				result="gooey"
			/>
			<feComposite in="SourceGraphic" in2="gooey" operator="atop" />
		</filter>
	</defs>
</svg>

<style>
	.container {
		filter: url('#gooey');
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60vh;
	}

	.drop {
		position: absolute;
		background: var(--yellow);
		width: 5rem;
		height: 5rem;
		border-radius: 60% 70% 50% 60% / 65% 66% 60% 65%;
		animation: 6s move ease infinite;
	}

	.drop:after {
		width: 4rem;
		height: 4rem;
		content: '';
		position: absolute;
		background: var(--yellow);
		border-radius: 50% 60% 60% 70% / 60% 65% 65% 65%;
		left: 25px;
		top: 3px;
		animation: 6s drop_effect ease infinite;
	}

	svg {
		position: absolute;
	}

	@media (max-width: 768px) {
		.drop {
			width: 3rem;
			height: 3rem;
		}

		.drop:after {
			width: 2rem;
			height: 2rem;
			left: 15px;
			top: 2px;
		}
	}

	@keyframes move {
		0%,
		100% {
			transform: translate(-150px);
		}

		50% {
			transform: translate(150px);
		}
	}

	@keyframes drop_effect {
		0% {
			left: 0px;
		}
		5% {
			left: -35px;
		}
		45% {
			left: 0px;
		}
		50% {
			left: 0px;
		}
		55% {
			left: 30px;
		}
		95% {
			left: 0px;
		}
		100% {
			left: 0;
		}
	}
</style>
