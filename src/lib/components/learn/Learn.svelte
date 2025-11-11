<script>
	let { href, title } = $props();
</script>

<article class="learn-article">
	<h3 class="learn">Learn more about {title}</h3>

	<p class="center">
		If you would like to know more about <a class="link" {href} aria-label="greensock">{title}</a>,
		click the link!
	</p>
</article>

<style>
	.learn-article {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: transparent;
		box-shadow: none;
		padding: 0;

		& .learn {
			text-align: center;
			font-family: var(--anta);
			color: var(--clr-blue);
			font-size: clamp(var(--h6), 2vw, var(--h3));
			padding: 0;
			margin: 0;
		}

		& .center {
			text-align: center;
			font-size: clamp(var(--xs), 1.5vw, var(--h4));
			line-height: 1.5;
			color: var(--clr-main);
			margin: 0;
			padding: 0;

			& .link {
				text-decoration: none;
				color: var(--clr-link);
				font-family: var(--ultra);
				font-size: clamp(var(--sm), 1.25vw, var(--h4));
				font-weight: 700;
				margin: 0;
				padding: 0;
			}
		}
	}
</style>
