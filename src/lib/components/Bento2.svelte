<script>
	import GSAP from './GsapIcon.svelte';
	import SK from './SvelteIcon.svelte';
	import Image from '$lib/components/Image.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const bentoItem = document.querySelectorAll('.bento-item');

		gsap.set(bentoItem, { autoAlpha: 0 });

		gsap.to(bentoItem, {
			autoAlpha: 1,
			delay: 2.5,
			duration: 2.5,
			ease: 'none',
			stagger: {
				each: 1,
				from: 'random'
			}
		});
	});
</script>

<main id="bento-div" class="bt-div" aria-hidden="true">
	<section class="bento-item bento-item-1" aria-label="contact me">
		<a href="/contact"><h2>Contact me if you have a question!</h2></a>
	</section>

	<section class="bento-item bento-item-2" aria-label="blog topics">
		<a href="/blog/sveltekit">
			<div class="sk">
				<SK />
			</div>
		</a>

		<a href="/blog/greensock">
			<div class="gsap">
				<GSAP />
			</div>
		</a>

		<a href="/blog/posts">
			<div class="animation">
				<Image src="/logos/animation.webp" alt="" />
			</div>
		</a>
	</section>

	<section class="bento-item bento-item-3" aria-label="home page">
		<a href="/"><img src="/icons/portfolio_logo.svg" alt="" /></a>
	</section>

	<section class="bento-item bento-item-4" aria-label="projects">
		<a href="/projects"><img src="/logos/cursive-atwell.webp" alt="" /></a>
	</section>
</main>

<style>
	:root {
		--space-xs: 0.25rem;
		--space-sm: 1rem;
		--space-md: 1.25rem;
		--space-lg: 4rem;

		--border-radius: 0.75rem;
		--transition-fast: 0.5s ease-in-out;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: 5px;
		color: var(--white);
		text-align: center;
		margin-bottom: 2rem;
		padding: 2rem;
		font-family: var(--lexend);
		text-transform: uppercase;
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}

	#bento-div {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(10, minmax(0, 1fr));
		grid-auto-rows: 35rem;
		gap: var(--space-sm);
		padding: var(--space-sm);
	}

	.animation {
		width: clamp(75%, 3vw, 100%);
		transition: scale var(--transition-fast);
		margin-left: 12.5%;
	}

	.animation:hover {
		scale: 1.05;
	}

	.sk,
	.gsap {
		width: 100%;
		scale: 1.5;
	}

	.gsap {
		margin-top: 5rem;
		margin-left: 40%;
	}

	.bento-item {
		overflow: hidden;
		border-radius: var(--border-radius);
		border: 3px solid var(--sky);
		position: relative;
	}
	.bento-item-1 {
		grid-column: span 4;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: clamp(1.2rem, 3vw, 4rem);
	}
	.bento-item-2 {
		grid-column: span 6;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 10%;
	}
	.bento-item-3 {
		grid-column: span 6;
	}
	.bento-item-4 {
		grid-column: span 4;
	}

	.bento-item-4 img {
		object-fit: cover;
		width: 100%;
	}

	.bento-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-fast);
	}

	.bento-item:hover img {
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		#bento-div {
			margin-top: 15%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.bt-div,
		#bento-div {
			grid-template-columns: repeat(2, 1fr);
		}

		.bento-item-1,
		.bento-item-2,
		.bento-item-3,
		.bento-item-4 {
			grid-column: span 2;
		}
		.bento-item-3 img {
			object-fit: contain;
		}

		h2 {
			font-size: 2rem;
			font-weight: 700;
			letter-spacing: 5px;
			color: var(--off-white);
			text-align: center;
			margin-bottom: 2rem;
			padding: 2rem;
			font-family: var(--lexend);
			text-transform: uppercase;
		}

		a {
			text-decoration: none;
			cursor: pointer;
		}

		.bento-item {
			height: 50%;
		}

		.bento-item-2,
		.bento-item-3 {
			padding: 2rem;
		}

		.bento-item-2 {
			padding-left: 20%;
			width: 100%;
			align-items: center;
			gap: 1rem;
		}

		.bento-item-4 img {
			object-fit: contain;
		}

		.gsap {
			margin-top: 4.5rem;
		}
	}
</style>
