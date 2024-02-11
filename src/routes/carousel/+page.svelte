<script>
	import ImageCarousel from '$lib/components/Carousel.svelte';
</script>

<h1>photos</h1>
<main>
	<ImageCarousel />

	<!-- domino image and link -->
	<div class="domino">
		<p class="domino-text">Dominoes:</p>
		<a class="btn-link" href="/photos/domino"
			><img
				class="domino-image"
				src="logos/dominoes.png"
				alt="A game of dominoes made in Spline."
			/></a
		>
	</div>
</main>

<style>
	main {
		text-align: center;
		font-size: 2.5rem;
		margin: 5rem 0;
		background: url('/logos/dead-tree.png') no-repeat center center/cover fixed;
	}

	.domino {
		display: block;
		margin-top: 2rem;
	}

	.domino-image {
		display: block;
		width: 20%;
		height: 25%;
		margin: -1rem auto;
		border-radius: 10px;
	}

	.domino-image:hover {
		opacity: 0.5;
		transition: opacity 0.75s ease-in-out;
		animation: wiggle 0.5s ease-in-out infinite;
	}

	.domino-text {
		font-family: var(--montserrat);
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--purple);
		letter-spacing: 5px;
	}

	h1 {
		font-size: 3.5rem;
		font-weight: 900;
		color: var(--sky);
		font-family: var(--major);
		letter-spacing: 5px;
		text-transform: uppercase;
		margin-bottom: 2rem;
		text-align: center;
	}

	@keyframes wiggle {
		0% {
			rotate: 0deg;
			translate: 0 0;
		}
		25% {
			rotate: -2deg;
			translate: -5px 0;
		}
		80% {
			rotate: 2deg;
			translate: 5px 0;
		}
	}
</style>
