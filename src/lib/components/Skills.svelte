<script>
	export let title;
</script>

<section class="border" aria-label="skills">
	<h3 class="skills-title">{title}</h3>
	<ul class="skills">
		<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML"><li>HTML</li></a>
		<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS"><li>CSS</li></a>
		<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"><li>JavaScript</li></a>
		<a href="https://kit.svelte.dev/"><li>Sveltekit</li></a>
		<a href="https://gsap.com"><li>Greensock</li></a>
		<a href="https://nodejs.org"><li>Node.js</li></a>
		<a href="https://github.com"><li>Git/GitHub</li></a>
		<a href="https://sass-lang.com"><li>SCSS</li></a>
		<a href="https://tailwindcss.com"><li>Tailwind CSS</li></a>
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
			/* display: flex;
			flex-direction: column; */
			gap: 1rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.skills li {
			list-style: none;
			margin: 0 -94%;
			padding: 0.5rem 0.75rem;
			width: 100%;
			font-size: 1rem;
			font-weight: 400;
			font-family: var(--montserrat);
			letter-spacing: 1px;
			background-color: var(--lightblack);
			color: var(--white);
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
		}
	}
</style>
