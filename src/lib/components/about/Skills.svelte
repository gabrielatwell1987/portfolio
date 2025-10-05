<script>
	import Image from '$lib/components/layout/Image.svelte';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<section class="skills-container">
	<div class="skills-inner" aria-label="skills">
		<h3 class="skills-title">{title}</h3>

		<ul class="skills">
			<li>
				<div class="icons">
					<Image
						src="skills/HTML-Dark.svg"
						alt="html"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/CSS-Dark.svg"
						alt="css"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/JavaScript-Dark.svg"
						alt="javascript"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/Svelte-Dark.svg"
						alt="svelte"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/GSAP-Dark.svg"
						alt="gsap"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/NodeJS-Dark.svg"
						alt="nodejs"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/Github-Dark.svg"
						alt="github"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/Markdown-Dark.svg"
						alt="markdown"
						aspectRatio="1/1"
						style="width: clamp(70px, 6vw, 200px);"
					/>
				</div>
			</li>

			<li>
				<div class="icons">
					<Image
						src="skills/TailwindCSS-Dark.svg"
						alt="tailwindcss"
						aspectRatio="1/1"
						style="width: clamp(80px, 6vw, 200px);"
					/>
				</div>
			</li>
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
