<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let src;
	export let alt;
	export let text;

	let imageContainer;

	onMount(() => {
		const imageContainer = document.querySelector('.image-container');
		const img = document.querySelector('.image-container img');
		const h1 = document.querySelector('h1');

		gsap.set(img, { y: -50 });

		imageContainer.addEventListener('mouseenter', () => {
			gsap.to(img, { y: 0, duration: 0.75, ease: 'none' });
		});

		imageContainer.addEventListener('mouseleave', () => {
			gsap.to(img, { y: -50, duration: 0.75, borderTop: 0, ease: 'none' });
		});

		let mm = gsap.matchMedia();

		mm.add('(max-width: 768px)', () => {
			gsap.set(h1, { yPercent: -50, fontWeight: 900 });

			imageContainer.addEventListener('mouseenter', () => {
				gsap.to(img, { y: -10, duration: 0.75, ease: 'none' });
			});
		});
	});
</script>

<div class="image-container" bind:this={imageContainer}>
	<img {src} {alt} loading="lazy" />
	<h1>{text}</h1>
</div>

<style>
	h1 {
		position: absolute;
		top: 96%;
		left: 50%;
		transform: translate(-50%, -96%);
		letter-spacing: 3px;
		font-family: var(--mono);
		font-size: clamp(0.9rem, 2vw, 2rem);
		font-weight: 700;
		color: var(--smoke);
		text-wrap: nowrap;
	}

	.image-container {
		position: relative;
		width: calc(fit-content + 10%);
		height: 5in;
		background: var(--dark-blue);
		border-radius: 15px;
		margin: 5% 0 3% 0;
		padding: 2rem;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 2;
		border-radius: 10px;
	}

	@media (max-width: 768px) {
		.image-container {
			width: 90%;
			height: 75%;
			margin-top: 20%;
			margin-bottom: -5%;
		}

		h1 {
			letter-spacing: 0;
			text-align: center;
		}
	}
</style>
