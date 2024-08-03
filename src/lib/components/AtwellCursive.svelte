<script>
	import Image from '$lib/components/Image.svelte';
	import gsap from 'gsap';
	import Draggable from 'gsap/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create('.atwell', {
			type: 'x, y',
			edgeResistance: 0.65,
			// bounds: document.querySelector('section'),
			throwProps: true
		});
	});
</script>

<div class="atwell">
	<Image src="/logos/atweezy.png" alt="An logo that says Gabriel Atwell that you can move" />
</div>

<style>
	@media (min-width: 200px) {
		.atwell {
			border-radius: 3rem;
			clip-path: ellipse(40% 47% at 50% 50%);
			transition: clip-path 0.25s ease-in-out;
			margin: 3.5% 0;
		}

		.atwell:hover {
			filter: contrast(1.5);
			transition: filter 0.25s ease-in-out;
		}
	}
</style>
