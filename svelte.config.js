import child_process from 'child_process';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import externalLink from '@svelte-put/preprocess-external-link';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
const commitHash = child_process.execSync('git rev-parse --short HEAD').toString().trim();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [externalLink(['quansat.dev']), vitePreprocess()],
	kit: {
		prerender: {
			origin: 'https://quansat.dev',
		},
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>'],
			},
			platformProxy: {
				configPath: path.resolve(__dirname, './wrangler.toml'),
			},
		}),
		version: {
			name: `${pkg.version} (#${commitHash}@${Date.now()})`,
		},
		alias: {
			$routes: path.resolve(__dirname, 'src/routes'),
		},
	},
};

export default config;
