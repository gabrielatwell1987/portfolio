<script>
</script>

<h2>Table of Contents</h2>

<article class="toc">
	<div class="css">
		<ul>
			<h3>CSS</h3>

			<li>
				<a href="#transitions">Transitions</a>
			</li>
			<li>
				<a href="#animations">Animations</a>
			</li>
			<li>
				<a href="#interpolate">Interpolate Size</a>
			</li>
			<li>
				<a href="#calc">Calc Size</a>
			</li>
			<li>
				<a href="#details">Details Element</a>
			</li>
			<li>
				<a href="#view">View Transitions</a>
			</li>
		</ul>
	</div>

	<div class="gsap">
		<ul>
			<h3>GSAP</h3>

			<li>
				<a href="#tweens">Tweens</a>
			</li>
			<li>
				<a href="#staggers">Staggers</a>
			</li>
			<li>
				<a href="#timelines">Timelines</a>
			</li>
			<li>
				<a href="#percentage">Percentage Keyframes</a>
			</li>
			<li>
				<a href="#position">Position Parameter</a>
			</li>
			<li>
				<a href="#fouc">FOUC (Flash of Unstyled Content)</a>
			</li>
			<li>
				<a href="#scrolltrigger">ScrollTrigger</a>
			</li>
		</ul>
	</div>
</article>

<style>
	h2 {
		display: block;
		margin-top: 1em;
		color: var(--clr-pale);
		font-family: var(--bronova-bold);
		font-weight: 800;
	}

	.toc {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background: transparent;
		height: fit-content;

		& h3 {
			display: block;
			color: var(--clr-main);
		}

		& .css,
		& .gsap {
			margin: 1em;

			& ul {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				& li {
					&::marker {
						color: var(--clr-inverted);
					}

					& a {
						color: var(--clr-blue);
					}
				}
			}
		}
	}
</style>
