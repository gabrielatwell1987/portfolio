<script>
	let { projects = [] } = $props();
</script>

<section class="projects-grid">
	{#each projects as project}
		<a href={project.url} class="project-card">
			<img src={project.img} alt={project.title} />

			<div class="overlay">
				<p>{project.title}</p>
			</div>
		</a>
	{/each}
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 0.2rem 0.5rem;

		@media (width <= 500px) {
			grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
			margin-bottom: 3em;
		}

		& .project-card {
			display: block;
			position: relative;
			transition:
				scale 0.2s ease,
				opacity 0.2s ease;

			& img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
				border: 1px solid var(--clr-main);
			}

			& .overlay {
				position: absolute;
				inset: 0;
				background: rgba(0, 0, 0, 0.7);

				display: flex;
				align-items: center;
				justify-content: center;
				opacity: 0;
				transition: opacity 0.3s ease;
				padding: 1rem;

				& p {
					color: var(--clr-blue);
					font-size: clamp(var(--sm), 1.2vw, var(--h5));
					font-weight: 800;
					text-align: center;
					line-height: 1.1;
					margin-top: 1em;
				}
			}

			&:hover .overlay,
			&:focus .overlay {
				opacity: 1;
				padding: 1rem 0;
			}

			&:hover img,
			&:focus img {
				filter: blur(2px);
				scale: 1.05;
			}
		}
	}
</style>
