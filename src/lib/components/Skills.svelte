<script>
	import Image from './Image.svelte';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<section class="border" aria-label="skills">
	<h3 class="skills-title">{title}</h3>

	<ul class="skills">
		<a class="skill" href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">
			<li>
				<div class="icons"><Image src="skills/html.svg" alt="html" /></div>
			</li>
		</a>

		<a class="skill" href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/css.svg" alt="css" />
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
					<Image src="skills/js.svg" alt="javascript" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://kit.svelte.dev/" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/svelte.svg" alt="svelte kit" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://gsap.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/greensock.svg" alt="greensock" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://nodejs.org" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/node.svg" alt="node.js" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://github.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/github.svg" alt="git hub" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://sass-lang.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/scss.svg" alt="scss" />
				</div>
			</li>
		</a>

		<a class="skill" href="https://tailwindcss.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/tailwind.svg" alt="tailwind css" />
				</div>
			</li>
		</a>
	</ul>
</section>

<style>
	.skills {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1rem;
		align-items: center;

		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.skill {
		border: 3.5px solid var(--white);
		border-radius: 12px;
		padding: 1rem;
		cursor: pointer;
		transform: scale(1);
		transition: transform 0.25s ease-in-out;
	}

	.skills a:hover {
		transform: scale(1.1);
		transition: transform 0.25s ease-in-out;
		border-color: var(--off-white);
	}

	.skills li {
		list-style: none;
		width: 75%;
		margin-inline: auto;
	}

	.skills-title {
		font-family: var(--anta);
		font-size: clamp(1.75rem, 3vw, 5rem);
		color: var(--off-white);
		letter-spacing: clamp(3px, 1vw, 9px);
		text-align: center;
	}

	.border {
		border: none;
		min-height: 60vh;
		margin-top: 25%;
	}

	@media (max-width: 768px) {
		.skills {
			grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
		}

		.skills li {
			width: 50%;
		}

		.skill {
			border: 2px solid var(--white);
		}

		.border {
			margin-bottom: 30%;
		}
	}

	@media (max-width: 400px) {
		.skills {
			grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
		}

		.skills-title {
			margin-left: 1rem;
		}

		.skill {
			border: none;
			margin: 0.2rem;
		}

		.border {
			margin-bottom: 35%;
		}

		.icons {
			scale: 3.5;
		}
	}
</style>
