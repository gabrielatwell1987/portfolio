<script>
	let { position, opacity, color, height, className = '' } = $props();
</script>

<div
	class="wave-background {className} {position}"
	style="background: {color}; opacity: {opacity}; height: {height};"
></div>

<style>
	.wave-background {
		position: fixed;
		width: 100%;
		pointer-events: none;
		z-index: 0;
	}

	/* Bottom wave using clip-path */
	.wave-background.bottom {
		bottom: 0;
		left: 0;
		clip-path: polygon(
			0% 60%,
			15% 65%,
			30% 70%,
			45% 65%,
			60% 55%,
			75% 60%,
			90% 65%,
			100% 60%,
			100% 100%,
			0% 100%
		);
	}

	/* Top wave using clip-path */
	.wave-background.top {
		top: 0;
		left: 0;
		clip-path: polygon(
			0% 0%,
			100% 0%,
			100% 40%,
			90% 35%,
			75% 40%,
			60% 45%,
			45% 35%,
			30% 30%,
			15% 35%,
			0% 40%
		);
	}

	/* Alternative wave shapes */
	.wave-background.gentle {
		clip-path: polygon(
			0% 60%,
			5% 62%,
			10% 64%,
			15% 66%,
			20% 68%,
			25% 70%,
			30% 72%,
			35% 74%,
			40% 76%,
			45% 77%,
			50% 78%,
			55% 77%,
			60% 76%,
			65% 74%,
			70% 72%,
			75% 70%,
			80% 68%,
			85% 66%,
			90% 64%,
			95% 62%,
			100% 60%,
			100% 100%,
			0% 100%
		);
	}

	.wave-background.sharp {
		clip-path: polygon(
			0% 80%,
			10% 60%,
			20% 80%,
			30% 50%,
			40% 80%,
			50% 40%,
			60% 80%,
			70% 50%,
			80% 80%,
			90% 60%,
			100% 80%,
			100% 100%,
			0% 100%
		);
	}

	/* Mobile responsive wave adjustments */
	@media (width <= 768px) {
		.wave-background.gentle {
			clip-path: polygon(
				0% 70%,
				5% 72%,
				10% 74%,
				15% 76%,
				20% 78%,
				25% 80%,
				30% 82%,
				35% 84%,
				40% 86%,
				45% 87%,
				50% 88%,
				55% 87%,
				60% 86%,
				65% 84%,
				70% 82%,
				75% 80%,
				80% 78%,
				85% 76%,
				90% 74%,
				95% 72%,
				100% 70%,
				100% 100%,
				0% 100%
			);
		}
	}
</style>
