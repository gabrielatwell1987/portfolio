<script lang="ts">
	let { heading, headingFontSize, link, linkFontSize } = $props();
	let isHeading = $state(false);

	function handleClick(e: MouseEvent) {
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
			font-family: var(--ultra);
			font-size: clamp(3rem, 5vw, 10rem);
			color: var(--clr-main);
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
			transform-origin: center;
		}

		::view-transition-old(text-element) {
			animation: fade-out 0.1s cubic-bezier(0.4, 0, 0.2, 1) both;
		}

		::view-transition-new(text-element) {
			animation: fade-in 0.1s cubic-bezier(0.4, 0, 0.2, 1) both;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
