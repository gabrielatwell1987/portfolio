<script>
	let { column } = $props();
</script>

<div class="kanban-column">
	<h2>{column.title}</h2>

	<ul>
		{#each column.tasks as task}
			<li>{task}</li>
		{/each}
	</ul>
</div>

<style>
	.kanban-column {
		background-color: var(--darksmoke);
		color: #272727;
		box-shadow: 0 0 10px var(--white);
		border-radius: 5px;
		width: 200px;

		ul {
			text-align: center;

			li {
				list-style: none;
				font-size: clamp(1rem, 2vw, 1.75rem);
			}
		}
	}

	h2 {
		display: block;
		align-content: center;
		padding-top: 2rem;
		font-size: clamp(1.5rem, 2vw, 2rem);
		text-decoration: underline;
		color: var(--dark-pale);
	}
</style>
