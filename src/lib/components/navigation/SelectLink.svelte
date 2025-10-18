<script>
	import { goto } from '$app/navigation';

	let { path1, path2 } = $props();
	let selectValue = $state('');

	function handleSelect(event) {
		const selectedRoute = event.target.value;

		if (selectedRoute) {
			const uniqueParam = `t=${Date.now()}`;

			selectValue = '';

			goto(`${selectedRoute}?${uniqueParam}`);

			selectValue = '';
		}
	}
</script>

<select onchange={handleSelect} bind:value={selectValue} aria-label="Connect with Gabe">
	<option value="" disabled selected>Connect</option>
	<option value={path1}>Hire Me</option>
	<option value={path2}>Contact Me</option>
</select>

<style>
	select {
		background-color: transparent;
		color: var(--clr-main);
		border: 2px solid var(--clr-main);
		border-radius: var(--radius);
		padding: 0.5rem;
		cursor: pointer;
		font-family: var(--bronova);
		font-size: clamp(var(--sm), 1.25vw, var(--h6));
		font-weight: 700;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a7710c' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 0.75rem center;
		padding-right: 2.5rem;
		min-width: auto;
		width: max-content;
		margin-top: 1rem;
		transition: none;

		@media (width <= 1085px) {
			margin-top: 0;
		}

		&:focus {
			outline: none;
			border-color: var(--clr-gray);
			box-shadow: none;
		}

		& option {
			background-color: var(--clr-invert);
			color: var(--clr-main);
			padding: 0.25rem;
			letter-spacing: 1px;
			font-weight: 500;

			&:disabled {
				font-weight: 600;
			}
		}
	}
</style>
