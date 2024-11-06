<script>
	/** @type {{title: any}} */
	let { title } = $props();
</script>

<span>{title}:</span>

<style>
	span {
		font-weight: bold;
		font-size: clamp(1.25rem, 1.75vw, 2rem);
		color: var(--white);
		margin-right: 0.5rem;
		text-wrap: balance;
	}
</style>
