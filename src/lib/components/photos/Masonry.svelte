<script>
	import archie from '$lib/images/archie.webp';
	import autumn from '$lib/images/autumn.webp';
	import gabe from '$lib/images/gabe.webp';
	import gabe2 from '$lib/images/gabe2.webp';
	import gabe3 from '$lib/images/gabe3.webp';
	import gabe4 from '$lib/images/gabe4.webp';
	import gabe5 from '$lib/images/gabe5.webp';
	import monkey from '$lib/images/monkey.webp';
	import wtf from '$lib/images/wtf.webp';
	import wtf2 from '$lib/images/wtf2.webp';
	// import wtf3 from '$lib/images/wtf3.webp';
	import kids from '$lib/images/kids.webp';
	import Title from '$lib/components/layout/Title.svelte';
</script>

<Title title="pics of me" />

<section>
	<div class="masonry">
		<img src={kids} alt="Gabe and his kids" width="400" />
		<img src={gabe} alt="Gabe sitting with his phone" width="400" />
		<img src={gabe2} alt="Gabriel's face" width="400" />
		<img src={gabe3} alt="Gabe in Arizona fixing a car" width="400" />
		<img src={gabe4} alt="Gabe in a restaurant" width="400" />
		<img src={gabe5} alt="Gabe standing still" width="400" />
		<img src={autumn} alt="Gabe and his daughter Autumn" width="400" />
		<img src={archie} alt="Gabe and his poodle Archie" width="400" />
		<img src={monkey} alt="A monkey with glasses" width="400" />
		<img src={wtf} alt="Trying to burn Gabe" width="400" />
		<img src={wtf2} alt="Gabe's face on hulk hogan" width="400" />
		<!-- <img src={wtf3} alt="When gabe was 5 years old" width="400" /> -->
	</div>
</section>

<style>
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

			& img {
				width: 100%;
				padding: 0;
				display: block;
				transform: scale(1);
				transition: transform 0.3s ease-out;
				border-radius: 5px;
				margin-bottom: 0.05rem;

				&:hover {
					transform: scale(0.95);
				}
			}
		}
	}
</style>
