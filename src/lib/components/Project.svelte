<script>
	/** @type {{title: any, img: any, url: any, description: any}} */
	let { title, img, url, description } = $props();
</script>

<div class="content">
	<h3 class="link name">{title}</h3>

	<a class="link" href={url} target="_blank">
		<img class="img" src={img} alt={title} width="400px" height="475px" loading="lazy" />

		<span class="hover-text">{description}</span>
	</a>
</div>

<style>
	:root {
		--100: 100%;
	}

	.content {
		margin-bottom: 3rem;
	}

	@media (min-width: 300px) {
		.img {
			border-radius: 8px;
			max-width: var(--100);
			transition: scale 0.05s ease-in-out;
		}

		.img:hover {
			scale: 1.05;
		}

		.link {
			text-align: center;
			background-color: transparent;
			color: var(--purple);
			border: none;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
			justify-content: center;
			align-items: center;
			font-family: var(--orbitron);
			font-size: clamp(1.25rem, 2.5vw, 2.5rem);
			font-weight: 600;
			margin: 0 auto;
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		.hover-text {
			visibility: hidden;
			width: var(--100);
			background-color: black;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			padding: 5px 0;
			font-family: var(--montserrat);
			font-size: clamp(1rem, 1.5vw, 1.75rem);
			position: absolute;
			bottom: -5%;
			left: 41%;
			z-index: 1;
			margin-left: -41%;
			opacity: 0;
			transition: all 1s;
		}

		.link:hover .hover-text {
			visibility: visible;
			opacity: 1;
		}

		.name {
			font-weight: 900;
			margin-bottom: -1.5rem;
		}

		a {
			font-family: var(--montserrat);
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}
	}

	@media (min-width: 740px) {
		img:hover {
			transition: scale 0.25s ease;
		}

		.link {
			letter-spacing: 4px;
		}

		.hover-text {
			width: 75%;
			margin-left: -25%;
		}
	}

	@media (min-width: 990px) {
		.link {
			padding: 2rem;
			flex-basis: var(--100);
			letter-spacing: 5px;
		}

		.name {
			margin-bottom: -3.5rem;
		}

		.hover-text {
			width: 25%;
			margin-left: -3%;
		}
	}
</style>
