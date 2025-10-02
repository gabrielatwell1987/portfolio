<script>
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';
	import { browser } from '$app/environment';

	let theme = $state('dark');
	let themeStatus = $state('');
	let buttonElement = $state();

	function toggle() {
		if (!browser) return false;

		const root = document.documentElement;

		if (theme === 'light') {
			theme = 'dark';
			root.classList.add('dark');
			root.classList.remove('light');
		} else {
			theme = 'light';
			root.classList.add('light');
			root.classList.remove('dark');
		}

		themeStatus = `Switched to ${theme} theme`;

		setTimeout(() => {
			themeStatus = '';
		}, 2000);

		return false;
	}

	$effect(() => {
		if (!browser || !buttonElement) return;

		function handleGlobalClick(event) {
			if (buttonElement.contains(event.target)) {
				event.preventDefault();
				event.stopPropagation();
				event.stopImmediatePropagation();
				toggle();
			}
		}
	});

	// Initialize theme state
	$effect(() => {
		if (!browser) return;

		const root = document.documentElement;
		const isAndroid = /android/i.test(navigator.userAgent);

		if (root.classList.contains('light')) {
			theme = 'light';
		} else if (root.classList.contains('dark')) {
			theme = 'dark';
		} else if (isAndroid) {
			theme = 'dark';
			root.classList.add('dark');
			root.classList.remove('light');
		}
	});
</script>

<A11yAnnouncer message={themeStatus} />

<button
	bind:this={buttonElement}
	onclick={toggle}
	type="button"
	role="switch"
	aria-label="Toggle between light and dark theme"
	aria-checked={theme === 'light'}
	style="position: relative; touch-action: manipulation; pointer-events: auto;"
	data-debug="theme-toggle"
>
	{#if theme === 'light'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-20 0 414 512"
			style="width: 1.75rem; pointer-events: none;"
			class="moon"
		>
			<title>Switch to Dark Mode</title>
			<path
				d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
				fill="var(--clr-blue)"
				stroke="var(--clr-inverted)"
				stroke-width="10"
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			style="width: 1.75rem; pointer-events: none;"
			class="sun"
		>
			<title>Switch to Light Mode</title>
			<path
				d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
				fill="var(--sun)"
			/>
		</svg>
	{/if}
</button>

<style>
	button {
		background: transparent;
		border: none;
		border-radius: 5px;
		color: var(--clr-main);
		font-size: clamp(1.5rem, 2vw, 2.25rem);
		letter-spacing: 3px;
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		z-index: 15;
		outline: none;
		cursor: pointer;
		padding: 0.75rem;
		min-width: 3rem;
		min-height: 3rem;

		&:hover {
			text-shadow: 0 0 1px var(--smoke);
			transition: all 0.35s ease-out;
		}

		&:active {
			background: inherit;
			color: var(--clr-main);
		}

		&:focus,
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			outline-offset: 1px;
			background: transparent;
		}

		& svg {
			font-weight: 800;

			@media (width >= 750px) {
				padding-top: 1rem;
			}

			@media (width >= 990px) {
				padding-top: 1rem;
			}
		}
	}
</style>
