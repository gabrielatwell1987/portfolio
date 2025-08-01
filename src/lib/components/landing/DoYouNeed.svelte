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
	.sentence,
	.bigWord {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.animated-text {
		padding-top: 10em;
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
			transform 1.25s ease-in-out,
			opacity 1.25s ease-in-out;
		transition-delay: 1s;

		&.animate {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.bigWord {
		font-family: var(--orbitron);
		font-size: clamp(3rem, 15vw, 40rem);
		color: var(--clr-blue);
		text-wrap: none;
		display: block;
		letter-spacing: -1px;
		line-height: 1.2;

		& .char {
			display: inline-block;
			transform: translateX(150%);
			opacity: 0;
			animation: charAnimation 3s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
			animation-delay: calc(var(--delay) + 2.25s);
		}
	}

	.glow {
		color: var(--dark-blue);
		text-shadow:
			0 0 5px #17262c,
			0 0 5px #eee,
			0 0 5px #eee,
			0 0 10px #eee,
			0 0 15px #eee,
			0 0 20px #eee;
	}

	.animated-text {
		@media (width <= 768px) {
			margin-top: -15%;
		}
	}

	.sentence {
		@media (width <= 768px) {
			margin-top: 7%;
			opacity: 0.9;
		}
	}

	.bigWord {
		@media (width <= 768px) {
			font-weight: 600;
			margin-top: 2%;
		}
	}

	.glow {
		@media (width <= 768px) {
			text-shadow:
				0 0 3px #17262c,
				0 0 4px #eee,
				0 0 5px #eee,
				0 0 6px #eee,
				0 0 15px #eee,
				0 0 5px #eee;
		}
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
