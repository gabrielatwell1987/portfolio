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
		--ptr-r1: 1.5em;
		--ptr-r2: 1.15em;
		--ptr-r3: 1.4em;
		display: block;
		margin-inline: auto;
		inline-size: 0.65em;
		block-size: 0.65em;
		position: relative;
		text-indent: -9999em;
		border-radius: 50%;
		animation: mulShdSpin 1.1s linear infinite;
		transform: translateZ(0);
		will-change: transform;
		z-index: 55;

		position: absolute;
		inset-inline-start: 50%;
		transform: translateX(-50%) translateZ(0);
		top: 7em;
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
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-main),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray),
				var(--ptr-r3) 0em 0 0em var(--clr-gray),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-gray),
				0em var(--ptr-r3) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-light-gray),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em oklch(from var(--clr-main) 0.5 c h);
		}
		12.5% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em oklch(from var(--clr-main) 0.5 c h),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-main),
				var(--ptr-r3) 0em 0 0em var(--clr-gray),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-gray),
				0em var(--ptr-r3) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-light-gray);
		}
		25% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-light-gray),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em oklch(from var(--clr-main) 0.5 c h),
				var(--ptr-r3) 0em 0 0em var(--clr-main),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-gray),
				0em var(--ptr-r3) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray);
		}
		37.5% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-gray),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-light-gray),
				var(--ptr-r3) 0em 0 0em oklch(from var(--clr-main) 0.5 c h),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-main),
				0em var(--ptr-r3) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray);
		}
		50% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-gray),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray),
				var(--ptr-r3) 0em 0 0em var(--clr-light-gray),
				var(--ptr-r2) var(--ptr-r2) 0 0em oklch(from var(--clr-main) 0.5 c h),
				0em var(--ptr-r3) 0 0em var(--clr-main),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray);
		}
		62.5% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-gray),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray),
				var(--ptr-r3) 0em 0 0em var(--clr-gray),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-light-gray),
				0em var(--ptr-r3) 0 0em oklch(from var(--clr-main) 0.5 c h),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-main),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray);
		}
		75% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-gray),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray),
				var(--ptr-r3) 0em 0 0em var(--clr-gray),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-gray),
				0em var(--ptr-r3) 0 0em var(--clr-light-gray),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em oklch(from var(--clr-main) 0.5 c h),
				calc(-1 * var(--ptr-r1)) 0em 0 0em var(--clr-main),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray);
		}
		87.5% {
			box-shadow:
				0em calc(-1 * var(--ptr-r1)) 0em 0em var(--clr-gray),
				var(--ptr-r2) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-gray),
				var(--ptr-r3) 0em 0 0em var(--clr-gray),
				var(--ptr-r2) var(--ptr-r2) 0 0em var(--clr-gray),
				0em var(--ptr-r3) 0 0em var(--clr-gray),
				calc(-1 * var(--ptr-r2)) var(--ptr-r2) 0 0em var(--clr-light-gray),
				calc(-1 * var(--ptr-r1)) 0em 0 0em oklch(from var(--clr-main) 0.5 c h),
				calc(-1 * var(--ptr-r2)) calc(-1 * var(--ptr-r2)) 0 0em var(--clr-main);
		}
	}
</style>
