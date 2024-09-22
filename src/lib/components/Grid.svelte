<script>
	export let leftTitle;
	export let rightTitle;
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
	@media (min-width: 300px) {
		.title {
			font-size: 2.25rem;
			mix-blend-mode: difference;
			color: var(--purple);
			font-family: var(--orbitron);
		}

		.left,
		.right {
			line-height: 1.25;
			text-align: left;
			font-size: clamp(1.1rem, 3vw, 1.5rem);
			color: var(--white);
			margin-top: -1rem;
		}

		.inline {
			display: inline-block;
			margin: 0.5rem auto;
			border-radius: 15px;
			padding: 0.5rem;
			background-color: hsla(210, 2%, 22%, 0.25);
			backdrop-filter: blur(5px);
			box-shadow: 0px 0px 20px var(--white);
		}
	}

	@media (min-width: 990px) {
		.left,
		.right {
			line-height: 1.5;
		}

		.title {
			font-size: clamp(1.5rem, 5vw, 5rem);
			letter-spacing: 5px;
		}

		.titleLeft {
			text-align: right;
		}

		.titleRight {
			text-align: left;
		}

		.grid {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			margin: 7% 0 -28% 0;
			gap: 3rem;
		}

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

		.title {
			color: var(--purple);
		}
	}

	@media (min-width: 1024px) {
		.grid {
			margin-bottom: -10%;
		}
	}
</style>
