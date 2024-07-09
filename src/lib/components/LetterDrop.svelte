<script>
</script>

<main class="animated-text">
	<span class="animated-letter" style="animation-delay: 0s;"> a </span>
	<span class="animated-letter" style="animation-delay: 0.1s;"> t </span>
	<span class="animated-letter" style="animation-delay: 0.2s;"> w </span>
	<span class="animated-letter" style="animation-delay: 0.30000000000000004s;"> e </span>
	<span class="animated-letter" style="animation-delay: 0.4s;"> l </span>
	<span class="animated-letter" style="animation-delay: 0.5s;"> l </span>
</main>

<style>
	.animated-text {
		font-size: 100px;
		color: #91a4ca;
		text-align: center;
	}

	.animated-letter {
		display: inline-block;
		animation: drop 3s 0s forwards;
	}

	@keyframes drop {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
