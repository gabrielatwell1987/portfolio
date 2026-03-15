<script lang="ts">
	import '../app.css'
	import '@picocss/pico/css/pico.min.css'
	import type { Snippet } from 'svelte'
	import { createLoadingContext } from '$lib/data/context/loading.svelte'
	import { createThemeContext } from '$lib/data/context/theme.svelte'
	import NavBar from '$lib/components/navigation/NavBar.svelte'
	import Footer from '$lib/components/navigation/Footer.svelte'
	import Loading from '$lib/components/layout/Loading.svelte'
	import SkipLink from '$lib/components/layout/SkipLink.svelte'
	import ViewTransition from '$lib/components/layout/view-transitions/ViewTransition.svelte'
	import PullToRefresh from '$lib/data/PullToRefresh.svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
	const loading = createLoadingContext()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const theme = createThemeContext()

	// service worker
	$effect(() => {
		if (typeof window === 'undefined') return

		const abortController = new AbortController()

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/service-worker.js', { type: 'module' })
				.then((registration) => {
					registration.addEventListener(
						'updatefound',
						() => {
							const newWorker = registration.installing
							if (newWorker) {
								newWorker.addEventListener(
									'statechange',
									() => {
										if (
											newWorker &&
											newWorker.state === 'installed' &&
											navigator.serviceWorker.controller
										) {
											newWorker.postMessage({ type: 'SKIP_WAITING' })
										}
									},
									{ signal: abortController.signal },
								)
							}
						},
						{ signal: abortController.signal },
					)
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error)
				})
		}

		return () => abortController.abort()
	})

	$effect(() => {
		loading.isLoaded = true
	})

	// copy button for code blocks
	$effect(() => {
		const preElements = document.querySelectorAll('pre')

		preElements.forEach((pre) => {
			pre.style.setProperty('anchor-name', '--code-block')

			const wrapper = document.createElement('div')
			wrapper.style.position = 'relative'
			pre.parentNode?.insertBefore(wrapper, pre)
			wrapper.appendChild(pre)

			const button = document.createElement('button')
			button.textContent = 'Copy'
			button.className = 'copy-btn'
			button.onclick = () => {
				const code = pre.textContent || ''
				navigator.clipboard.writeText(code).then(() => {
					button.textContent = '✓ Copied!'
					setTimeout(() => (button.textContent = 'Copy'), 2000)
				})
			}
			wrapper.appendChild(button)
		})
	})
</script>

<PullToRefresh />
<SkipLink />
<ViewTransition />

<!-- loading animation -->
{#if !loading.isLoaded}
	<Loading />
{/if}

<NavBar />
<main style="visibility: {loading.isLoaded ? 'visible' : 'hidden'};">
	<div id="main-content" tabindex="-1">
		{@render children()}
	</div>

	<Footer />
</main>

<style>
	:global(body) {
		width: 100%;
		height: 100%;
		min-height: 100vh;
	}

	:global(.copy-btn) {
		position: absolute;
		position-anchor: --code-block;
		top: calc(anchor(top) - 0.5em);
		right: calc(anchor(right) - 0.5em);

		inline-size: fit-content;
		block-size: fit-content;
		padding: 0.25em 0.75em;
		background: var(--clr-invert);
		border: 1px solid var(--clr-main);
		color: var(--clr-main);
		border-radius: var(--radius);
		cursor: pointer;
		font-size: clamp(var(--sm), 0.875rem, var(--h5));
		font-weight: 400;
		z-index: 10;
		transition: font-weight 0.2s ease-out;

		@media (width <= 768px) {
			right: calc(anchor(right) - 0.2em);
		}

		&:hover {
			font-weight: 600;
		}
	}

	main {
		min-height: 100vh;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: clip;
		opacity: 1;
		transition: opacity 0.3s ease-out;
	}

	#main-content {
		min-height: calc(100vh - 120px);
		will-change: auto;
	}
</style>
