<script>
	/** @type {{leftTitle: any, rightTitle: any}} */
	let { leftTitle, rightTitle } = $props();
</script>

<section class="grid" aria-label="bio">
	<article class="inline right">
		<h2 class="title titleLeft">{leftTitle}</h2>

		<p class="right">
			The path that Gabe has chosen is the frontend path. One of his main interests is animations,
			especially animations on the web. Turning a website from being a static site to a dynamic site
			is what he thinks makes your website look a million times better, if you do it right.
		</p>
	</article>

	<article class="inline left">
		<h2 class="title titleRight">{rightTitle}</h2>

		<p class="left">
			A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace, colors,
			typography, scaling, and contrast is what he knows best. These topics are the main key to make
			your website designs look professional and appealing to the eye.
		</p>
	</article>
</section>

<style>
	.inline {
		@media (width >= 300px) {
			display: inline-block;
			margin: 0.5rem auto;
			margin: 0;
			border-radius: var(--radius);
			padding: 0.5rem;
			background-color: hsla(0, 0%, 26%, 0.25);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(4px);
			box-shadow: 0px 0px 12px var(--clr-main);

			.title {
				color: var(--clr-blue);
				font-family: var(--orbitron);
				font-size: clamp(var(--h3), 4.75vw, var(--xxl));
				text-shadow: 0 0 5px 3px var(--clr-gray);
				mix-blend-mode: difference;
				-webkit-text-stroke: 2px var(--clr-main);
				letter-spacing: -1px;

				@media (width <= 768px) {
					-webkit-text-stroke: 1px var(--clr-main);
				}
			}

			.left,
			.right {
				line-height: 1.35;
				text-align: left;
				font-size: clamp(var(--h6), 1.75vw, var(--h3));
				color: var(--clr-main);
				margin-top: -1rem;
				hyphens: auto;
				letter-spacing: 0px;
			}
		}

		@media (width >= 990px) {
			margin: 0 auto;
			padding: 1rem 2rem;
		}
	}

	.grid {
		@media (width >= 300px) {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		@media (width >= 990px) {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			margin: -10em 0 -50% 0;
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

		@media (width >= 1024px) {
			margin-bottom: -10%;
		}
	}

	.left,
	.right {
		@media (width >= 990px) {
			line-height: 1.5;

			.titleLeft {
				text-align: right;
			}

			.titleRight {
				text-align: left;
			}
		}
	}
</style>
