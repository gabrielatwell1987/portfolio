<script>
	import { fade } from 'svelte/transition';
	import { tick } from 'svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/dist/Flip';

	gsap.registerPlugin(Flip);

	let selected = $state(0);

	async function flip(id) {
		const state = Flip.getState('.grid-item');

		selected = id;

		await tick();

		const tl = Flip.from(state, {
			duration: 1,
			stagger: 0.04,
			absolute: true,
			ease: 'power2.inOut'
		});
	}
</script>

<!-- picture grid -->
<section class="grid" transition:fade={{ delay: 250, duration: 300 }}>
	{#each { length: 8 } as _, id}
		{@const details = selected === id}
		{@const number = id + 1}

		<button class="grid-item" class:details onclick={() => flip(id)}>
			<div class="title">
				<h2 aria-label={number}>{number}</h2>
			</div>

			<img src="https://picsum.photos/600/600?random={id}" alt="Random" loading="lazy" />
		</button>
	{/each}
</section>

<style>
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		width: 75%;
		margin: 5rem auto;
		background-color: transparent;
		min-height: 100vh;
	}

	.grid-item {
		position: relative;
		padding: 0;
		background: none;
		border: none;
		overflow: hidden;
		cursor: pointer;
	}

	h2 {
		color: #ffffff;
		font-size: 2rem;
		text-transform: capitalize;
		font-family: var(--lexend);
	}

	img {
		width: 100%;
		height: 100%;
		aspect-ratio: 16/9;
		display: block;
		object-fit: cover;
		border-radius: 7px;
		opacity: 0.5;
		transition: opacity 1s ease;
	}

	img:hover {
		opacity: 1;
		transition: opacity 1s ease;
	}

	.details {
		grid-row: span 2;
		grid-column: span 2;
	}

	.title {
		position: absolute;
		left: 5%;
		top: 5%;
		opacity: 0;
		translate: 0% 100%;
	}

	.details .title {
		opacity: 1;
		translate: 0%;
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
			min-height: 120vh;
		}

		h2 {
			font-size: 2.5rem;
		}
	}
</style>
