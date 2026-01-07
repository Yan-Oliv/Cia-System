'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "564831ad0a82aa24903c7a5272411604",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "49a59986513dded49d517d15b0c798a9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "54ad3de95d63b1700c56aa3af101b61d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65d5c23b4f6dcca1801739552af79e05",
".git/logs/refs/heads/main": "65d5c23b4f6dcca1801739552af79e05",
".git/logs/refs/remotes/origin/main": "27f31aa612e0d75ef2a50e880454cbef",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0c/b286fe5356d69e9872d980f0dd03a921bef9bd": "e88057bc0090c216d9d5867715fa71a5",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/13/6a3e29e396f20a96235c87cfff816a69892410": "9bd4dc3d9d2303184faf9b065cb222d5",
".git/objects/14/c19a8ad8e81f3257461d7bdfac8a7bedb6d202": "ef2baa65d9fec71be07605a5aa90d190",
".git/objects/19/ea7473b8b29d4d2c2a7e2f34b049e38983109a": "12e9ed3d0e67858204d38c51f7c6db4b",
".git/objects/1a/d993955238b9044fdd0dff919308cd52fd0d27": "fc9691ce08ce44512903016f8e0f00c6",
".git/objects/1b/66effc5905c821d23f664eee8d1a0d66f73e23": "c8621311ad8ce1b589ccd2cf21150bda",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/4f39234f0404c168354cf8fac9fbe75cd052d2": "00c99aed1877ba58a113d1200aedd8fc",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/a43d94bfcedc61574b6361961fa56c68fb986c": "07968a25456325997bb49076f694930a",
".git/objects/2c/8bdf2602e5600bb314ca4a21037fb7294e250f": "d0f6a741f0a9cfa25d9d56c9751ce7cd",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/43/38867a165352b6eab8bd44f88c812ea82b29f5": "1111266a70144d32d37d7f6697ee739b",
".git/objects/44/518179580c1618b33f62edae238890781467dd": "4fed1471f0606ef93994d1e296e84fce",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/630becd9a72e48bfb99323101e024c520b798e": "e9a8209ca141197c1d4c48b56c447f7d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/0deba61d7c926ffa6f1b63132a939d45b62999": "a8042eec37b072bddf1f52b45d3ee896",
".git/objects/58/321c848073c0c7fbbcb428a21c2084a727cd75": "c0fbef0e5855b7b4e66f1000c5d0e9eb",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/60/a02488f8971480df0f4566749d1b9f067e49bf": "673eea22d3db8e3d605b805a11ee480f",
".git/objects/63/fb1f6ff252c7b1da9e3ebe00ace1f2526f9fb7": "b3b8fca1dbc46f93cb1cd3dff51af277",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/ce59c43d873bced263f63a6b7ee13eaaf019f6": "d38568c940d89f28b9e5bd4e50529be8",
".git/objects/72/28a436d194b6651fde967c182c20d71d62ebee": "cc60bcf78bcb01a1f9ea70af839d90bf",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/9a6c4c32d7e920b549caf531e390733496b6e0": "08fc72bf13310819ae18642e598966de",
".git/objects/82/e838e02b55297ebb7bc77ffdbcd5df99a873d9": "90f596aef4a740ffc8d5ee7d9351ee1a",
".git/objects/85/b0681d16fceb298eb2b5dce4cc09496d872f07": "088de7963679ba7b6226f35bd3cac746",
".git/objects/85/ef42b32aaa393cae4f21bc0354f037d6c4f5f0": "08fa2ff8f1cd902e06c0715e4785b26c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/0a9264b6e2f3b8e67e093ca9609e37627ac86b": "3442d2ceee4cf88fdf537a7c1481006c",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a8/bbe47f55c7b4bb7156b2d059dd7008f30c8717": "ca5abb3f733e7d33a168e5bcc765c2ba",
".git/objects/ab/10bb47dd433b554bbf58ff973958a63bb3f909": "af32b92fc0f4aa9cab0cde854d3f5f2f",
".git/objects/ac/fae08775bec6f1db392b62667a2ca706e24ecd": "734ac883d98dd4c8d4e22ce9738c9611",
".git/objects/b1/abf43499492160287066decb80d169f22226cf": "6da39b21cd0b2c1be1b7b0d56dd63473",
".git/objects/b4/7904829e60870d1a2bb8049d930492a3913391": "e391a1b0f2cf2aad3ae1e1c3755b634c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/dcbac071de149d3dc7e39d3f51a29737436320": "650a31d50f855468d5f66fc6076f42f2",
".git/objects/c1/57b391750e75b58a5aaacb83187c6ed2c05c8e": "39504bb04a5752f357e08459d5943963",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/fa77c989c93f97a2e78e385f617fd51c40cb39": "b5cc66bea33fed421aa8cdbfe696d897",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/2e34acc054fa599c972847cb26c477dd1ea766": "a3f986e116dc5df92aabe83d867b391d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/39c3664a53774a16ac513d35300d15958d3540": "fa8f41ca40e3d869bc342d51b668946c",
".git/objects/de/72a45a9d99503471d4989b8e27fce7f136f75b": "0a21091bd526b9c97cdeccbda0bba6a9",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/a2794e81be305793308762d74c99ae8b84b520": "8451351387b6a4608b2e1a50bd6d2353",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a66670f025d160c67c470ad333987849edc866": "f99187128bfaaca55406283def643538",
".git/objects/f3/165d565f672016b473ad5014be4c3cb5848da7": "21b30efb2e951d785a592911d1e31e99",
".git/objects/f3/957ac53613d73ca715bdd319cf237b4c772609": "81aac71aefded7f5f545c969eea6d28e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/a0a47ebdf6141df6686f8062e82d7ef7bccf78": "b8cb1a0d6bcf917151144a90454d936d",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "4ac2745045b39c3af1b8504ef8cc0761",
".git/refs/heads/main": "4ac2745045b39c3af1b8504ef8cc0761",
".git/refs/remotes/origin/main": "4ac2745045b39c3af1b8504ef8cc0761",
"assets/AssetManifest.bin": "768b673e02517601eaa4a4fbc74d594b",
"assets/AssetManifest.bin.json": "3801848a5849026bbe7e166e3225853e",
"assets/AssetManifest.json": "ade0b299b1772a39ca393e6ffd1e2539",
"assets/assets/fonts/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/logo.png": "33217aded71898b57e261504a68c64a9",
"assets/assets/pdfs/CADASTRO_FRETEFY.pdf": "6243648da5d8b7c0e8cce1070a22898f",
"assets/assets/pdfs/CARREGAMENTO_BRITVIC.pdf": "2c05c067303bfa9d946ea75571dd3fc2",
"assets/assets/pdfs/COMUNICADO_ADIANTAMENTO.pdf": "4cfa660c5e056ba1e1b877bcbe04ee70",
"assets/assets/pdfs/ESPELHAMENTO_ONIXSAT.pdf": "4987e277e28feb98ea0f6f7e22cfd4dd",
"assets/assets/pdfs/FICHA_BRK.pdf": "1c13cf8ef0146c7b794ba5f12a266365",
"assets/assets/pdfs/GUIA_ORIENTACAO.pdf": "93cba345eabf8f7d7039f78ced527db4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "67f3c7b8e194b089052e5170a012c6bd",
"assets/NOTICES": "94d1037f10f1a0b203e3e629b15b34a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "1524319fa9f5eed398a9b1adf930be0b",
"icons/app_icon.png": "ae13f71eaf13ccf26adb4fd3db2fb6e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/maskable_app_icon.png": "3391b4a9bd50fb7809f2c641b3e437ff",
"index.html": "a0b0566bb76065b5d787a8065fbab1b8",
"/": "a0b0566bb76065b5d787a8065fbab1b8",
"main.dart.js": "655823b83b5082b4a8333f2b5a2290cf",
"manifest.json": "51047271eb1b2cdc85f7da6769e7edf2",
"version.json": "4c984eb5c052c37d773a8d15b8e9a738"};
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
