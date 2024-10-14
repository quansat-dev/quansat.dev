import vnphanquang from '@vnphanquang/eslint-config';
import svelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';

const svelteConfig = [
	...svelte.configs['flat/recommended'],
	...svelte.configs['flat/prettier'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
];

export default [
	...vnphanquang,
	...svelteConfig,
	{
		ignores: [
			'**/build/',
			'**/.svelte-kit/',
			'**/dist/',
			'**/coverage/',
			'**/examples/**',
			'**/*.md.svelte',
			'**/types/',
			'**/pagefind/**',
		],
	},
];

