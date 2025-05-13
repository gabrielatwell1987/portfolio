<script>
	import { goto } from '$app/navigation';

	let { path1, path2 } = $props();
	let selectValue = $state('');

	function handleSelect(event) {
		const selectedRoute = event.target.value;

		if (selectedRoute) {
			// Append a unique query parameter to force navigation
			const uniqueParam = `t=${Date.now()}`;

			selectValue = '';

			goto(`${selectedRoute}?${uniqueParam}`);

			// Reset the select value to allow re-selection
			selectValue = '';
		}
	}
</script>

<select onchange={handleSelect} bind:value={selectValue}>
	<option value="" disabled selected>Select</option>
	<option value={path1}>Hire</option>
	<option value={path2}>Contact</option>
</select>

<style>
	select {
		background-color: transparent;
		color: var(--text-color);
		border: 1px solid var(--text-color);
		border-radius: var(--radius);
		padding: 0.5rem;
		cursor: pointer;
		font-family: var(--bronova);
		font-size: clamp(0.9rem, 1.25vw, 1.15rem);
		font-weight: 700;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a7710c' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 0.75rem center;
		padding-right: 2.5rem;
		margin-top: 1rem;
		min-width: 4.4em;

		&:focus {
			outline: none;
			border-color: var(--text-pale);
			box-shadow: none;
		}

		& option {
			background-color: var(--text-anti);
			color: var(--text-color);
			padding: 0.25rem;
			letter-spacing: 1px;
			font-weight: 500;
		}
	}
</style>
