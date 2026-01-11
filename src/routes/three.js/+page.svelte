<script>
	import HeroCanvas from '$lib/shaders/hero/HeroCanvas.svelte';
	import CursorImage from '$lib/shaders/cursor/CursorImage.svelte';

	let selectedComponent = $state('ComingSoon');
</script>

<div class="content">
	<select bind:value={selectedComponent}>
		<option value="HandParticles">Hand Particles</option>
		<option value="HeroCanvas">Hero Canvas</option>
		<option value="ComingSoon">Coming Soon</option>
	</select>

	{#if selectedComponent === 'HandParticles'}
		<CursorImage />
	{:else if selectedComponent === 'HeroCanvas'}
		<HeroCanvas />
	{:else if selectedComponent === 'ComingSoon'}
		<h2>A new three.js component coming soon!</h2>
	{/if}
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		position: relative;

		& select {
			inline-size: clamp(200px, 20vw, 300px);
			position: fixed;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			color: var(--clr-light-gray);
			z-index: 10;

			& option {
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.2vw, var(--h4));
			}
		}

		& h2 {
			color: var(--fail);
			font-family: var(--bronova-bold);
			font-size: clamp(var(--h6), 3vw, var(--h1));
			text-align: center;
			text-shadow: 2px 2px 0 var(--clr-main);

			@media (width <= 768px) {
				text-shadow: 1px 1px 0 var(--clr-main);
			}
		}
	}
</style>
