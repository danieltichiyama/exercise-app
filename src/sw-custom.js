if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
  );
  // Global workbox
  if (workbox) {
    console.log("Workbox is loaded");
    // Disable logging, conversely, this setting is automatically turned off for production builds
    // workbox.setConfig({ debug: true });

    const { precaching, strategies, backgroundSync, routing } = workbox;

    //`generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener("install", event => {
      self.skipWaiting();
      window.location.reload();
    });
    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.

    workbox.precaching.precacheAndRoute([]);

    //precacheAndRoute creates an instance of PrecacheController under the hood and also creates it's own fetch eventlisteners for these routes (this the AndRoute bit);

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

    //routes all inputs in address bar back to index.html and let's react-router-dom handle the url
    workbox.routing.registerNavigationRoute(
      workbox.precaching.getCacheKeyForURL("/index.html"),
      {
        blacklist: [
          new RegExp("^/api/"), // Exclude URLs starting with /api/, as they're API calls (not navigation)
          new RegExp("/[^/]+\\.[^/]+$") // Exclude URLs containing a dot, as they're likely a resource in public/ and not a SPA route
        ]
      }
    );

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

    // This "catch" handler is triggered when any of the other routes fail to generate a response.
    workbox.routing.setCatchHandler(({ event }) => {
      console.log(event);
      switch (event.request.destination) {
        case "document":
          return caches.match(
            workbox.precaching.getCacheKeyForURL("/404.html")
          );

        case "image":
          return caches.match(
            workbox.precaching.getCacheKeyForURL("/image404Icon.png")
          );

        default:
          // If we don't have a fallback, just return an error response.
          return Response.error();
      }
    });
  } else {
    console.error("Workbox could not be loaded. No offline support.");
  }
}
