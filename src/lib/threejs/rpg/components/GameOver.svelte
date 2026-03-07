<script lang="ts">
	let { isGameOver = false, onRestart } = $props();
</script>

{#if isGameOver}
	<div class="game-over-overlay">
		<div class="game-over-container">
			<h1>GAME OVER</h1>
			<p>You were defeated...</p>
			<button class="restart-button" onclick={onRestart}>Restart</button>
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
		backdrop-filter: blur(4px);
	}

	.game-over-container {
		background: transparent;
		border: 3px solid var(--fail);
		border-radius: 1rem;
		padding: 3rem;
		text-align: center;
		max-width: 500px;
	}

	h1 {
		color: var(--fail);
		font-size: 3rem;
		margin: 0 0 1rem 0;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-weight: 900;
	}

	p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.25rem;
		margin: 0 0 2rem 0;
	}

	.restart-button {
		background: transparent;
		color: white;
		border: 2px solid var(--fail);
		border-radius: 0.5rem;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.restart-button:hover {
		transform: scale(1.05);
	}

	.restart-button:active {
		transform: scale(0.98);
	}
</style>
