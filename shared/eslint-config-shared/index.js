/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
	// eslint disabled for this file
	// more info:
	// https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
	ignorePatterns: ['*.config.js', '.eslintrc.js', 'node_modules/*'],
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'airbnb',
		'prettier',
	],
	plugins: ['import', 'prettier', 'unused-imports'],
	rules: {
		'arrow-body-style': 0,
		'object-curly-newline': 0,
		'max-len': 'error',
		'linebreak-style': ['error', 'unix'],
		'no-underscore-dangle': 0,
		'max-lines-per-function': [
			'error',
			{ max: 25, skipComments: true, IIFEs: true, skipBlankLines: true },
		],
		'max-lines': [
			'error',
			{ max: 150, skipComments: true, skipBlankLines: true },
		],
		'import/prefer-default-export': 0,
		'prettier/prettier': ['error'],

		// unused imports autoremove:
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
	overrides: [
		{
			files: ['*.jsx', '*.tsx'],
			rules: {
				'max-lines-per-function': 0,
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			// write this overriding option in your project to specify exact tsconfigRootDir:
			parserOptions: {
				project: './tsconfig.json',
			// 	tsconfigRootDir: __dirname,
			// 	sourceType: 'module',
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
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/indent': 0,
				'@typescript-eslint/naming-convention': 'warn',
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
	],
};
