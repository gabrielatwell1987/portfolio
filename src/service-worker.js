// import { build, files, version } from '$service-worker';

// const CACHE = `cache-${version}`;
// const ASSETS = [...build, ...files];

// // install service worker
// self.addEventListener('install', (event) => {
// 	async function addFilesToCache() {
// 		const cache = await caches.open(CACHE);
// 		await cache.addAll(ASSETS);
// 	}

// 	event.waitUntil(addFilesToCache());
// });

// // activate service worker
// self.addEventListener('activate', (event) => {
// 	async function deleteOldCaches() {
// 		for (const key of await caches.keys()) {
// 			if (key !== CACHE) {
// 				await caches.delete(key);
// 			}
// 		}
// 	}

// 	event.waitUntil(deleteOldCaches());
// });

// // listen for fetch events
// self.addEventListener('fetch', (event) => {
// 	if (event.request.method !== 'GET') return;

// 	async function respond() {
// 		const url = new URL(event.request.url);
// 		const cache = await caches.open(CACHE);

// 		// serve build files from cache
// 		if (ASSETS.includes(url.pathname)) {
// 			const cachedResponse = await cache.match(url.pathname);

// 			if (cachedResponse) {
// 				return cachedResponse;
// 			}
// 		}

// 		// try network first
// 		try {
// 			const response = await fetch(event.request);
// 			const isNotExtension = url.protocol === 'http:';
// 			const isSuccess = response.status === 200;

// 			if (isNotExtension && isSuccess) {
// 				cache.put(event.request, response.clone());
// 			}

// 			return response;
// 		} catch {
// 			// cache fall back
// 			const cachedResponse = await cache.match(url.pathname);

// 			if (cachedResponse) {
// 				return cachedResponse;
// 			}
// 		}

// 		return new Response('Not found', { status: 404 });
// 	}

// 	event.respondWith(respond());
// });

// self.addEventListener('message', (event) => {
// 	if (event.data && event.data.type === 'SKIP_WAITING') {
// 		self.skipWaiting();
// 	}
// });

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker
// 		.register('/service-worker.js')
// 		.then(() => console.log('Service Worker registered'))
// 		.catch((err) => console.error('Service Worker registration failed:', err));
// }

import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const VIDEO_CACHE = `video-cache-${version}`;
const ASSETS = [...build, ...files];

// List of video files to cache
const VIDEO_ASSETS = ['/videos/skully.webm', '/videos/skully.mp4'];

// Install service worker
self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);

		// Cache video files separately
		const videoCache = await caches.open(VIDEO_CACHE);
		await videoCache.addAll(VIDEO_ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

// Activate service worker
self.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE && key !== VIDEO_CACHE) {
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());
});

// Listen for fetch events
self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);

	async function respond() {
		const cache = await caches.open(CACHE);
		const videoCache = await caches.open(VIDEO_CACHE);

		// Serve video files from video cache
		if (VIDEO_ASSETS.some((video) => url.pathname.endsWith(video))) {
			const cachedResponse = await videoCache.match(event.request);
			if (cachedResponse) {
				return cachedResponse;
			}

			// Fetch video from network and cache it
			try {
				const response = await fetch(event.request);
				if (response.ok) {
					videoCache.put(event.request, response.clone());
				}
				return response;
			} catch {
				return new Response('Video not available', { status: 404 });
			}
		}

		// Serve build files from cache
		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		// Try network first
		try {
			const response = await fetch(event.request);
			const isNotExtension = url.protocol === 'http:';
			const isSuccess = response.status === 200;

			if (isNotExtension && isSuccess) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			// Cache fallback
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		return new Response('Not found', { status: 404 });
	}

	event.respondWith(respond());
});

// Listen for messages (e.g., skip waiting)
self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/service-worker.js')
		.then(() => console.log('Service Worker registered'))
		.catch((err) => console.error('Service Worker registration failed:', err));
}
