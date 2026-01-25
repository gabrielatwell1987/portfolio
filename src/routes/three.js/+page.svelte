<script lang="ts">
	import HeroCanvas from '$lib/threejs/hero/HeroCanvas.svelte';
	import CursorImage from '$lib/threejs/cursor/CursorImage.svelte';
	import Environment from '$lib/threejs/environment/Environment.svelte';
	import PostProcess from '$lib/threejs/post-processing/PostProcess.svelte';

	let selectedComponent = $state<string>('Select');
	let backgroundImage = $derived(
		selectedComponent === 'Select'
			? 'repeating-linear-gradient(0deg, transparent, transparent 98px, var(--clr-faint-gray) 98px, var(--clr-faint-gray) 100px), repeating-linear-gradient(90deg, transparent, transparent 98px, var(--clr-faint-gray) 98px, var(--clr-faint-gray) 100px)'
			: 'none'
	);
</script>

<div class="wholeScreen" style:background-image={backgroundImage}>
	<div class="content">
		<select bind:value={selectedComponent}>
			<option value="Environment">environment mapping</option>
			<option value="HandParticles">hand particles</option>
			<option value="HeroCanvas">hero section</option>
			<option value="PostProcess">post-processing</option>
		</select>

		{#if selectedComponent === 'HandParticles'}
			<CursorImage />
		{:else if selectedComponent === 'HeroCanvas'}
			<HeroCanvas />
		{:else if selectedComponent === 'Environment'}
			<Environment />
		{:else if selectedComponent === 'PostProcess'}
			<PostProcess />
		{:else if selectedComponent === 'Select'}
			<h2><b>use the dropdown to select</b></h2>
		{/if}
	</div>
</div>

<h1>test</h1>

<style>
	.wholeScreen {
		inline-size: 100vw;
		block-size: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: var(--clr-invert);

		@media (width <= 500px) {
			position: relative;
			block-size: auto;
			min-block-size: 110vh;
		}

		& .content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
			position: relative;

			& select {
				inline-size: clamp(200px, 20vw, 300px);
				position: absolute;
				bottom: 1.5em;
				left: 50%;
				transform: translateX(-50%);
				color: var(--clr-light-gray);
				font-weight: 700;
				z-index: 10;

				@media (width <= 768px) {
					top: 5em;
					bottom: auto;
					left: 50%;
				}

				& option {
					font-family: var(--bronova);
					font-size: clamp(var(--sm), 1.2vw, var(--h4));
					font-weight: 500;
				}
			}

			& h2 {
				color: var(--clr-link);
				font-family: var(--bronova-bold);
				font-size: clamp(var(--h6), 3.25vw, var(--lg));
				text-align: center;

				@media (width <= 768px) {
					text-shadow: 1px 1px 0 var(--clr-main);
				}
			}
		}
	}
</style>
