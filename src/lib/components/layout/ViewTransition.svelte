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

	::view-transition-old(builds) {
		animation-duration: 0.6s;
		opacity: 0;
		mix-blend-mode: normal;
	}

	::view-transition-new(builds) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		mix-blend-mode: normal;
	}

	::view-transition-group(learn-heading) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
