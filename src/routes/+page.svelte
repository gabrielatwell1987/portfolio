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

<div class="text">
	<p>A frontend developer</p>
</div>

<div class="biomobile">
	<h1 class="name">Gabriel Atwell</h1>
	<br />
	<img class="mobileatwell" src="atwell.png" alt="logo" width="200px" />
	<br /><br /><br />
	<p class="center">This is my portfolio website. Please click on a link to learn more!</p>
</div>

<style>
	.text,
	main {
		text-align: center;
	}
	p {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	img {
		border-radius: 50%;
	}
	.text {
		margin-top: 1rem;
	}
	.biomobile {
		display: none;
	}
	@media (max-width: 1250px) {
		p {
			font-size: 1rem;
		}
		.atwellLogo {
			display: none;
		}
		.text {
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
</style>
