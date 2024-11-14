<script>
	import { spring } from 'svelte/motion';
	import gsap from 'gsap';

	/** @type {{text: any}} */
	let { text } = $props();

	let animation = spring(0, {
		stiffness: 0.06,
		damping: 0.5
	});

	function toggleDropdown() {
		const menuContent = document.querySelector('.menu-content');

		if ($animation == 1) {
			animation.set(0);
		} else {
			animation.set(1);
		}

		gsap.to(menuContent, {
			rotate: 180,
			duration: 0.5,
			ease: 'power2.inOut',
			onComplete: () => {
				gsap.to(menuContent, {
					rotate: 0,
					duration: 0.5,
					ease: 'power2.inOut'
				});
			}
		});
	}
</script>

<main class="dropdown-container" style="--animation: {$animation}">
	<button class="button" onclick={toggleDropdown} aria-label="popover button">
		<svg
			width="284"
			height="284"
			viewBox="0 0 284 284"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M142 260.333C157.543 260.354 172.936 257.302 187.296 251.354C201.655 245.406 214.698 236.678 225.673 225.674C236.678 214.698 245.406 201.655 251.354 187.296C257.302 172.936 260.353 157.543 260.333 142C260.353 126.457 257.301 111.064 251.353 96.7046C245.405 82.3451 236.678 69.3026 225.673 58.3266C214.698 47.3217 201.655 38.5945 187.296 32.6464C172.936 26.6983 157.543 23.6466 142 23.6667C126.457 23.6469 111.064 26.6987 96.7045 32.6468C82.3451 38.5949 69.3025 47.322 58.3265 58.3266C47.3219 69.3026 38.5948 82.3451 32.6468 96.7046C26.6987 111.064 23.6468 126.457 23.6667 142C23.6465 157.543 26.6982 172.936 32.6463 187.296C38.5944 201.655 47.3217 214.698 58.3265 225.674C69.3025 236.678 82.3451 245.405 96.7045 251.353C111.064 257.301 126.457 260.353 142 260.333Z"
				stroke="white"
				stroke-width="15"
				stroke-linejoin="round"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M142 218.917C145.923 218.917 149.685 217.358 152.459 214.584C155.233 211.81 156.792 208.048 156.792 204.125C156.792 200.202 155.233 196.44 152.459 193.666C149.685 190.892 145.923 189.333 142 189.333C138.077 189.333 134.315 190.892 131.541 193.666C128.767 196.44 127.208 200.202 127.208 204.125C127.208 208.048 128.767 211.81 131.541 214.584C134.315 217.358 138.077 218.917 142 218.917Z"
				fill="white"
			/>
			<path
				d="M142 71V165.667"
				stroke="white"
				stroke-width="17.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>

	<section class="menu">
		<div class="menu-content">
			{text}
		</div>
	</section>

	<section class="goo-container">
		<div class="button"></div>
		<div class="menu"></div>
	</section>
</main>

<svg id="filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
	<defs>
		<filter id="goo">
			<feGaussianBlur id="blur" result="blurred" in="SourceGraphic" stdDeviation="4" />
			<feColorMatrix
				id="adjust"
				result="adjusted"
				in="blurred"
				values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 15 -10"
				type="matrix"
			/>
			<feComposite id="combine" result="combined" in="adjusted" operator="atop" />
		</filter>
	</defs>
</svg>

<style>
	.dropdown-container {
		background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 0);
		background-size: 1rem 1rem;
		background-repeat: round;
		all: unset;
		position: relative;
		top: -10rem;
		width: 240px;
		height: 240px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;

		.goo-container {
			filter: url(#goo);
			position: absolute;
			inset: 0;
			z-index: -1;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.button {
			border: 0;
			width: 6rem;
			height: 6rem;
			background: black;
			color: white;
			border-radius: 50%;
			font-size: 18px;
			cursor: pointer;
			position: relative;
			z-index: 10;
			scale: calc(1 + (0.1 * var(--animation, 0)));
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.menu {
			color: white;
			border-radius: calc(0.5em + (4em * (1 - var(--animation, 0))));
			width: 200px;
			height: 72px;
			scale: calc(1 * var(--animation, 0));
			translate: 0 calc(-20px * (1 - var(--animation, 0)));
			transform-origin: top;
			margin-top: 8px;
			padding: 1em;
			overflow: hidden;
			opacity: 1 * var(--animation, 0);
		}

		.menu-content {
			opacity: calc(-0.9 + (1.9 * var(--animation, 0)));
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: clamp(0.9rem, 1vw, 1.25rem);
			height: 0.2rem;
		}

		.goo-container .menu {
			background: transparent;
		}
	}

	@media (max-width: 1024px) {
		.dropdown-container {
			top: 5rem;
		}
	}
</style>
