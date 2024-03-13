<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel;

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<!-- content -->
{#if browser}
	<Carousel
		dots={false}
		arrows
		infinite
		duration="1000"
		swiping
		autoplay
		autoplayDuration={5000}
		bind:this={carousel}
		let:showPrevPage
		let:showNextPage
	>
		<div
			class="prev"
			slot="prev"
			on:click={showPrevPage}
			on:keydown={() => {}}
			aria-label="previous"
		>
			<i class="fa-solid fa-arrow-left" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe7.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe2.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe3.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe8.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe4.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe5.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe6.png" alt="Gabriel Atwell" />
		</div>

		<div class="next" slot="next" on:click={showNextPage} on:keydown={() => {}} aria-label="next">
			<i class="fa-solid fa-arrow-right" />
		</div>
	</Carousel>
{/if}

<style>
	/* content */
	.gabe {
		width: 100%;
		height: 100%;
	}

	.prev,
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
	}

	img {
		border-radius: 20px;
	}

	@media (min-width: 200px) {
		/* content */
		.gabe {
			width: 100%;
			height: 100%;
		}

		img {
			min-width: 5rem;
		}

		.prev,
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
		}

		img {
			border-radius: 20px;
		}
	}
</style>
