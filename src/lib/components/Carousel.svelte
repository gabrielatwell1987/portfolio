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
			<Image src="/photos/gabe7.webp" alt="AI generated" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe2.webp" alt="Gabriel's face" />
		</section>

		<section class="gabe bigger">
			<Image src="/photos/wtf.webp" alt="Trying to burn gabe" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe.webp" alt="Gabriel Atwell" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe3.webp" alt="Really old" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe8.webp" alt="AI generated" />
		</section>

		<section class="gabe">
			<Image src="/photos/ornate1.webp" alt="AI generated" />
		</section>

		<section class="gabe bigger">
			<Image src="/photos/wtf2.webp" alt="Gabe's face on hulk hogan" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe10.webp" alt="AI generated" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe5.webp" alt="Gabe" />
		</section>

		<section class="gabe">
			<Image src="/photos/autumn.webp" alt="Gabe and his daughter" />
		</section>

		<section class="gabe">
			<Image src="/photos/gabe6.webp" alt="Gabe's poodle Archie" />
		</section>

		<section class="gabe">
			<Image src="/photos/wtf3.webp" alt="when gabe was 5 years old" />
		</section>
	</Carousel>
{/if}

<style>
	:root {
		--100: 100%;
	}

	.gabe {
		width: var(--100);
		height: var(--100);
		display: grid;
		place-content: center;
	}

	@media (min-width: 300px) {
		.gabe {
			width: var(--100);
			height: var(--100);
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
