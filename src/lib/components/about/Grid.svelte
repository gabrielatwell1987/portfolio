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
	@media (width >= 300px) {
		.inline {
			display: inline-block;
			margin: 0.5rem auto;
			border-radius: var(--radius);
			padding: 0.5rem;
			background-color: hsla(0, 0%, 26%, 0.25);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(4px);
			box-shadow: 0px 0px 12px var(--text-color);

			.title {
				font-size: clamp(2rem, 4vw, 5rem);
				text-shadow: 0 0 5px 3px var(--text-gray);
				mix-blend-mode: difference;
				color: var(--text-blue);
				font-family: var(--orbitron);
			}

			.left,
			.right {
				line-height: 1.35;
				text-align: left;
				font-size: clamp(1.2rem, 1.75vw, 2rem);
				color: var(--text-color);
				margin-top: -1rem;
				hyphens: auto;
			}
		}
	}

	@media (width >= 990px) {
		.left,
		.right {
			line-height: 1.5;

			.title {
				letter-spacing: 5px;
			}

			.titleLeft {
				text-align: right;
			}

			.titleRight {
				text-align: left;
			}
		}

		.grid {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			margin: -8em 0 -50% 0;
			gap: 3rem;

			.inline {
				margin: 0 auto;
				padding: 1rem 2rem;
			}

			.right {
				text-align: right;
				letter-spacing: 2px;
				line-height: 1.5;
			}

			.left {
				text-align: left;
				letter-spacing: 2px;
				line-height: 1.5;
			}
		}
	}

	@media (width >= 1024px) {
		.grid {
			margin-bottom: -10%;
		}
	}
</style>
