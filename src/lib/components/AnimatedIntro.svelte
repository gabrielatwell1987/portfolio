<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let text;
	export let span;

	onMount(() => {
		const littleSentence = document.querySelector('.sentence');
		const biggerWord = document.querySelector('.bigWord');

		gsap.set(littleSentence, {
			yPercent: 100,
			autoAlpha: 0
		});
		gsap.set(biggerWord, {
			xPercent: 100,
			autoAlpha: 0
		});

		const tl = gsap.timeline();

		tl.to(
			littleSentence,
			{
				yPercent: 0,
				transformOrigin: '50% 50%',
				autoAlpha: 1,
				duration: 2.5,
				ease: 'sine.inOut'
			},
			'+=2.5'
		).to(
			biggerWord,
			{
				xPercent: 0,
				autoAlpha: 1,
				duration: 2,
				ease: 'sine.inOut'
			},
			'+=0.5'
		);
	});
</script>

<main class="animated-text">
	<h1 class="sentence">{text}<span class="bigWord">{span}</span></h1>
</main>

<style>
	h1.sentence {
		font-family: var(--lexend);
		font-size: clamp(2rem, 3vw, 10rem);
		font-weight: 700;
		color: var(--sky);
		mix-blend-mode: lighten;
		text-align: center;
		margin: 10% 0;
		padding: 2rem;
	}

	span.bigWord {
		font-size: clamp(2.5rem, 8vw, 20rem);
		color: var(--white);
		font-family: var(--montserrat);
		font-weight: 900;
	}

	span.bigWord:hover {
		color: var(--off-white);
	}

	@media (max-width: 768px) {
		h1.sentence {
			margin-top: 5%;
		}
	}

	@keyframes drop {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}

		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
