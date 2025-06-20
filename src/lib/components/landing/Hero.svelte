<script>
	import Button from '$lib/components/layout/Button.svelte';
	import HeroTitle from '$lib/components/layout/HeroTitle.svelte';
</script>

<main>
	<img
		src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		alt="Wireframing and design of a website"
	/>

	<section aria-label="hero">
		<HeroTitle title="Frontend Crafted Web Experiences" />

		<h4 class="summary left up">
			I am a frontend developer who loves to create beautiful and functional websites. This website
			showcases my skills with some projects that I created. I look forward to hearing from you so
			we can discuss your goals for your online needs!
		</h4>

		<Button href="/projects" title="Creations" />
	</section>

	<br />
</main>

<style>
	main {
		text-align: center;
		font-size: 1.75rem;
		height: 100vh;
		position: relative;
		margin-bottom: 2%;

		@media screen and (width >= 740px) {
			font-size: 2rem;
		}

		@media screen and (width >= 990px) {
			font-size: 2.5rem;
			margin: 5rem 0;
		}

		& img {
			border-radius: var(--radius);
			opacity: 0.15;
			transition: opacity 0.75s ease-in-out;
			width: 100%;
			height: 100%;
			object-fit: cover;
			box-shadow: 0 0 10px var(--clr-gray);

			@media screen and (width >= 990px) {
				width: 90%;
				height: 100%;
			}
		}

		& section {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;

			& .summary {
				margin-inline: auto;
				font-family: var(--bronova);
				font-size: clamp(var(--sm), 1.5vw, var(--h4));
				font-weight: 400;
				letter-spacing: 0px;
				width: 85%;
				padding: 0 1.5rem;
				margin-bottom: -2%;
				color: var(--clr-main);

				@media (width <= 500px) {
					width: 100%;
				}

				@media screen and (width >= 740px) {
					width: 95%;
				}

				@media screen and (width >= 990px) {
					width: 50%;
					letter-spacing: 3px;
				}

				@media (width >= 1024px) {
					width: 90%;
					margin-inline: auto;
				}
			}

			& .left {
				text-align: left;
			}
		}
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
