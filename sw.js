const CACHE_NAME = 'apartamento-604-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalar Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Error al cachear archivos:', err);
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve el archivo cacheado o hace una petición de red
        return response || fetch(event.request);
      })
      .catch(() => {
        // Si falla, devuelve la página principal
        return caches.match('./index.html');
      })
  );
});
