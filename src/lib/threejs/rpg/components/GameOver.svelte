<script lang="ts">
	interface Props {
		isGameOver?: boolean;
		onRestart: () => void;
		won?: boolean;
	}

	let { isGameOver = false, onRestart, won = false }: Props = $props();
</script>

{#if isGameOver}
	<div class="game-over-overlay">
		<div class="game-over-container">
			{#if won}
				<div class="won">
					<h1>VICTORY!</h1>
					<p>You have killed the computer men!</p>
					<button class="restart-button" onclick={onRestart}>Play Again</button>
				</div>
			{:else}
				<div class="lost">
					<h1>GAME OVER</h1>
					<p>You were defeated...</p>
					<button class="restart-button" onclick={onRestart}>Restart</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.game-over-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 200;
		backdrop-filter: blur(7px);

		& .game-over-container {
			background: var(--clr-invert);
			border: 3px solid var(--clr-invert-fade);
			border-radius: 1rem;
			padding: 3rem;
			text-align: center;
			max-width: 500px;

			& .won {
				h1 {
					color: var(--success);
					font-size: clamp(var(--h4), 5vw, var(--h2));
					margin: 0 0 1rem 0;
					text-transform: uppercase;
					letter-spacing: 0.2em;
					font-weight: 900;
				}
			}

			& .lost {
				& h1 {
					color: var(--fail);
					font-size: clamp(var(--h4), 5vw, var(--h2));
					margin: 0 0 1rem 0;
					text-transform: uppercase;
					letter-spacing: 0.2em;
					font-weight: 900;
				}
			}
		}
	}

	p {
		color: var(--clr-main);
		font-size: clamp(var(--sm), 3vw, var(--h5));
		margin: 0 0 2rem 0;
	}

	.restart-button {
		background: transparent;
		color: var(--clr-main-fade);
		border: 2px solid var(--clr-main-fade);
		border-radius: 0.5rem;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 0.1em;

		&:hover {
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.98);
		}
	}
</style>
