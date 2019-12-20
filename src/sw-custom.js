if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
  );
  // Global workbox
  if (workbox) {
    console.log("Workbox is loaded");
    // Disable logging
    workbox.setConfig({ debug: false });
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
      workbox.strategies.cacheFirst({
        cacheName: "googleapis",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30
          })
        ]
      })
    );

    console.log("precaching", workbox.precaching);
    // //catch all and send back to index.html
    workbox.routing.registerNavigationRoute(
      workbox.precaching.getCacheKeyForURL("/index.html"),
      //not working...
      {
        blacklist: [
          new RegExp("^/api/"), // Exclude URLs starting with /api/, as they're API calls (not navigation)
          new RegExp("/[^/]+\\.[^/]+$") // Exclude URLs containing a dot, as they're likely a resource in public/ and not a SPA route
        ]
      }
    );

    //next try to setup a registerNR for error handling and going to pages that aren't found in the cached page...

    // Image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
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
      workbox.strategies.staleWhileRevalidate({
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
