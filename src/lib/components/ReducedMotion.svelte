<script>
	import { getPrefersReducedMotion } from './ReducedMotion';

	const prefersReducedMotion = getPrefersReducedMotion();

	const value = prefersReducedMotion ? 'Yes' : 'No';
</script>

<h1>Prefers Reduced Motion: {value}</h1>
