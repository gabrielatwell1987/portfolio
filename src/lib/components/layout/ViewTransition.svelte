<script>
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<style>
	@view-transition {
		navigation: auto;
	}

	::view-transition-old(root),
	::view-transition-new(root) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-group(builds) {
		animation-duration: 0.1s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	::view-transition-old(builds),
	::view-transition-new(builds) {
		/* Smooth cross-fade between NavLink and Title */
		animation-duration: 0.095s;
		mix-blend-mode: normal;
	}
</style>
