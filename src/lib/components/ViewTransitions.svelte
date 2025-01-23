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
	:root {
		background-color: #000;
	}

	:root::view-transition-old(root) {
		background-color: #000;
		animation:
			1s cubic-bezier(0.4, 0, 1, 1) both fade-out,
			1s cubic-bezier(0.4, 0, 1, 1) both out;
	}

	:root::view-transition-new(root) {
		background-color: #000;
		animation:
			1s cubic-bezier(0, 0, 0.2, 1) 1s both fade-in,
			1s cubic-bezier(0, 0, 0.2, 1) 1s both in;
	}

	@keyframes in {
		from {
			scale: 0.98;
			opacity: 0.5;
		}

		to {
			scale: 1;
			opacity: 1;
		}
	}

	@keyframes out {
		from {
			scale: 1;
			opacity: 1;
		}

		to {
			scale: 0.98;
			opacity: 0.5;
		}
	}
</style>
