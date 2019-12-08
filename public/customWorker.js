const CACHE_NAME = "pwa-task-manager";
const cacheWhitelist = [CACHE_NAME];
const urlsToCache = [
  "/",
  "/home",
  "/nutrition",
  "/community",
  "/authorization"
];
// Install a service worker
self.addEventListener("install", event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
// Cache and return requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
// Update a service worker
self.addEventListener("activate", event => {
  var cacheWhitelist = ["pwa-task-manager"];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
// Cache Management on SW update.
// In this particular example we want to wipe out any caches
// we aren't using anymore and only use the caches in our cacheWhitelist above
self.addEventListener("activate", function(event) {
  console.log("[Service Worker] V1 now ready to handle fetches");
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
