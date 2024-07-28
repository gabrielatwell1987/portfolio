<script>
</script>

<main class="spinner-container">
	<section class="spinner">
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</section>
</main>

<style>
	main {
		width: 100%;
		margin-inline: auto;
		scale: 2;
	}

	.spinner-container {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.spinner {
		display: inline-block;
		position: relative;
		width: clamp(1rem, 2vw, 1.75rem);
		height: clamp(1rem, 2vw, 1.75rem);
	}

	.spinner div {
		animation: roller 1s ease forwards infinite;
		transform-origin: 25px 25px;
	}

	.spinner div:after {
		content: ' ';
		display: block;
		position: absolute;
		width: clamp(1rem, 2vw, 1.75rem);
		height: clamp(1rem, 2vw, 1.75rem);
		border-radius: 50%;
		background: #6395b6;
		margin: -2.5px 0 0 -2.5px;
	}

	.spinner div:nth-child(1) {
		transform: rotate(0deg);
		animation-delay: -0.875s;
	}
	.spinner div:nth-child(2) {
		transform: rotate(45deg);
		animation-delay: -0.75s;
	}
	.spinner div:nth-child(3) {
		transform: rotate(90deg);
		animation-delay: -0.625s;
	}
	.spinner div:nth-child(4) {
		transform: rotate(135deg);
		animation-delay: -0.5s;
	}
	.spinner div:nth-child(5) {
		transform: rotate(180deg);
		animation-delay: -0.375s;
	}
	.spinner div:nth-child(6) {
		transform: rotate(225deg);
		animation-delay: -0.25s;
	}
	.spinner div:nth-child(7) {
		transform: rotate(270deg);
		animation-delay: -0.125s;
	}
	.spinner div:nth-child(8) {
		transform: rotate(315deg);
		animation-delay: 0s;
	}

	@keyframes roller {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
