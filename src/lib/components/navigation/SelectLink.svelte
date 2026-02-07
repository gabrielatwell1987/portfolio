<script lang="ts">
	import { goto } from '$app/navigation';

	let selected = $state('Connect');

	const handleChange = () => {
		if (selected === 'Hire Me') goto('/hire');
		else if (selected === 'Contact') goto('/contact');
		selected = 'Connect';
	};
</script>

<select class="custom-select" bind:value={selected} onchange={handleChange}>
	<option disabled selected>Connect</option>
	<option>Hire Me</option>
	<option>Contact</option>
</select>

<style>
	.custom-select {
		font-family: var(--bronova-bold);
		max-inline-size: fit-content;
		inline-size: 100%;
		font-variant-emoji: text;
		background-color: var(--clr-invert-fade);
		color: var(--clr-main);
		appearance: none;
		transition: color 0s linear;
		border: 2px solid var(--clr-main);

		&:focus,
		&:focus-within {
			outline: none;
			box-shadow: none;
			border-color: var(--clr-main);
		}

		& option {
			font-family: var(--bronova-bold);
			color: var(--clr-main);
		}
	}
</style>
