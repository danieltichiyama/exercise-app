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

    workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "81dcf3aeaf2414287c7079e8b3cfebe5"
  },
  {
    "url": "appIcon192.png",
    "revision": "a118c0b756b99ad6d71e6be721e9ba08"
  },
  {
    "url": "appIcon512.png",
    "revision": "c68401df9d5719fa1e85b04b1d44c024"
  },
  {
    "url": "image404Icon.png",
    "revision": "79cae803d44f3674cf3744e90603f351"
  },
  {
    "url": "index.html",
    "revision": "9d672629fc39d2d4965b8c2a00d8950a"
  },
  {
    "url": "precache-manifest.379e8769a5b9321faf5a5cfc39b85adf.js",
    "revision": "379e8769a5b9321faf5a5cfc39b85adf"
  },
  {
    "url": "service-worker.js",
    "revision": "961cc1af38fa0c86e3f5f345c772e075"
  },
  {
    "url": "static/css/main.70a8b51d.chunk.css",
    "revision": "1e82686f383c3ed65072223f972dead8"
  },
  {
    "url": "static/js/2.371dde13.chunk.js",
    "revision": "7a0cb37cd03311f6bdc6e452cd77fd60"
  },
  {
    "url": "static/js/main.6fc1ac20.chunk.js",
    "revision": "ae57babe874d8beded950ac92b00a932"
  },
  {
    "url": "static/js/runtime-main.5f963305.js",
    "revision": "52adb24782ac1aaaf1b08c094cc656d7"
  },
  {
    "url": "static/media/addBreakfast.68f81bbc.png",
    "revision": "68f81bbce628d9955da7728805b5e22d"
  },
  {
    "url": "static/media/addDinner.ca844adc.png",
    "revision": "ca844adcef5bbe97e3a8e01d58d207a3"
  },
  {
    "url": "static/media/addLunch.67903822.png",
    "revision": "67903822a70ab41b5da154d51c631306"
  },
  {
    "url": "static/media/addSnack.28c15811.png",
    "revision": "28c15811bdfa25406681cc05ac6f1f1f"
  },
  {
    "url": "static/media/community.e0e9c01b.png",
    "revision": "e0e9c01b7a691f6bc7d0b3774c0ddb5a"
  },
  {
    "url": "static/media/home.7ec33355.png",
    "revision": "7ec333553d9e2e613802019e819ac404"
  },
  {
    "url": "static/media/nutrition.6b5b7d83.png",
    "revision": "6b5b7d83fb24f0863366fd5a333151e7"
  },
  {
    "url": "static/media/register.ecb3542f.png",
    "revision": "ecb3542feb0904463aed77397eff69da"
  },
  {
    "url": "static/media/user_profile.766adeae.png",
    "revision": "766adeae6152f4ae78b13d6b75b0d20b"
  },
  {
    "url": "static/media/workout.fd30f3c6.png",
    "revision": "fd30f3c6d55177eccc1762e81eafe2ab"
  }
]);

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
