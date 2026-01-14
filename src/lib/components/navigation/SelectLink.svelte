<script lang="ts">
	import { goto } from '$app/navigation';

	interface Props {
		path1: string;
		path2: string;
	}

	let { path1, path2 }: Props = $props();
	let isOpen = $state<boolean>(false);
	let selectedLabel = $state<string>('Connect');

	const options = [
		{
			label: 'Hire Me',
			value: path1,
			svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--clr-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
		},
		{
			label: 'Contact',
			value: path2,
			svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9V12M12 15H12.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="var(--clr-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
		}
	];

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option: { label: string; value: string; svg: string }) {
		selectedLabel = option.label;
		isOpen = false;
		const uniqueParam = `t=${Date.now()}`;
		goto(`${option.value}?${uniqueParam}`);
	}

	$effect(() => {
		if (isOpen) {
			const handleClickOutside = (event: MouseEvent) => {
				if (event.target instanceof Element && !event.target.closest('.custom-select')) {
					isOpen = false;
				}
			};
			document.addEventListener('click', handleClickOutside);

			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="custom-select">
	<button
		class="select-button"
		class:open={isOpen}
		onclick={toggleDropdown}
		aria-label="Connect with Gabe"
	>
		{selectedLabel}
		<!-- arrow icon -->
		<svg class="arrow-icon" width="12" height="12" viewBox="0 0 12 12">
			<path
				fill="var(--clr-main)"
				d="M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"
			/>
		</svg>
	</button>

	{#if isOpen}
		<ul class="options-list">
			{#each options as option}
				<li>
					<button type="button" class="option-item" onclick={() => selectOption(option)}>
						<span class="option-icon">{@html option.svg}</span>
						{option.label}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.custom-select {
		position: relative;
		width: max-content;
		margin-top: 1rem;
		min-width: 10em;

		@media (width <= 1085px) {
			margin-top: 0;
		}

		& .select-button {
			background-color: transparent;
			color: var(--clr-main);
			border: 2px solid var(--clr-main);
			border-radius: var(--radius);
			padding: 0.5rem;
			cursor: pointer;
			font-family: var(--bronova);
			font-size: clamp(var(--sm), 1.25vw, var(--h6));
			font-weight: 700;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding-right: 2.5rem;
			min-width: auto;
			transition: none;

			&:focus {
				outline: none;
				border-color: var(--clr-gray);
			}

			& svg {
				position: absolute;
				right: 0.75rem;
			}

			&.open .arrow-icon {
				transform: rotate(0);
			}
		}

		& .arrow-icon {
			transform: rotate(-180deg);
			transition: transform 0.15s ease-out;
		}

		& .options-list {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: var(--clr-invert);
			border: 1px solid var(--clr-main);
			border-radius: var(--radius);
			list-style: none;
			padding: 0;
			margin: 0;
			z-index: 10;

			& li {
				margin: 0;
				padding: 0;

				& .option-item {
					display: flex;
					align-items: center;
					padding: 0.5rem;
					cursor: pointer;
					color: var(--clr-main);
					font-weight: 600;
					letter-spacing: 1px;
					width: 100%;
					background: transparent;
					border: none;
					text-align: left;
					font-family: var(--bronova);
					font-size: clamp(var(--sm), 1.25vw, var(--h6));

					&:hover {
						background-color: var(--clr-gray);
					}

					&:focus,
					&:focus-visible {
						outline: 1px solid var(--clr-main);
						background: transparent;
					}
				}
			}
		}

		& .option-icon {
			width: clamp(1rem, 1.75vw, 1.5rem);
			height: clamp(1rem, 1.75vw, 1.5rem);
			margin-right: 0.5rem;
			margin-bottom: 0.5rem;
			display: inline-block;
		}
	}
</style>
