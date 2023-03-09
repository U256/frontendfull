module.exports = {
	// eslint disabled for this file
	// more info:
	// https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
	ignorePatterns: [
		'*.config.js',
		'.eslintrc.js',
		'node_modules/*'
	],
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking', // just to try TODO: remove if useless
		'plugin:@typescript-eslint/strict', // just to try
		'airbnb',
		'airbnb-typescript',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
	rules: {
		'arrow-body-style': 0,
		'object-curly-newline': 0,
		'max-len': 'error',
		'linebreak-style': ['error', 'unix'],
		'import/prefer-default-export': 0,
		'@typescript-eslint/indent': 0,
		"prettier/prettier": ["error"],
		// "max-lines-per-function": ['error', { max: 25, skipComments: true, 'IIFEs': true, skipBlankLines: true }],
	},
}
