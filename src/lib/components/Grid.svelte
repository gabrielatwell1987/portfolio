<script>
	export let leftTitle;
	export let rightTitle;
</script>

<section class="grid" aria-label="bio">
	<div class="inline right">
		<h2 class="right title">{leftTitle}</h2>

		<p class="right">
			The path that Gabe has chosen is the frontend path. One of his main interests is animations,
			especially animations on the web. Turning a website from being a static site to a dynamic site
			is what he thinks makes your website look a million times better, if you do it right.
		</p>
	</div>

	<div class="inline left">
		<h2 class="left title">{rightTitle}</h2>

		<p class="left">
			A clean, crisp design is what Gabe tries to excel at. Visual hierarchy, whitespace, colors,
			typography, scaling, and contrast is what he knows best. These topics are the main key to make
			your website designs look professional and appealing to the eye.
		</p>
	</div>
</section>

<style>
	@media (min-width: 200px) {
		h2 {
			font-size: 2rem;
			mix-blend-mode: difference;
			color: var(--purple);
			font-family: var(--montserrat);
		}

		p {
			line-height: 1.75;
			font-family: var(--montserrat);
			text-align: left;
		}

		.inline {
			display: inline-block;
			margin: 0.5rem auto;
			border-radius: 15px;
			padding: 0.5rem;
			background-color: hsla(210, 2%, 22%, 0.25);
			backdrop-filter: blur(10px);
			box-shadow: 0px 0px 20px var(--white);
		}
	}

	@media (min-width: 990px) {
		p {
			line-height: 2.5;
		}

		h2 {
			font-size: 3rem;
			letter-spacing: 5px;
		}

		.grid {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			margin: 7% 0 -20% 0;
			gap: 8rem;
		}

		.inline {
			margin: 0 auto;
			padding: 1rem 2rem;
		}

		.right {
			text-align: right;
			font-size: 2rem;
			letter-spacing: 2px;
			line-height: 1.5;
		}

		.left {
			text-align: left;
			font-size: 2rem;
			letter-spacing: 2px;
			line-height: 1.5;
		}

		.title {
			color: var(--purple);
			font-family: var(--anta);
			font-size: 5rem;
		}
	}
</style>
