<script>
	/** @type {{title: any}} */
	let { title } = $props();

	$effect(() => {
		const iFrame = document.querySelector('iframe');
	});
</script>

<main>
	<h1>{title}</h1>

	<iframe
		src="https://my.spline.design/robotfollowcursorforlandingpage-887310bccea6e24d681820089ada9b65/"
		frameborder="0"
		width="100%"
		height="100%"
		title="robot"
		aria-label="robot"
	></iframe>

	<h3>The robot will follow your mouse movements.</h3>
</main>

<style>
	iframe {
		width: 50%;
		height: 50rem;
		margin: 0 0 0 24.5%;
		border: 3px solid var(--purple);
		padding: clamp(0.25rem, 1vw, 1rem);
		border-radius: 12px;
		margin-bottom: 2rem;
	}

	h1,
	h3 {
		text-align: center;
		margin-top: 0.5rem;
	}

	h1 {
		color: var(--purple);
		margin: 5% 0 2rem 0;
		font-family: var(--anta);
		font-size: clamp(2.5rem, 4vw, 7.5rem);
		letter-spacing: 4px;
	}

	h3 {
		color: var(--smoke);
		margin: 0;
		margin-top: 0.25rem;
		margin-bottom: 8%;
		font-family: var(--bronova);
		font-size: clamp(1rem, 3vw, 2rem);
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		iframe {
			width: 100%;
			margin: 0;
		}
	}
</style>
