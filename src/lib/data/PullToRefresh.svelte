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

<span class="ptr-spinner"></span>

<style>
	:global(.ptr-spinner) {
		display: block;
		margin-inline: auto;
		margin-top: 7em;
		width: 0.75em;
		height: 0.75em;
		position: relative;
		text-indent: -9999em;
		border-radius: 50%;
		animation: mulShdSpin 1.1s linear infinite;
		transform: translateZ(0);
		will-change: transform;
		z-index: 55;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.ptr-spinner) {
			animation-duration: 1.2s;
		}
	}

	@keyframes mulShdSpin {
		0%,
		100% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-main),
				1.8em -1.8em 0 0em var(--clr-gray),
				2.5em 0em 0 0em var(--clr-gray),
				1.75em 1.75em 0 0em var(--clr-gray),
				0em 2.5em 0 0em var(--clr-gray),
				-1.8em 1.8em 0 0em var(--clr-gray),
				-2.6em 0em 0 0em var(--clr-light-gray),
				-1.8em -1.8em 0 0em oklch(from var(--clr-main) 0.5 c h);
		}
		12.5% {
			box-shadow:
				0em -2.6em 0em 0em oklch(from var(--clr-main) 0.5 c h),
				1.8em -1.8em 0 0em var(--clr-main),
				2.5em 0em 0 0em var(--clr-gray),
				1.75em 1.75em 0 0em var(--clr-gray),
				0em 2.5em 0 0em var(--clr-gray),
				-1.8em 1.8em 0 0em var(--clr-gray),
				-2.6em 0em 0 0em var(--clr-gray),
				-1.8em -1.8em 0 0em var(--clr-light-gray);
		}
		25% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-light-gray),
				1.8em -1.8em 0 0em oklch(from var(--clr-main) 0.5 c h),
				2.5em 0em 0 0em var(--clr-main),
				1.75em 1.75em 0 0em var(--clr-gray),
				0em 2.5em 0 0em var(--clr-gray),
				-1.8em 1.8em 0 0em var(--clr-gray),
				-2.6em 0em 0 0em var(--clr-gray),
				-1.8em -1.8em 0 0em var(--clr-gray);
		}
		37.5% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-gray),
				1.8em -1.8em 0 0em var(--clr-light-gray),
				2.5em 0em 0 0em oklch(from var(--clr-main) 0.5 c h),
				1.75em 1.75em 0 0em var(--clr-main),
				0em 2.5em 0 0em var(--clr-gray),
				-1.8em 1.8em 0 0em var(--clr-gray),
				-2.6em 0em 0 0em var(--clr-gray),
				-1.8em -1.8em 0 0em var(--clr-gray);
		}
		50% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-gray),
				1.8em -1.8em 0 0em var(--clr-gray),
				2.5em 0em 0 0em var(--clr-light-gray),
				1.75em 1.75em 0 0em oklch(from var(--clr-main) 0.5 c h),
				0em 2.5em 0 0em var(--clr-main),
				-1.8em 1.8em 0 0em var(--clr-gray),
				-2.6em 0em 0 0em var(--clr-gray),
				-1.8em -1.8em 0 0em var(--clr-gray);
		}
		62.5% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-gray),
				1.8em -1.8em 0 0em var(--clr-gray),
				2.5em 0em 0 0em var(--clr-gray),
				1.75em 1.75em 0 0em var(--clr-light-gray),
				0em 2.5em 0 0em oklch(from var(--clr-main) 0.5 c h),
				-1.8em 1.8em 0 0em var(--clr-main),
				-2.6em 0em 0 0em var(--clr-gray),
				-1.8em -1.8em 0 0em var(--clr-gray);
		}
		75% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-gray),
				1.8em -1.8em 0 0em var(--clr-gray),
				2.5em 0em 0 0em var(--clr-gray),
				1.75em 1.75em 0 0em var(--clr-gray),
				0em 2.5em 0 0em var(--clr-light-gray),
				-1.8em 1.8em 0 0em oklch(from var(--clr-main) 0.5 c h),
				-2.6em 0em 0 0em var(--clr-main),
				-1.8em -1.8em 0 0em var(--clr-gray);
		}
		87.5% {
			box-shadow:
				0em -2.6em 0em 0em var(--clr-gray),
				1.8em -1.8em 0 0em var(--clr-gray),
				2.5em 0em 0 0em var(--clr-gray),
				1.75em 1.75em 0 0em var(--clr-gray),
				0em 2.5em 0 0em var(--clr-gray),
				-1.8em 1.8em 0 0em var(--clr-light-gray),
				-2.6em 0em 0 0em oklch(from var(--clr-main) 0.5 c h),
				-1.8em -1.8em 0 0em var(--clr-main);
		}
	}
</style>
