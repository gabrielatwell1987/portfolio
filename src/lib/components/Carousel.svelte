<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Image from './Image.svelte';

	let carousel;
</script>

{#if browser}
	<Carousel
		dots={false}
		arrows
		infinite
		duration="1000"
		swiping={true}
		autoplay
		autoplayDuration={5000}
		bind:this={carousel}
		let:showPrevPage
		let:showNextPage
	>
		<!-- <div
			class="prev"
			slot="prev"
			role="button"
			tabindex="0"
			on:click={carousel.showPrevPage}
			on:keydown={() => {}}
			alt="previous"
		>
			<i class="fa-solid fa-arrow-left" />
		</div> -->

		<div class="gabe">
			<Image picture="/photos/gabe7.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe2.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe bigger">
			<Image picture="/photos/wtf.jpg" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe3.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe8.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe bigger">
			<Image picture="/photos/wtf2.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe10.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe5.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/gabe6.png" desc="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<Image picture="/photos/wtf3.png" desc="Gabriel Atwell" />
		</div>

		<!-- <div
			class="next"
			slot="next"
			role="button"
			tabindex="0"
			on:click={carousel.showNextPage}
			on:keydown={() => {}}
			alt="next"
		>
			<i class="fa-solid fa-arrow-right" />
		</div> -->
	</Carousel>
{/if}

<style>
	.gabe {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
	}

	/* .prev,
	.next {
		width: 50px;
		height: 50px;
		background-color: var(--smoke);
		color: var(--white);
		border-radius: 50%;
		font-size: 1.5rem;
		font-weight: 600;
		display: grid;
		place-content: center;
		margin-top: 13rem;
		margin-left: 2rem;
		margin-right: 2rem;
		cursor: pointer;
	} */

	@media (min-width: 200px) {
		.gabe {
			width: 100%;
			height: 100%;
		}

		.gabe:hover {
			opacity: 0.75;
		}

		/* .prev,
		.next {
			width: 30px;
			height: 30px;
			background-color: var(--smoke);
			color: var(--white);
			border-radius: 50%;
			font-size: 1.5rem;
			font-weight: 600;
			display: grid;
			place-content: center;
			margin-top: 5rem;
			margin-left: 2rem;
			margin-right: 2rem;
			cursor: pointer;
		}

		i {
			font-size: 1rem;
		} */

		.bigger {
			width: 300%;
		}
	}

	/* @media (min-width: 400px) {
		.prev,
		.next {
			width: 40px;
			height: 40px;
			margin-top: 7rem;
		}

		i {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 500px) {
		.prev,
		.next {
			width: 40px;
			height: 40px;
			margin-top: 10rem;
		}

		i {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 720px) {
		.prev,
		.next {
			width: 50px;
			height: 50px;
		}

		i {
			font-size: 1.5rem;
		}
	} */
</style>
