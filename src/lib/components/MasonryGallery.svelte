<script>
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Title from '$lib/components/Title.svelte';
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO title="Photos of Me" description="Gabriel Atwell's Photos" keywords="photos of gabe" />

<section
	class="container"
	in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}
>
	<Title title="Photos of me" />

	<div class="image-container">
		<img class="gabe" src="photos/autumn.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe2.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe4.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe3.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe7.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe5.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe6.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe8.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/wtf.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe10.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/wtf2.webp" alt="" loading="lazy" />
	</div>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: var(--lexend);
	}

	.container {
		max-width: 100%;
		padding: 10%;

		& .image-container {
			columns: 3 400px;
			margin-top: 10%;
		}

		& .image-container img {
			margin-bottom: 3%;
			border-radius: 10px;
			width: 90%;
			object-fit: cover;
			transition: scale 0.5s ease;
		}

		& .image-container img:is(:hover) {
			scale: 0.9;
			filter: drop-shadow(0 0 0.5rem var(--off-white));
		}
	}

	@media (max-width: 500px) {
		.container .image-container img {
			margin-bottom: 5%;
		}
	}
</style>
