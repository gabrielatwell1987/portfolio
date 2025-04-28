<script>
	let { text, link } = $props();
	let isHeading = $state(false);

	function handleClick(e) {
		e.preventDefault();

		if (!document.startViewTransition) {
			isHeading = !isHeading;
			return;
		}

		document.startViewTransition(() => {
			isHeading = !isHeading;
		});
	}
</script>

<section class="wrapper">
	{#if isHeading}
		<button class="heading" onclick={handleClick} type="button">{text}</button>
	{:else}
		<a href={link} class="link" onclick={handleClick} type="button">{link}</a>
	{/if}
</section>

<style>
	.wrapper {
		width: 100%;
		height: 1em;
		background-color: transparent;
		color: var(--text-color);
		margin: 0;
		padding: 0;

		& .heading {
			font-family: var(--bronova);
			font-size: clamp(3rem, 5vw, 10rem);
			font-weight: 800;
			color: var(--text-color);
			text-align: center;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			view-transition-name: text-element;
			background-color: transparent;
			border: none;
			cursor: pointer;
			outline: none;

			&:focus-visible,
			&:focus {
				outline: none;
				box-shadow: none;
				border: none;
			}
		}

		& .link {
			font-family: var(--orbitron);
			font-size: clamp(2rem, 2.5vw, 4rem);
			font-weight: 600;
			color: var(--text-color);
			text-decoration: none;
			padding: 0.7rem;
			view-transition-name: text-element;
			background-color: transparent;
		}
	}

	@supports (view-transition-name: text-element) {
		::view-transition-group(text-element) {
			animation-duration: 0.1s;
			/* animation-duration: 0.061242s; */
			animation-timing-function: ease-in-out;
		}

		/* ::view-transition-old(text-element) {
			opacity: 0;
			animation: old 0.001s ease-in-out;
		} */

		/* ::view-transition-new(text-element) {
			opacity: 1;
			animation: new 1ms ease-in-out;
		} */
	}

	@keyframes old {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes new {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
