<script>
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Popup from '$lib/components/layout/Popup.svelte';
	import Testimonial from '$lib/components/projects/Testimonial.svelte';
	import adrienne from '$lib/images/adrienne.webp';
	import projects from '$lib/components/projects/projects.json';
	import testimonials from '$lib/components/projects/testimonials.json';
	// import user from '$lib/images/user.webp';

	// State management with $state
	let ProjectComponent = $state(null);
	let GithubContributions = $state(null);
	let showProjects = $state(false);
	let showGithub = $state(false);

	// Helper function to get testimonial for a project
	function getTestimonialForProject(projectIndex) {
		return testimonials.find((t) => t.projectIndex === projectIndex);
	}

	// Lazy load components using $effect
	$effect(() => {
		// Load Project component after initial render
		const loadProject = async () => {
			const module = await import('$lib/components/projects/Project.svelte');
			ProjectComponent = module.default;
			showProjects = true;
		};

		// Small delay to ensure initial page render is complete
		const timer = setTimeout(loadProject, 100);
		return () => clearTimeout(timer);
	});

	// Separate effect for GitHub contributions (heavier component)
	$effect(() => {
		if (showProjects) {
			const loadGithub = async () => {
				const module = await import('$lib/components/projects/GithubContributions.svelte');
				GithubContributions = module.default;
				showGithub = true;
			};

			// Load GitHub after projects are ready
			const timer = setTimeout(loadGithub, 200);
			return () => clearTimeout(timer);
		}
	});
</script>

<SEO
	title="Websites I've Created"
	description="Work Gabe has done"
	keywords="gabe atwell's projects, gabriel atwell's projects, gabe's work, gabriel's work, projects"
/>

<main>
	<Title title="showcase" />
</main>

<div class="popup">
	<Popup
		title=""
		text="Hover over the project image to reveal the tech stack I used on the project 👍🏻"
	/>
</div>

{#if showGithub && GithubContributions}
	<section class="github-section">
		<div class="container">
			<GithubContributions />
		</div>
	</section>
{/if}

<section class="bevel">
	{#if showProjects && ProjectComponent}
		{#each projects as project}
			{@const testimonial = getTestimonialForProject(project.index)}

			{#if testimonial}
				<div class="whole">
					<ProjectComponent {...project} />
					<Testimonial
						name={testimonial.name}
						title={testimonial.title}
						testimonial={testimonial.testimonial}
						rating={testimonial.rating}
						avatar={testimonial.avatar}
					/>
				</div>
			{:else}
				<ProjectComponent {...project} />
			{/if}
		{/each}
	{/if}
</section>

<style>
	:root {
		--100: 100%;
	}

	.github-section {
		padding: 2rem 1rem;
		margin: 2rem 0;
		background: transparent;
		border-radius: 12px;

		@media (width <= 768px) {
			margin: 1rem;
			padding: 1rem;
		}

		& .container {
			max-width: 1200px;
			margin: 0 auto;
			text-align: center;
		}
	}

	.bevel {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		place-items: center;
		margin: 1em;

		@media (width <= 768px) {
			margin: 0;
		}

		@media (width <= 500px) {
			padding: 4em 0;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}

		& .whole {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;
		}
	}

	.bevel:before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--clr-gray);
		clip-path: polygon(
			0 80px,
			80px 0,
			calc(100% - 80px) 0,
			100% 80px,
			100% calc(100% - 80px),
			calc(100% - 80px) 100%,
			80px 100%,
			0 calc(100% - 80px),
			0 80px,
			5px calc(80px + 2.07px),
			5px calc(100% - 80px - 2.07px),
			calc(80px + 2.07px) calc(100% - 5px),
			calc(100% - 80px - 2.07px) calc(100% - 5px),
			calc(100% - 5px) calc(100% - 80px - 2.07px),
			calc(100% - 5px) calc(80px + 2.07px),
			calc(100% - 80px - 2.07px) 5px,
			calc(80px + 2.07px) 5px,
			5px calc(80px + 2.07px)
		);
	}

	section {
		padding-top: 2rem;
		overflow: hidden;

		@media screen and (width >= 740px) {
			padding: 2rem;
		}

		@media screen and (width >= 990px) {
			margin-bottom: -5%;
			padding-top: 5rem;
		}
	}

	.popup {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 5%;
	}
</style>
