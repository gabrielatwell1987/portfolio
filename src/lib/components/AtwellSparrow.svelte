<script>
	import Image from '$lib/components/Image.svelte';
	import gsap from 'gsap';
	import Draggable from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.atwell', {
			type: 'x, y',
			edgeResistance: 0.65,
			throwProps: true
		});
	});
</script>

<div class="sparrow">
	<Image src="/logos/sparrow.webp" alt="An logo that says Atwell that you can move" />
</div>

<style>
	.sparrow {
		border-radius: 3rem;
		margin: 3.5% auto;
		width: 30%;
	}

	.sparrow:hover {
		filter: brightness(0.85);
		transition: filter 0.5s ease-in-out;
	}

	.sparrow:not(:hover) {
		filter: brightness(0.5);
		transition: filter 0.5s ease-in-out;
	}

	@media (max-width: 800px) {
		.sparrow {
			width: 100%;
			margin-top: 25%;
		}
	}
</style>
