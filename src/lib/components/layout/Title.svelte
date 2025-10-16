<script>
	/** @type {{title: any, title2: any, img?: string, width?: string, svg?: string}} */
	let { title, title2, img, width, svg } = $props();

	let svgElement = $derived.by(() => {
		if (!svg) return '';

		const svgTagMatch = svg.match(/<svg[^>]*>/);
		if (!svgTagMatch) return svg;
		const svgTag = svgTagMatch[0];

		const attrs =
			'class="title exclude-transition" id="title" view-transition-name="page-title" aria-label="' +
			title +
			'"' +
			(width ? ' style="width:' + (width.match(/^\d+$/) ? width + 'px' : width) + '"' : '');

		const newSvgTag = svgTag.replace('<svg', `<svg ${attrs}`);

		return svg.replace(svgTag, newSvgTag);
	});
</script>

<main>
	{#if img}
		<img class="title exclude-transition" id="title" src={img} alt={title} style="width: {width}" />
	{:else if svg}
		{@html svgElement}
	{:else}
		<div class="title-container">
			<h1 class="title title-main exclude-transition" id="title" aria-label={title}>{title}</h1>
			{#if title2}
				<h1 class="title title-overlay exclude-transition" aria-label={title2}>{title2}</h1>
			{/if}
		</div>
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

		.title-container {
			position: relative;
			text-align: center;
			margin-top: 5rem;
			view-transition-name: page-title;

			@media (width >= 740px) {
				margin: 2rem auto;
			}
		}

		.title {
			font-family: var(--ultra);
			font-size: clamp(2.5rem, 10.5vw, 15rem);
			letter-spacing: -1px;
			text-transform: uppercase;
			font-kerning: none;
			color: var(--clr-main);

			@media (width >= 990px) {
				font-weight: 800;
			}

			&.title-main {
				-webkit-text-stroke: 3px var(--clr-main);
				text-shadow: none;

				@media (width <= 768px) {
					-webkit-text-stroke: 1px var(--clr-inverted);
					text-shadow:
						0 0 1px var(--clr-main),
						-1px -1px 0 var(--clr-inverted),
						1px -1px 0 var(--clr-inverted),
						-1px 1px 0 var(--clr-inverted),
						1px 1px 0 var(--clr-inverted),
						-1px 0 0 var(--clr-inverted),
						1px 0 0 var(--clr-inverted),
						0 -1px 0 var(--clr-inverted),
						0 1px 0 var(--clr-inverted);
				}
			}

			&.title-overlay {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -48%);
				color: var(--clr-main);
				-webkit-text-stroke: 5px var(--clr-inverted);
				text-shadow: none;

				@media (width <= 768px) {
					-webkit-text-stroke: 1px var(--clr-inverted);
					transform: translate(-50%, -43.5%);
					text-shadow:
						0 0 1px var(--clr-main),
						-2px -2px 0 var(--clr-inverted),
						2px -2px 0 var(--clr-inverted),
						-2px 2px 0 var(--clr-inverted),
						2px 2px 0 var(--clr-inverted),
						-2px 0 0 var(--clr-inverted),
						2px 0 0 var(--clr-inverted),
						0 -2px 0 var(--clr-inverted),
						0 2px 0 var(--clr-inverted);
				}
			}
		}

		img.title {
			display: block;
			margin-inline: auto;
			max-inline-size: 75%;
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
		animation: slide-in 0.75s ease-out forwards;
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
