<script>
	import Robot from '$lib/components/Robot.svelte';
	import SEO from '$lib/data/SEO.svelte';

	$effect(() => {
		console.log('Robot page');
	});
</script>

<SEO title="Robot" description="Mouse Position Robot" keywords="gabe's robot, spline robot" />

<main>
	<Robot title="Mouse Position" />
</main>
