/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];
const CACHEABLE_ASSETS = ASSETS.filter(
	(asset) => !asset.endsWith('/.gitkeep') && !asset.endsWith('/.DS_Store')
);

const sw = self as unknown as ServiceWorkerGlobalScope;

// Install service worker
sw.addEventListener('install', (event: ExtendableEvent) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await Promise.allSettled(
			CACHEABLE_ASSETS.map(async (asset) => {
				try {
					await cache.add(asset);
				} catch (error) {
					console.warn('[service-worker] failed to cache asset', asset, error);
				}
			})
		);
	}

	event.waitUntil(addFilesToCache());
});

// Activate service worker
sw.addEventListener('activate', (event: ExtendableEvent) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());
});

// fetch events
sw.addEventListener('fetch', (event: FetchEvent) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);
	const isCrossOrigin = url.origin !== sw.location.origin;
	const isCloudflareAnalytics =
		url.hostname.endsWith('cloudflareinsights.com') ||
		url.pathname.includes('beacon.min.js') ||
		url.pathname.startsWith('/cdn-cgi/');

	if (isCrossOrigin || isCloudflareAnalytics) {
		return;
	}

	async function respond(): Promise<Response> {
		const cache = await caches.open(CACHE);

		// Serve build files from cache
		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(event.request);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		// Try network first
		try {
			const response = await fetch(event.request);
			const isHttp = url.protocol === 'http:' || url.protocol === 'https:';
			const isSuccess = response.status === 200;

			if (isHttp && isSuccess) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			// Cache fallback
			const cachedResponse = await cache.match(event.request);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		return new Response('Not found', { status: 404 });
	}

	event.respondWith(respond());
});

// Listen for messages (e.g., skip waiting)
sw.addEventListener('message', (event: ExtendableMessageEvent) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		sw.skipWaiting();
	}
});
