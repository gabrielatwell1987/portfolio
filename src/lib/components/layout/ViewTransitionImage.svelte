<script>
	let { src, alt } = $props();
	let expanded = $state(false);

	function toggleExpand() {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				expanded = !expanded;
			});
		} else {
			expanded = !expanded;
		}
	}
</script>

<div class={expanded ? 'expanded' : ''}>
	<button type="button" onclick={toggleExpand} class="img-button">
		<img {src} {alt} />
	</button>
</div>

<style>
	div {
		cursor: pointer;
		width: max-content;
		z-index: 500;
	}

	.img-button {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}

	.expanded {
		position: fixed;
		inset: 0;
		background: rgb(0 0 0 / 0.9);
		display: grid;
		place-items: center;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
	}

	.expanded .img-button {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
		margin: 0;
		padding: 0;
	}

	.expanded img {
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		margin: 0;
		padding: 0;
	}

	img {
		width: 300px;
		height: 300px;
		object-fit: cover;
		view-transition-name: testing;
	}

	::view-transition-old(testing),
	::view-transition-new(testing) {
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	::view-transition-old(testing) {
		animation: scale-down 0.25s ease forwards;
	}

	::view-transition-new(testing) {
		animation: scale-up 0.25s ease forwards;
	}

	@keyframes scale-up {
		from {
			transform: scale(0.8);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes scale-down {
		from {
			transform: scale(1.2);
			opacity: 1;
		}
		to {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
