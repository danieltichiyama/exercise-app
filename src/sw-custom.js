if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
  );
  // Global workbox
  if (workbox) {
    console.log("Workbox is loaded");
    // Disable logging
    workbox.setConfig({ debug: true });
    //`generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener("install", event => {
      self.skipWaiting();
      // window.location.reload();
    });
    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.

    workbox.precaching.precacheAndRoute([]);

    //precacheAndRoute creates an instance of PreCacheController under the hood and also creates it's own fetch eventlisteners for these routes (this the AndRoute bit);

    // Font caching
    workbox.routing.registerRoute(
      new RegExp("https://fonts.(?:.googlepis|gstatic).com/(.*)"),
      new workbox.strategies.CacheFirst({
        cacheName: "googleapis",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30
          })
        ]
      })
    );

    //catch all and send back to index.html (which has our App.js in it, the route typed in after the main url is then used by react-router-dom)
    workbox.routing.registerNavigationRoute(
      workbox.precaching.getCacheKeyForURL("/index.html"),
      {
        blacklist: [
          new RegExp("^/api/"), // Exclude URLs starting with /api/, as they're API calls (not navigation)
          new RegExp("/[^/]+\\.[^/]+$") // Exclude URLs containing a dot, as they're likely a resource in public/ and not a SPA route
        ]
      }
    );

    //next try to setup a registerNR for error handling and going to pages that aren't found in the cached page...
    // workbox.routing.registerRoute;

    // Image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );

    // JS, CSS, JSON caching
    workbox.routing.registerRoute(
      /\.(?:js|css|json)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 20 * 24 * 60 * 60 // 20 Days
          })
        ]
      })
    );
  } else {
    console.error("Workbox could not be loaded. No offline support.");
  }
}

//sets up background sync for GET and POST requests.
const bgSyncPlugin = new workbox.backgroundSync.Plugin("pending-requests", {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  /\/api\/.*/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  })
);

workbox.routing.registerRoute(
  /\/api\/.*/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  "POST"
);

workbox.routing.registerRoute(
  /\/api\/.*/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  "PUT"
);

workbox.routing.registerRoute(
  /\/api\/.*/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  "DELETE"
);

workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
workbox.routing.setCatchHandler(({ event }) => {
  console.log(event);
  // The FALLBACK_URL entries must be added to the cache ahead of time, either via runtime
  // or precaching.
  // If they are precached, then call workbox.precaching.getCacheKeyForURL(FALLBACK_URL)
  // to get the correct cache key to pass in to caches.match().
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case "document":
      return caches.match(workbox.precaching.getCacheKeyForURL("/404.html"));

    case "image":
      return caches.match(
        workbox.precaching.getCacheKeyForURL("/image404Icon.png")
      );

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
