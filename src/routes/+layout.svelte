<script lang="ts">
	import { version } from '$app/environment';
	import { page } from '$app/stores';
	import { PUBLIC_MODE } from '$env/static/public';
	import ogImageHome from '$lib/assets/images/og/default.jpg?url';

	import '../lib/styles/app.css';

	let { children } = $props();

	const DEFAULT_KEYWORDS = ['svelte', 'svelte-put', 'utility'];

	let meta = $derived.by(() => {
		const meta = $page.data.meta;
		const title = meta?.title ?? 'Quan sát | Observe';
		const description = meta?.description ?? 'Something is coming';
		const keywords = meta?.keywords ? [...DEFAULT_KEYWORDS, ...meta.keywords] : DEFAULT_KEYWORDS;
		const canonical = meta?.canonical ?? `${$page.url.origin}${$page.url.pathname}`;

		const rootRelativeOgImage = meta?.og?.image ?? ogImageHome;

		const og = {
			title: meta?.og?.title ?? title,
			description: meta?.og?.description ?? description,
			type: meta?.og?.type ?? 'website',
			url: meta?.og?.url ?? canonical,
			image: rootRelativeOgImage.startsWith('/')
				? `${$page.url.origin}${rootRelativeOgImage}`
				: rootRelativeOgImage,
			imageAlt: meta?.og?.imageAlt ?? title,
		};

		const twitter = {
			title: meta?.twitter?.title ?? og.title,
			description: meta?.twitter?.description ?? og.description,
			image: meta?.twitter?.image ?? og.image,
			imageAlt: meta?.twitter?.imageAlt ?? og.imageAlt,
			card: meta?.twitter?.card ?? 'summary_large_image',
			site: meta?.twitter?.site ?? '@quansatdev',
			creator: meta?.twitter?.creator ?? '@quansatdev',
		};

		return {
			title,
			description,
			keywords,
			canonical,
			og,
			twitter,
		};
	});
</script>

<svelte:head>
	<!-- SEO meta tags -->
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords.join(', ')} />

	<meta property="og:title" content={meta.og.title} />
	<meta property="og:description" content={meta.og.description} />
	<meta property="og:type" content={meta.og.type} />
	<meta property="og:image" content={meta.og.image} />
	<meta property="og:image:alt" content={meta.og.imageAlt} />
	<meta property="og:url" content={meta.og.url} />

	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:card" content={meta.twitter.card} />
	<meta name="twitter:image" content={meta.twitter.image} />
	<meta name="twitter:image:alt" content={meta.twitter.imageAlt} />
	<meta name="twitter:site" content={meta.twitter.site} />
	<meta name="twitter:creator" content={meta.twitter.creator} />

	<link href={meta.canonical} rel="canonical" />
	<link type="text/plain" rel="author" href="{$page.url.origin}/humans.txt" />

	<meta name="site:mode" content={PUBLIC_MODE} />
	<meta name="site:version" content={version} />
</svelte:head>

{@render children()}
