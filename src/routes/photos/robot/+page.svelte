<script>
	import Robot from '$lib/components/Robot.svelte';
	import SEO from '$lib/data/SEO.svelte';

	const main = document.querySelector('main');

	$: console.log(main);
	$: console.log('Robot page');
</script>

<SEO title="Robot" description="Mouse Position Robot" keywords="gabe's robot" />

<main>
	<Robot title="Mouse Position" />
</main>
