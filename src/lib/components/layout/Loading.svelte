<script>
	import LoadingSkeleton from './LoadingSkeleton.svelte';
</script>

<main class="container">
	<LoadingSkeleton />
</main>

<style>
	.container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
	}
</style>
