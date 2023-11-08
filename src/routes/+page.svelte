<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

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
	}
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
		}
	}
</style>
