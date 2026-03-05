module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	overrides: [
		{
			files: ['**/*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
				ecmaVersion: 'latest',
				extraFileExtensions: ['.svelte']
			},
			globals: {
				$state: 'readonly',
				$derived: 'readonly',
				$effect: 'readonly',
				$props: 'readonly',
				$bindable: 'readonly',
				$inspect: 'readonly',
				$host: 'readonly'
			}
		},
		{
			files: ['**/*.{ts,tsx}'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended']
		}
	]
};
