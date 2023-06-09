module.exports = {
	useTabs: false,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: ['prettier-plugin-svelte', require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	tailwindConfig: './tailwind.config.cjs'
};
