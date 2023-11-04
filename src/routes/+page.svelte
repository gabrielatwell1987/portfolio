<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';
	import Skull from '$lib/Skull.svelte';

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
	<img class="atwell" src="logo.png" alt="Atwell ui design logo that you can move" />

	<br /><br /><br />

	<div class="skull">
		<Skull />
	</div>
</main>

<style>
	main {
		text-align: center;
		margin: 5rem 0 0 0;
	}
	img {
		border-radius: 50%;
	}
	@media screen and (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
		}
		img {
			border-radius: 50%;
		}
		.skull {
			display: none;
		}
	}
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
		img {
			border-radius: 50%;
		}
		.skull {
			display: block;
		}
	}
	@media screen and (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
		}
		img {
			border-radius: 50%;
		}
	}
</style>
