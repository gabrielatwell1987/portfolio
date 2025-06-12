<script>
	import archie from '$lib/images/archie.webp';
	import autumn from '$lib/images/autumn.webp';
	import gabe from '$lib/images/gabe.webp';
	import gabe2 from '$lib/images/gabe2.webp';
	import gabe3 from '$lib/images/gabe3.webp';
	import gabe4 from '$lib/images/gabe4.webp';
	import wtf from '$lib/images/wtf.webp';
	import wtf2 from '$lib/images/wtf2.webp';
	import wtf3 from '$lib/images/wtf3.webp';
	import kids from '$lib/images/kids.webp';
	import crest from '$lib/images/atwell_crest.webp';
	import Title from '$lib/components/layout/Title.svelte';
	let selectedImage = $state(null);
	let isOpen = $state(false);
	function openPopover(img) {
		// If a popover is already open, close it first
		if (isOpen) {
			isOpen = false;
			setTimeout(() => {
				selectedImage = img;
				const popover = document.getElementById('image-popover');
				popover.showPopover();

				// Trigger animation after popover is shown
				setTimeout(() => {
					isOpen = true;
				}, 10);
			}, 50);
		} else {
			selectedImage = img;
			const popover = document.getElementById('image-popover');
			popover.showPopover();

			// Trigger animation after popover is shown
			setTimeout(() => {
				isOpen = true;
			}, 10);
		}
	}
	function closePopover() {
		isOpen = false;

		// Wait for animation to complete before hiding
		setTimeout(() => {
			const popover = document.getElementById('image-popover');
			popover.hidePopover();
			selectedImage = null;
		}, 1000);
	}
</script>

<Title title="pics of me" />

<section>
	<div class="masonry">
		{#each [{ src: kids, alt: 'Gabe and his kids' }, { src: gabe, alt: 'Gabe sitting with his phone' }, { src: gabe2, alt: "Gabriel's face" }, { src: gabe3, alt: 'Gabe in Arizona fixing a car' }, { src: gabe4, alt: 'Gabe in a restaurant' }, { src: crest, alt: 'the Atwell family crest' }, { src: autumn, alt: 'Gabe and his daughter Autumn' }, { src: archie, alt: 'Gabe and his poodle Archie' }, { src: wtf, alt: 'Trying to burn Gabe' }, { src: wtf2, alt: "Gabe's face on hulk hogan" }] as img, i}
			<button type="button" style="animation-delay: {i * 0.2}s;" onclick={() => openPopover(img)}>
				<img src={img.src} alt={img.alt} />
			</button>
		{/each}
	</div>
</section>

<!-- Popover for enlarged image -->
<div id="image-popover" popover="auto" class:open={isOpen}>
	{#if selectedImage}
		<button
			type="button"
			onclick={closePopover}
			style="padding:0; border:none; background:transparent;"
		>
			<img src={selectedImage.src} alt={selectedImage.alt} style="pointer-events:none;" />
		</button>
	{/if}
</div>

<style>
	:root {
		--100: 100%;
		--animation-duration: 0.75s;
		--stagger-delay: 0.75s;
		--subtle-rgb: 40, 40, 40;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 0;
		width: 100%;
		margin: 0;

		& .masonry {
			columns: 1;
			column-gap: 0;
			margin: 0;
			margin-top: 1rem;
			padding: 0;
			width: 100%;

			/* Medium screens (2 columns) */
			@media (width >= 768px) {
				columns: 2;
				margin: 5em;
			}

			/* Desktop (3 columns) */
			@media (width >= 1024px) {
				columns: 3;
				margin: 10em;
			}

			& button {
				display: block;
				width: 100%;
				padding: 0;
				margin: 0;
				border: none;
				background: none;
				cursor: pointer;
				line-height: 0;
				font-size: 0;
				animation: fadeIn var(--animation-duration) ease-out forwards;
				opacity: 0;
				overflow: hidden;

				&:focus {
					border: none;
					outline: none;
					box-shadow: none;
				}
			}

			& img {
				width: 100%;
				height: auto;
				padding: 0;
				margin: 0;
				display: block;
				transform: scale(1);
				transition: transform 0.3s ease-out;
				cursor: pointer;
				border: none;
				outline: none;
			}
		}
	}

	/* Popover styles */
	#image-popover {
		border: none;
		padding: 0;
		background: transparent;
		max-width: 90vw;
		max-height: 90vh;
		overflow: hidden;
		margin: auto;
		transform: scale(0.8);
		opacity: 0;
		transition:
			transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
			opacity 0.3s ease-out;

		&.open {
			transform: scale(1);
			opacity: 1;
		}

		& img {
			max-width: 100%;
			max-height: 90vh;
			object-fit: contain;
			cursor: pointer;
			border-radius: 8px;
			box-shadow: 0 0 10px var(--clr-inverted);
		}
	}

	#image-popover::backdrop {
		background: radial-gradient(circle, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		opacity: 0;
		transition: opacity 0.3s ease-out;
	}

	#image-popover.open::backdrop {
		opacity: 1;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
