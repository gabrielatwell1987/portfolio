<script>
	import { fade } from 'svelte/transition';

	export let open = false;
	export let ariaLabel = 'menu';

	function toggleMenu() {
		setTimeout(() => {
			open = !open;
		}, 500);
	}
</script>

<button class="hamburger" onclick={toggleMenu} aria-label={ariaLabel}>
	<div class="bar">
		{#if open}
			<i class="fa fa-times" transition:fade={{ duration: 500 }}></i>
		{:else}
			<i class="fa fa-bars" transition:fade={{ duration: 500 }}></i>
		{/if}
	</div>
</button>

<style>
	.hamburger {
		display: flex;
		flex-direction: column;
		width: 30px;
		height: 20px;
		background: transparent;
		border: none;
		cursor: pointer;
		z-index: 10;
		margin-bottom: 80%;
		margin-right: 10%;
		position: relative;

		.bar {
			height: 3px;
			width: 100%;
			margin: 3px 0;
			transition: all 0.3s ease;

			position: absolute;
			inset: 0;
		}

		i {
			color: var(--white);
			scale: 2;
			transition: transform 0.2s ease;

			position: absolute;
			top: 1rem;
		}
	}
</style>
