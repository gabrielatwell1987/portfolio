<script>
	/** @type {{text: any, span: any}} */
	let { text, span } = $props();

	let mounted = $state(false);
	let chars = $state([]);
	let dynamicAriaLabel = $derived(`${text} ${span}`);

	$effect(() => {
		chars = span.split('');
		mounted = true;
	});
</script>

<section class="animated-text" aria-label={dynamicAriaLabel}>
	<h1 class="sentence" class:animate={mounted}>
		{text}

		<a href="/about/hero"
			><span class="bigWord glow">
				{#each chars as char, i}
					<span class="char" style="--delay: {0.05 + i * 0.05}s">{char}</span>
				{/each}
			</span></a
		>
	</h1>
</section>

<style>
	.animated-text {
		padding-top: 10em;

		@media (width <= 768px) {
			margin-top: -15%;
		}

		.sentence {
			font-family: var(--bronova);
			font-size: clamp(1.25rem, 2.5vw, 10rem);
			font-weight: 100;
			color: var(--clr-main);
			text-align: center;
			margin: 0;
			padding: 2rem;
			transform: translateY(100%);
			opacity: 0;
			transition:
				transform 1.25s ease-out,
				opacity 1.25s ease-out;
			transition-delay: 1s;

			@media (width <= 768px) {
				margin-top: 7%;
				opacity: 0.9;
			}

			&.animate {
				transform: translateY(0);
				opacity: 1;
			}

			.bigWord {
				font-family: var(--ultra);
				font-size: clamp(2.5rem, 8vw, 35rem);
				text-wrap: none;
				display: block;
				letter-spacing: -1px;
				line-height: 1.2;

				@media (width <= 768px) {
					font-weight: 600;
					margin-top: 2%;
				}

				.char {
					display: inline-block;
					transform: translateX(150%);
					opacity: 0;
					animation: charAnimation 3s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
					animation-delay: calc(var(--delay) + 2.25s);
				}
			}

			.glow {
				color: var(--clr-inverted);
				text-shadow:
					0 0 5px #17262c,
					0 0 5px var(--clr-main),
					0 0 5px var(--clr-main),
					0 0 5px var(--clr-main),
					0 0 6px var(--clr-main),
					0 0 7px var(--clr-main);

				@media (width <= 768px) {
					text-shadow:
						0 0 3px #17262c,
						0 0 4px #eee,
						0 0 4px #eee,
						0 0 4px #eee,
						0 0 4px #eee,
						0 0 4px #eee;
				}
			}
		}
	}

	.sentence,
	.bigWord {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	@keyframes charAnimation {
		0% {
			transform: translateX(150%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
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
