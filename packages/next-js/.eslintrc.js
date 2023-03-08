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
			typescript: {},
		},
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': 0,
		'@next/next/no-html-link-for-pages': 0,
	},
}

module.exports = config
