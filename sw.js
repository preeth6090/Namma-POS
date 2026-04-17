const CACHE_NAME = 'nammapos-v9';
const ASSETS = [
  'index.html',
  'manifest.json',
  'assets_offline/tailwind.js',
  'assets_offline/lucide.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
