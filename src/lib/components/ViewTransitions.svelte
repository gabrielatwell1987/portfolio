<script>
	import { onNavigate } from '$app/navigation';

	// view transition
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => new Promise(resolve));
		});
	});
</script>

<style>
	:root::view-transition-old(root) {
		animation:
			1s cubic-bezier(0.4, 0, 1, 1) both fade-out,
			1s cubic-bezier(0.4, 0, 1, 1) both scale-out;
	}

	:root::view-transition-new(root) {
		animation:
			1s cubic-bezier(0, 0, 0.2, 1) 1s both fade-in,
			1s cubic-bezier(0, 0, 0.2, 1) 1s both scale-in;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	@keyframes scale-in {
		from {
			scale: 0.98;
		}

		to {
			scale: 1;
		}
	}

	@keyframes scale-out {
		from {
			scale: 1;
		}

		to {
			scale: 0.98;
		}
	}
</style>
