const config = {
	env: {
		browser: false,
		node: true,
		es2021: true,
	},
	ignorePatterns: ['dist'],
	extends: ['@frontendfull/eslint-config-shared'],
	parserOptions: {
		ecmaVersion: 2021,
		parser: '@typescript-eslint/parser',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [],
	rules: {
		'import/extensions': 0,
		'react/jsx-filename-extension': 0,
	},
}

module.exports = config
