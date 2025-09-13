export function createForm(initialValues = {}) {
	let values = $state({ ...initialValues });
	let errors = $state({});
	let touched = $state({});
	let isSubmitting = $state(false);

	return {
		get values() {
			return values;
		},
		get errors() {
			return errors;
		},
		get touched() {
			return touched;
		},
		get isSubmitting() {
			return isSubmitting;
		},
		get isValid() {
			return Object.keys(errors).length === 0;
		},

		setValue(field, value) {
			values[field] = value;
			touched[field] = true;
		},

		setError(field, error) {
			errors[field] = error;
		},

		clearError(field) {
			delete errors[field];
		},

		setSubmitting(value) {
			isSubmitting = value;
		},

		reset() {
			values = { ...initialValues };
			errors = {};
			touched = {};
			isSubmitting = false;
		},

		async submit(onSubmit) {
			isSubmitting = true;
			try {
				await onSubmit(values);
			} finally {
				isSubmitting = false;
			}
		}
	};
}
