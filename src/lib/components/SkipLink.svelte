<script>
</script>

<a class="skip-link" href="#main-content"
	>Skip to Main <span class="visually-hidden">Content</span></a
>

<style>
	.skip-link {
		position: absolute;
		top: 1.2em;
		left: 1em;
		border-radius: 5px;
		background-color: transparent;
		color: var(--dark-pale);
		padding: 0.5rem 0.75rem;
		position: absolute;
		z-index: 100;
		text-decoration: none;
		font-size: clamp(0.8rem, 1vw, 0.9rem);
		font-weight: 700;
	}

	.skip-link:not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		overflow: hidden;
		width: 1px;
		height: 1px;
		white-space: nowrap;
	}

	.skip-link:focus {
		outline: 3px solid var(--dark-pale);
		transform: scale(1.05);
		top: 1.5rem;
		transition: top 0.2s ease-in-out;
	}
</style>
