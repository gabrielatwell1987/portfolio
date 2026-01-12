<script lang="ts">
	type ColumnId = 'todo' | 'inProgress' | 'done';

	interface Card {
		id: number;
		title: string;
		description: string;
	}

	interface Column {
		id: ColumnId;
		title: string;
		cards: Card[];
	}

	let columns = $state<Column[]>([
		{
			id: 'todo',
			title: 'To Do',
			cards: []
		},
		{
			id: 'inProgress',
			title: 'In Progress',
			cards: []
		},
		{
			id: 'done',
			title: 'Done',
			cards: []
		}
	]);

	let newCards = $state<Record<ColumnId, { title: string; description: string }>>({
		todo: { title: '', description: '' },
		inProgress: { title: '', description: '' },
		done: { title: '', description: '' }
	});

	let editingCard = $state<Card | null>(null);

	// Load data from localStorage
	$effect(() => {
		const savedData = localStorage.getItem('kanbanData');
		if (savedData) {
			columns = JSON.parse(savedData);
		}
	});

	// Save to localStorage when data changes
	$effect(() => {
		localStorage.setItem('kanbanData', JSON.stringify(columns));
	});

	function addCard(columnId: ColumnId) {
		if (!newCards[columnId].title.trim()) return;

		const newCard = {
			id: Date.now(),
			title: newCards[columnId].title,
			description: newCards[columnId].description || ''
		};

		const columnIndex = columns.findIndex((col) => col.id === columnId);
		columns[columnIndex].cards = [...columns[columnIndex].cards, newCard];

		// Reset input fields
		newCards[columnId] = { title: '', description: '' };
	}

	function deleteCard(columnId: ColumnId, cardId: number) {
		const columnIndex = columns.findIndex((col) => col.id === columnId);
		columns[columnIndex].cards = columns[columnIndex].cards.filter((card) => card.id !== cardId);
	}
</script>

<div class="kanban">
	<div class="board">
		{#each columns as column}
			<div class="column" role="list">
				<div class="column-header">
					<h3>{column.title}</h3>
					<span class="counter">{column.cards.length}</span>
				</div>

				<div class="column-content">
					<div class="cards">
						{#each column.cards as card (card.id)}
							{#if editingCard?.id === card.id}
								<div class="card editing">
									<input
										type="text"
										bind:value={editingCard.title}
										placeholder="Card title"
										class="edit-input"
									/>

									<textarea
										bind:value={editingCard.description}
										placeholder="Card description"
										class="edit-input"
									></textarea>
								</div>
							{:else}
								<div class="card" role="listitem">
									<div class="card-header">
										<!-- svelte-ignore a11y_consider_explicit_label -->
										<button onclick={() => deleteCard(column.id, card.id)} class="delete-btn"
											><i class="fa-solid fa-xmark"></i></button
										>
									</div>

									<p>{card.description}</p>
								</div>
							{/if}
						{/each}
					</div>

					{#if !editingCard}
						<div class="add-card-form">
							<input
								type="text"
								bind:value={newCards[column.id].title}
								placeholder="Title.."
								class="add-input"
							/>

							<textarea
								bind:value={newCards[column.id].description}
								placeholder="Description.."
								class="add-input"
							></textarea>

							<!-- svelte-ignore a11y_consider_explicit_label -->
							<button onclick={() => addCard(column.id)} class="add-card">
								<span><i class="fa-solid fa-plus"></i> Add</span>
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.kanban {
		padding: 2.2rem;
		background-color: transparent;
		box-shadow: none;
		min-height: 100vh;
	}

	.board {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		place-items: center;
		gap: 2.2rem;
		overflow-x: auto;
		padding-bottom: 16px;
	}

	.column {
		flex-shrink: 0;
		width: 320px;
	}

	.column-header {
		background-color: var(--white);
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		border-bottom-left-radius: none;
		border-bottom-right-radius: none;
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: -7.5%;

		& h3 {
			margin: 0;
			color: var(--blackest);
			font-weight: 900;
			font-size: clamp(1rem, 1.5vw, 1.75rem);
		}
	}

	.counter {
		background-color: var(--black);
		color: var(--white);
		padding: 4px 8px;
		border-radius: 9999px;
		font-size: var(1rem, 1.75vw, 2rem);
		font-weight: 600;
	}

	.column-content {
		background-color: var(--white);
		border: none;
		border-top: none;
		border-radius: 0.5rem;
		padding: 12px;
		min-height: 500px;
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.card {
		background-color: var(--white);
		padding: 12px;
		border-radius: 8px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		transition: box-shadow 0.2s ease;

		&:hover {
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		}

		& p {
			margin: 0;
			color: var(--blackest);
			font-size: clamp(1.1rem, 1.5vw, 1.75rem);
			letter-spacing: 1px;
			hyphens: auto;
		}
	}

	.card.editing {
		cursor: default;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 0.5rem;
	}

	.delete-btn {
		padding: 0.5rem 1rem 0.1rem 1rem;
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: clamp(1rem, 2vw, 2rem);
		width: fit-content;
		margin-inline: 85%;
		background-color: #fee2e2;
		color: #dc2626;

		&:hover {
			background-color: #ec5151;
			color: var(--white);
		}
	}

	textarea.edit-input {
		min-height: 60px;
		resize: vertical;
	}

	.add-card-form {
		margin-top: 12px;
	}

	.add-input {
		width: 100%;
		padding: 6px;
		margin-bottom: 8px;
		border: 1px solid #e5e7eb;
		border-radius: 4px;
		font-size: clamp(1rem, 1.5vw, 1.75rem);

		&::placeholder {
			color: var(--off-white);
			padding: 0.5rem 1rem;
		}
	}

	textarea.add-input {
		min-height: 60px;
		resize: vertical;
	}

	.add-card {
		width: fit-content;
		margin-inline: auto;
		padding: 8px;
		border: 2px dashed var(--dark-gray);
		border-radius: 8px;
		background: none;
		color: var(--dark-gray);
		font-weight: 700;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		transition: all 0.2s ease;
		font-size: clamp(1rem, 1.75rem, 2rem);

		&:hover {
			border-color: #000;
			color: #000;
		}

		& span {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
		}
	}
</style>
