<script>
</script>

<div class="atwell-logo">
	<div class="atwell">
		<div class="atwell-top">atwell</div>
		<div class="atwell-middle">atwell</div>
		<div class="atwell-bottom">atwell</div>
	</div>
</div>

<style>
	.atwell-logo {
		text-align: center;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 1;

		@media (width <= 500px) {
			margin-left: 1em;
		}

		& .atwell {
			--top-left: 65%;
			--top-right: 20%;
			--bottom-left: 70%;
			--bottom-right: 65%;
			font-family: var(--bronova-bold);
			font-size: clamp(var(--h2), 10vw, var(--lg));
			color: var(--clr-main);
			text-shadow:
				-2px -2px 0 var(--clr-light-gray),
				2px px 0 var(--clr-gray);
			display: grid;
			line-height: 1;

			& .atwell-top {
				grid-column: 1 / 1;
				grid-row: 1 / 1;
				translate: 1px 0;
				clip-path: polygon(0 0, 100% 0, 100% var(--top-right), 0 var(--top-left));
			}

			& .atwell-middle {
				grid-column: 1 / 1;
				grid-row: 1 / 1;
				translate: 2px 0;
				transition: translate 500ms ease-out;
				clip-path: polygon(
					0 calc(var(--top-left) + 1%),
					100% calc(var(--top-right) + 1%),
					100% calc(var(--bottom-right) - 1%),
					0 calc(var(--bottom-left) - 1%)
				);

				&:hover {
					translate: 10px 0;
				}
			}

			& .atwell-bottom {
				grid-column: 1 / 1;
				grid-row: 1 / 1;
				translate: 1px 0;
				clip-path: polygon(0 var(--bottom-left), 100% var(--bottom-right), 100% 100%, 0 100%);
			}
		}
	}

	@keyframes slideRight {
		to {
			translate: 10px 0;
		}
	}
</style>
