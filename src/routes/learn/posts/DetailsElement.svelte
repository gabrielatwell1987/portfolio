<script>
	let { summary, children } = $props();
</script>

<details>
	<summary>{summary}</summary>
	<p>{@render children()}</p>
</details>

<style>
	details {
		margin-block: 2em;

		& summary {
			text-align: center;
			list-style: none;
			cursor: pointer;
			border: none;
			font-weight: bold;
		}
	}
</style>
