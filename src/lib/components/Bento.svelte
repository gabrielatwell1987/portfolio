<script></script>

<div id="bento-div" class="bt-div">
	<div class="bento-item bento-item-1">
		<img src="/logos/ui.png" alt="" />
	</div>
	<div class="bento-item bento-item-2">
		<img src="/logos/designs.png" alt="" />
	</div>
	<div class="bento-item bento-item-3">
		<img src="/logos/gorilla.png" alt="" />
	</div>
	<div class="bento-item bento-item-4">
		<img src="/logos/triangle.png" alt="" />
	</div>
	<div class="bento-item bento-item-5">
		<img src="/logos/heart-skull.png" alt="" />
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

	/* .bt-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 4rem;
} */

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

	/* .bento-item-6 {
  grid-column: span 4;
} */

	.bento-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-fast);
	}

	.bento-item:hover img {
		transform: scale(1.1);
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
