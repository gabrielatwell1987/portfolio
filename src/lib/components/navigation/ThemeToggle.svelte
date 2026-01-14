<script lang="ts">
	import A11yAnnouncer from '$lib/components/layout/A11yAnnouncer.svelte';
	import { useTheme } from '$lib/data/context/theme.svelte';

	const theme = useTheme();
	let themeStatus = $state<string>('');

	function toggle() {
		const newTheme = theme.toggle();
		themeStatus = `Switched to ${newTheme} theme`;

		setTimeout(() => {
			themeStatus = '';
		}, 2000);
	}
</script>

<A11yAnnouncer message={themeStatus} />

<button
	onclick={toggle}
	type="button"
	role="switch"
	aria-label="Toggle between light and dark theme"
	aria-checked={theme.isLight}
	style="position: relative; touch-action: manipulation; pointer-events: auto;"
	data-debug="theme-toggle"
>
	{#if theme.isLight}
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style="width: 2.2em; height: 2.2em; pointer-events: none;"
		>
			<title>Switch to Dark Mode</title>
			<path
				d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
				stroke="var(--clr-blue)"
				fill="var(--clr-invert)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{:else}
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style="width: 2.2em; height: 2.2em; pointer-events: none;"
		>
			<title>Switch to Light Mode</title>
			<path
				d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
				fill="var(--clr-invert)"
				stroke="var(--sun)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
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
			filter: blur(2px);
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
