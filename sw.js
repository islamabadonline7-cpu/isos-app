// ISOS Super App Service Worker
const CACHE_NAME = 'isos-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'logo.png'
];

// ایپ کو انسٹال کرنا
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('ISOS Cache Opened');
      return cache.addAll(urlsToCache);
    })
  );
});

// ڈیٹا فیچ کرنا (آف لائن سپورٹ)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});