<script>
	let { subheading } = $props();
</script>

<p>{subheading}</p>

<style>
	p {
		font-size: clamp(var(--h6), 1.5vw, var(--h3));
		font-weight: 800;
		font-family: var(--bronova);
		line-height: 1.5;
		text-indent: 1rem;
		color: var(--clr-blue);
		margin-left: clamp(0.1em, 10vw, 5.5em);
	}
</style>
