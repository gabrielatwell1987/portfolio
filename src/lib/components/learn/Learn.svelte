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
		font-size: clamp(1.5rem, 3vw, 2rem);
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
		font-size: clamp(1.5rem, 3vw, 2.5rem);
		margin-top: -7rem;
	}

	@media (width >= 300px) {
		.center {
			text-align: center;
			font-size: clamp(1rem, 2vw, 1.35rem);
			margin-top: 2rem;
			line-height: 1.5;
			color: var(--clr-main);
		}
	}

	@media (width >= 1024px) {
		.center {
			margin-bottom: 5%;
		}
	}
</style>
