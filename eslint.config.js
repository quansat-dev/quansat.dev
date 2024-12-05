import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import vnphanquang from '@vnphanquang/eslint-config';
import svelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';
const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

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

export default tseslint.config(includeIgnoreFile(gitignorePath), ...vnphanquang, ...svelteConfig);
