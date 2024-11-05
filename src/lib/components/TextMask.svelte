<script>
	let { text, src } = $props();
</script>

<h2 class="mask">{text}</h2>

<style>
	h2.mask {
		font-family: var(--anta);
		font-size: clamp(2.2rem, 8vw, 22rem);
		font-weight: 900;
		letter-spacing: 6px;
		text-transform: uppercase;
		color: var(--white);
		background: url('/logos/textMask.webp') 0 0 / center cover no-repeat;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}

	h2.mask:hover {
		filter: drop-shadow(0 0 5px var(--white));
	}
</style>
