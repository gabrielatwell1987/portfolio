<script>
	/** @type {{title: any}} */
	let { title } = $props();
</script>

<span>{title}:</span>

<style>
	span {
		font-family: var(--orbitron);
		font-size: clamp(var(--h6), 1.5vw, var(--h3));
		line-height: 1.75;
		color: var(--clr-main);
		margin-right: 0.5rem;
		text-wrap: balance;
	}
</style>
