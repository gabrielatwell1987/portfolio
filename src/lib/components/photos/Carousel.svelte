<script>
	import { browser } from '$app/environment';

	// Import images
	import gabe from '$lib/images/gabe.webp';
	import gabe2 from '$lib/images/gabe2.webp';
	import gabe3 from '$lib/images/gabe3.webp';
	import gabe4 from '$lib/images/gabe4.webp';
	import gabe5 from '$lib/images/gabe5.webp';
	import autumn from '$lib/images/autumn.webp';

	let slider = $state();

	function activate(e) {
		if (!slider || !browser) return;

		const items = slider.querySelectorAll('.item');
		if (e.target.matches('.next')) {
			slider.append(items[0]);
		} else if (e.target.matches('.prev')) {
			slider.prepend(items[items.length - 1]);
		}
	}

	$effect(() => {
		if (!browser) return;

		document.addEventListener('click', activate, false);

		return () => {
			document.removeEventListener('click', activate, false);
		};
	});
</script>

<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
	></script>
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</svelte:head>

<main>
	<ul class="slider" bind:this={slider}>
		<li class="item image-16x9" style="background-image: url('{gabe}')">
			<div class="content">
				<h2 class="title">"Lossless Youths"</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure
					corporis inventore praesentium nisi. Id laboriosam ipsam enim.
				</p>
			</div>
		</li>
		<li class="item image-16x9" style="background-image: url('{gabe2}')">
			<div class="content">
				<h2 class="title">"Estrange Bond"</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure
					corporis inventore praesentium nisi. Id laboriosam ipsam enim.
				</p>
			</div>
		</li>
		<li class="item" style="background-image: url('{gabe3}')">
			<div class="content">
				<h2 class="title">"The Gate Keeper"</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure
					corporis inventore praesentium nisi. Id laboriosam ipsam enim.
				</p>
			</div>
		</li>
		<li class="item" style="background-image: url('{gabe4}')">
			<div class="content">
				<h2 class="title">"Last Trace Of Us"</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure
					corporis inventore praesentium nisi. Id laboriosam ipsam enim.
				</p>
			</div>
		</li>
		<li class="item" style="background-image: url('{gabe5}')">
			<div class="content">
				<h2 class="title">"Urban Decay"</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure
					corporis inventore praesentium nisi. Id laboriosam ipsam enim.
				</p>
			</div>
		</li>
		<li class="item" style="background-image: url('{autumn}')">
			<div class="content">
				<h2 class="title">"The Migration"</h2>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure
					corporis inventore praesentium nisi. Id laboriosam ipsam enim.
				</p>
			</div>
		</li>
	</ul>

	<nav class="nav">
		<ion-icon class="btn prev" name="arrow-back-outline"></ion-icon>
		<ion-icon class="btn next" name="arrow-forward-outline"></ion-icon>
	</nav>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100dvh;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
		padding-block: 10em;

		& .image-16x9 {
			aspect-ratio: 16 / 9;
			object-fit: cover;
			width: 100%;
		}
	}

	.item {
		width: 200px;
		height: 300px;
		list-style-type: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
		background-position: center;
		background-size: cover;
		border-radius: 20px;
		box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset;
		transition:
			transform 0.1s,
			left 0.75s,
			top 0.75s,
			width 0.75s,
			height 0.75s;

		&:nth-child(1),
		&:nth-child(2) {
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			transform: none;
			border-radius: 0;
			box-shadow: none;
			opacity: 1;
		}

		&:nth-child(3) {
			left: 50%;
		}
		&:nth-child(4) {
			left: calc(50% + 220px);
		}
		&:nth-child(5) {
			left: calc(50% + 440px);
		}
		&:nth-child(6) {
			left: calc(50% + 660px);
			opacity: 0;
		}
	}

	.content {
		width: min(30vw, 400px);
		position: absolute;
		top: 50%;
		left: 3rem;
		transform: translateY(-50%);
		font:
			400 0.85rem helvetica,
			sans-serif;
		color: white;
		text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
		opacity: 0;
		display: none;

		& .title {
			color: var(--clr-main);
			font-family: var(--bronova-bold);
			font-size: clamp(var(--h6), 3vw, var(--h2));
			text-transform: uppercase;
		}

		& .description {
			line-height: 1.7;
			margin: 1rem 0 1.5rem;
			font-size: 0.8rem;
		}
	}

	.item:nth-of-type(2) .content {
		display: block;
		animation: show 0.75s ease-in-out 0.3s forwards;
	}

	@keyframes show {
		0% {
			filter: blur(5px);
			transform: translateY(calc(-50% + 75px));
		}
		100% {
			opacity: 1;
			filter: blur(0);
		}
	}

	.nav {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 5;
		user-select: none;

		& .btn {
			background-color: rgba(255, 255, 255, 0.5);
			color: rgba(0, 0, 0, 0.7);
			border: 2px solid rgba(0, 0, 0, 0.6);
			margin: 0 0.25rem;
			padding: 0.75rem;
			border-radius: 50%;
			cursor: pointer;

			&:hover {
				background-color: rgba(255, 255, 255, 0.3);
			}
		}
	}

	@media (width > 650px) and (width < 900px) {
		.content {
			& .title {
				font-size: 1rem;
			}
			& .description {
				font-size: 0.7rem;
			}
		}
		.item {
			width: 160px;
			height: 270px;

			&:nth-child(3) {
				left: 50%;
			}
			&:nth-child(4) {
				left: calc(50% + 170px);
			}
			&:nth-child(5) {
				left: calc(50% + 340px);
			}
			&:nth-child(6) {
				left: calc(50% + 510px);
				opacity: 0;
			}
		}
	}

	@media (width < 650px) {
		.content {
			& .title {
				font-size: 0.9rem;
			}
			& .description {
				font-size: 0.65rem;
			}
		}
		.item {
			width: 130px;
			height: 220px;

			&:nth-child(3) {
				left: 50%;
			}
			&:nth-child(4) {
				left: calc(50% + 140px);
			}
			&:nth-child(5) {
				left: calc(50% + 280px);
			}
			&:nth-child(6) {
				left: calc(50% + 420px);
				opacity: 0;
			}
		}
	}
</style>
