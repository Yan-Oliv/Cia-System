'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "564831ad0a82aa24903c7a5272411604",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b44f6f60e42d4963b22e55fca9763365",
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
".git/index": "0e4ef125500dd4ea640add57d073a1c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1458f2707394548f837c49016bc6b361",
".git/logs/refs/heads/main": "0a3fee3bacbf29eaa6bd8c72a4723afc",
".git/logs/refs/remotes/origin/gh-pages": "b52b5c3cf4a62484fe91d6ed9a63b3e1",
".git/logs/refs/remotes/origin/main": "4512309fbca0e0137a851f373d04ec24",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "00963b14accf23765447d98360ff1198",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
".git/objects/0c/b286fe5356d69e9872d980f0dd03a921bef9bd": "e88057bc0090c216d9d5867715fa71a5",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "f60f235153780ad72779ded1dd438918",
".git/objects/11/581dd826eb5f8b8b28bad16f967fccd7c02ff2": "290f49c657068ec7b6576da84207878c",
".git/objects/13/6a3e29e396f20a96235c87cfff816a69892410": "b43c66d9c91a769e462dc7f622a71a63",
".git/objects/19/ea7473b8b29d4d2c2a7e2f34b049e38983109a": "4934bf221daaab58aa374d7a20ff65c7",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "c6274b2aab2e5341d5afe75b20d9db20",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "24fdc23f0061c608f90b78ae78148c2d",
".git/objects/29/1040a1d048dccd48e80063493b881aa266afb7": "dd6da482d5f67102e9670824f92c68b0",
".git/objects/29/716b349da4e093b11ff700059e92c528e5a1ec": "8ecb988735a2974e83037bd0f613477e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "f5434dd611cf7832a2da98f9fd2a29f8",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
".git/objects/2f/e649e7fdfb78808080eecdb739d1b971ee0e3c": "ad7a2d27e7dfdef2103ebd1fb432b418",
".git/objects/38/95101ab90725e979eefae2b1956c331356d15a": "1690f34cb17990502b78f876c77722b9",
".git/objects/3a/6f9c17e85e87977a08ae757b4e7ee7b191655e": "b2f8c36884b48a4b273259c95cc87709",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
".git/objects/41/dcabcd19730a0fb28b70661dae9f4c3b85dcae": "829a865d09f14c36e67ee1776d098d30",
".git/objects/42/716be23e93ee642f2e03b5ddd1aad589876322": "d6cef4425c5eeeb13251ec2ff70a9498",
".git/objects/43/38867a165352b6eab8bd44f88c812ea82b29f5": "f832c8c41781522337b0b06127d9243f",
".git/objects/43/826a4f8bcbdec0b39c7d28b2e111a15009e6b4": "d8baa494ae353e57c1e3aa44e97bfe7d",
".git/objects/44/518179580c1618b33f62edae238890781467dd": "88f683e613a2305218a27599077be460",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "2f13d328e15f648701ae63ade3db0b17",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
".git/objects/48/8306f510aab3c11ed6c43507f682f0e2170955": "662f27ac2e50bd078ce28f1529c9233a",
".git/objects/49/1d76b4f88fe9fcbee31965f7b5fd57fcb0936d": "25e0e5957f5fe9ea2ac8ea5403f6ce0c",
".git/objects/4d/9ac9f547fa74f08789e55d7d5e158775d32ced": "79c0e79ac36eb0e9f68af9bd2cef4723",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "f51ce74f4b30d985773489942de9706e",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "fbf413e3e575c13db63f06544f500549",
".git/objects/50/ce834a7dcdf2ff8bcec30ed3d148051f17130c": "160b632bd02f8bab7e385c7ab16c8256",
".git/objects/52/0deba61d7c926ffa6f1b63132a939d45b62999": "25785483892061a67129213de2959490",
".git/objects/59/9a6a786fe2e260aff1998e52fb5813abc629a2": "1435af94955430fd66cc1b1d0adb48dd",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "b6dbeff3b96b24446d02af3f28016f3f",
".git/objects/63/fb1f6ff252c7b1da9e3ebe00ace1f2526f9fb7": "b62f06e7f66fd454e1a971f52bcb03b1",
".git/objects/64/58715a71854e28826c9668ae3164c52293a60b": "17568fa69a27d60a621f5d9f2d69ce52",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "712103cb62bcc6ba0f73e804ac2aff0a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "fae60530fa427e7dee065140e85f4339",
".git/objects/72/283066b625ab1fdcf4fb928aa162b19d86a228": "fe60a41dce275e3a316c7b7b24c6c6f8",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "cc3786186a3f1202c722088829f4c7c0",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "16f6bc347115cc591fd747e883261b83",
".git/objects/76/654ba27144a6e4208bf39810e44400a3411f09": "dbef9b9ab023c2d3971bde34d08232a8",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "754eb3121a5999866afd25a8201d7816",
".git/objects/7b/43fd05a0987c66e9d4598e0e9a6caf3bb74257": "3bc71e20db4d40896a259eb23b1e4c29",
".git/objects/7d/9a6c4c32d7e920b549caf531e390733496b6e0": "5ef984da1de8a3fbbc5db64970fbe472",
".git/objects/85/b0681d16fceb298eb2b5dce4cc09496d872f07": "28affc49d4037557f5043325a296ea4e",
".git/objects/85/dfdbe16018edaea47b5a71183562abc324fe4f": "578981e764aba18548a38cc3f3df95c7",
".git/objects/85/ef42b32aaa393cae4f21bc0354f037d6c4f5f0": "ec960522a78e51f100ab7ce6d3511e85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "90e6fa94406f2f812d040574aa0da80a",
".git/objects/98/a9a759d90f44ad6efd341fed397e38f6a24669": "13b65e329feb9bb42d1fcbb2c9b50eaf",
".git/objects/9a/6fbeb02670a93efd91b26e7fc6f9cfc6f5ea42": "2122e9917c4d5fae81e3ae5c06ad65d9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "6f7adccbcd8159696c9843a547f82033",
".git/objects/9e/0a9264b6e2f3b8e67e093ca9609e37627ac86b": "1f1c18c60b2c771251a5d6492c362962",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "2cfcd8c860f921fceab454ee54abae46",
".git/objects/a6/e1a62d71f1bc79a5277828d314390b61062dad": "863ff366c7ac0203306f89d68cd5460e",
".git/objects/ab/10bb47dd433b554bbf58ff973958a63bb3f909": "4e9090528b81acb407e9432783725889",
".git/objects/ac/fae08775bec6f1db392b62667a2ca706e24ecd": "4b1b4965a09ac2fdf7e25559745c3f5a",
".git/objects/ad/2c5a0b632c87cf84e3a923e29441712d01a2ad": "b488237c3baf0c459b8dd29f692f10f0",
".git/objects/b1/abf43499492160287066decb80d169f22226cf": "b247e3692f4c140e53c4e1dc22d6c5c5",
".git/objects/b2/113a0e8252a16e858304b0cb76bdddd6fe3806": "3ca0297bc1ed2a11cd6087c4a317963f",
".git/objects/b4/7904829e60870d1a2bb8049d930492a3913391": "748b7286ebe04f3550df125b4abe5d0e",
".git/objects/b4/f72bcff9bf901ea4ad29db3bf393ffbefaad18": "3d3fc08ee356d9c27c6a5d53de357b10",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "a5750dc478ecba60aad59689a9defcc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b8/dcbac071de149d3dc7e39d3f51a29737436320": "1bc1aeac8bce92522689f651982968a2",
".git/objects/ba/0fe7b59b6ded41c682e98e4e00fe686f330c74": "f58794e8b5114e3bc73426c4c2d788cd",
".git/objects/c1/3eb9c90d89cab767d3c6d741cd5f900c665c7d": "2803b6e1213cb59f518db71a1b7a1a8b",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "c128675f3a4386b3c98c7c1125ff3b51",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "f2d65397f0e87e6bcb5a23b72d6ae074",
".git/objects/c4/fa77c989c93f97a2e78e385f617fd51c40cb39": "9929de0af61fc65b5d243241bd455d42",
".git/objects/c6/e62d31394b013a51d0fb09fd1a2ea6d1277b08": "deeb0238bf0f0c2fe4542d13cccc4046",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "c454afab7281e6f0a346fe1131741cca",
".git/objects/cd/9cdcd023366867fa263ad323983753a6f8e68f": "150872e5b1f56d798e0db3fcddbfa89f",
".git/objects/ce/e7fb7afb3830a74fa104935b181959d6ebfe7a": "96f91451b23a58fdca6034cce9dbea54",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d5/54f2cac94e6878618d227f5095087eb50ee161": "57110b4c4a9ac1caf84d137fe27d78c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/d7/5bef6ffbbafb6d2d420b81faac61f5752c2717": "35c61d5121780146361f55ff5971c3fa",
".git/objects/d8/39c3664a53774a16ac513d35300d15958d3540": "ac1b50b18ea522e4730cc2d08b84d91c",
".git/objects/de/72a45a9d99503471d4989b8e27fce7f136f75b": "bc9282f7240f4113c553cdd4777e8a65",
".git/objects/e0/d124df897d38414f375d9842f427f01817712f": "d40f3a96136a5df97e8856f20b6f2cfc",
".git/objects/e3/5b644219984ac56ab1fdaf37972cddc0d60a81": "3d4930df411749d603fdc48aeb166ddb",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "204eefb936c0cfc976b76cdbc11ee1a0",
".git/objects/e3/dc65f59881607507c7573a3c33128352ce48a7": "7831e834c6a7a5a2533f2e7dd01bcc2e",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "b757099649c5b4f55667abb5d715d57b",
".git/objects/e3/eee57c9305ae3d4b733b9a9fc2fdb86bcb0eb5": "ec1f2babb31ac6a156b6ced5f79a7165",
".git/objects/e4/48bdd3c073ce9e579a65b5afab701286e097aa": "441978bb113c3b18788ccf7718464f6f",
".git/objects/e5/f01862fa1425ca6b96e81526a2dbe47f4d852f": "8aef0a1dce0b09f1c668d460983c0ae7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "1dfabeb9b2b507b75367586cb7fb284d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "24ff37338bd045d48203cf331771729e",
".git/objects/ee/8a44ac67f4895bcd198edb886c318f6e41a839": "b600b94479e764b5356ceed3ca9a7d14",
".git/objects/f1/ae5317ff6f848b098f045fad40ce4d0282b9b8": "89b9eda6d3225e6dfdb98244a3e30977",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f2/a66670f025d160c67c470ad333987849edc866": "755b8882dc6d748d179b3c638e1ef39a",
".git/objects/f3/165d565f672016b473ad5014be4c3cb5848da7": "3795785555c342b6bc5c2e68cd8b4998",
".git/objects/f3/957ac53613d73ca715bdd319cf237b4c772609": "cc3a3b91ef8b0c0d22bbae6d195cb14b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "db8c57f684c1c1d7e3892a31f31bd1ff",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8ca829b0b36b29e4be13297797866b8d",
".git/objects/ff/b54c4cde7565f73ac463f0390a3fe60c620768": "85588a7dba7976b3cc719092c39a4edb",
".git/ORIG_HEAD": "679177fa949d404bb1254b97b59400f5",
".git/refs/heads/main": "5a03926fe1ee31ae702dd8154c28e08b",
".git/refs/remotes/origin/gh-pages": "451f8feed33e5ac8480d7c91499d9775",
".git/refs/remotes/origin/main": "5a03926fe1ee31ae702dd8154c28e08b",
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
"assets/fonts/MaterialIcons-Regular.otf": "8266ee87781f9034028dc6a2fc78e3ea",
"assets/NOTICES": "1db135e2cf887150cbb6dbab0bfa8fb5",
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
"flutter_bootstrap.js": "7162441776c64708bc48e5c99359e810",
"icons/app_icon.png": "ae13f71eaf13ccf26adb4fd3db2fb6e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/maskable_app_icon.png": "3391b4a9bd50fb7809f2c641b3e437ff",
"index.html": "a0b0566bb76065b5d787a8065fbab1b8",
"/": "a0b0566bb76065b5d787a8065fbab1b8",
"main.dart.js": "3cf0f2bf311f732aedea58d0a3f52512",
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
