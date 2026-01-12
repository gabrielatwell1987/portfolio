<script lang="ts">
	interface Props {
		href?: string;
		title: string;
		class?: string;
	}

	let { href, title, class: className = '' }: Props = $props();
</script>

<a {href} class={className}>{title}</a>

<style>
	@media (width >= 300px) {
		a {
			display: inline-block;
			text-decoration: none;
			background-color: transparent;
			font-family: var(--ultra);
			font-size: clamp(var(--h5), 2vw, var(--h3));
			font-weight: 900;
			color: var(--clr-invert);
			text-shadow:
				0 0 1px var(--clr-main),
				-2px -2px 0 var(--clr-main),
				2px -2px 0 var(--clr-main),
				-2px 2px 0 var(--clr-main),
				2px 2px 0 var(--clr-main),
				-2px 0 0 var(--clr-main),
				2px 0 0 var(--clr-main),
				0 -2px 0 var(--clr-main),
				0 2px 0 var(--clr-main);
			border: 1px solid var(--clr-main);
			outline: 3px solid var(--clr-main);
			margin-inline: auto;
			cursor: pointer;
			letter-spacing: 1px;
			width: fit-content;
			border-radius: var(--button-radius);
			transition: all 0.5s ease-out;
			outline-offset: -7px;
			padding: clamp(0.4em, 1.5vw, 0.3em) clamp(1em, 2vw, 0.7em);
			margin-bottom: 2%;
			user-select: none;

			@media (width >= 500px) {
				text-shadow:
					0 0 1px var(--clr-main),
					-3px -3px 0 var(--clr-main),
					3px -3px 0 var(--clr-main),
					-3px 3px 0 var(--clr-main),
					3px 3px 0 var(--clr-main),
					-3px 0 0 var(--clr-main),
					3px 0 0 var(--clr-main),
					0 -3px 0 var(--clr-main),
					0 3px 0 var(--clr-main);
			}

			&:not(:hover) {
				opacity: 0.85;
			}

			&:focus,
			&:focus-visible {
				outline: 1px solid var(--clr-main);
				background: transparent;
			}

			&:hover {
				outline-offset: 0px;
			}

			&:active {
				scale: 0.97;
			}
		}
	}

	@keyframes right {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(10px);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
