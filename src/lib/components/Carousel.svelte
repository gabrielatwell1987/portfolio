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
			<Image src="/photos/gabe7.png" alt="AI generated" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe2.png" alt="Gabriel's face" />
		</section>

		<section class="gabe bigger">
			<Image src="/photos/wtf.jpg" alt="Trying to burn gabe" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe.png" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe3.png" alt="Really old" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe8.png" alt="AI generated" />
		</section>

		<section class="gabe">
			<Image src="/photos/ornate1.png" alt="AI generated" />
		</section>

		<section class="gabe bigger">
			<Image src="/photos/wtf2.png" alt="Gabe's face on hulk hogan" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe10.png" alt="AI generated" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe5.png" alt="Gabe" />
		</section>

		<section class="gabe">
			<Image src="/photos/autumn.png" alt="Gabe and his daughter" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe6.png" alt="Gabe's poodle Archie" />
		</section>

		<section class="gabe">
			<Image src="/photos/wtf3.png" alt="when gabe was 5 years old" />
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

	@media (min-width: 300px) {
		.gabe {
			width: 100%;
			height: 100%;
		}

		.gabe:hover {
			opacity: 0.75;
		}

		.gabe:not(:hover) {
			opacity: 1;
		}

		.bigger {
			width: 300%;
		}
	}
</style>
