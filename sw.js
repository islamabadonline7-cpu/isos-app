/* ==========================================================
   ISOS COCO Super App - Service Worker v14.0 (Live Voice)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

const CACHE_NAME = 'coco-live-cache-v14'; // ورژن اپ ڈیٹ کر دیا گیا ہے
const urlsToCache = [
  './',
  'index.html',
  'style.css',
  'isos-brain.js',
  'logo.png',
  'manifest.json'
];

// 1. انسٹالیشن (فائلیں محفوظ کرنا)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('کوکو انجن v14: فائلیں محفوظ ہو رہی ہیں...');
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. ایکٹیویشن (پرانے ورژن کی صفائی)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('پرانا ورژن v11/v13 صاف کیا جا رہا ہے...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. نیٹ ورک فرسٹ فیچنگ (تازہ ترین ڈیٹا کے لیے)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
