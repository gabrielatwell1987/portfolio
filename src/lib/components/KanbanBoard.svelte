<script>
	import { writable } from 'svelte/store';
	import KanbanColumn from '$lib/components/KanbanColumn.svelte';

	let columns = writable([
		{ id: 1, title: 'This', tasks: ['Place different', 'tasks here'] },
		{ id: 2, title: 'Is', tasks: ['this is a simple'] },
		{ id: 3, title: 'A', tasks: ['kanban board'] },
		{ id: 4, title: 'Kanban', tasks: ['i probably wont'] },
		{ id: 5, title: 'Board', tasks: ['ever', 'use', 'it'] }
	]);
</script>

<div class="kanban-board">
	{#each $columns as column (column.id)}
		<KanbanColumn {column} />
	{/each}
</div>

<style>
	.kanban-board {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		place-items: center;
		gap: 2rem;
		width: 100%;
		height: 100%;
		margin-block: 2rem;
	}
</style>
