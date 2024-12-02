<script>
	import { fade } from 'svelte/transition';

	/** @type {{title: any}} */
	let { title } = $props();
</script>

<main transition:fade={{ duration: 500 }}>
	<h1 class="title" id="title" aria-label={title}>{title}</h1>
</main>

<style>
	* {
		position: relative;
	}

	@media (min-width: 300px) {
		.title {
			text-align: center;
			font-family: var(--anta);
			font-size: clamp(2.75rem, 10.5vw, 15rem);
			color: var(--sky);
			letter-spacing: 5px;
			text-shadow: 0px 0px 10px var(--white);
			text-transform: uppercase;
			filter: drop-shadow(0px 0px 0.75rem var(--white));
		}

		#title {
			font-kerning: none;
		}
	}

	@media (min-width: 740px) {
		.title {
			letter-spacing: 20px;
			margin: 2rem auto;
		}
	}

	@media (min-width: 990px) {
		.title {
			font-weight: 800;
			text-shadow: 5px 5px 5px var(--dark-gray);
		}
	}
</style>
