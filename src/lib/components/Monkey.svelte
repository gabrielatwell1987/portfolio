<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import Image from '$lib/components/Image.svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.monkey', {
			type: 'x, y',
			edgeResistance: 0.65,
			bounds: document.querySelector('article'),
			throwProps: true
		});
	});
</script>

<div class="monkey">
	<Image src="/logos/monkey-coding.png" alt="A coding monkey you can move" />
</div>

<style>
	@media (min-width: 200px) {
		.monkey {
			width: 75%;
			margin-inline: auto;
		}

		.monkey:hover {
			filter: contrast(1.5);
			transition: filter 0.25s ease-in-out;
		}
	}

	@media (min-width: 990px) {
		.monkey {
			width: 50%;
		}
	}
</style>
