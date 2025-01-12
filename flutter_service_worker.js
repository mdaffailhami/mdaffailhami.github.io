'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/background.jpg": "1cf5c0f92fbc062146e5b518c955efce",
"assets/assets/skill_logos/firebase-logo.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/skill_logos/tailwind-logo.png": "e9e6180044d8aed012aede9c6528f97f",
"assets/assets/skill_logos/numpy-logo.png": "9e3387ab57c2c008a6f36eb4d3d13db1",
"assets/assets/skill_logos/fastapi-logo.png": "707cb62dcad907d53f5ce04a9d9ade22",
"assets/assets/skill_logos/postgresql-logo.png": "bf2fb55c4f2a1952ff5135d01b8d049f",
"assets/assets/skill_logos/flutter-logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/skill_logos/mongodb-logo.png": "e7041a9ab3da20f92530cdd333c6ff33",
"assets/assets/skill_logos/linux-logo.png": "5ef7800c61a69e1f92f3d769038509c2",
"assets/assets/skill_logos/react-logo.png": "acfd32575d0b9b1dda23f9343b25521d",
"assets/assets/skill_logos/figma-logo.png": "0fcafffa83589b10af37e916216e89f1",
"assets/assets/skill_logos/dart-logo.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/skill_logos/polars-logo.png": "7418767dd420ba95457030aa4ee136e5",
"assets/assets/skill_logos/python-logo.png": "6ef3d1693a47513da461b4f1eb905015",
"assets/assets/skill_logos/plotly-logo.png": "508112e16382aa0610c94cb333774454",
"assets/assets/skill_logos/vega-altair-logo.png": "66d5f4abbb6c4befa9f1eb9974f83cc4",
"assets/assets/skill_logos/github-logo.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/skill_logos/nodejs-logo.png": "a41475ff79a461158d72d9fe63e537d5",
"assets/assets/skill_logos/pandas-logo.png": "4b9d36fd2e99eb818cd90aa3edb7ab13",
"assets/assets/banner.jpeg": "b8f63995b6edb289d6dc5f85c5d44182",
"assets/assets/project_logos/nasi-igut-han-logo.jpg": "089ac0e5ade98f6f7704c468bd446a9e",
"assets/assets/project_logos/mdi-todo-logo.png": "fc83359f0d6a9b446265e70feaaf5f5f",
"assets/assets/project_logos/typing-practice-logo.png": "be85ec94e4eaa37025ac8debc52604fd",
"assets/assets/project_logos/customer-data-analysis-logo.png": "50d6c8c4b4fae6d7e0c8a738ebbcfb1b",
"assets/assets/project_logos/roller-coaster-data-analysis-logo.png": "133b81ece26a0f56c51eacbf8a66f0a1",
"assets/assets/project_logos/glovikulator-logo.jpg": "f4fa66b9bb4d4063e0230b1fd410d4c7",
"assets/assets/project_logos/marketku-logo.png": "692dbbd4eb0c818b3d393180f3c04340",
"assets/assets/project_logos/data-science-speedrun-journey-logo.png": "845b4cb67e5659f0f6e60a376421c182",
"assets/assets/project_logos/cimsa-ulm-logo-temp.jpeg": "12b2c4ab9bd4df77562eeae97918a207",
"assets/assets/project_logos/king-county-homesales-analysis-logo.png": "73128334fd604ca016cb38bb9b29275d",
"assets/assets/project_logos/gasku-logo.png": "562279aba587157f9bc615d5d2e1c6c2",
"assets/assets/project_logos/mdi-blog-logo.png": "774b0271fedc28097d90f4ecf9c6a119",
"assets/assets/profile.png": "aea4c455429e10ed765c4f503f936ec0",
"assets/NOTICES": "edd3093c802696e8d43a84c00940ded8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/AssetManifest.json": "a4437725addb5ac7d2f55ae7375bcad4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "791da408abf178b61940ee74818d439f",
"assets/AssetManifest.bin.json": "99801adc7afee8d95cfb4d3b6297d2f2",
"assets/AssetManifest.bin": "cc8fea5ff5bd91898b544126c86faae5",
"googleea33646a6b2898d6.html": "91db7040b9ec4bdda68cc1a431e76e0b",
"browserconfig.xml": "a0dea3417d07f1c91fcb63c23d1cdd4b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f7122ebba58d39fd617774b2010e0034",
"icons/apple-icon-180x180.png": "d8ae786658c069c6493ff0af0ba41c4a",
"icons/favicon-16x16.png": "d4dbdeb348211190d4c04dffb32ca7cd",
"icons/ms-icon-144x144.png": "f52c7167ceb75bc72cd3f5c15f182f52",
"icons/android-icon-72x72.png": "88c840610f5a98f4e4e5f333717745ad",
"icons/favicon-96x96.png": "35b5bfe644563b933483c7fb9852face",
"icons/ms-icon-70x70.png": "9fa934d44f16bfa7670f024c4422de28",
"icons/apple-icon-114x114.png": "a45fb2461c680ac4ced0461ef2c0b9b5",
"icons/apple-icon-152x152.png": "e37c27914476e3afdf5432a4ba41c6fe",
"icons/favicon-32x32.png": "eaa2a24d541a4a1054f3299ee2bbf94b",
"icons/android-icon-36x36.png": "ca94fc40c7166af8e280cddcd678c899",
"icons/ms-icon-150x150.png": "1d93555ecbea07214c062457ab66bd8a",
"icons/ms-icon-310x310.png": "6c7f80ecfcda71fefca6d7e67355f5de",
"icons/apple-icon.png": "3fda3951d9317f85464f18d3c269bf07",
"icons/apple-icon-144x144.png": "5f33ac83fa64699c052167be687388d6",
"icons/android-icon-48x48.png": "bc458a99ed2cdbdafb453dc22d8610bf",
"icons/apple-icon-60x60.png": "02a941ce5337446e36910a1c64536401",
"icons/apple-icon-120x120.png": "dd7312f4f0b9a1913c0f080051ea5b75",
"icons/apple-icon-57x57.png": "eba98161b725ea278e3f1762b2e3ffa6",
"icons/apple-icon-precomposed.png": "cb4a330803180fadb9975a2a0c00d0e1",
"icons/apple-icon-76x76.png": "3fcd2cd1afa0b7d30cb2d352e9c517a2",
"icons/favicon.ico": "6d1ce6884a9c0840b19dc83cb49a0f17",
"icons/android-icon-144x144.png": "5f33ac83fa64699c052167be687388d6",
"icons/android-icon-192x192.png": "a0c54482494ce8d35075bffcfa5c78c4",
"icons/android-icon-96x96.png": "6975d7690c1424ef7486693462c85709",
"icons/apple-icon-72x72.png": "88c840610f5a98f4e4e5f333717745ad",
"version.json": "a87d214839c1dd826e38d6c0c12eecb6",
"index.html": "4f8670e67dae861caf92086ed007bbba",
"/": "4f8670e67dae861caf92086ed007bbba",
"main.dart.js": "92e0caf31fa6f8e3165e3dfa7fe6281d",
"404.html": "ce151020c19f945c5fc5e745e13761e4",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"manifest.json": "50dd526e88816e9eef287a43b1f34aa0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
