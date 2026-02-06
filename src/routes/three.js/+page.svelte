<script lang="ts">
	import type { Component } from 'svelte';

	let selectedComponent = $state<string>('Select');
	let backgroundImage = $derived(
		selectedComponent === 'Select'
			? 'repeating-linear-gradient(0deg, transparent, transparent 98px, var(--clr-faint-gray) 98px, var(--clr-faint-gray) 100px), repeating-linear-gradient(90deg, transparent, transparent 98px, var(--clr-faint-gray) 98px, var(--clr-faint-gray) 100px)'
			: 'none'
	);
	let SelectedComponent: Component<any, any, any> | null = $state(null);

	$effect(() => {
		if (selectedComponent === 'HandParticles') {
			import('$lib/threejs/cursor/CursorImage.svelte').then(
				(mod) => (SelectedComponent = mod.default)
			);
		} else if (selectedComponent === 'HeroCanvas') {
			import('$lib/threejs/hero/HeroCanvas.svelte').then(
				(mod) => (SelectedComponent = mod.default)
			);
		} else if (selectedComponent === 'Environment') {
			import('$lib/threejs/environment/Environment.svelte').then(
				(mod) => (SelectedComponent = mod.default)
			);
		} else if (selectedComponent === 'PostProcess') {
			import('$lib/threejs/post-processing/PostProcess.svelte').then(
				(mod) => (SelectedComponent = mod.default)
			);
		} else if (selectedComponent === 'Loader') {
			import('$lib/threejs/loader/Loader.svelte').then((mod) => (SelectedComponent = mod.default));
		} else {
			SelectedComponent = null;
		}
	});
</script>

<div class="wholeScreen" style:background-image={backgroundImage}>
	<div class="content">
		<select bind:value={selectedComponent}>
			<option value="Select" disabled>select a component</option>
			<option value="Environment">environment mapping</option>
			<option value="HandParticles">hand particles</option>
			<option value="HeroCanvas">hero section</option>
			<option value="PostProcess">post-processing</option>
			<option value="Loader">loading bar</option>
		</select>

		{#if SelectedComponent}
			<SelectedComponent />
		{:else if selectedComponent === 'Select'}
			<h2>select a component to view</h2>
		{/if}
	</div>
</div>

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
