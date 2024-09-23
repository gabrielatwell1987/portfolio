<script></script>

<main class="dev-links" aria-label="links">
	<a class="size yellow" href="https://www.github.com/gabrielatwell1987/portfolio" target="_blank">
		<i class="fa-brands fa-github" /></a
	>

	<a class="size" href="https://codepen.io/gabrielatwell" target="_blank">
		<i class="fa-brands fa-codepen" /></a
	>

	<a class="size" href="https://www.linkedin.com/in/gabrielatwell/" target="_blank">
		<i class="fa-brands fa-linkedin" />
	</a>

	<a class="size" href="https://discordapp.com/users/1007777351809114112" target="_blank">
		<i class="fa-brands fa-discord" />
	</a>

	<a class="size" href="https://www.reddit.com/user/gatwell702" target="_blank">
		<i class="fa-brands fa-square-reddit" />
	</a>
</main>

<style>
	.size {
		font-size: 5rem;
		color: var(--blue);
		font-weight: 900;
	}

	.size:hover {
		font-size: 5rem;
		color: var(--yellow);
		mix-blend-mode: hard-light;
		font-weight: 900;
	}

	.dev-links {
		margin-left: 0%;
		display: flex;
		justify-content: space-evenly;
		padding: 1rem;
	}

	@media (max-width: 990px) {
		.size,
		.size:hover {
			font-size: 3rem;
		}

		.dev-links {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 1.5rem;
			margin-top: 5rem;
		}
	}

	@media (max-width: 500px) {
		.size,
		.size:hover {
			font-size: 2rem;
		}
	}
</style>
