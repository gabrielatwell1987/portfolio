<script>
</script>

<!-- // newtons cradle
<div class="container">
	<div class="newtons-cradle">
		<div class="newtons-cradle__dot" />
		<div class="newtons-cradle__dot" />
		<div class="newtons-cradle__dot" />
		<div class="newtons-cradle__dot" />
	</div>
</div>

<style>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.newtons-cradle {
		--uib-size: 250px;
		--uib-speed: 1.2s;
		--uib-color: var(--purple);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--uib-size);
		height: var(--uib-size);
		mix-blend-mode: difference;
	}

	.newtons-cradle__dot {
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;
		width: 25%;
		transform-origin: center top;
	}

	.newtons-cradle__dot::after {
		content: '';
		display: block;
		width: 100%;
		height: 25%;
		border-radius: 50%;
		background-color: var(--uib-color);
	}

	.newtons-cradle__dot:first-child {
		animation: swing var(--uib-speed) linear infinite;
	}

	.newtons-cradle__dot:last-child {
		animation: swing2 var(--uib-speed) linear infinite;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
			animation-timing-function: ease-out;
		}
		25% {
			transform: rotate(70deg);
			animation-timing-function: ease-in;
		}
		50% {
			transform: rotate(0deg);
			animation-timing-function: linear;
		}
	}

	@keyframes swing2 {
		0% {
			transform: rotate(0deg);
			animation-timing-function: linear;
		}
		50% {
			transform: rotate(0deg);
			animation-timing-function: ease-out;
		}
		75% {
			transform: rotate(-70deg);
			animation-timing-function: ease-in;
		}
	}

	@media screen and (max-width: 500px) {
		.newtons-cradle {
			--uib-size: 150px;
		}
	}
</style> -->

<!-- loading dots -->
<main class="container">
	<section class="loading">
		<div />
		<div />
		<div />
	</section>
</main>

<style>
	.container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loading {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
	}

	.loading div {
		width: 3.5rem;
		height: 3.5rem;
		margin: 2rem 0.5rem;
		background: var(--purple);
		border-radius: 50%;
		-webkit-animation: 0.9s bounce infinite alternate;
		animation: 0.9s bounce infinite alternate;
	}

	.loading div:nth-child(2) {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}

	.loading div:nth-child(3) {
		-webkit-animation-delay: 0.6s;
		animation-delay: 0.6s;
	}

	@-webkit-keyframes bounce {
		to {
			opacity: 0.3;
			-webkit-transform: translate3d(0, -1rem, 0);
			transform: translate3d(0, -1rem, 0);
		}
	}

	@keyframes bounce {
		to {
			opacity: 0.3;
			-webkit-transform: translate3d(0, -1rem, 0);
			transform: translate3d(0, -1rem, 0);
		}
	}

	@media screen and (max-width: 500px) {
		.loading div {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
