<script>
	import Image from './Image.svelte';

	export let title;
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
					<Image src="skills/svelte.svg" alt="sveltekit" />
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
					<Image src="skills/github.svg" alt="github" />
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
	@media (min-width: 300px) {
		.border {
			display: none;
		}

		.skills-title {
			color: var(--yellow);
			text-align: center;
		}
	}

	@media (min-width: 990px) {
		.border {
			/* display: block; */
			width: 15rem;
			height: 10vh;
			border: none;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-inline: auto;
			margin-top: -20%;
			margin-bottom: 40%;
		}

		.skills {
			gap: 1rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.skill li {
			list-style: none;
			padding: 0.5rem 0.75rem;
			width: 100%;
			font-size: 5rem;
			border-radius: 12px;
			text-align: center;
			mix-blend-mode: difference;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.skills-title {
			font-size: 2.5rem;
			font-weight: 900;
			text-align: center;
			font-family: var(--anta);
			mix-blend-mode: hard-light;
			text-wrap: nowrap;
		}

		.skill {
			display: block;
			text-align: center;
			padding: 0;
		}

		.skill:is(:hover, :focus) {
			transform: scale(1.25);
			transition: transform 0.75s ease-in-out;
			transform-origin: center;
		}

		.skill:not(:hover, :focus) {
			transform: scale(1);
			transition: transform 0.75s ease-in-out;
			transform-origin: center;
		}

		.icons {
			width: 5rem;
		}
	}

	@media (min-width: 1100px) {
		.border {
			margin-top: 5%;
		}
	}

	@media (min-width: 1200px) {
		.border {
			margin-top: 15%;
		}
	}

	@media (min-width: 1300px) {
		.border {
			margin-top: 13%;
		}
	}

	@media (min-width: 1400px) {
		.border {
			margin-top: 20%;
		}
	}

	@media (min-width: 1500px) {
		.border {
			margin-top: 20%;
			margin-bottom: 15%;
		}
	}
</style>
