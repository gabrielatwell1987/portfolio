<script>
	import Image from './Image.svelte';

	export let title;
</script>

<section class="border" aria-label="skills">
	<h3 class="skills-title">{title}</h3>

	<ul class="skills">
		<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
			<li>
				<div class="icons"><Image src="skills/html.svg" alt="html" /></div>
			</li>
		</a>

		<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
			<li>
				<div class="icons">
					<Image src="skills/css.svg" alt="css" />
				</div>
			</li>
		</a>

		<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">
			<li>
				<div class="icons">
					<Image src="skills/js.svg" alt="javascript" />
				</div>
			</li>
		</a>

		<a href="https://kit.svelte.dev/">
			<li>
				<div class="icons">
					<Image src="skills/svelte.svg" alt="sveltekit" />
				</div>
			</li>
		</a>

		<a href="https://gsap.com">
			<li>
				<div class="icons">
					<Image src="skills/greensock.svg" alt="greensock" />
				</div>
			</li>
		</a>

		<a href="https://nodejs.org">
			<li>
				<div class="icons">
					<Image src="skills/node.svg" alt="node.js" />
				</div>
			</li>
		</a>

		<a href="https://github.com">
			<li>
				<div class="icons">
					<Image src="skills/github.svg" alt="github" />
				</div>
			</li>
		</a>

		<a href="https://sass-lang.com">
			<li>
				<div class="icons">
					<Image src="skills/scss.svg" alt="scss" />
				</div>
			</li>
		</a>

		<a href="https://tailwindcss.com">
			<li>
				<div class="icons">
					<Image src="skills/tailwind.svg" alt="tailwind css" />
				</div>
			</li>
		</a>
	</ul>
</section>

<style>
	@media (min-width: 200px) {
		.border {
			width: 15%;
			margin: 10% auto;
			display: none;
		}

		.skills-title {
			color: var(--yellow);
		}
	}

	@media (min-width: 990px) {
		.border {
			display: block;
			width: 15rem;
			border: none;
		}

		.skills {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.skills li {
			list-style: none;
			margin: 0 -92.5%;
			padding: 0.5rem 0.75rem;
			width: 100%;
			font-size: 1rem;
			border-radius: 12px;
			text-align: center;
			mix-blend-mode: difference;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.skills-title {
			font-size: 1.75rem;
			font-weight: 900;
			text-align: center;
			font-family: var(--anta);
			mix-blend-mode: hard-light;
			letter-spacing: 7px;
			margin-right: 1rem;
		}

		.icons {
			width: 5rem;
		}
	}
</style>
