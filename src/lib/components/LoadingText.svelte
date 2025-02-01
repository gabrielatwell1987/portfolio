<div class="loading-container">
	<div class="loading-text">
		<span>L</span>
		<span>O</span>
		<span>A</span>
		<span>D</span>
		<span>I</span>
		<span>N</span>
		<span>G</span>
	</div>
</div>

<style>
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 520px;
		text-align: center;
		color: var(--off-white);
		position: relative;
		margin: 0 32px;

		&:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 6px;
			background-color: var(--sky);
			bottom: 0;
			left: 0;
			border-radius: 10px;
		}
	}

	.loading-text {
		font-family: var(--orbitron);
		font-size: 5vw;
		line-height: 64px;
		letter-spacing: 10px;
		margin-bottom: 2rem;
		display: flex;
		justify-content: space-evenly;

		& span {
			color: var(--sky);
			animation: moveLetters 2.2s infinite ease-in-out;
			transform: translateX(0);
			position: relative;
			display: inline-block;
			opacity: 0;
			text-shadow: 0px 2px 10px rgba(46, 74, 81, 0.3);

			&:nth-child(1) {
				animation-delay: 0.1s;
			}

			&:nth-child(2) {
				animation-delay: 0.2s;
			}

			&:nth-child(3) {
				animation-delay: 0.3s;
			}

			&:nth-child(4) {
				animation-delay: 0.4s;
			}

			&:nth-child(5) {
				animation-delay: 0.5s;
			}

			&:nth-child(6) {
				animation-delay: 0.6s;
			}

			&:nth-child(7) {
				animation-delay: 0.7s;
			}
		}
	}

	@keyframes moveLetters {
		0% {
			transform: translateX(-15vw);
			opacity: 0;
		}

		33.3%,
		66% {
			transform: translateX(0);
			opacity: 1;
		}

		100% {
			transform: translateX(15vw);
			opacity: 0;
		}
	}
</style>
