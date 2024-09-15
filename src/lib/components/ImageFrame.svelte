<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let src;
	export let alt;
	export let text;

	let imageContainer;

	onMount(() => {
		const imageContainer = document.querySelector('.image-container');
		const imageContainerImg = document.querySelector('.image-container img');
		const h1 = document.querySelector('h1');

		gsap.set(imageContainerImg, { y: -50 });
		gsap.set(h1, { y: -15 });

		imageContainer.addEventListener('mouseenter', () => {
			gsap.to(imageContainerImg, { y: -10, ease: 'expo.inOut' });
			gsap.to(h1, { color: 'var(--off-white)', delay: 0.25, ease: 'circ' });
		});

		imageContainer.addEventListener('mouseleave', () => {
			gsap.to(imageContainerImg, { y: -50, borderTop: 0, ease: 'expo.inOut' });
		});

		let mm = gsap.matchMedia();

		mm.add('(max-width: 768px)', () => {
			gsap.set(h1, { yPercent: -50, fontWeight: 900 });
		});
	});
</script>

<div class="image-container" bind:this={imageContainer}>
	<img {src} {alt} />
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
		color: var(--off-white);
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
		transition: transform 0.5s ease;
		z-index: 2;
		border-radius: 10px;
	}

	.image-container:hover img {
		transform: scale(1.2);
	}

	@media (max-width: 768px) {
		.image-container {
			width: 90%;
			height: 75%;
		}

		h1 {
			letter-spacing: 0;
			text-align: center;
		}
	}
</style>
