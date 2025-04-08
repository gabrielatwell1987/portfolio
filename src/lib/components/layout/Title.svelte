<script>
	/** @type {{title: any}} */
	let { title } = $props();
</script>

<main>
	<h1 class="title" id="title" aria-label={title}>{title}</h1>
</main>

<style>
	* {
		position: relative;
	}

	@media (width >= 300px) {
		.title {
			text-align: center;
			font-family: var(--orbitron);
			font-size: clamp(2.5rem, 10.5vw, 15rem);
			color: var(--text-blue);
			letter-spacing: 5px;
			text-transform: uppercase;
			font-kerning: none;
			margin-top: 5rem;
			view-transition-name: page-title;
		}

		#title {
			font-kerning: none;
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

	::view-transition-old(page-title),
	::view-transition-new(page-title) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(page-title) {
		animation: slide-out 0.75s ease-out forwards;
	}

	::view-transition-new(page-title) {
		animation: slide-in 1s ease-in forwards;
	}

	@keyframes slide-out {
		from {
			opacity: 1;
			transform: translateX(0);
		}
		to {
			opacity: 0;
			transform: translateX(-100px);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(100px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
