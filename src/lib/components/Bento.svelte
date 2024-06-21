<script></script>

<div id="bento-div" class="bt-div">
	<div class="bento-item bento-item-1">
		<h2>Space One</h2>
	</div>

	<div class="bento-item bento-item-2">
		<h2>Space Two</h2>
	</div>

	<div class="bento-item bento-item-3">
		<h2>Space Three</h2>
	</div>

	<div class="bento-item bento-item-4">
		<h2>Space Four</h2>
	</div>

	<div class="bento-item bento-item-5">
		<h2>Space Five</h2>
	</div>
</div>

<style>
	:root {
		--space-xs: 0.25rem;
		--space-sm: 1rem;
		--space-md: 1.25rem;
		--space-lg: 4rem;

		--border-radius: 0.375rem;
		--transition-fast: 0.5s ease-in-out;
	}

	#bento-div {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		grid-auto-rows: 20rem;
		gap: var(--space-sm);
		padding: var(--space-sm);
	}

	.bento-item {
		overflow: hidden;
		border-radius: var(--border-radius);
		border: 2px solid var(--white);
	}
	.bento-item-1,
	.bento-item-2,
	.bento-item-4 {
		grid-column: span 4;
	}

	.bento-item-3 {
		grid-column: span 4;
		grid-row: span 2;
	}

	.bento-item-5 {
		grid-column: span 4;
	}

	/* .bento-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-fast);
	}

	.bento-item:hover img {
		transform: scale(1.1);
	} */

	h2 {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	@media (min-width: 768px) {
		.bento-item-1 {
			grid-column: span 3;
		}
		.bento-item-2 {
			grid-column: span 5;
		}

		.bento-item-4 {
			grid-column: span 5;
		}
		.bento-item-5 {
			grid-column: span 3;
		}
	}
</style>
