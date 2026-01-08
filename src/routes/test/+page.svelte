<script>
	// import ShaderTest from '$lib/shaders/test/ShaderTest.svelte';
	import CursorTest from '$lib/shaders/test/CursorTest.svelte';
</script>

<div class="content">
	<h1>shaders</h1>

	<!-- {#if param === 'shader-test'}
		<ShaderTest />
	{:else if param === 'cursor'}
		<CursorTest />
	{:else}
		<p>No shader test found for parameter: {param}</p>
	{/if} -->

	<!-- <ShaderTest /> -->
	<CursorTest />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;

		h1 {
			text-align: center;
		}

		/* p {
			text-align: center;
			font-size: 1.2rem;
			color: red;
		} */
	}
</style>
