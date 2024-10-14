declare global {
	module '*&imagetools' {
		const src: string;
		export default src;
	}

	namespace App {
		interface Error {
			code: string;
			message: string;
		}
		// interface Locals {}
		interface PageData {
			meta?: {
				title?: string;
				description?: string;
				keywords?: string[];
				canonical?: string;
				og?: {
					title?: string;
					description?: string;
					type?: 'website' | 'article' | 'profile';
					image?: string;
					imageAlt?: string;
					url?: string;
				};
				twitter?: {
					title?: string;
					description?: string;
					card?: string;
					image?: string;
					imageAlt?: string;
					site?: string;
					creator?: string;
				};
			};
		}
		// interface PageState {}
		interface Platform {
			// env?: {
			// 	D1: import('@cloudflare/workers-types').D1Database;
			// };
			context: {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				waitUntil(promise: Promise<any>): void;
			};
			caches: import('@cloudflare/workers-types').CacheStorage & {
				default: import('@cloudflare/workers-types').Cache;
			};
			cf: import('@cloudflare/workers-types').CfProperties;
		}
	}
}

export {};

