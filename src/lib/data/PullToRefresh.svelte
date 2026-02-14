<script lang="ts">
	$effect(() => {
		if (typeof window === 'undefined') return;

		const nav = window.navigator as Navigator & { standalone?: boolean };
		const isIOS = /iPad|iPhone|iPod/.test(nav.userAgent);
		const isStandalone =
			window.matchMedia('(display-mode: standalone)').matches || nav.standalone === true;

		if (!isIOS || !isStandalone) return;

		let disposed = false;
		let ptr: { init: (opts: any) => void; destroyAll?: () => void } | null = null;

		(async () => {
			const mod = await import('pulltorefreshjs');
			if (disposed) return;

			ptr = mod.default;
			ptr.init({
				mainElement: 'body',
				iconRefreshing: '<span class="ptr-spinner" aria-hidden="true"></span>',
				instructionsRefreshing: 'Refreshing...',
				shouldPullToRefresh: () => (document.scrollingElement?.scrollTop ?? window.scrollY) <= 0,
				onRefresh: async () => {
					await new Promise((resolve) => setTimeout(resolve, 250));
					window.location.reload();
				}
			});
		})();

		return () => {
			disposed = true;
			ptr?.destroyAll?.();
		};
	});
</script>

<style>
	:global(.ptr-spinner) {
		display: block;
		margin-inline: auto;
		width: 1.2em;
		height: 1.2em;
		border: 2px solid var(--clr-gray);
		border-top-color: var(--clr-light-gray);
		border-radius: 50%;
		animation: ptr-spin 0.65s linear infinite;
		will-change: transform;
		z-index: 55;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.ptr-spinner) {
			animation-duration: 1.2s;
		}
	}

	@keyframes ptr-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
