<script>
	import { onNavigate } from '$app/navigation';

	// view transition
	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => new Promise(resolve));
		});
	});
</script>

<style>
	@view-transition {
		navigation: auto;
	}
</style>
