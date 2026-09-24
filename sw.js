const CACHE = 'quran-app-v6';
const STATIC = [
  './',
  './index.html',
  './manifest.json',
  './privacy.html',
  './assets/adhan.mp3',
  './assets/kaaba.jpg',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-maskable-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(STATIC)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function shouldCacheAPI(url, res) {
  const ct = res.headers.get('content-type') || '';
  return ct.includes('json');
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Ağdan gelen (API) istekler: network-first, çevrimdışı fallback cache
  if (url.origin !== location.origin) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok && shouldCacheAPI(url, res)) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Ağdan gelen (API) istekler: network-first, çevrimdışı fallback cache
  // sorgulu (güncelleme taraması vb.) istekler: cache'e YAZMA — baypas
  if (url.search) {
    e.respondWith(fetch(req));
    return;
  }

  const isHeavy = /\.(png|jpg|jpeg|svg|mp3|webp|ico)$/i.test(url.pathname);

  if (isHeavy) {
    // görsel/ses: önce cache (hız + kota), yoksa indir + cache'le
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }))
    );
    return;
  }

  // kabuk (html/js/json): HER ZAMAN taze içerik dene, çevrimdışıysa cache
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
  );
});
