const config = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		'shared-node-browser': true,
	},
	// eslint disabled for this file
	// more info:
	// https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
	ignorePatterns: ['*.config.js', '.eslintrc.js', 'node_modules/*'],
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking', // just to try
		'plugin:@typescript-eslint/strict', // just to try
		'airbnb',
		'airbnb-typescript',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'

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
			typescript: {},
		},
	},
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-tabs': 0,
		'arrow-body-style': 0,
		'linebreak-style': ['error', 'unix'],
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'import/prefer-default-export': 0,
		'react/jsx-indent': 0,
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/indent': 0,
		'@next/next/no-html-link-for-pages': 0
	},
}

module.exports = config
