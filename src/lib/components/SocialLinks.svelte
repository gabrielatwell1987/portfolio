<script></script>

<main class="dev-links" aria-label="links">
	<a
		class="size yellow"
		href="https://www.github.com/gabrielatwell1987/portfolio"
		target="_blank"
		aria-label="home link"
	>
		<i class="fa-brands fa-github"></i></a
	>

	<a class="size" href="https://codepen.io/gabrielatwell" target="_blank" aria-label="home link">
		<i class="fa-brands fa-codepen"></i></a
	>

	<a
		class="size"
		href="https://www.linkedin.com/in/gabrielatwell/"
		target="_blank"
		aria-label="home link"
	>
		<i class="fa-brands fa-linkedin"></i>
	</a>

	<a
		class="size"
		href="https://discordapp.com/users/1007777351809114112"
		target="_blank"
		aria-label="home link"
	>
		<i class="fa-brands fa-discord"></i>
	</a>

	<a
		class="size"
		href="https://www.reddit.com/user/gatwell702"
		target="_blank"
		aria-label="home link"
	>
		<i class="fa-brands fa-square-reddit"></i>
	</a>
</main>

<style>
	.dev-links {
		margin-left: 0%;
		display: flex;
		justify-content: space-evenly;
		padding: 1rem;

		.size {
			color: var(--blue);
			font-weight: 900;
			transition: color 0.5s ease;
			-webkit-text-stroke: 0.025rem var(--white);
			filter: opacity(0.95);

			&:focus {
				outline: none;
				background: transparent;
				box-shadow: none;
			}

			&:hover {
				color: var(--dark-pale);
				font-weight: 900;
				transition: color 0.5s ease;
			}

			&,
			&:hover {
				font-size: clamp(2.5rem, 4vw, 5rem);
			}

			& i {
				cursor: pointer;
			}
		}
	}

	@media (max-width: 990px) {
		.dev-links {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 1.5rem;
			margin-top: 5rem;
		}
	}
</style>
