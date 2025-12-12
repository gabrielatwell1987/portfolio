<script>
	import Popover from '$lib/components/layout/Popover.svelte';
	import Title from '$lib/components/layout/Title.svelte';
	import Testimonial from '$lib/components/projects/Testimonial.svelte';
	import projects from '$lib/components/projects/projects.json';
	import testimonials from '$lib/components/projects/testimonials.json';
	import SEO from '$lib/data/SEO.svelte';
	import { beforeNavigate } from '$app/navigation';

	let ProjectComponent = $state(null);
	let GithubContributions = $state(null);
	let showProjects = $state(false);
	let showGithub = $state(false);
	let isGithubLoading = $state(true);

	let isNavigating = $state(false);

	function getTestimonialForProject(projectIndex) {
		return testimonials.find((t) => t.projectIndex === projectIndex);
	}

	beforeNavigate((navigation) => {
		isNavigating = true;

		GithubContributions = null;
		showGithub = false;
	});

	$effect(() => {
		if (isNavigating) return;

		let cancelled = false;

		const loadProject = async () => {
			const module = await import('$lib/components/projects/Project.svelte');
			if (!cancelled && !isNavigating) {
				ProjectComponent = module.default;
				showProjects = true;
			}
		};

		const timer = setTimeout(loadProject, 100);
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	});

	// gitHub contributions
	$effect(() => {
		if (!showProjects || isNavigating) return;

		let cancelled = false;

		if (showProjects) {
			const loadGithub = async () => {
				const module = await import('$lib/components/projects/GithubContributions.svelte');
				if (!cancelled && !isNavigating) {
					GithubContributions = module.default;
					showGithub = true;
					isGithubLoading = false;
				}
			};

			const timer = setTimeout(loadGithub, 200);
			return () => {
				cancelled = true;
				clearTimeout(timer);
			};
		}
	});
</script>

<SEO
	title="Websites I've Created"
	description="Work Gabe has done"
	keywords="gabe atwell's projects, gabriel atwell's projects, gabe's work, gabriel's work, projects"
/>

<div class="projects">
	<div class="header-icons">
		<Title title="builds" title2="builds" viewTransitionName="build-heading" />

		<div class="Popover">
			<Popover
				title=""
				text="Hover over the project image to reveal the tech stack I used on the project 👍🏻"
			/>
		</div>
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

	.projects {
		& .header-icons {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5em;

			@media (width <= 768px) {
				gap: 1rem;
			}

			& .Popover {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				margin-top: 5em;

				@media (width <= 768px) {
					margin-right: 0.75rem;
				}
			}
		}

		& .bevel {
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

			&:before {
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
		}
	}

	section {
		padding-top: 2rem;
		/* overflow: hidden; */

		@media screen and (width >= 740px) {
			padding: 2rem;
		}

		@media screen and (width >= 990px) {
			margin-bottom: -5%;
			padding-top: 5rem;
		}
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

	@keyframes slide-out {
		from {
			opacity: 1;
			transform: translateX(0);
		}
		to {
			opacity: 0;
			transform: translateX(-100px);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(100px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	::view-transition-old(build-heading) {
		opacity: 0;
	}

	::view-transition-group(build-heading) {
		animation-duration: 0.5s;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	@media (width <= 768px) {
		::view-transition-old(build-heading) {
			animation: slide-out 0.3s ease-out forwards;
			opacity: 1;
		}

		::view-transition-new(build-heading) {
			animation: slide-in 0.5s ease-out forwards;
		}
	}
</style>
