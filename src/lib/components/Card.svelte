<script>
	export let title;
	export let description;
	export let button;
</script>

<main class="card">
	<img src="https://via.placeholder.com/300x200" alt="card" class="card-image" />

	<h2 class="card-title">{title}</h2>

	<p class="card-description">{description}</p>

	<button class="card-button">{button}</button>
</main>

<style>
	.card {
		width: 300px;
		height: 420px;
		background-color: #ffffff;
		border-radius: 8px;
		border: 1px solid #f0f0f0;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 14px;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}

	.card-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 8px 8px 0 0;
		margin-bottom: 14px;
	}

	.card-title {
		color: #111827;
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 7px;
	}

	.card-description {
		color: #4b5563;
		font-size: 16px;
		margin-bottom: 14px;
	}

	.card-button {
		background-color: #2c70dd;
		color: #ffffff;
		border: none;
		border-radius: 4px;
		padding: 8px 16px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.card-button:hover {
		background-color: #2c70dddd;
	}
</style>
