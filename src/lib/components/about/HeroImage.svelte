<script>
	let { src, alt, title } = $props();
</script>

<div class="image-hero">
	<picture>
		<source srcset={src} media="(max-width: 768px)" />
		<source srcset={src} media="(max-width: 1200px)" />

		<img {src} {alt} width="1200" />
	</picture>

	<h1>{title}</h1>
</div>

<style>
	.image-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 5rem;
		view-transition-name: hero-image;
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		position: relative;

		& picture {
			width: 100%;
			display: block;
		}

		& img {
			width: 100%;
			height: auto;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 60%, transparent);
			border-radius: var(--radius);

			@media (width <= 500px) {
				width: 100%;
				height: 80vw;
			}
		}

		& h1 {
			margin-block: -1.4em;
			padding-bottom: 4rem;
			font-size: clamp(var(--h3), 6vw, var(--xxl));
			font-weight: 700;
			text-shadow: 0 0 5px var(--smoke);
			color: var(--clr-blue);
			font-family: var(--orbitron);

			/* scroll-driven animations */
			@media (prefers-reduced-motion: no-preference) {
				@supports (animation-timeline: scroll()) {
					animation: title linear both;
					animation-timeline: scroll(root);
					animation-range: 0vh 108vh;

					@media (width <= 1300px) {
						animation-range: 0vh 65vh;
					}

					@media (width <= 1090px) {
						animation-range: 0vh 58vh;
					}

					@media (width <= 990px) {
						animation-range: 0vh 50vh;
					}

					@media (width <= 768px) {
						animation-range: 0vh 35vh;
					}

					@media (width <= 500px) {
						animation-range: 0vh 25vh;
					}
				}
			}

			@media (width <= 1300px) {
				padding-bottom: 2rem;
				mix-blend-mode: normal;
			}

			@media (width <= 1050px) {
				padding-bottom: 1rem;
			}

			@media (width <= 768px) {
				padding-bottom: 0;
			}
		}
	}

	::view-transition-old(hero-image),
	::view-transition-new(hero-image) {
		animation: none;
		mix-blend-mode: normal;
	}

	::view-transition-old(hero-image) {
		animation: scale-out 0.75s ease-out forwards;
	}

	::view-transition-new(hero-image) {
		animation: scale-in 0.75s ease-in forwards;
	}

	@keyframes scale-out {
		from {
			scale: 1;
			opacity: 1;
		}
		to {
			scale: 0.8;
			opacity: 0;
		}
	}

	@keyframes scale-in {
		from {
			scale: 1.2;
			opacity: 0;
		}
		to {
			scale: 1;
			opacity: 1;
		}
	}

	@keyframes title {
		0% {
			opacity: 0;
			translate: 0 100px;
			letter-spacing: 10px;
		}
		55% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			translate: 0 0;
			letter-spacing: 0px;
		}
	}
</style>
