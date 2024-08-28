<script>
	export let title;
</script>

<span>{title}</span>

<style>
	span {
		font-weight: bold;
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		color: var(--off-white);
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		text-decoration-color: var(--sky);
	}
</style>
