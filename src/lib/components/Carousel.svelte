<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel;
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
		<div class="prev" slot="prev" on:click={showPrevPage} on:keydown={() => {}} alt="previous">
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
			<img src="/photos/gabe10.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe5.png" alt="Gabriel Atwell" />
		</div>

		<div class="gabe">
			<img src="/photos/gabe6.png" alt="Gabriel Atwell" />
		</div>

		<div class="next" slot="next" on:click={showNextPage} on:keydown={() => {}} alt="next">
			<i class="fa-solid fa-arrow-right" />
		</div>
	</Carousel>
{/if}

<style>
	/* content */
	.gabe {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
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
			border-radius: 2.5%;
		}

		.gabe:hover img {
			opacity: 1;
		}

		.gabe img:hover {
			opacity: 0.75;
		}

		.prev,
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
		}
	}

	@media (min-width: 400px) {
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
	}
</style>
