<script>
	let { heading, headingFontSize, link, linkFontSize } = $props();
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
		<button class="heading" onclick={handleClick} type="button" style="font-size: {headingFontSize}"
			>{heading}</button
		>
	{:else}
		<a
			href={link}
			class="link"
			onclick={handleClick}
			type="button"
			style="font-size: {linkFontSize}">{link}</a
		>
	{/if}
</section>

<style>
	.wrapper {
		all: inherit;
		display: inline;
		background: none;
		border: none;
		padding: 0;
		margin: 0;

		& .heading {
			font-family: var(--orbitron);
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
			margin: 0;
			padding: 0;
			cursor: pointer;

			&:focus-visible,
			&:focus {
				outline: none;
				box-shadow: none;
				border: none;
			}
		}

		& .link {
			all: inherit;
			display: inline;
			text-decoration: none;
			background: none;
			border: none;
			padding: 0;
			margin: 0;
			view-transition-name: text-element;
			cursor: pointer;
			font-weight: 700;
		}
	}

	@supports (view-transition-name: text-element) {
		::view-transition-group(text-element) {
			animation-duration: 0.061242s;
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
