'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"assets/AssetManifest.json": "4f53d745222975a86864b7005cf2d64d",
"assets/assets/banner.jpeg": "b8f63995b6edb289d6dc5f85c5d44182",
"assets/assets/react-logo.png": "9b9d25e7a707c8c13371755c6d2c171b",
"assets/assets/node.js-logo.png": "0c0fc66f9f089f7fd1a930c159fe9d42",
"assets/assets/javascript-logo.png": "89b9da620de6a1a6eeb0aca2ba293e87",
"assets/assets/flutter-logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/python-logo.png": "6ef3d1693a47513da461b4f1eb905015",
"assets/assets/dart-logo.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/bootstrap-logo.png": "ab2301a75447a4687877c87820ef979d",
"assets/assets/background2.jpg": "3acc82eee144283bdde31914de7c712b",
"assets/assets/profile.jpg": "50f43cd62679ba1851a3fd54b8c67273",
"assets/assets/roblox-studio-logo.png": "0301c827a99e49f41b58feb3af2663a6",
"assets/assets/background.jpg": "1cf5c0f92fbc062146e5b518c955efce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "48edc9a3aac9347d67e66d0769556532",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"manifest.json": "50dd526e88816e9eef287a43b1f34aa0",
"main.dart.js": "e343b84951a67d712bf153ba26a4ff82",
"404.html": "ce151020c19f945c5fc5e745e13761e4",
"version.json": "004f3e04ca78407e180f402760465fd8",
"index.html": "811c60e01441591f1a457f5bf1f853a4",
"/": "811c60e01441591f1a457f5bf1f853a4",
"icons/ms-icon-144x144.png": "d97e4022414fdf4015f789ea5658cc7b",
"icons/favicon-32x32.png": "9473a116524d3fcf0b3b56a67edf47c4",
"icons/ms-icon-150x150.png": "55bdeb9891ea43abc9f1f57f0d6aba5e",
"icons/android-icon-72x72.png": "433c3b71317cbd8048633f32e5559477",
"icons/favicon-16x16.png": "6c128d778e388999f0e664859883434a",
"icons/apple-icon-60x60.png": "6248c446e9c16f618833f09dd42d16ad",
"icons/ms-icon-310x310.png": "6bcf24c50a98c662efb1cd5f4c930d0f",
"icons/android-icon-96x96.png": "9de37c9ce9ee6e5eb27753a6a2fb2787",
"icons/android-icon-192x192.png": "fca0cc933a232ae6cb2e415ef9386ea7",
"icons/favicon-96x96.png": "650fae2e48587cefa3f3e7f649a856d6",
"icons/apple-icon-152x152.png": "8803025d93dfbe640a391849a362b2c1",
"icons/apple-icon.png": "5919d868465caef270088a853ef01f03",
"icons/android-icon-48x48.png": "54766228b7669cb53bb86e421d1d3e83",
"icons/apple-icon-57x57.png": "ebec6dd2e33b0a9ffd46025aab321cbc",
"icons/apple-icon-144x144.png": "d97e4022414fdf4015f789ea5658cc7b",
"icons/apple-icon-114x114.png": "9b4cbbec0735fd283aa3881f10695207",
"icons/apple-icon-76x76.png": "5ae18812a4b83fb78eace8ba79935aee",
"icons/favicon.ico": "7884f596bb01e42b0a0f5fd24a64998f",
"icons/apple-icon-180x180.png": "8047bc98c5a1454f29f8c4478a536689",
"icons/apple-icon-120x120.png": "b8bec90285d61b8c1170e41798b753c4",
"icons/android-icon-144x144.png": "a5e1e5f9870b3a3e74bbf2079791391e",
"icons/ms-icon-70x70.png": "75853f36d44005590fe358ecbef54442",
"icons/apple-icon-precomposed.png": "5919d868465caef270088a853ef01f03",
"icons/apple-icon-72x72.png": "78e8b3e59a16867c529ea7ec5f50130b",
"icons/android-icon-36x36.png": "0602f5fdd5b238c1684cd79d06a2c6eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
