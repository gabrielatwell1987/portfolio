<script>
	import { fade, scale } from 'svelte/transition';
	import SEO from '$lib/data/SEO.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Popup from '$lib/components/layout/Popup.svelte';
	import Testimonial from '$lib/components/projects/Testimonial.svelte';
	import projects from '$lib/components/projects/projects.json';
	import testimonials from '$lib/components/projects/testimonials.json';

	// State management with $state
	let ProjectComponent = $state(null);
	let GithubContributions = $state(null);
	let showProjects = $state(false);
	let showGithub = $state(false);
	let isGithubLoading = $state(true);
	let { index = 0 } = $props();

	function getTestimonialForProject(projectIndex) {
		return testimonials.find((t) => t.projectIndex === projectIndex);
	}

	$effect(() => {
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
				isGithubLoading = false;
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

<div class="projects">
	<Title title="builds" title2="builds" viewTransitionName="builds" />

	<div class="popup">
		<Popup
			title=""
			text="Hover over the project image to reveal the tech stack I used on the project 👍🏻"
		/>
	</div>

	<section class="github-section">
		<div class="project-container">
			{#if showGithub && GithubContributions}
				<GithubContributions />
			{:else}
				<!-- Skeleton/placeholder with approximate height -->
				<div class="github-skeleton" aria-label="Loading GitHub contributions">
					<div class="skeleton-header">
						<div class="skeleton-title"></div>
						<div class="skeleton-subtitle"></div>
					</div>
					<div class="skeleton-chart"></div>
					<div class="skeleton-legend"></div>
				</div>
			{/if}
		</div>
	</section>

	<section class="bevel">
		{#if showProjects && ProjectComponent}
			{#each projects as project (project.index)}
				{@const testimonial = getTestimonialForProject(project.index)}

				{#if testimonial}
					<div class="wholeProject" style="--stagger-delay: {project.index * 1.25}s;">
						<ProjectComponent {...project} />
						<Testimonial
							name={testimonial.name}
							title={testimonial.title}
							testimonial={testimonial.testimonial}
							rating={testimonial.rating}
							avatar={testimonial.avatar}
							index={project.index}
						/>
					</div>
				{:else}
					<ProjectComponent {...project} />
				{/if}
			{/each}
		{/if}
	</section>
</div>

<style>
	:root {
		--100: 100%;
	}

	.github-section {
		padding: 2rem 1rem;
		margin: 2rem 0;
		background: transparent;
		border-radius: 12px;
		min-height: 300px;

		@media (width <= 768px) {
			margin: 1rem;
			padding: 1rem;
			min-height: 250px;
		}

		& .project-container {
			max-inline-size: 1200px;
			margin: 0 auto;
			text-align: center;
		}

		& .github-skeleton {
			opacity: 0.6;
			animation: pulse 2s ease-out infinite alternate;

			& .skeleton-header {
				margin-bottom: 2rem;

				& .skeleton-title {
					height: 2rem;
					width: 200px;
					background: var(--clr-main);
					opacity: 0.3;
					border-radius: 4px;
					margin: 0 auto 0.5rem;
				}

				& .skeleton-subtitle {
					height: 1rem;
					width: 150px;
					background: var(--clr-main);
					opacity: 0.2;
					border-radius: 4px;
					margin: 0 auto;
				}
			}

			& .skeleton-chart {
				height: 150px;
				background: var(--clr-main);
				opacity: 0.1;
				border-radius: 8px;
				margin-bottom: 1rem;
			}

			& .skeleton-legend {
				height: 20px;
				width: 200px;
				background: var(--clr-main);
				opacity: 0.1;
				border-radius: 4px;
				margin: 0 auto;
			}
		}
	}

	.bevel {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		place-items: center;

		@media (width <= 768px) {
			margin: 0;
		}

		@media (width <= 500px) {
			padding: 4em 0;
			grid-template-columns: 1fr;
		}

		& .wholeProject {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;
			border: 2px solid var(--clr-gray);
			border-radius: var(--radius);
			padding-top: 2em;
			opacity: 0;
			animation: fadeIn 0.8s ease-out forwards;
			animation-delay: var(--stagger-delay, 0s);
			will-change: opacity, transform;

			@media (width <= 768px) {
				margin: 0.5rem;
				margin-bottom: 2em;
			}
		}
	}

	.bevel:before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--clr-gray);
		clip-path: polygon(
			0 40px,
			40px 0,
			calc(100% - 40px) 0,
			100% 40px,
			100% calc(100% - 40px),
			calc(100% - 40px) 100%,
			40px 100%,
			0 calc(100% - 40px),
			0 40px,
			5px calc(40px + 1.03px),
			5px calc(100% - 40px - 1.03px),
			calc(40px + 1.03px) calc(100% - 5px),
			calc(100% - 40px - 1.03px) calc(100% - 5px),
			calc(100% - 5px) calc(100% - 40px - 1.03px),
			calc(100% - 5px) calc(40px + 1.03px),
			calc(100% - 40px - 1.03px) 5px,
			calc(40px + 1.03px) 5px,
			5px calc(40px + 1.03px)
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

	@keyframes pulse {
		0% {
			opacity: 0.4;
		}
		100% {
			opacity: 0.6;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	::view-transition-old(builds) {
		opacity: 0;
	}

	::view-transition-group(builds) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
