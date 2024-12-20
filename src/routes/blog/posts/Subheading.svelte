<script>
	let { subheading } = $props();
</script>

<p>{subheading}</p>

<style>
	p {
		font-size: clamp(1.25rem, 1.25vw, 1.75rem);
		font-weight: 800;
		font-family: var(--bronova);
		line-height: 1.5;
		text-indent: 1rem;
		color: var(--purple);
		display: inline;
		margin-left: clamp(1rem, 2vw, 3rem);
		margin-right: clamp(0.5rem, 3vw, 3rem);
	}
</style>
