<script>
	import { gsap } from 'gsap';
	import SplitType from 'split-type';

	/** @type {{text: any, span: any}} */
	let { text, span } = $props();

	$effect(() => {
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
	.sentence {
		font-family: var(--montserrat);
		font-size: clamp(1.25rem, 2.5vw, 10rem);
		font-weight: 200;
		color: var(--purple);
		mix-blend-mode: lighten;
		text-align: center;
		margin: 10% 0;
		padding: 2rem;

		.bigWord {
			font-family: var(--anta);
			font-size: clamp(3rem, 16vw, 40rem);
			color: var(--blue);
			font-weight: 500;
			text-wrap: none;
			display: block;
			letter-spacing: 1px;
			line-height: 1.2;
		}

		.glow {
			color: var(--sky);
			text-shadow:
				0 0 5px #0b1215,
				0 0 5px #eee,
				0 0 5px #eee,
				0 0 10px #eee,
				0 0 15px #eee,
				0 0 20px #eee;
		}
	}

	.sentence,
	.bigWord {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	@media (max-width: 768px) {
		.animated-text {
			margin-top: -15%;

			.sentence {
				margin-top: 7%;
				opacity: 0.9;

				.bigWord {
					font-weight: 600;
					margin-top: 2%;
				}

				.glow {
					text-shadow:
						0 0 3px #0b1215,
						0 0 4px #eee,
						0 0 5px #eee,
						0 0 6px #eee,
						0 0 15px #eee,
						0 0 5px #eee;
				}
			}
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
