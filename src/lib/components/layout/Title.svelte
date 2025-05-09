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
			letter-spacing: 5px;
			text-transform: uppercase;
			font-kerning: none;

			background: linear-gradient(
				120deg,
				var(--text-link) 0%,
				var(--dark-text) 25%,
				var(--text-link) 50%,
				var(--dark-text) 75%,
				var(--text-link) 100%
			);
			color: var(--moon);
			background-size: 400%;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: var(--moon);
			-webkit-text-stroke-color: var(--text-gray);
			-webkit-text-stroke-width: 2px;
			animation: gradientAnimation 5s ease infinite;
			margin-top: 5rem;
			view-transition-name: page-title;

			@media (width >= 740px) {
				-webkit-text-stroke-width: 6px;
				letter-spacing: 20px;
				margin: 2rem auto;
			}

			@media (width >= 990px) {
				-webkit-text-stroke-width: 8px;
				font-weight: 800;
			}
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

	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
