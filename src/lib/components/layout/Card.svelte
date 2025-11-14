<script>
	/** @type {{title: any, desc: any, button: any, src: any, alt: any, href: any}} */
	let { title, desc, button, src, alt, href } = $props();
</script>

<section class="card">
	<img class="card-image" {src} {alt} />

	<h2 class="card-title">{title}</h2>

	<p class="card-description">{desc}</p>

	<a {href} class="card-button">{button}</a>
</section>

<style>
	.card {
		width: fit-content;
		height: fit-content;
		background-color: transparent;
		border-radius: 8px;
		border: 2px solid var(--clr-main);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition: all 0.3s ease-out;
		padding-block: 1em;
		padding-inline: 2em;

		&:hover {
			box-shadow: 0 0 5em var(--clr-gray);
		}

		.card-image {
			width: fit-content;
			height: fit-content;
			object-fit: cover;
			border-radius: 0 0 8px 8px;
			display: grid;
			place-self: center;
			margin-inline: auto;
			padding: 1rem;
		}

		.card-title {
			color: var(--clr-blue);
			font-family: var(--ultra);
			font-size: clamp(var(--h3), 2vw, var(--xxl));
			font-weight: 800;
			letter-spacing: -1px;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
		}

		.card-description {
			color: var(--clr-main);
			font-size: clamp(var(--xs), 1.5vw, var(--h4));
			font-weight: 300;
			margin-bottom: 1rem;
			text-indent: 1rem;
			display: flex;
			justify-content: center;
			letter-spacing: 0px;
		}

		.card-button {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: transparent;
			color: var(--clr-blue);
			border: 1px solid var(--clr-blue);
			border-radius: 5rem;
			font-family: var(--ultra);
			font-size: clamp(var(--sm), 1vw, var(--h6));
			font-weight: 300;
			letter-spacing: 1px;
			width: fit-content;
			height: 10%;
			outline: none;
			margin: 1rem auto;
			filter: drop-shadow(0 0 0.75rem var(--clr-gray));
			transition: 750ms;
			outline: 3px solid currentColor;
			outline-offset: -7px;
			padding: 1rem 1.75rem;
			user-select: none;

			&:hover {
				color: var(--clr-main);
				border-color: var(--clr-main);
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}
		}

		@media (width < 500px) {
			width: 100%;
			padding: 1rem 1.5rem 0 1.5rem;

			.card-image {
				height: 190px;
				object-fit: cover;
			}

			.card-title {
				font-size: clamp(var(--h6), 2vw, var(--h5));
			}

			.card-description {
				font-size: clamp(var(--xs), 1vw, var(--h6));
			}

			.card-button {
				font-size: clamp(var(--sm), 1vw, var(--h6));
				font-weight: 700;
				padding: 1rem;
				width: 100%;
			}
		}
	}
</style>
