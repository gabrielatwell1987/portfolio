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
		animation: 0.75s cubic-bezier(0.4, 0, 1, 1) both out;
	}

	:root::view-transition-new(root) {
		background-color: #000;
		animation: 0.75s cubic-bezier(0, 0, 0.2, 1) 1s both in;
	}

	@supports (-webkit-touch-callout: none) {
		:root::view-transition-old(root) {
			background-color: #000;
			animation: 0.25s cubic-bezier(0.4, 0, 1, 1) both out-safari;
		}

		:root::view-transition-new(root) {
			background-color: #000;
			animation: 1s cubic-bezier(0, 0, 0.2, 1) 1s both in-safari;
		}
	}

	@keyframes in {
		from {
			scale: 0.97;
			opacity: 0.1;
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
			scale: 0.97;
			opacity: 0.1;
		}
	}

	@keyframes in-safari {
		from {
			opacity: 0.65;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes out-safari {
		from {
			opacity: 1;
		}

		to {
			opacity: 0.65;
		}
	}
</style>
