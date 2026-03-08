/* ==========================================================
   ISOS COCO Super App - Service Worker v11.0 (Live Voice)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

const CACHE_NAME = 'coco-live-cache-v11';
const urlsToCache = [
  './',
  'index.html',
  'style.css',
  'isos-brain.js',
  'isos-menu.js',
  'logo.png',
  'manifest.json'
];

// 1. ایپ کی انسٹالیشن اور فائلیں محفوظ کرنا
self.addEventListener('install', event => {
  console.log('کوکو لائیو انجن انسٹال ہو رہا ہے...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// 2. پرانے ڈیٹا کی صفائی اور اپ ڈیٹ
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('پرانا ورژن صاف کیا جا رہا ہے...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. اسمارٹ فیچنگ (نیٹ ورک اور آف لائن توازن)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});