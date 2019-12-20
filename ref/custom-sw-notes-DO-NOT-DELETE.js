importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

//2

self.addEventListener("install", event => {
  event.waitUntil(
    //the thing passed into the waitUntil () will cause the install to hold until that thing is finished, can be used to grab all necessary cached pages on first download of app;
    caches.open("static-v1").then(cache =>
      //saves things to cacheAPI
      cache.addAll([
        //array of files to add, from where?
      ])
    )
  );
});

//3

const expectedCaches = [
  //an array of caches that you expect to be there and so your activate eventListener will skip over anything in this array
];

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          //maps through all the caches and checks it against the strings saved in expectedCaches
          if (!expectedCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

//1  fetch

self.addEventListener("fetch", event => {
  //effects all fetch events being called to the network, will need to adjust for xml requests
  const url = new URL(event.request.url);

  if (url.origin == "some url") {
    event.respondWith(
      handleNetworkRequestForSomethingThatIsInTheCacheButMightNeedANewVersionFromWeb(
        event
      )
    );
    return;
  }

  if ((url.origin == location.origin) & (url.pathname == "/")) {
    //called if the request url is for the app home, loading the app shell
    event.respondWith(caches.match("app shell"));
    return;
  }

  event.respondWith(
    //called if any other fetch req and responds with cached content or a fetch to the network
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});

//4  indexDB
//npm idb, other options (dexy [spelling?], pouchDB)
//creating a database using idb
//if you get something like
// { "id": 1,
// "user_id": 1,
// "date": new Date(),
// "body": "blah blah blah",
// "keyInJSON": "this is another thing in JSON obj"
// }

const dbPromise = idb.open("databaseName", 1, db => {
  const table = db.createObjectStore("tableName", {
    //used to define the primary key ?
    keyPath: "id"
  });

  table.createIndex("newIndex", "keyInJSON");
});

function onNewJSONObj(json) {
  dbPromise.then(db => {
    db.transaction("databaseName", "readwrite")
      .objectStore("databaseName")
      .add(json);
  });
}

//staleWhileWaiting code
function handleNetworkRequestForSomethingThatIsInTheCacheButMightNeedANewVersionFromWeb(
  event
) {
  const networkFetch = fetch(event.request);
  //event.request is the request from the fetch eventListener;

  event.waitUntil(
    networkFetch.then(response => {
      const responseClone = response.clone(); //you want to clone it because you might need to use it twice, normally responses are only able to be used once because they are saved in RAM

      caches
        .open("cacheOfThingYouWantToPersist")
        .then(cache => cache.put(event.request, responseClone));
    })
  );

  return caches.match(event.request).then(response => response || networkFetch);
}

//5 background sync
//on the page:
// function someFunction(someParam) {
//   runAnotherFunction(someParam)
//     .then(() => navigator.serviceWorker.ready)
//     .then(reg => reg.sync.register("someNameForTheStore"))
//     .catch(() => aFunctionThatSendsDataToServer(someParam));
// }
//end

self.addEventListener("sync", event => {
  if (event.tage == "someNameForTheStore") {
    event.waitUntil(
      someFunction().then(response => {
        return aFunctionThatSendsDataToServer(response).then(() =>
          aFunctionThatRemovesTheDataFromAStore(response)
        );
      })
    );
  }
});

//example of workbox.routing.registerRoute, the first value given to registerRoute is the match callback, which returns a boolean (in this case the RegEx will evaluate to true or false, this value gets pased to the second argument, which is the handler callback)
// workbox.routing.registerRoute(/(\/$|\/\?.*$)/, workbox.strategies.networkFirst({
//     cacheName: 'pages-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxAgeSeconds: 1 * 24 * 60 * 60 // 1 Days
//       })
//     ]
//   }));

//old code from build/service-worker.js
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  //getCacheKeyForURL returns the key in the cache that represents that URL.  (the one with the version key in it);
  {
    blacklist: [/^\/_/, /\/[^\/?]+\.[^\/]+$/]
  }
);
