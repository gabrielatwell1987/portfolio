<script>
	// import ShaderTest from '$lib/shaders/test/ShaderTest.svelte';
	import CursorImage from '$lib/shaders/test/CursorImage.svelte';
</script>

<div class="content">
	<!-- <ShaderTest /> -->
	<CursorImage />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
</style>
