<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

	export let text;
	export let span;

	onMount(() => {
		const littleSentence = document.querySelector('.sentence');
		const biggerWord = document.querySelector('.bigWord');
		const split = new SplitType(biggerWord, { types: 'chars' });

		const tl = gsap.timeline({ defaults: { ease: 'power3.inOut', duration: 1.5 } });

		tl.from(
			littleSentence,
			{
				yPercent: 100,
				autoAlpha: 0,
				duration: 2.5,
				fontWeight: 200,
				ease: 'sine.inOut'
			},
			'+=1'
		).from(split.chars, {
			xPercent: 150,
			autoAlpha: 0,
			stagger: {
				amount: 0.5,
				from: 'random'
			},
			duration: 5,
			ease: 'power3.inOut'
		});
	});
</script>

<main class="animated-text">
	<h1 class="sentence">{text}<span class="bigWord glow">{span}</span></h1>
</main>

<style>
	h1.sentence {
		font-family: var(--lexend);
		font-size: clamp(1.25rem, 2.5vw, 10rem);
		font-weight: 200;
		color: var(--purple);
		mix-blend-mode: lighten;
		text-align: center;
		margin: 10% 0;
		padding: 2rem;
	}

	span.bigWord {
		font-size: clamp(2.5rem, 12vw, 20rem);
		color: var(--blue);
		font-family: var(--montserrat);
		font-weight: 500;
		text-wrap: none;
		display: block;
		letter-spacing: 1px;
	}

	.glow {
		color: var(--sky);
		text-shadow: 0 0 5px #242424, 0 0 5px var(--off-white), 0 0 5px var(--off-white),
			0 0 10px var(--off-white), 0 0 15px var(--off-white), 0 0 20px var(--off-white);
	}

	h1.sentence,
	span.bigWord {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	@media (max-width: 768px) {
		h1.sentence {
			margin-top: 20%;
			opacity: 0.9;
		}

		span.bigWord {
			font-weight: 600;
		}

		.glow {
			text-shadow: 0 0 3px #242424, 0 0 4px var(--off-white), 0 0 5px var(--off-white),
				0 0 6px var(--off-white), 0 0 15px var(--off-white), 0 0 5px var(--off-white);
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
