<script>
	export let showModal = false;
</script>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="backdrop" on:click|self>
		<div class="modal">
			<button class="close" on:click><i class="fa-solid fa-x" /></button>
			Click send
		</div>
	</div>
{/if}

<style>
	.backdrop {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		position: fixed;
		background-color: rgba(104, 103, 103, 0.9);
	}
	.modal {
		position: relative;
		text-align: center;
		width: 400px;
		height: 200px;
		border-radius: 10px;
		background-color: #242424;
		font-weight: bolder;
		font-size: 1.2rem;
	}
	.close {
		position: absolute;
		font-size: 25px;
		top: 20px;
		right: 20px;
		width: 10px;
		height: 30px;
		opacity: 0.3;
		background: none;
		margin: 0;
		padding: 0;
	}
</style>
