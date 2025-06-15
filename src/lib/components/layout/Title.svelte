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
			letter-spacing: -1px;
			text-transform: uppercase;
			font-kerning: none;
			color: var(--clr-blue);
			margin-top: 5rem;
			view-transition-name: page-title;
			/* Multiple text shadows to create stroke effect */
			text-shadow:
				0 0 1px var(--clr-inverted),
				-2px -2px 0 var(--clr-main),
				2px -2px 0 var(--clr-main),
				-2px 2px 0 var(--clr-main),
				2px 2px 0 var(--clr-main),
				-2px 0 0 var(--clr-main),
				2px 0 0 var(--clr-main),
				0 -2px 0 var(--clr-main),
				0 2px 0 var(--clr-main);

			@media (width >= 740px) {
				margin: 2rem auto;
			}

			@media (width >= 990px) {
				font-weight: 800;
			}

			@media (width <= 768px) {
				text-shadow:
					0 0 1px var(--clr-inverted),
					-1px -1px 0 var(--clr-main),
					1px -1px 0 var(--clr-main),
					-1px 1px 0 var(--clr-main),
					1px 1px 0 var(--clr-main),
					-1px 0 0 var(--clr-main),
					1px 0 0 var(--clr-main),
					0 -1px 0 var(--clr-main),
					0 1px 0 var(--clr-main);
			}
		}

		#title {
			font-kerning: none;
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
