'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"browserconfig.xml": "a0dea3417d07f1c91fcb63c23d1cdd4b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "79d12d6cc3c2bdc7e08af21fe7f81acd",
"assets/assets/mdi-blog-logo.jpg": "5125363e303e027da714a19804cc568b",
"assets/assets/banner.jpeg": "b8f63995b6edb289d6dc5f85c5d44182",
"assets/assets/react-logo.png": "9b9d25e7a707c8c13371755c6d2c171b",
"assets/assets/node.js-logo.png": "0c0fc66f9f089f7fd1a930c159fe9d42",
"assets/assets/javascript-logo.png": "89b9da620de6a1a6eeb0aca2ba293e87",
"assets/assets/profile.png": "1d17ed4b172aa492c71a0827fceda0b3",
"assets/assets/flutter-logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/figma-logo.png": "0fcafffa83589b10af37e916216e89f1",
"assets/assets/profile-full.jpg": "bf1c8f7809411ea95e78508666545517",
"assets/assets/python-logo.png": "6ef3d1693a47513da461b4f1eb905015",
"assets/assets/github-logo.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/dart-logo.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/bootstrap-logo.png": "ab2301a75447a4687877c87820ef979d",
"assets/assets/express-logo.png": "e812bec137af36c10dfe4b944efa000b",
"assets/assets/roblox-studio-logo.png": "0301c827a99e49f41b58feb3af2663a6",
"assets/assets/firebase-logo.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/mongodb-logo.png": "e7041a9ab3da20f92530cdd333c6ff33",
"assets/assets/flask-logo.png": "c2ac1bb46f0c073655b6054bfb476aa3",
"assets/assets/background.jpg": "1cf5c0f92fbc062146e5b518c955efce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "e2eace076a4343221c3ea0e7854c53be",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "0a380c4dc1ccb78fa786ed920294065e",
"assets/fonts/MaterialIcons-Regular.otf": "791da408abf178b61940ee74818d439f",
"assets/AssetManifest.bin.json": "a7b4118eb5de4b9cc7e0df53a86e1088",
"manifest.json": "50dd526e88816e9eef287a43b1f34aa0",
"main.dart.js": "f6a37ec00c1351325a90f11b8d9ce1b8",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"404.html": "ce151020c19f945c5fc5e745e13761e4",
"version.json": "68890e813f1a5e0255f587df8388a431",
"index.html": "f9c57eb46a52a93a08a826267b5fab88",
"/": "f9c57eb46a52a93a08a826267b5fab88",
"icons/ms-icon-144x144.png": "1c51f4bf88d3a3ef06d399c4f81f416b",
"icons/favicon-32x32.png": "ae9a78c2984a8eebcfcee4df10ec8ae4",
"icons/ms-icon-150x150.png": "1f3deaab3272e694f00e91eb855bb60d",
"icons/android-icon-72x72.png": "7fc62596b13a42dd32f05dcbe20864a2",
"icons/favicon-16x16.png": "c336e9426599c00653b2963a4407aa01",
"icons/apple-icon-60x60.png": "af31eaa6c771dd8bc25d3e4cc04d9b36",
"icons/ms-icon-310x310.png": "0c461fd8e53e7d9d19c448d1dd9e6c63",
"icons/android-icon-96x96.png": "94cbca430fa04af8209c5dfe3a19d79c",
"icons/android-icon-192x192.png": "e61601defb5a22538d1a930104a4b682",
"icons/favicon-96x96.png": "94cbca430fa04af8209c5dfe3a19d79c",
"icons/apple-icon-152x152.png": "3af96d1264781d28e84bc3210584c965",
"icons/apple-icon.png": "0bf75d798ba35bfa9c0174011d1c0597",
"icons/android-icon-48x48.png": "2350df3843fbc2d2b3240711911c95d5",
"icons/apple-icon-57x57.png": "245285d1a9dc0cc1477c3b9803f4c6b2",
"icons/apple-icon-144x144.png": "1c51f4bf88d3a3ef06d399c4f81f416b",
"icons/apple-icon-114x114.png": "196a134513c6212df8ebc9f875b63c70",
"icons/apple-icon-76x76.png": "0aa11a63d974f84a965c33acfcfd2344",
"icons/favicon.ico": "86c77482ae762ba631f4dc7f4c8ba498",
"icons/apple-icon-180x180.png": "c9edaf6883e806cc1be3d2d1c3beb13b",
"icons/apple-icon-120x120.png": "35a554b7429b344e6a6c6e3e1ca93972",
"icons/android-icon-144x144.png": "1c51f4bf88d3a3ef06d399c4f81f416b",
"icons/ms-icon-70x70.png": "1d1c4b5b2bfc29620266d2b4150121d6",
"icons/apple-icon-precomposed.png": "0bf75d798ba35bfa9c0174011d1c0597",
"icons/apple-icon-72x72.png": "7fc62596b13a42dd32f05dcbe20864a2",
"icons/android-icon-36x36.png": "122ba77f3ea840ec5e009c001b66d7c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
