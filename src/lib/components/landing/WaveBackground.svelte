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

		&.bottom {
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

		&.top {
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
		&.gentle {
			clip-path: polygon(0% 40%, 50% 90%, 100% 40%, 100% 100%, 0% 100%);

			@media (width <= 768px) {
				clip-path: polygon(0% 60%, 50% 85%, 100% 60%, 100% 100%, 0% 100%);
			}
		}

		&.sharp {
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
	}
</style>
