<script>
	/** @type {{title: any}} */
	let { title } = $props();

	let letters = $derived(title.split(''));
	let totalLetters = $derived(letters.length - 1);
</script>

<main>
	<h1 class="title" id="title" aria-label={title}>
		{#each letters as letter, i}
			<span
				class="letter"
				style="--index: {totalLetters - i};"
				style:view-transition-name={`letter-${i}`}
			>
				{letter === ' ' ? '\u00A0' : letter}
			</span>
		{/each}
	</h1>
</main>

<style>
	@media (width >= 300px) {
		.title {
			text-align: center;
			font-family: var(--orbitron);
			font-size: clamp(2.5rem, 10.5vw, 15rem);
			color: var(--clr-blue);
			letter-spacing: 5px;
			text-transform: uppercase;
			font-kerning: none;
			margin-top: 5rem;
		}

		#title {
			font-kerning: none;
		}

		.letter {
			display: inline-block;
			opacity: 0;
			animation: slide-in 0.5s forwards;
			animation-delay: calc(var(--index) * 0.2s);
		}
	}

	@media (width >= 740px) {
		.title {
			letter-spacing: 20px;
			margin: 2rem auto;
		}
	}

	@media (width >= 990px) {
		.title {
			font-weight: 800;
		}
	}

	::view-transition-old(letter-*),
	::view-transition-new(letter-*) {
		animation: none;
	}

	::view-transition-old(letter-*)::view-transition-old-data {
		animation: slide-out 1s ease-out forwards;
		animation-delay: calc(var(--index) * 0.2s);
	}

	::view-transition-new(letter-*)::view-transition-new-data {
		animation: slide-in 3s ease-in forwards;
		animation-delay: calc(var(--index) * 0.2s);
	}

	@keyframes slide-out {
		0% {
			opacity: 1;
			transform: translateX(0);
		}
		100% {
			opacity: 0;
			transform: translateX(-100vw);
		}
	}

	@keyframes slide-in {
		0% {
			opacity: 0;
			transform: translateX(100vw);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
