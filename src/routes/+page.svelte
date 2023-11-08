<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import Flipper from '$lib/Flipper.svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		gsap.to('.atwellLogo', { autoAlpha: 1, duration: 3 });

		Draggable.create('.atwell', {
			type: 'x, y',
			bounds: document.querySelector('main'),
			inertia: true
		});
	});
</script>

<main class="atwellLogo">
	<img class="atwell" src="skull-logo.png" alt="Atwell ui design logo that you can move" />

	<br /><br /><br />
</main>

<div class="flipper">
	<Flipper />
</div>

<style>
	main {
		text-align: center;
		margin: 5rem 0;
	}
	@media screen and (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
		}
		img {
			border-radius: 1%;
			width: 90%;
		}
		.flipper {
			display: none;
		}
	}
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
		.flipper {
			display: block;
		}
	}
	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
		}
	}
</style>
