// search functionality
export function createSearchEngine(data = []) {
	let query = $state('');
	let results = $state([]);
	let searchFields = $state(['name', 'title', 'description']);

	return {
		get query() {
			return query;
		},
		set query(value) {
			query = value;
			this.search();
		},
		get results() {
			return results;
		},
		get searchFields() {
			return searchFields;
		},
		set searchFields(fields) {
			searchFields = fields;
		},

		search() {
			if (!query.trim()) {
				results = [...data];
				return;
			}

			const lowercaseQuery = query.toLowerCase();
			results = data.filter((item) =>
				searchFields.some((field) => item[field]?.toLowerCase().includes(lowercaseQuery))
			);
		},

		updateData(newData) {
			data = newData;
			this.search();
		}
	};
}

// pagination manager
export function createPagination(items = [], itemsPerPage = 10) {
	let currentPage = $state(1);
	let perPage = $state(itemsPerPage);

	return {
		get currentPage() {
			return currentPage;
		},
		set currentPage(page) {
			const maxPage = Math.ceil(items.length / perPage);
			currentPage = Math.max(1, Math.min(page, maxPage));
		},
		get itemsPerPage() {
			return perPage;
		},
		set itemsPerPage(value) {
			perPage = value;
			currentPage = 1;
		},
		get totalPages() {
			return Math.ceil(items.length / perPage);
		},
		get currentItems() {
			const start = (currentPage - 1) * perPage;
			return items.slice(start, start + perPage);
		},
		get hasNext() {
			return currentPage < this.totalPages;
		},
		get hasPrevious() {
			return currentPage > 1;
		},

		next() {
			if (this.hasNext) currentPage++;
		},

		previous() {
			if (this.hasPrevious) currentPage--;
		},

		goToPage(page) {
			this.currentPage = page;
		}
	};
}
