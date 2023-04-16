'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e441657d4d830aaf3249a7c16e87f64d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/images/book.jpg": "cea2e6a886db00bbff544a80a97efaea",
"assets/lib/images/celebrity/Bill%2520Gates.webp": "cbe24529cbef29d4a04c4917e685e15c",
"assets/lib/images/celebrity/Book%2520Shelf.jpg": "0b49df5da8e29c1b05b407692d9624c7",
"assets/lib/images/celebrity/Jeff%2520Bezos.webp": "1682e78a3db2e96764ae2c9a51e0af71",
"assets/lib/images/celebrity/Larry%2520Ellison.webp": "9c611f8645d85fb47373c112cc7d4b95",
"assets/lib/images/celebrity/Mark%2520Zuckerberg.webp": "dfaa3bbae2b630ada249e5ab2956b208",
"assets/lib/images/celebrity/Michael%2520Bloomberg.webp": "a24fc47a04fafaac222c04be263d47a9",
"assets/lib/images/celebrity/Muhtar%2520Kent.webp": "72e823566e9e5c3cc656136da725ee93",
"assets/lib/images/celebrity/Oprah%2520Winfrey.webp": "417ad9e886432b534c8e3485002347c6",
"assets/lib/images/celebrity/Richard%2520Branson.webp": "53d7c2df610a7f9e7bb5ea08b1dfb9d5",
"assets/lib/images/celebrity/Tim%2520Cook.webp": "97f901ba3c11e377767f022a8faa6c90",
"assets/lib/images/celebrity/Warren%2520Buffett.webp": "d8fb4f50055faf0436f3f11167b03931",
"assets/lib/images/pop_books/Pop001.jpg": "bbee1179ea6a8daa0b823d7bb7adf252",
"assets/lib/images/pop_books/Pop002.jpg": "9b2387fe28dc26bca71149d8fa7f839d",
"assets/lib/images/pop_books/Pop003.jpg": "8c1f341437207486b47e9d3e8156c1d6",
"assets/lib/images/pop_books/Pop004.jpg": "4568f09a065fad2aedf1974635d99039",
"assets/lib/images/pop_books/Pop005.jpg": "86d2833754620dc46bd638c1722b8588",
"assets/lib/images/pop_books/Pop006.jpg": "770e68c1429bd8bd5eaeaad7b0e41530",
"assets/lib/images/pop_books/Pop007.jpg": "2627ce68014e487ff844b3b119f3a642",
"assets/lib/images/pop_books/Pop008.jpg": "1aef22844676c1584229eecc3961c174",
"assets/lib/images/pop_books/Pop009.jpg": "c7f3a1f559b42ef0dce77cce5e5f4009",
"assets/lib/images/pop_books/Pop010.jpg": "2e30fd61aff3ed0363911f0d9485b571",
"assets/lib/images/pop_books/Pop011.jpg": "7227123c581325367ecade442406c565",
"assets/lib/images/pop_books/Pop012.jpg": "cb7ab581eb36b446fb3afcbe86bc42a6",
"assets/lib/images/tech_books/C001.JPG": "a3a56233d8caf965c635af8d0273dea9",
"assets/lib/images/tech_books/Ceph001.jpg": "5e51629ae7d9a84bf192ad971d91904c",
"assets/lib/images/tech_books/Compile001.jpg": "7a3fb45905e20d8170a6ee837fec37b4",
"assets/lib/images/tech_books/Compile002.jpg": "a6bc7f6b8d8b7613710e0f500bd3327a",
"assets/lib/images/tech_books/Compile003.jpg": "098eea2d93b1c20c664e848094ec604f",
"assets/lib/images/tech_books/Computer001.jpg": "6dd50532e66a04e82511214230c35894",
"assets/lib/images/tech_books/Computer002.jpg": "0f59510991170fd8f842479019757892",
"assets/lib/images/tech_books/CSS001.JPG": "90aac46b750fdde8a37f6e6e8a8c301b",
"assets/lib/images/tech_books/DataStructure001.jpg": "18a1d23b64848290720eb9af40cfc55e",
"assets/lib/images/tech_books/DataStructure002.jpg": "91d75fdf42ccc56c9bc1d3ce1764b40a",
"assets/lib/images/tech_books/DB001.JPG": "84267ee464ad495133c1a97fb3dcdd34",
"assets/lib/images/tech_books/DB002.JPG": "de7a9cd3e20f25d578d1745f0ef58be3",
"assets/lib/images/tech_books/DB003.JPG": "b4a42febf429e85779f5ed88ab8c61b9",
"assets/lib/images/tech_books/DB004.JPG": "648218dbd4a72bf455a45d5d6667fa84",
"assets/lib/images/tech_books/Game001.jpg": "dbb1a58a56c2b0e5520848b10ea15bf9",
"assets/lib/images/tech_books/Go001.jpg": "f392cafa7501f4134ae5dc26f264a997",
"assets/lib/images/tech_books/Go002.jpg": "f139ded3297e6ec925c7003a881898a1",
"assets/lib/images/tech_books/Go003.jpg": "92e16339d10f481fb6308cdb510bf279",
"assets/lib/images/tech_books/Go004.jpg": "85d345a7c8a019f67fa51a9541e8a5a0",
"assets/lib/images/tech_books/Go005.jpg": "b85fbd54f023c33d843231b5e3e5577f",
"assets/lib/images/tech_books/HTML001.JPG": "3e2f658456c1e9dea0f012ce75163475",
"assets/lib/images/tech_books/Java001.jpg": "e0d1be97daecd4b4d3097984aa37d84c",
"assets/lib/images/tech_books/Java002.jpg": "5fd81c15ad78edd167017814b8c36d09",
"assets/lib/images/tech_books/Java003.jpg": "532a319381cb23fc3781194b24b99541",
"assets/lib/images/tech_books/Java004.jpg": "addd31b32191c17636e57ff5af3a5008",
"assets/lib/images/tech_books/Java005.jpg": "8413329af55aec9cbc7dcb0112a13d49",
"assets/lib/images/tech_books/Java006.jpg": "3a24e779e5f879647f5dff90e1006c0c",
"assets/lib/images/tech_books/Java007.jpg": "586f2cf96469894500d9cdac0d4021ac",
"assets/lib/images/tech_books/JS001.JPG": "3b675474311ab56ac2fcde8960f3f1c6",
"assets/lib/images/tech_books/js002.jpg": "e1b28198865e71e177498848ebcda798",
"assets/lib/images/tech_books/js003.jpg": "bfb0ed8c045fb7d96445a026068542e1",
"assets/lib/images/tech_books/js004.jpg": "bafddc10371abfb6472c677cec3d63c7",
"assets/lib/images/tech_books/Linux001.jpg": "266de21df819809bfe2388f116ff0811",
"assets/lib/images/tech_books/Linux002.jpg": "77d6c7f444ea20e5a422977b6ec5e271",
"assets/lib/images/tech_books/Linux003.jpg": "dcdf87e82f5dfc24f39561e0b3a92a80",
"assets/lib/images/tech_books/Linux004.jpg": "4110526f5245db8216980c9880a51412",
"assets/lib/images/tech_books/Linux005.jpg": "6ddd8ecda3b28d39a0f832c8a34a72ce",
"assets/lib/images/tech_books/Linux006.jpg": "88336cfbbfa915b8dd378b8bd13af96b",
"assets/lib/images/tech_books/Linux007.jpg": "1f70043dee1314d64a7f72578c7b0852",
"assets/lib/images/tech_books/MicroService001.jpg": "dfc6fa2966ac0f9527058b7db7cc2953",
"assets/lib/images/tech_books/MicroService002.jpg": "cf9d4084710ffd025df4da94ba997e2c",
"assets/lib/images/tech_books/Network001.jpg": "9957ae539b5e78fb2014e51ce37fdabd",
"assets/lib/images/tech_books/Network002.jpg": "cefe25b14e4261319ef825f8ee0b1f70",
"assets/lib/images/tech_books/Programming001.jpg": "2d705d72c0f608b1b418d0f3caf1854b",
"assets/lib/images/tech_books/Programming002.jpg": "762482346ec6e8264c1eee008af0d929",
"assets/lib/images/tech_books/Python001.jpg": "7a962ca0e1ed5206c4012065516d8df5",
"assets/lib/images/tech_books/Python002.jpg": "0d462017a452a9ca810ef2bd1c3570f5",
"assets/lib/images/tech_books/Python003.jpg": "22a8be31977db31bf454ff14e7cb3707",
"assets/lib/images/tech_books/Python004.jpg": "c795a0430a475ed61f00f69e02f67922",
"assets/lib/images/tech_books/Python005.jpg": "0b5c577a71c03e5611f6ea095ade2012",
"assets/lib/images/tech_books/Python006.jpg": "446ecbcd20cf587c7741ecda6a110ed4",
"assets/lib/images/tech_books/Python007.jpg": "46569ea89767586e7f27f18245198234",
"assets/lib/images/tech_books/Python008.jpg": "cf31b999109e6d13d39c1866fa2855ae",
"assets/lib/images/tech_books/Python009.jpg": "755ed1deca1c7b5d33b9b9dc19fcd783",
"assets/lib/images/tech_books/Python010.jpg": "bcd126ee931bd86caff6955b95b61439",
"assets/lib/images/tech_books/Python011.jpg": "0c87a45c7efb74910fa5081e20e9f9eb",
"assets/lib/images/tech_books/Python012.jpg": "67f416f6ed0f45708eca2934910df952",
"assets/lib/images/tech_books/Python013.jpg": "dc240c4105b17e178dd46c8f7301f28f",
"assets/lib/images/tech_books/Python014.jpg": "cceca35008640a94a2bac86670ee4cff",
"assets/lib/images/tech_books/Redis001.jpg": "94c6864a8af317ccf682b0e08d5df4db",
"assets/lib/images/tech_books/Redis002.jpg": "2a712a789917da1317de59dd1822ef46",
"assets/lib/images/tech_books/System001.jpg": "e6d1e08e3b9ad9441c16d39717c7d536",
"assets/lib/images/tech_books/Virtualization001.jpg": "7ed3bf48f4111c867c9bb1fa2d205361",
"assets/lib/images/tech_books/Virtualization002.jpg": "599cdf93a4f20da24878141403851886",
"assets/lib/images/tech_books/Virtualization003.jpg": "1a153f5c89bcf1a4b08f5fdffeccbd1b",
"assets/lib/images/tech_books/Virtualization004.jpg": "d2fe7c3574f06dd84a2f638f6288610c",
"assets/lib/images/tech_books/Virtualization005.jpg": "85e14642d77dda5f3c0cfad76df4eb5f",
"assets/lib/images/tech_books/Web001.jpg": "d22860c582aae9e65f5b6a4872f5ec69",
"assets/lib/images/tech_books/Web002.jpg": "ff79e598f50447284098094e326c2a26",
"assets/lib/images/tech_books/Web003.jpg": "84a266745b03323b6ee9185c9ba985d8",
"assets/lib/images/tech_books/Web004.jpg": "66f5b133563fcdd842671b4bfdd9c94f",
"assets/lib/images/tech_books/Web005.jpg": "7ee2c3d770a4505253d8697eda16941e",
"assets/lib/images/tech_books/Web006.jpg": "acd49745d56b7c4bb80eb24a7326e433",
"assets/lib/images/tech_books/Web007.jpg": "6e91046dec82ce828c19854a0e44f4ef",
"assets/NOTICES": "f2246a1aa8c5f2a89b6ba2c401432527",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c5b57ac5c163d668d76210bdac9e888",
"/": "7c5b57ac5c163d668d76210bdac9e888",
"main.dart.js": "adbe2cae3db4ca33e6acf43620fbd2fa",
"manifest.json": "9c414ee6126c266b6a5608d7a5ee2b06",
"version.json": "0da039333d38f5ba8dda3b15462dff2b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
