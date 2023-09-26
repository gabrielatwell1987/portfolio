<script>
	import { gsap } from 'gsap/dist/gsap';
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
	<img class="mobileatwell" src="atwell.png" alt="logo" width="200px" />
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
	@media (max-width: 480px) {
		.center {
			font-size: 0.8rem;
		}
		.atwellLogo {
			display: none;
		}
		.biomobile {
			display: block;
			text-align: center;
			padding: 0.8rem;
			/* margin-left: 42%; */
		}
		.mobileatwell {
			background-color: rgb(88, 88, 88);
		}
		.name {
			margin-left: 1rem;
		}
	}
	@media (max-width: 767px) {
		.center {
			font-size: 1rem;
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		}
		.atwellLogo {
			display: none;
		}
		main {
			text-align: center;
			font-size: 1.75rem;
		}
		img {
			border-radius: 50%;
		}
		.biomobile {
			display: block;
			text-align: center;
			padding: 0.8rem;
		}
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
		.atwellLogo {
			display: block;
		}
	}
	@media (max-width: 1280px) {
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
		.atwellLogo {
			display: block;
		}
	}
</style>
