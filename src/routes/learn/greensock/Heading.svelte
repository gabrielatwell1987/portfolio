<script>
	/** @type {{title: any}} */
	let { title } = $props();
</script>

<span>{title}:</span>

<style>
	span {
		font-family: var(--orbitron);
		font-size: clamp(1.2rem, 1.5vw, 2rem);
		font-weight: 900;
		line-height: 1.75;
		color: var(--text-gray);
		margin-right: 0.5rem;
		text-wrap: balance;
	}
</style>
