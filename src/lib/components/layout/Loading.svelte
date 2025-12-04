<script>
	import LoadingSkeleton from './LoadingSkeleton.svelte';
	// import LoadingText from './LoadingText.svelte';
</script>

<div class="loading-wrapper">
	<LoadingSkeleton />
	<!-- <LoadingText /> -->
</div>

<style>
	.loading-wrapper {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 9999;
	}
</style>
