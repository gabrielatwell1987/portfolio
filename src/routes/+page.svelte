<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.fromTo('.atwellLogo', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 3 });
	});
</script>

<main class="atwellLogo">
	<img src="logo.png" alt="Logo" />
</main>

<div class="biomobile">
	<h1 class="name">Gabriel Atwell</h1>
	<br />
	<img class="mobileatwell" src="atwell.png" alt="Atwell" width="200px" />
	<br /><br /><br />
	<p class="center">This is my portfolio website. Please click on a link to learn more!</p>
</div>

<style>
	main {
		text-align: center;
	}
	.center {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	img {
		border-radius: 50%;
	}
	.biomobile {
		display: none;
	}
	@media (max-width: 1024px) {
		main {
			text-align: center;
			font-size: 1.75rem;
		}
		.center {
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		}
		img {
			border-radius: 50%;
		}
		.biomobile {
			display: none;
		}
	}
	/* @media (max-width: 1280px) {
		main {
			text-align: center;
		}
		.center {
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		}
		img {
			border-radius: 50%;
		}
		.biomobile {
			display: none;
		}
	} */
</style>
