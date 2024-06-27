<script>
	export let title;

	const iFrame = document.querySelector('iframe');

	$: console.log(iFrame);
</script>

<main>
	<h1>{title}</h1>

	<!-- spline interactive animation -->

	<iframe
		src="https://my.spline.design/robotfollowcursorforlandingpage-887310bccea6e24d681820089ada9b65/"
		frameborder="0"
		width="100%"
		height="100%"
		title="robot"
		aria-label="robot"
	/>

	<h3>The robot will follow your mouse movements.</h3>
</main>

<style>
	iframe {
		width: 50%;
		height: 50rem;
		margin: 0 0 0 24.5%;
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
		font-size: 3rem;
	}

	h3 {
		color: var(--smoke);
		margin: 0;
		margin-top: 0.25rem;
		margin-bottom: 8%;
	}
</style>
