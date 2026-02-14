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
				onRefresh() {
					window.location.reload();
				},
				shouldPullToRefresh: () => (document.scrollingElement?.scrollTop ?? window.scrollY) <= 0
			});
		})();

		return () => {
			disposed = true;
			ptr?.destroyAll?.();
		};
	});
</script>

<style>
</style>
