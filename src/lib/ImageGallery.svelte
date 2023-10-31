<script>
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/dist/Flip';
	import { onMount } from 'svelte';

	let images = ['gabe.png', 'gabe2.png', 'gabe3.png', 'gabe4.png', 'gabe5.png'];
	let targets = [];

	onMount(() => {
		targets = images.map((image, index) => {
			return {
				ref: null,
				offsetTop: 0,
				offsetLeft: 0
			};
		});
	});

	const handleImageClick = (index) => {
		// Flip animation here
		const image = targets[index].ref;
		const tl = gsap.timeline({ defaults: { duration: 0.5 } });
		const bounds = image.getBoundingClientRect();
		const clone = image.cloneNode(true);
		clone.style.position = 'absolute';
		clone.style.top = `${bounds.top}px`;
		clone.style.left = `${bounds.left}px`;
		document.body.appendChild(clone);
		const finalBounds = targets[index].ref.getBoundingClientRect();

		tl.to(clone, {
			x: finalBounds.left - bounds.left,
			y: finalBounds.top - bounds.top,
			width: finalBounds.width,
			height: finalBounds.height
		}).to(clone, {
			opacity: 0,
			onComplete: () => {
				document.body.removeChild(clone);
			}
		});
	};
</script>

<div class="image-gallery">
	{#each images as image, index (index)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="image-container"
			on:click={() => handleImageClick(index)}
			bind:this={targets[index].ref}
		>
			<img src={image} alt={`Image ${index}`} />
		</div>
	{/each}
</div>

<style>
</style>
