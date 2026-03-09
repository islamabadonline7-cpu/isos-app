/* ==========================================================
   ISOS COCO Super App - Service Worker v15.0 (Final Sync)
   DEVELOPER: SHAHZAD HUSSAIN TAHIR (ISOS)
   ========================================================== */

const CACHE_NAME = 'coco-isos-cache-v15'; // نیا ورژن تاکہ پرانی فائلیں صاف ہوں
const urlsToCache = [
  './',
  'index.html',
  'style.css',
  'isos-brain.js',
  'logo.png',
  'manifest.json'
];

// 1. انسٹالیشن (تمام فائلوں کو کیشے میں محفوظ کرنا)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('COCO v15: سسٹم فائلیں محفوظ ہو رہی ہیں...');
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. ایکٹیویشن (پرانے ورژن v11، v14 وغیرہ کو ختم کرنا)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('پرانا ورژن صاف کر دیا گیا ہے۔');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. فیچ لاجک (پہلے نیٹ ورک سے چیک کرے گا تاکہ تازہ ترین ڈیٹا ملے)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
