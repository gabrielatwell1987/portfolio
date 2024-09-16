<script>
	export let title;
</script>

<span>{title}:</span>

<style>
	span {
		font-weight: bold;
		font-size: clamp(1.25rem, 2vw, 2rem);
		color: var(--white);
		margin-right: 0.5rem;
		text-wrap: balance;
	}
</style>
