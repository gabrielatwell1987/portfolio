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

		gsap.set(imageContainerImg, { y: -40 });

		imageContainer.addEventListener('mouseenter', () => {
			gsap.to(imageContainerImg, { y: 0, ease: 'expo.inOut' });
			gsap.to(h1, { color: 'var(--black)', delay: 0.25, ease: 'expo.inOut' });
		});

		imageContainer.addEventListener('mouseleave', () => {
			gsap.to(imageContainerImg, { y: -40, borderTop: 0, ease: 'expo.inOut' });
			gsap.to(h1, { color: 'var(--smoke)', delay: 0.75, ease: 'expo.inOut' });
		});

		let mm = gsap.matchMedia();

		mm.add('(max-width: 768px)', () => {
			gsap.set(h1, { yPercent: -100, fontWeight: 900 });
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
		font-size: clamp(0.9rem, 3vw, 2rem);
		font-weight: 700;
		color: var(--smoke);
		text-wrap: nowrap;
	}

	.image-container {
		position: relative;
		width: 80%;
		height: 5in;
		/* overflow: hidden; */
		border: 3px solid var(--off-white);
		border-radius: 10px;
		margin: 5% 0 3% 0;
		padding: 1rem 2rem;
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
			border: 1px solid var(--off-white);
		}

		h1 {
			letter-spacing: 0;
			text-align: center;
		}
	}
</style>
