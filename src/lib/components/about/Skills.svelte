<script>
	import Image from '$lib/components/layout/Image.svelte';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<section class="border" aria-label="skills">
	<h3 class="skills-title">{title}</h3>

	<ul class="skills">
		<a class="skill" href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/HTML-Dark.svg" alt="html" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/CSS-Dark.svg" alt="css" />
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
					<Image src="skills/JavaScript-Dark.svg" alt="javascript" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://svelte.dev/" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/Svelte-Dark.svg" alt="svelte kit" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://gsap.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/GSAP-Dark.svg" alt="greensock" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://nodejs.org" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/NodeJS-Dark.svg" alt="node.js" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://github.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/Github-Dark.svg" alt="git hub" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://markdownguide.org" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/Markdown-Dark.svg" alt="markdown" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://tailwindcss.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/TailwindCSS-Dark.svg" alt="tailwind css" />
				</div>
			</li>
		</a>
	</ul>
</section>

<style>
	.border {
		border: none;
		min-height: 60vh;
		margin-top: 25%;
		margin-bottom: -20%;

		.skills {
			display: grid;
			grid-template-columns: repeat(3, minmax(100px, 0.75fr));
			gap: 2rem;
			align-items: center;

			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			& a:hover {
				transform: scale(1.1);
				transition: transform 0.25s ease-in-out;
			}

			& a:nth-child(odd):hover {
				rotate: -5deg;
				transition: rotate 0.5s ease-in-out;
			}

			& a:nth-child(even):hover {
				rotate: 5deg;
				transition: rotate 0.5s ease-in-out;
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
				margin-bottom: -0.75rem;
				background-color: transparent;
				filter: drop-shadow(0 0 0.5rem var(--text-gray));

				&:focus,
				&:focus-visible {
					outline: 1px solid var(--text-color);
					background: transparent;
				}
			}

			@media (width >= 769px) {
				margin-top: -15%;
			}
		}

		.skills-title {
			font-family: var(--anta);
			font-size: clamp(1.75rem, 3vw, 5rem);
			color: var(--off-white);
			letter-spacing: clamp(3px, 1vw, 9px);
			text-align: center;
		}

		@media (width >= 769px) {
			margin-bottom: 5rem;
		}

		@media (width <= 768px) {
			margin-bottom: 30%;

			.skills {
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
				gap: 0.5rem;

				& li {
					width: 50%;
				}
			}
		}

		@media (width <= 400px) {
			margin-bottom: 35%;

			.skills {
				grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
				gap: 1rem;

				.skill {
					border: none;
					margin: 0.5rem;
					scale: 0.8;

					.icons {
						scale: 4.5;
					}
				}
			}

			.skills-title {
				margin-left: 1rem;
			}
		}
	}
</style>
