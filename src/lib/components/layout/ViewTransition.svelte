<script>
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	// view transition
	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => new Promise(resolve));
		});
	});

	// Theme transition function with circular reveal
	function transitionTheme() {
		if (!browser || !document.startViewTransition) {
			document.body.classList.toggle('light');
			return;
		}

		// Temporarily disable title transitions during theme change
		const titleElement = document.getElementById('title');
		if (titleElement) {
			titleElement.style.viewTransitionName = 'none';
		}

		document
			.startViewTransition(() => {
				document.body.classList.toggle('light');
			})
			.finished.then(() => {
				// Re-enable title transitions after theme change
				if (titleElement) {
					titleElement.style.viewTransitionName = 'page-title';
				}
			});
	}

	// Expose the transition function globally
	if (browser) {
		globalThis.transitionTheme = transitionTheme;
	}
</script>

<style>
	@view-transition {
		navigation: auto;
	}

	/* Exclude elements that shouldn't transition during theme changes */
	:global(.exclude-transition) {
		view-transition-name: none;
	}

	/* Theme transition animations */
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 0.6s;
		animation-timing-function: ease-in-out;
	}

	:global(::view-transition-old(root)) {
		z-index: 1;
	}

	:global(::view-transition-new(root)) {
		z-index: 999;
		animation-name: theme-reveal;
	}

	/* Circular reveal animation */
	@keyframes theme-reveal {
		from {
			clip-path: circle(0% at 50% 0%);
		}
		to {
			clip-path: circle(150% at 50% 0%);
		}
	}

	/* Alternative: reveal from toggle button position */
	@keyframes theme-reveal-from-toggle {
		from {
			clip-path: circle(0% at 95% 5%);
		}
		to {
			clip-path: circle(150% at 95% 5%);
		}
	}

	/* For different screen sizes, you can adjust the center point */
	@media (max-width: 768px) {
		@keyframes theme-reveal {
			from {
				clip-path: circle(0% at 90% 8%);
			}
			to {
				clip-path: circle(150% at 90% 8%);
			}
		}
	}
</style>
