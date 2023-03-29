const config = {
	env: {
		browser: false,
		node: true,
		es2021: true,
	},
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
		'react/jsx-filename-extension': 0,
	},
}

module.exports = config
