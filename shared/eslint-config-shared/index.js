
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
		'unused-imports'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'import', 'prettier', 'unused-imports'],
	rules: {
		'arrow-body-style': 0,
		'object-curly-newline': 0,
		'max-len': 'error',
		'linebreak-style': ['error', 'unix'],
		'import/prefer-default-export': 0,
		'@typescript-eslint/indent': 0,
		'prettier/prettier': ['error'],
		'no-underscore-dangle': 0,
		// 'max-lines-per-function': ['error', { max: 25, skipComments: true, 'IIFEs': true, skipBlankLines: true }],
		
		// unused imports autoremove:
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
	},
}
