<script>
	import { gsap } from 'gsap';
	import { Draggable } from 'gsap/dist/Draggable';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(Draggable);

		gsap.to('.atwellLogo', { autoAlpha: 1, duration: 3 });

		Draggable.create('.atwell, .personal, .code', {
			type: 'x, y',
			bounds: document.querySelector('main'),
			inertia: true
		});
	});
</script>

<main class="atwellLogo">
	<img class="atwell" src="logo.png" alt="Logo" />
	<br /><br /><br />
	<img class="personal" src="personal.png" alt="Logo" />
	<img class="code" src="code.svg" alt="Logo" width="500px" height="550px" />
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
	}
	@media screen and (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
		img {
			border-radius: 50%;
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
