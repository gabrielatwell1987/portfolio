<script>
</script>

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
</style>
