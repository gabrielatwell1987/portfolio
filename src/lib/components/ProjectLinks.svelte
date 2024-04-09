<script>
	export let title;
	export let img;
	export let url;
</script>

<h3 class="linksize name">{title}</h3>
<a class="linksize" href={url} target="_blank"
	><img
		class="img"
		src={img}
		alt="The first project: Alphamaps, Made with Three.js."
		width="400px"
		height="475px"
	/></a
>

<style>
	@media (min-width: 200px) {
		.img {
			border-radius: 8px;
		}

		.img:hover {
			opacity: 0.8;
			transition: opacity 0.25s ease-in-out;
		}

		.linksize {
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
			transform: scale(1.1);
			clip-path: polygon(
				0% 15%,
				15% 15%,
				15% 0%,
				85% 0%,
				85% 15%,
				100% 15%,
				100% 85%,
				85% 85%,
				85% 100%,
				15% 100%,
				15% 85%,
				0% 85%
			);
			transition: transform 0.75s ease;
		}

		.linksize {
			letter-spacing: 4px;
			font-size: 1.5rem;
		}

		a {
			font-size: 1rem;
		}
	}

	@media (min-width: 990px) {
		.linksize {
			padding: 2rem;
			flex-basis: 100%;
			letter-spacing: 5px;
			font-size: 2rem;
		}

		.name {
			margin-bottom: -3.5rem;
		}
	}
</style>
