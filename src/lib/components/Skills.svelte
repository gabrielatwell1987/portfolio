<script>
	import Image from './Image.svelte';

	export let title;
</script>

<section class="border" aria-label="skills">
	<h3 class="skills-title">{title}</h3>

	<ul class="skills">
		<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">
			<li>
				<div class="icons"><Image src="skills/html.svg" alt="html" /></div>
			</li>
		</a>

		<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/css.svg" alt="css" />
				</div>
			</li>
		</a>

		<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/js.svg" alt="javascript" />
				</div>
			</li>
		</a>

		<a href="https://kit.svelte.dev/" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/svelte.svg" alt="sveltekit" />
				</div>
			</li>
		</a>

		<a href="https://gsap.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/greensock.svg" alt="greensock" />
				</div>
			</li>
		</a>

		<a href="https://nodejs.org" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/node.svg" alt="node.js" />
				</div>
			</li>
		</a>

		<a href="https://github.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/github.svg" alt="github" />
				</div>
			</li>
		</a>

		<a href="https://sass-lang.com" target="_blank">
			<li>
				<div class="icons">
					<Image src="skills/scss.svg" alt="scss" />
				</div>
			</li>
		</a>

		<a href="https://tailwindcss.com" target="_blank">
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
			margin: 10% auto 5% auto;
			display: none;
		}

		.skills-title {
			color: var(--yellow);
			margin-left: 5%;
		}
	}

	@media (min-width: 990px) {
		.border {
			display: block;
			width: 15rem;
			border: none;
			margin-top: -60%;
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
			font-size: 5rem;
			border-radius: 12px;
			text-align: center;
			mix-blend-mode: difference;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.skills-title {
			font-size: 2.75rem;
			font-weight: 900;
			text-align: center;
			font-family: var(--anta);
			mix-blend-mode: hard-light;
			letter-spacing: 7px;
		}

		.icons {
			width: 5rem;
		}
	}

	@media (min-width: 1020px) {
		.border {
			margin-top: -50%;
		}
	}

	@media (min-width: 1100px) {
		.border {
			margin-top: -50%;
		}
	}

	@media (min-width: 1200px) {
		.border {
			margin-top: -40%;
		}
	}

	@media (min-width: 1300px) {
		.border {
			margin-top: -30%;
		}
	}

	@media (min-width: 1400px) {
		.border {
			margin-top: 15%;
		}
	}

	/* @media (min-width: 1700px) {
		.border {
			margin-top: 10%;
		}
	}

	@media (min-width: 1900px) {
		.border {
			margin-top: 10%;
		}
	} */
</style>
