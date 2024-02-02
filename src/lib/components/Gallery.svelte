<script>
	// animations
	import { tick } from 'svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/dist/Flip';

	gsap.registerPlugin(Flip);

	let selected = 0;

	async function flip(id) {
		const state = Flip.getState('.grid-item');

		selected = id;

		await tick();

		const tl = Flip.from(state, {
			duration: 0.6,
			stagger: 0.04,
			absolute: true,
			onStart: () => {
				// fade out
				gsap.to('.title', {
					opacity: 0,
					y: '100%',
					duration: 0.3
				});
			}
		});

		tl.to('.details .title', {
			opacity: 1,
			y: 0,
			duration: 0.3
		});
	}
</script>

<!-- picture grid -->
<section class="grid">
	{#each { length: 8 } as _, id}
		{@const details = selected === id}
		{@const number = id + 1}

		<button class="grid-item" class:details on:click={() => flip(id)}>
			<div class="title">
				<h1>{number}</h1>
			</div>

			<img src="https://picsum.photos/600/600?random={id}" alt="Random" />
		</button>
	{/each}
</section>

<style>
	/* desktop */
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		width: 75%;
		margin: 5rem auto;
	}
	/* bigger than desktop */
	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.grid-item {
		position: relative;
		padding: 0;
		background: none;
		border: none;
		overflow: hidden;
		cursor: pointer;
	}

	h1 {
		color: hsl(0 0% 98%);
		font-size: 2rem;
		text-transform: capitalize;
	}

	img {
		width: 100%;
		height: 100%;
		aspect-ratio: 16/9;
		display: block;
		object-fit: cover;
		border-radius: 4%;
	}

	.details {
		grid-row: span 2;
		grid-column: span 2;
	}

	.title {
		position: absolute;
		left: 20px;
		bottom: 0px;
		opacity: 0;
		translate: 0% 100%;
	}

	.details .title {
		opacity: 1;
		translate: 0%;
	}
</style>
