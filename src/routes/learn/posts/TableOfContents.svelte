<script>
</script>

<h2>Table of Contents</h2>

<article class="toc">
	<div class="css">
		<dl>
			<dt>CSS</dt>

			<dd><a href="#transitions">Transitions</a></dd>
			<dd><a href="#animations">Animations</a></dd>
			<dd><a href="#interpolate">Interpolate</a></dd>
			<dd><a href="#calc">Calc</a></dd>
			<dd><a href="#details">Details</a></dd>
			<dd><a href="#view">View Transitions</a></dd>
		</dl>
	</div>

	<div class="gsap">
		<dl>
			<dt>GSAP</dt>

			<dd><a href="#tweens">Tweens</a></dd>
			<dd><a href="#staggers">Staggers</a></dd>
			<dd><a href="#timelines">Timelines</a></dd>
			<dd><a href="#percentage">Percentage Keyframes</a></dd>
			<dd><a href="#position">Position Parameter</a></dd>
			<dd><a href="#fouc">F.O.U.C.</a></dd>
			<dd><a href="#scrolltrigger">ScrollTrigger</a></dd>
		</dl>
	</div>
</article>

<style>
	h2 {
		display: block;
		margin-top: 2em;
		color: var(--clr-pale);
		font-family: var(--bronova-bold);
		font-size: clamp(1.1rem, 3vw, 2.5rem);
		font-weight: 800;
	}

	.toc {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background: transparent;
		height: fit-content;
		box-shadow: none;
		padding-bottom: 6em;

		@media (width <= 1200px) {
			padding-bottom: 2em;
		}

		@media (width <= 768px) {
			grid-template-columns: 1fr;
		}

		@media (width <= 500px) {
			padding-bottom: 2em;
		}

		& dt {
			display: block;
			color: var(--clr-main);
			font-size: clamp(1.2rem, 3vw, 2rem);
			font-weight: 900;
			letter-spacing: 3px;
			margin-bottom: 1rem;
		}

		& .css,
		& .gsap {
			margin: 1em;

			& dl {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				& dd {
					color: var(--clr-link);
					font-size: clamp(0.9rem, 2vw, 1.2rem);
					font-weight: 600;
					text-wrap: balance;

					& a:visited {
						color: var(--clr-pale);
					}
				}
			}
		}
	}
</style>
