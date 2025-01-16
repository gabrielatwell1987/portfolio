<script>
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Title from '$lib/components/Title.svelte';
	import SEO from '$lib/data/SEO.svelte';
</script>

<SEO title="Photos of Me" description="Gabriel Atwell's Photos" keywords="photos of gabe" />

<section in:blur={{ delay: 350, duration: 1500, easing: quintOut, amount: '1rem' }}>
	<Title title="Photos" />

	<div class="image-container">
		<img class="gabe" src="photos/autumn.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe2.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe4.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe3.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe7.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe5.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/archie.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe8.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/wtf.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/gabe10.webp" alt="" loading="lazy" />
		<img class="gabe" src="photos/wtf2.webp" alt="" loading="lazy" />

		<!-- <img src="https://picsum.photos/200/300" alt="" />
		<img src="https://picsum.photos/300/400" alt="" />
		<img src="https://picsum.photos/400/700" alt="" />
		<img src="https://picsum.photos/600/500" alt="" />
		<img src="https://picsum.photos/100/400" alt="" />
		<img src="https://picsum.photos/600/300" alt="" />
		<img src="https://picsum.photos/500/400" alt="" />
		<img src="https://picsum.photos/200/600" alt="" />
		<img src="https://picsum.photos/600/500" alt="" />
		<img src="https://picsum.photos/400/500" alt="" /> -->
	</div>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: var(--bronova);
	}

	section {
		margin-inline: auto;

		.image-container {
			columns: 300px;
			padding: 0 7rem;

			img {
				width: 100%;
				margin-bottom: 1em;
				border-radius: 7px;
				transition: all 0.75s;

				&:not(:hover) {
					opacity: 0.5;
					/* transition: hover 1s; */
				}
			}
		}
	}
</style>
