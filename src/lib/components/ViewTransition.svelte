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
	:root {
		background-color: #000;
	}

	:root::view-transition-old(root) {
		animation: 0.75s cubic-bezier(0.37, 0.06, 0.6, 0.91) both out;
		animation-delay: 0.5s;
	}

	:root::view-transition-new(root) {
		animation: 0.75s cubic-bezier(0.37, 0.06, 0.6, 0.91) 1s both in;
		animation-delay: 0.5s;
	}

	@supports (-webkit-touch-callout: none) {
		:root::view-transition-old(root) {
			animation: 0.25s cubic-bezier(0.4, 0, 1, 1) both out-safari;
			animation-delay: 0.5s;
		}

		:root::view-transition-new(root) {
			animation: 0.75s cubic-bezier(0, 0, 0.2, 1) both in-safari;
			animation-delay: 0.5s;
		}
	}

	@keyframes in {
		from {
			opacity: 0.3;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes out {
		from {
			opacity: 1;
		}

		to {
			opacity: 0.3;
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
