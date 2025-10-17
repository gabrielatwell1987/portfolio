<script>
	import Image from '$lib/components/layout/Image.svelte';

	function generateBlobPath() {
		const points = 7;
		const radius = 200;
		const variance = 0.3;

		let path = 'M ';

		for (let i = 0; i < points; i++) {
			const angle = (i / points) * Math.PI * 2;
			const randomRadius = radius * (1 + (Math.random() - 0.5) * variance);
			const x = 250 + Math.cos(angle) * randomRadius;
			const y = 250 + Math.sin(angle) * randomRadius;

			if (i === 0) {
				path += `${x},${y} `;
			} else {
				// Use quadratic curves for smooth blob shape
				const prevAngle = ((i - 1) / points) * Math.PI * 2;
				const prevRadius = radius * (1 + (Math.random() - 0.5) * variance);
				const cpx = 250 + Math.cos(prevAngle + (0.5 / points) * Math.PI * 2) * prevRadius;
				const cpy = 250 + Math.sin(prevAngle + (0.5 / points) * Math.PI * 2) * prevRadius;
				path += `Q ${cpx},${cpy} ${x},${y} `;
			}
		}
		path + 'Z';
	}

	let blobPath = $state(generateBlobPath());
</script>

<div class="blob-wrapper">
	<svg viewBox="0 0 500 500" class="blob-bg">
		<path d={blobPath} fill="var(--warning)" />
	</svg>

	<div class="image-wrapper">
		<Image
			src="/images/hire-gabe.webp"
			alt="Gabriel Atwell"
			style="width: clamp(200px, 30vw, 750px);"
			aspectRatio="1/1"
		/>
	</div>
</div>

<style>
	.blob-wrapper {
		position: relative;
		width: clamp(200px, 30vw, 750px);
		margin-inline: auto;

		& .blob-bg {
			position: absolute;
			top: 0;
			left: 0;
			filter: drop-shadow(0 0 1px var(--clr-invert));
			z-index: -1;
			width: 100%;
			height: 100%;
		}

		& .image-wrapper {
			position: relative;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0 5px 0 rgba(0, 0, 0, 0.8);
			border: 1px solid rgba(0, 0, 0, 0.8);
			z-index: 1;
			/* background-color: var(--clr-invert); */
		}
	}
</style>
