<script>
	let { text, src } = $props();
</script>

<header>
	<h2 class="mask">{text}</h2>
</header>

<style>
	h2.mask {
		font-family: var(--anta);
		font-size: clamp(2.2rem, 8vw, 22rem);
		font-weight: 900;
		letter-spacing: 6px;
		line-height: 1;
		text-transform: uppercase;
		text-align: center;

		text-shadow: 10px 10px 2px var(--dark-gray);
		-webkit-text-stroke: 10px var(--smoke);
		background-color: var(--white);
		background-repeat: no-repeat;
		background-image: url('/logos/textMask.webp');
		background-position: 50% 50%;
		background-size: 100%;
		-webkit-background-clip: text;
		background-clip: text;
		transition: all 0.5s linear;

		&:hover {
			filter: drop-shadow(0 0 5px var(--white));
		}
	}
</style>
