<script>
	/** @type {{src: any, alt: any, text: any}} */
	let { src, alt, text } = $props();
</script>

<div class="logo">
	<figure>
		<figcaption>
			<p>{text}</p>
		</figcaption>

		<img {src} {alt} />
	</figure>
</div>

<style>
	figure {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		img {
			border-radius: 2.5%;
			max-width: 100%;
		}

		figcaption {
			position: absolute;
			top: 13%;
			padding: 0.5rem;
			border-radius: 0.5rem;
			animation: figcaption 10s ease-in-out forwards;
			margin-inline: auto;
		}

		p {
			color: var(--clr-gray);
			margin: 0;
			padding: 0;
			text-align: center;
			font-size: clamp(var(--sm), 2vw, var(--h4));
			font-weight: 500;
		}
	}

	@media (width >= 300px) {
		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-inline: auto;
			flex-basis: 75%;
		}
	}

	@media (width >= 740px) {
		.logo {
			width: var(--100);
			margin-inline: auto;
			border-radius: 10%;
			margin: 3rem 0;
		}
	}

	@keyframes figcaption {
		0% {
			transform: translateY(-20%);
			opacity: 0;
		}

		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
