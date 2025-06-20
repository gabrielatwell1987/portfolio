<script>
	let { href, title } = $props();
</script>

<h3 class="learn">Learn more about {title}</h3>

<p class="center">
	If you would like to know more about <a class="link" {href} aria-label="greensock">{title}</a>,
	click the link!
</p>

<style>
	.link {
		text-decoration: none;
		font-size: clamp(var(--h6), 3vw, var(--h4));
		font-weight: 700;
		text-decoration: none;
		color: var(--clr-link);
		font-family: var(--orbitron);
	}

	.learn {
		margin: 5rem 0 -1rem 0;
		text-align: center;
		font-family: var(--anta);
		color: var(--clr-blue);
		font-size: clamp(var(--h5), 3vw, var(--h2));
		margin-top: -7rem;
	}
	.center {
		text-align: center;
		font-size: clamp(var(--sm), 2vw, var(--h6));
		margin-top: 2rem;
		line-height: 1.5;
		color: var(--clr-main);

		@media (width >= 1024px) {
			margin-bottom: 5%;
		}
	}
</style>
