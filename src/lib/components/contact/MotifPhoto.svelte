<script>
</script>

<div class="hire-wrapper">
	<img src="/images/gabe.webp" alt="gabe atwell" />
	<img src="/logos/hire-logo.svg" alt="hire svg" class="hire-logo" />
</div>

<style>
	.hire-wrapper {
		position: relative;
		width: fit-content;
		margin-inline: auto;

		& img {
			width: clamp(200px, 30vw, 750px);
			height: clamp(200px, 30vw, 750px);
			border-radius: 10% var(--radius);
			display: block;
			margin-inline: auto;
			z-index: 1;
		}

		& .hire-logo {
			position: absolute;
			bottom: 4vw;
			right: 1vw;
			width: 100px;
			height: auto;
			z-index: 5;
			scale: 8;

			@media (width <= 1400px) {
				scale: 7;
			}

			@media (width <= 1100px) {
				scale: 5;
				bottom: 2.5vw;
				right: 0;
			}

			@media (width <= 990px) {
				right: -1vw;
			}

			@media (width <= 768px) {
				scale: 3;
				bottom: 0;
				right: -3vw;
			}

			@media (width <= 500px) {
				right: -6vw;
				bottom: 1vw;
			}
		}
	}
</style>
