module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	semi: true,
	printWidth: 100,
	plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
