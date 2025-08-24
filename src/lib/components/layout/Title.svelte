<script>
	/** @type {{title: any, img?: string, width?: string}} */
	let { title, img, width } = $props();
</script>

<main>
	{#if img}
		<img class="title exclude-transition" id="title" src={img} alt={title} style:width />
	{:else}
		<h1 class="title exclude-transition" id="title" aria-label={title}>{title}</h1>
	{/if}
</main>

<style>
	* {
		position: relative;
	}

	@media (width >= 300px) {
		main {
			padding-top: 5em;

			@media (width <= 768px) {
				padding-top: 2.5em;
			}
		}

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

		img.title {
			display: block;
			margin-inline: auto;
			max-width: 100%;
			height: auto;
			text-shadow: none;
			text-transform: none;
			letter-spacing: normal;
			font-kerning: auto;
			color: initial;
			view-transition-name: page-title;
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
		animation: slide-out 0.5s ease-out forwards;
	}

	::view-transition-new(page-title) {
		animation: slide-in 0.75s ease-in forwards;
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
