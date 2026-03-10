/* ==========================================================
   ISOS COCO Super App - Service Worker v15.1
   MAINTENANCE: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

const CACHE_NAME = 'isos-coco-v15-1'; // نیا ورژن تاکہ پرانی فائلیں ختم ہوں
const assets = [
  './',
  'index.html',
  'style.css',
  'isos-brain.js',
  'logo.png',
  'manifest.json'
];

// 1. انسٹالیشن (فائلوں کو موبائل میموری میں محفوظ کرنا)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('ISOS: Files caching for offline/app mode...');
      return cache.addAll(assets);
    })
  );
});

// 2. ایکٹیویشن (پرانے ورژن v15.0 یا v14 کو ڈیلیٹ کرنا)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  console.log('ISOS: System Cleaned & Updated to v15.1');
});

// 3. فیچ ریکوسٹ (ایپ کی رفتار تیز کرنا)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
