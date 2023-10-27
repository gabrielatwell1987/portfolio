<script>
	import { gsap } from 'gsap';
	// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.to('.atwellLogo', { autoAlpha: 1, duration: 3 });
	});
</script>

<main class="atwellLogo">
	<img src="logo.png" alt="Logo" />
	<br /><br /><br />
	<img src="personal.png" alt="Logo" />
	<img src="code.svg" alt="Logo" width="500px" height="550px" />
</main>

<style>
	main {
		text-align: center;
		margin: 5rem 0 0 0;
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
