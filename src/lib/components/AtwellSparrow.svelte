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

<div class="atwell">
	<Image src="/logos/sparrow.png" alt="An logo that says Atwell that you can move" />
</div>

<style>
	.atwell {
		border-radius: 3rem;
		margin: 3.5% auto;
		width: 30%;
	}

	.atwell:hover {
		filter: brightness(0.85);
		transition: filter 0.5s ease-in-out;
	}

	.atwell:not(:hover) {
		filter: brightness(1);
		transition: filter 0.5s ease-in-out;
	}

	@media (max-width: 800px) {
		.atwell {
			width: 70%;
			margin-top: 25%;
		}
	}
</style>
