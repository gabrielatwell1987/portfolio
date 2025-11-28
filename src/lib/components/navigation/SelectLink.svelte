<script>
	import { goto } from '$app/navigation';

	let { path1, path2 } = $props();
	let isOpen = $state(false);
	let selectedLabel = $state('Connect');

	const options = [
		{ label: 'Hire Me', value: path1, icon: '/icons/contactIcon.svg' },
		{ label: 'Contact', value: path2, icon: '/icons/contactIcon.svg' }
	];

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option) {
		selectedLabel = option.label;
		isOpen = false;
		const uniqueParam = `t=${Date.now()}`;
		goto(`${option.value}?${uniqueParam}`);
	}

	$effect(() => {
		if (isOpen) {
			const handleClickOutside = (event) => {
				if (!event.target.closest('.custom-select')) {
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
		<!-- Custom arrow icon -->
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
						<img src={option.icon} alt="" class="option-icon" />
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
				}
			}
		}

		& .option-icon {
			width: clamp(0.75rem, 1.5vw, 1.2rem);
			height: clamp(0.75rem, 1.5vw, 1.2rem);
			margin-right: 0.5rem;
		}
	}
</style>
