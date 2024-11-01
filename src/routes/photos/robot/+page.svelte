<script>
	import { run } from 'svelte/legacy';

	import Robot from '$lib/components/Robot.svelte';
	import SEO from '$lib/data/SEO.svelte';

	run(() => {
		console.log('Robot page');
	});
</script>

<SEO title="Robot" description="Mouse Position Robot" keywords="gabe's robot, spline robot" />

<main>
	<Robot title="Mouse Position" />
</main>
