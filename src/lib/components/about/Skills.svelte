<script>
	import Image from '$lib/components/layout/Image.svelte';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<section class="skills-container">
	<div class="skills-inner" aria-label="skills">
		<h3 class="skills-title">{title}</h3>

		<ul class="skills">
			<a class="skill" href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/HTML-Dark.svg"
							alt="html"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/CSS-Dark.svg"
							alt="css"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a
				class="skill"
				href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
				target="_blank"
			>
				<li>
					<div class="icons">
						<Image
							src="skills/JavaScript-Dark.svg"
							alt="javascript"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://svelte.dev/" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/Svelte-Dark.svg"
							alt="svelte kit"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://gsap.com" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/GSAP-Dark.svg"
							alt="greensock"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://nodejs.org" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/NodeJS-Dark.svg"
							alt="node.js"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://github.com" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/Github-Dark.svg"
							alt="git hub"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://markdownguide.org" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/Markdown-Dark.svg"
							alt="markdown"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>

			<a class="skill" href="https://tailwindcss.com" target="_blank">
				<li>
					<div class="icons">
						<Image
							src="skills/TailwindCSS-Dark.svg"
							alt="tailwind css"
							aspectRatio="1/1"
							style="width: clamp(50px, 7vw, 200px);"
						/>
					</div>
				</li>
			</a>
		</ul>
	</div>
</section>

<style>
	.skills-container {
		display: grid;
		min-height: 100vh;
		place-items: center;
		padding-block: 6em;

		@media (width >= 768px) and (width <= 990px) {
			padding-block: 1em;
			margin-top: -15em;
			margin-bottom: -10em;
		}

		@media (width <= 500px) {
			margin-block: -5em;
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

			& a:hover {
				transform: scale(1.1);
				transition: transform 0.25s ease-in-out;
			}

			& a:nth-child(odd):hover {
				rotate: -5deg;
				transition: rotate 0.15s ease-in-out;
			}

			& a:nth-child(even):hover {
				rotate: 5deg;
				transition: rotate 0.15s ease-in-out;
			}

			& li {
				list-style: none;
				width: 75%;
				margin-inline: auto;
			}

			.skill {
				padding: 0.5rem;
				cursor: pointer;
				transform: scale(1);
				transition: transform 0.25s ease-in-out;
				background-color: transparent;
				filter: drop-shadow(0 0 0.5rem var(--text-gray));
				width: 15vw;
				display: grid;
				place-items: center;

				@media (width <= 768px) {
					/* width: 50vw; */
					width: 100%;
				}

				&:focus,
				&:focus-visible {
					outline: 1px solid var(--text-color);
					background: transparent;
				}
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

				& .skill {
					border: none;
					scale: 0.8;
					margin: 0;
					padding: 0.25rem;

					& .icons {
						scale: 1.5;
					}
				}
			}

			.skills-title {
				margin-left: 0;
				text-align: center;
			}
		}
	}
</style>
