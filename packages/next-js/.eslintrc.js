module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
		'shared-node-browser': true,
	},
	ignorePatterns: ['.next'],
	extends: [
		'airbnb',
		'plugin:react/recommended',
		// 'next/core-web-vitals', // disabled because it confilcts with import and react-hooks plugins
		'@frontendfull/eslint-config-shared',
	],
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'unused-imports'],
	settings: {
		react: {
			version: 'detect',
		},
		next: {
			rootDir: __dirname,
		},
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': 0,
		'react/require-default-props': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': 0,
		'react/jsx-key': 'error',
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
	overrides: [
		{
			files: ['ts', 'tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname,
				sourceType: 'module',
			},
			extends: [
				'eslint:recommended',
				'plugin:import/recommended',
				'plugin:import/typescript',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking', // just to try
				'plugin:@typescript-eslint/strict', // just to try
				'airbnb-typescript',
				'prettier',
			],
			plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier', 'unused-imports'],
			rules: {
				'@typescript-eslint/indent': 0,
				'@typescript-eslint/naming-convention': 'warn',
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
	],
}
