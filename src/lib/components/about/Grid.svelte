<script>
	/** @type {{leftTitle: any, rightTitle: any}} */
	let { leftTitle, rightTitle } = $props();
</script>

<section class="grid" data-grid-wrapper aria-label="bio">
	<article class="grid-card right">
		<h2 class="card-title" data-title-left>{leftTitle}</h2>

		<p data-description-right>
			The path that Gabe has chosen is the frontend path. One of his main interests is animations,
			especially animations on the web. Turning a website from being a static site to a dynamic site
			is what he thinks makes your website look a million times better, if you do it right.
		</p>
	</article>

	<article class="grid-card left">
		<h2 class="card-title" data-title-right>{rightTitle}</h2>

		<p data-description-left>
			A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace, colors,
			typography, scaling, and contrast is what he knows best. These topics are the main key to make
			your website designs look professional and appealing to the eye.
		</p>
	</article>
</section>

<style>
	.grid-card {
		@media (width >= 300px) {
			display: inline-block;
			margin: 0;
			padding: 0.5rem;
			background-color: hsla(0, 0%, 26%, 0.25);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(4px);
			border: 2px solid var(--clr-main);
			border-radius: var(--radius);

			& .card-title {
				font-family: var(--ultra);
				font-size: clamp(var(--h3), 4.5vw, var(--xxl));
				font-weight: 400;
				text-shadow: 0 0 5px 3px var(--clr-gray);
				mix-blend-mode: difference;
				letter-spacing: -1px;
				color: var(--clr-invert);
				text-shadow:
					0 0 1px var(--clr-invert),
					-3px -3px 0 var(--clr-main),
					3px -3px 0 var(--clr-main),
					-3px 3px 0 var(--clr-main),
					3px 3px 0 var(--clr-main),
					-3px 0 0 var(--clr-main),
					3px 0 0 var(--clr-main),
					0 -3px 0 var(--clr-main),
					0 3px 0 var(--clr-main);

				@media (width <= 768px) {
					font-weight: 600;
					text-shadow:
						0 0 1px var(--clr-invert),
						-2px -2px 0 var(--clr-main),
						2px -2px 0 var(--clr-main),
						-2px 2px 0 var(--clr-main),
						2px 2px 0 var(--clr-main),
						-2px 0 0 var(--clr-main),
						2px 0 0 var(--clr-main),
						0 -2px 0 var(--clr-main),
						0 2px 0 var(--clr-main);
				}
			}

			& [data-description-left],
			& [data-description-right] {
				line-height: 1.35;
				text-align: left;
				font-size: clamp(var(--h6), 1.75vw, var(--h3));
				color: var(--clr-main);
				margin-top: -1rem;
				hyphens: auto;
				letter-spacing: 0px;
			}

			& [data-description-right] {
				text-align: right;
			}

			&.left {
				box-shadow: -5px 5px 0 var(--clr-main);
			}

			&.right {
				box-shadow: 5px 5px 0 var(--clr-main);
			}
		}

		@media (width >= 990px) {
			margin: 0 auto;
			padding: 1rem 2rem;
		}
	}

	.grid[data-grid-wrapper] {
		@media (width >= 300px) {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		@media (width >= 990px) {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			gap: 3rem;

			.right {
				text-align: right;
				line-height: 1.5;
			}

			.left {
				text-align: left;
				line-height: 1.5;
			}
		}
	}

	.left,
	.right {
		@media (width >= 990px) {
			line-height: 1.5;

			[data-title-left] {
				text-align: right;
			}

			[data-title-right] {
				text-align: left;
			}
		}
	}
</style>
