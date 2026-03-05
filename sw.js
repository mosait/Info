const CACHE_NAME = 'izs-info-v1';

// Every file the kiosk needs — precache all on install
const PRECACHE_URLS = [
  './',
  './index.html',
  './language.html',
  './portal.html',
  './shared.css',
  './assets/IZS_Logo_White.png',
  './assets/IZS_Logo_Black.png',
  './assets/QR_Android.png',
  './assets/QR_Apple.png',
  './assets/QR_Nikah.png',
  './assets/QR_Telegram.png',
  './assets/QR_Whatsapp_Channel.png'
];

// Install: precache everything immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches, take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first — everything is served from cache instantly
// Falls back to network only if somehow not cached
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
