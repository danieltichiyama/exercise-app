console.log("custom-service-worker.js running");

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin("bgSync", {
  maxRetentionTime: 24 * 60
});

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  "http://localhost:3000",
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  "http://localhost:8080/api/users/1",
  new workbox.strategies.NetworkFirst({
    plugins: [bgSyncPlugin]
  }),
  "GET"
);

workbox.routing.registerRoute(
  "http://localhost:8080/api/foods_meals_users",
  new workbox.strategies.NetworkFirst({
    plugins: [bgSyncPlugin]
  }),
  "POST"
);
