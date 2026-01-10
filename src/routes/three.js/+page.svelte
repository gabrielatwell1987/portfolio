<script>
	import ThreeCanvas from '$lib/components/about/ThreeCanvas.svelte';
	import CursorImage from '$lib/shaders/cursor/CursorImage.svelte';

	let selectedComponent = $state('ComingSoon');
</script>

<div class="content">
	<select bind:value={selectedComponent}>
		<option value="HandParticles">Hand Particles</option>
		<option value="ThreeCanvas">Hero Canvas</option>
		<option value="ComingSoon">Coming Soon</option>
	</select>

	{#if selectedComponent === 'HandParticles'}
		<CursorImage />
	{:else if selectedComponent === 'ThreeCanvas'}
		<ThreeCanvas />
	{:else if selectedComponent === 'ComingSoon'}
		<h2>A new three.js component is coming soon!</h2>
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
			max-inline-size: 15vw;
			position: absolute;
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
			-webkit-text-stroke: 1px var(--clr-main);
			text-align: center;
		}
	}
</style>
