const config = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		'shared-node-browser': true,
	},
	ignorePatterns: ['.next'],
	extends: [
		'@frontendfull/eslint-config-shared',
		'plugin:react/recommended',
		'next/core-web-vitals',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'import'],
	settings: {
		react: {
			version: 'detect',
		},
		next: {
			rootDir: __dirname,
		},
		'import/resolver': {
			typescript: {}, // TODO: ????
		},
		// 'import/parsers': {
		// 	'@typescript-eslint/parser': ['.ts', '.tsx'],
		// },
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': 0,
		'@next/next/no-html-link-for-pages': 0,
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', 'object', 'parent', 'sibling', 'index', 'type'],
				pathGroups: [
					// Sorts by record order in array, but "group" and "position" have bigger priority
					// so keep order consistant with "group" and "position" values
					{ pattern: 'constant/**', group: 'internal', position: 'before' },
					{ pattern: 'container/**', group: 'internal', position: 'before' },
					{ pattern: 'module/entity/**', group: 'internal', position: 'before' },
					{ pattern: 'module/service/**', group: 'internal', position: 'before' },
					{ pattern: 'module/provider/**', group: 'internal', position: 'before' },
					{ pattern: 'helper/**', group: 'internal', position: 'after' },
					{ pattern: 'util/**', group: 'object', position: 'after' },
					{ pattern: 'container/**', group: 'object', position: 'after' },
					{ pattern: 'component/**', group: 'object', position: 'after' },
					{ pattern: 'kit/**', group: 'object', position: 'after' },
					{ pattern: './styles', group: 'object', position: 'after' },
				],
			},
		],
	},
}

module.exports = config
