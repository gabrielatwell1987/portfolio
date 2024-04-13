<script></script>

<section class="border" aria-label="skills">
	<h3 class="skills-title">Skills</h3>
	<ul class="skills">
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
		<li>Sveltekit</li>
		<li>Greensock</li>
		<li>Node.js</li>
		<li>Git/GitHub</li>
		<li>SCSS</li>
		<li>Tailwind CSS</li>
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
		}

		.skills {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.skills li {
			list-style: none;
			margin: 0 auto;
			padding: 0.5rem 0.75rem;
			width: 100%;
			font-size: 1rem;
			font-weight: 400;
			font-family: var(--montserrat);
			letter-spacing: 1px;
			background-color: var(--lightblack);
			color: var(--white);
			border: 2px solid var(--smoke);
			border-radius: 12px;
			text-align: center;
			mix-blend-mode: difference;
		}

		.skills-title {
			font-size: 2.2rem;
			font-weight: 900;
			text-align: center;
			font-family: var(--anta);
			mix-blend-mode: hard-light;
		}
	}
</style>
