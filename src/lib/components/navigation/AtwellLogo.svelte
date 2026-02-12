<script lang="ts">
	let { title } = $props();
</script>

<a href="/" aria-label="Go to homepage" data-navigation-logo>
	<div class="atwell-logo">
		<div class="atwell">
			<div class="atwell-top">{title}</div>
			<div class="atwell-bottom">{title}</div>
		</div>
	</div>
</a>

<style>
	[data-navigation-logo] {
		&:focus-visible {
			outline: 1px solid var(--clr-main);
			background: transparent;
		}

		& .atwell-logo {
			text-align: center;
			background-color: transparent;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (width <= 500px) {
				margin-left: 1em;
			}

			&:active {
				scale: 0.97;
			}

			& .atwell {
				--top-left: 55%;
				--top-right: 40%;
				--bottom-left: 57%;
				--bottom-right: 42%;
				font-family: var(--bronova-bold);
				font-size: clamp(var(--h2), 10vw, var(--lg));
				color: var(--clr-invert);
				text-shadow:
					0 0 1px var(--clr-invert),
					-3px -3px 0 var(--clr-main),
					3px -3px 0 var(--clr-main),
					-3px 3px 0 var(--clr-main),
					3px 3px 0 var(--clr-main),
					-3px 0 0 var(--clr-main),
					3px 0 0 var(--clr-main),
					0 -3px 0 var(--clr-main),
					0 3px 0 var(--clr-main);
				display: grid;

				@media (width <= 768px) {
					text-shadow:
						0 0 1px var(--clr-invert),
						-1px -1px 0 var(--clr-main),
						1px -1px 0 var(--clr-main),
						-1px 1px 0 var(--clr-main),
						1px 1px 0 var(--clr-main),
						-1px 0 0 var(--clr-main),
						1px 0 0 var(--clr-main),
						0 -1px 0 var(--clr-main),
						0 1px 0 var(--clr-main);
				}

				& .atwell-top {
					grid-column: 1 / 1;
					grid-row: 1 / 1;
					translate: 1px 0;
					clip-path: polygon(0 0, 100% 0, 100% var(--top-right), 0 var(--top-left));
				}

				& .atwell-bottom {
					grid-column: 1 / 1;
					grid-row: 1 / 1;
					translate: 2px 0;
					clip-path: polygon(0 var(--bottom-left), 100% var(--bottom-right), 100% 100%, 0 100%);
				}
			}
		}
	}

	@keyframes slideRight {
		to {
			translate: 10px 0;
		}
	}
</style>
