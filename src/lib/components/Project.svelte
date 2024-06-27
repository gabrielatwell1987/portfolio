<script>
	export let title;
	export let img;
	export let url;
	export let description;
</script>

<h3 class="links name">{title}</h3>
<a class="links" href={url} target="_blank"
	><img class="img" src={img} alt={title} width="400px" height="475px" /><span class="hover-text"
		>{description}</span
	></a
>

<style>
	@media (min-width: 200px) {
		.img {
			border-radius: 8px;
			max-width: 100%;
			transition: scale 0.25s ease-in-out;
		}

		.img:hover {
			scale: 1.05;
		}

		.links {
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
			font-family: var(--lexend);
			font-size: 1.25rem;
			font-weight: 600;
			margin: 0 auto;
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		.hover-text {
			visibility: hidden;
			width: 100%;
			background-color: black;
			color: #fff;
			text-align: center;
			border-radius: 6px;
			padding: 5px 0;
			font-size: 1rem;
			position: absolute;
			z-index: 1;
			bottom: -10%;
			left: 41%;
			margin-left: -41%;
			opacity: 0;
			transition: opacity 1s;
		}

		.links:hover .hover-text {
			visibility: visible;
			opacity: 1;
		}

		.name {
			font-weight: 600;
			margin-bottom: -1.5rem;
		}

		a {
			font-family: var(--montserrat);
			font-size: 0.75rem;
			text-decoration: none;
			font-weight: 700;
			color: var(--sky);
		}
	}

	@media (min-width: 740px) {
		img:hover {
			transition: scale 0.75s ease;
		}

		.links {
			letter-spacing: 4px;
			font-size: 2rem;
		}

		a {
			font-size: 1rem;
		}

		.hover-text {
			width: 75%;
			margin-left: -25%;
			font-size: 1.5rem;
		}
	}

	@media (min-width: 990px) {
		.links {
			padding: 2rem;
			flex-basis: 100%;
			letter-spacing: 5px;
			font-size: 2.5rem;
		}

		.name {
			margin-bottom: -3.5rem;
		}

		.hover-text {
			width: 25%;
			margin-left: -3%;
			font-size: 1.75rem;
		}
	}
</style>
