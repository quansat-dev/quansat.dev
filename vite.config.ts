import path from 'path';

import { inlineSvg } from '@svelte-put/inline-svg/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import postcssCustomMedia from 'postcss-custom-media';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		postcss: {
			plugins: [postcssCustomMedia()],
		},
	},
	plugins: [
		tailwindcss(),
		inlineSvg(
			[
				{
					directories: [path.resolve(__dirname, 'src/lib/assets/svg')],
					attributes: {
						height: '24',
						width: '24',
					},
				},
			],
			{
				inlineSrcAttributeName: 'inline-src',
				typedef: true,
			},
		),
		enhancedImages(),
		sveltekit(),
	],
	define: {
		__BUILD_TIMESTAMP__: JSON.stringify(Date.now().toString()),
	},
});

