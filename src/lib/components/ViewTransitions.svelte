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
		animation: 1s cubic-bezier(0.4, 0, 1, 1) both fade-out;
		/* 1s cubic-bezier(0.4, 0, 0.2, 1) both old; */
	}

	:root::view-transition-new(root) {
		animation: 1s cubic-bezier(0, 0, 0.2, 1) 1s both fade-in;
		/* 1s cubic-bezier(0.4, 0, 0.2, 1) both new; */

		/* transform: translateY(-50px); */
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

	/* @keyframes new {
		from {
			transform: translateY(-50px);
		}

		to {
			transform: translateY(0);
		}
	} */

	/* @keyframes old {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(50px);
		}
	} */
</style>
