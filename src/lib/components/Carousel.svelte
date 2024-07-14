<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Image from './Image.svelte';

	let carousel;
</script>

{#if browser}
	<Carousel
		dots={false}
		infinite
		duration="1000"
		arrows
		swiping={true}
		autoplay
		autoplayDuration={5000}
		bind:this={carousel}
		let:showPrevPage
		let:showNextPage
	>
		<section class="gabe">
			<Image src="/photos/gabe7.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe2.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe bigger">
			<Image src="/photos/wtf.jpg" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe3.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe8.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/ornate1.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe bigger">
			<Image src="/photos/wtf2.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe10.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe5.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/autumn.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe6.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/wtf3.png" alt="Gabriel Atwell" />
		</section>
	</Carousel>
{/if}

<style>
	.gabe {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
	}

	@media (min-width: 200px) {
		.gabe {
			width: 100%;
			height: 100%;
		}

		.gabe:hover {
			opacity: 0.75;
		}

		.bigger {
			width: 300%;
		}
	}
</style>
