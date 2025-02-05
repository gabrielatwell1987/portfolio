<script>
	let { subheading } = $props();
</script>

<p>{subheading}</p>

<style>
	p {
		font-size: clamp(1.25rem, 1.5vw, 2rem);
		font-weight: 800;
		font-family: var(--bronova);
		line-height: 1.5;
		text-indent: 1rem;
		color: var(--text-blue);
		margin-left: clamp(0.1em, 10vw, 5.5em);
	}
</style>
