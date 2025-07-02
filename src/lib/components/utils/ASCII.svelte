<script>
	import gsap from 'gsap';

	$effect(() => {
		const asciiTl = gsap.timeline();

		asciiTl.fromTo(
			'.ascii',
			{
				scale: 2
			},
			{ scale: 1.2, y: 100, duration: 2, ease: 'slow(0.7, 0.7, false)' }
		);

		return () => {
			asciiTl.kill();
		};
	});
</script>

<main class="ascii">
	<img src="/logos/ascii.webp" alt="ASCII art representation of Gabe Atwell's name and profile" />
</main>

<style>
	.ascii {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		margin: 0;
	}
</style>
