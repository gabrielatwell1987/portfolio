<script>
	import Image from '$lib/components/layout/Image.svelte';
	import skills from '$lib/components/about/skills.json';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<section class="skills-container">
	<div class="skills-inner" aria-label="skills">
		<h3 class="skills-title">{title}</h3>

		<ul class="skills">
			{#each skills as skill}
				<li>
					<a
						href={skill.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="{skill.alt} link"
					>
						<div class="icons">
							{#if skill.svg}
								{@html skill.svg}
							{:else}
								<Image
									src={skill.src}
									alt={skill.alt}
									aspectRatio="1/1"
									style="width: clamp(70px, 5.5vw, 200px);"
								/>
							{/if}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.skills-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 10em;

		@media (width >= 768px) and (width <= 990px) {
			padding-top: 3em;
			margin-top: -15em;
			margin-bottom: -10em;
		}

		@media (width <= 768px) {
			margin-block: -2em;
			padding-inline: 1rem;
		}
	}

	.skills-inner {
		border: none;
		display: grid;
		gap: 1em;
		width: 100%;
		place-items: center;

		.skills {
			display: grid;
			grid-template-columns: repeat(3, minmax(100px, 1fr));
			gap: 1rem;
			align-items: center;
			justify-content: center;
			width: min(40%, 800px);
			margin-inline: auto;

			& .icons {
				padding: 0.5rem;

				&:focus,
				&:focus-visible {
					outline: none;
					box-shadow: none;
					background-color: transparent;
				}

				&:hover {
					transform: scale(1.1);
					transition: transform 0.25s ease-out;
				}

				&:nth-child(odd):hover {
					rotate: -5deg;
					transition: rotate 0.15s ease-out;
				}

				&:nth-child(even):hover {
					rotate: 5deg;
					transition: rotate 0.15s ease-out;
				}

				/* & svg {
					margin: 0;
				} */
			}

			& li {
				list-style: none;
				width: 75%;
				margin-inline: auto;
			}
		}

		.skills-title {
			font-family: var(--anta);
			font-size: clamp(1.75rem, 3vw, 5rem);
			color: var(--off-white);
			letter-spacing: -1px;
			text-align: center;
		}

		@media (width <= 768px) {
			.skills {
				grid-template-columns: repeat(2, 1fr);
				gap: 1rem;
				width: min(80%, 600px);

				& li {
					width: 100%;
				}
			}
		}

		@media (width <= 400px) {
			.skills {
				grid-template-columns: repeat(2, 1fr);
				gap: 0.5rem;
				width: 90;
				margin-left: 0;
				margin-inline: auto;

				& li {
					width: 100%;
				}

				& .icons {
					scale: 1.2;
				}
			}

			.skills-title {
				margin-left: 0;
				text-align: center;
			}
		}
	}
</style>
