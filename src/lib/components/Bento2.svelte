<script>
</script>

<div id="bento-div" class="bt-div">
	<div class="bento-item bento-item-1">
		<h2>This page contains everything you need to know about me</h2>
	</div>
	<div class="bento-item bento-item-2">
		<h3>Contact me if you have any questions!</h3>
	</div>

	<div class="bento-item bento-item-3">
		<a href="/"><img src="/icons/portfolio_logo.svg" alt="" /></a>
	</div>
	<div class="bento-item bento-item-4">
		<a href="/projects"><img src="/icons/money-icon.svg" alt="" /></a>
	</div>
</div>

<style>
	:root {
		--space-xs: 0.25rem;
		--space-sm: 1rem;
		--space-md: 1.25rem;
		--space-lg: 4rem;

		--border-radius: 0.75rem;
		--transition-fast: 0.5s ease-in-out;
	}

	h2 {
		font-size: 3rem;
		font-weight: 800;
		color: var(--purple);
		text-align: center;
		margin-bottom: 2rem;
		padding: 2rem;
		font-family: var(--anta);
	}

	h3 {
		font-size: 5rem;
		font-weight: 600;
		color: var(--smoke);
		text-align: center;
		margin-bottom: 2rem;
		padding: 2rem;
		font-family: var(--mono);
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}

	#bento-div {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		grid-auto-rows: 35rem; /* 560px */
		gap: var(--space-sm);
		padding: var(--space-sm);
	}

	.bento-item {
		overflow: hidden;
		border-radius: var(--border-radius);
		border: 3px solid var(--sky);
	}
	.bento-item-1 {
		grid-column: span 4;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bento-item-2 {
		grid-column: span 6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bento-item-3 {
		grid-column: span 6;
	}
	.bento-item-4 {
		grid-column: span 4;
		/* background: var(--black); */
	}

	.bento-item-4 img {
		scale: 0.65;
	}

	.bento-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-fast);
	}

	.bento-item:hover img {
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		#bento-div {
			margin-top: 15%;
		}

		.bt-div,
		#bento-div {
			grid-template-columns: repeat(2, 1fr);
		}

		.bento-item-1,
		.bento-item-2,
		.bento-item-3,
		.bento-item-4 {
			grid-column: span 2;
		}
		.bento-item-3 img {
			object-fit: contain;
		}

		h2 {
			font-size: 2.5rem;
			font-weight: 800;
			color: var(--purple);
			text-align: center;
			margin-bottom: 2rem;
			padding: 2rem;
			font-family: var(--anta);
		}

		h3 {
			font-size: 3rem;
			font-weight: 600;
			color: var(--off-white);
			text-align: center;
			margin-bottom: 2rem;
			padding: 2rem;
			font-family: var(--mono);
		}
	}
</style>
