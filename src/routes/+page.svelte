<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.atwellLogo', { opacity: 0, scale: 0 });

		gsap.to('.atwellLogo', { opacity: 1, scale: 1, duration: 3 });
	});
</script>

<main class="atwellLogo">
	<img src="logo.png" alt="Logo" />
</main>

<style>
	main {
		text-align: center;
	}
	img {
		border-radius: 50%;
	}
	@media (min-width: 200px) {
		main {
			text-align: center;
			font-size: 1.75rem;
		}
		img {
			border-radius: 50%;
		}
	}
	@media (min-width: 740px) {
		main {
			text-align: center;
			font-size: 2rem;
		}
		img {
			border-radius: 50%;
		}
	}
	@media (min-width: 990px) {
		main {
			text-align: center;
			font-size: 2.5rem;
		}
		img {
			border-radius: 50%;
		}
	}
</style>
