<script>
	import { fade } from 'svelte/transition';
	import { duration, delay } from '$lib/data/timings.svelte.js';

	export let open = false;
	export let ariaLabel = 'menu';

	function toggleMenu() {
		setTimeout(() => {
			open = !open;
		}, 100);
	}
</script>

<button class="hamburger" onclick={toggleMenu} aria-label={ariaLabel}>
	<div class="bars">
		{#if open}
			<!-- close -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				transition:fade={{ duration, delay }}
				class="times"
			>
				<path
					d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
					stroke="var(--text-color)"
					stroke-width="5"
				/>
			</svg>
		{:else}
			<!-- bars -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				transition:fade={{ duration, delay }}
			>
				<path
					d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
					stroke="var(--text-color)"
					stroke-width="5"
				/>
			</svg>
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
		margin-bottom: 2em;
		margin-left: 2em;
		position: relative;

		.bars {
			height: 3px;
			width: 100%;
			margin: 3px 0;
			transition: all 0.3s ease;

			position: absolute;
			inset: 0;
		}

		svg {
			color: var(--text-color);
			transition: transform 0.2s ease;

			position: absolute;
			top: 0;

			&.times {
				color: var(--text-color);
			}
		}

		@media (width >= 755px) {
			opacity: 0;
		}
	}
</style>
