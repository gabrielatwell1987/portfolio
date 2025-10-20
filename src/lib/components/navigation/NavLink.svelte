<script>
	import { page } from '$app/stores';

	/** @type {{href: any, title: any, viewTransitionName: any}} */
	let { href, title, onclick = undefined, viewTransitionName = undefined } = $props();

	// Only apply view-transition-name when NOT on the target page
	let shouldTransition = $derived(viewTransitionName && $page.url.pathname !== href);
</script>

<a
	class="nav-link"
	{href}
	{onclick}
	style={shouldTransition ? `view-transition-name: ${viewTransitionName};` : ''}>{title}</a
>

<style>
	.nav-link {
		font-family: var(--bronova-bold);
		font-size: clamp(var(--h6), 1.25vw, var(--h5));
		font-weight: 900;
		letter-spacing: 2px;
		color: var(--clr-main);
		background-color: transparent;
		transition: opacity 0.15s ease-out;
		pointer-events: auto;

		&:focus,
		&:focus-visible {
			outline: none;
			background: transparent;
		}

		&:is(:hover) {
			opacity: 0.75;
		}

		@media (width >= 750px) {
			text-decoration: none;
			border-radius: 1px;

			&:hover {
				text-shadow: 0px 0px 1px var(--clr-invert);
				border-bottom: 4px solid var(--clr-main);
				height: 2.75rem;
				transition: all 0.15s ease-out;
				border-radius: 1px;
			}

			&:not(:hover) {
				opacity: 1;
			}
		}
	}
</style>
