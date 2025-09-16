'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "75f4b9fd7046d8253bc96b1799945203",
"assets/AssetManifest.bin.json": "57f1f84afeb53e6a43de52a681cfd7b1",
"assets/AssetManifest.json": "2426a9c7053bcadc50aa7354eaa5c770",
"assets/assets/animations/alert.json": "00890f746dc48a6073d8294ac59a5046",
"assets/assets/animations/developer_skills.json": "838dee70f11609332e3cb33b2b51e272",
"assets/assets/animations/rocket_research.json": "2ca2aaef0a09083eda3ff2a0235fb311",
"assets/assets/animations/wallet.json": "179fb74d3b8faa7989cff1c6382f49db",
"assets/assets/images/abstract_city.png": "48e49aaba355fef0459a2a0abbe0a2ee",
"assets/assets/images/abstract_dream.png": "7f254d4107861c9696feeabeafe61132",
"assets/assets/images/ape_genesis.png": "d7db485b890750ee7d9463247ec56fc8",
"assets/assets/images/app_logo.png": "2891f0c4caf8599cdc7185dae920d06c",
"assets/assets/images/avatar_1.jpg": "7819a1a9a0539bf7849e43dfaeffcd8c",
"assets/assets/images/avatar_10.jpg": "9f3f1ff124de285d51d7b1b454b285c4",
"assets/assets/images/avatar_11.jpg": "7f547c22dc60b35d73439eb62fbe4d07",
"assets/assets/images/avatar_2.jpg": "968fa73af413dbe0597958dc1a93d7f6",
"assets/assets/images/avatar_3.jpg": "cd0bdc22a7b288de2695bbf7bf84cbbe",
"assets/assets/images/avatar_4.jpg": "b9bb4cb86c41a2b42b15c5ed32a7cd6c",
"assets/assets/images/avatar_5.jpg": "31da1612d8e144d9bb9346fd58907596",
"assets/assets/images/avatar_6.jpg": "641b911ea931068e87ee15ade247a0bd",
"assets/assets/images/avatar_7.jpg": "a6c33cd568a1d7caf2a5bbe5087d9456",
"assets/assets/images/avatar_8.jpg": "b2cfeb1955290381194c4b6996f84bba",
"assets/assets/images/avatar_9.jpg": "34422e88b724090f14764204397cdcab",
"assets/assets/images/bg_1.jpg": "2ce7f780759c5b9ef6c7c3b1da4c1ebb",
"assets/assets/images/bg_10.jpg": "ec562aff3d011db84412ad98233641a5",
"assets/assets/images/bg_11.jpg": "9234c3740d618876c933b227be6dd593",
"assets/assets/images/bg_12.jpg": "8e584fb8f773a1d0ae4605b3916a37d3",
"assets/assets/images/bg_13.jpg": "3d2ca9a1c8237a37fba19aab3589993e",
"assets/assets/images/bg_14.jpg": "a5ebb02f5a8bb64e51a82a670a65a79e",
"assets/assets/images/bg_15.jpg": "d69848c6a76dce89f081988a1cef8380",
"assets/assets/images/bg_16.jpg": "cb319b0076347543adf76d8329b0e2ac",
"assets/assets/images/bg_17.jpg": "81a1a77ad454ac75ae34ec4274d7de1d",
"assets/assets/images/bg_18.jpg": "d3fbf8c87e8ea8646e02a4b3d19265b3",
"assets/assets/images/bg_19.jpg": "1965109b8a57f67c66f28f31386046db",
"assets/assets/images/bg_2.jpg": "d54ecae3831f9db602f24468eade709e",
"assets/assets/images/bg_20.jpg": "29b3d7a5a07d35ba00d17b362a26fad7",
"assets/assets/images/bg_3.jpg": "381287661f1ade3aa5b9dbc2ae015d40",
"assets/assets/images/bg_4.jpg": "484a86f9537f4002953a6895ad21ddb4",
"assets/assets/images/bg_5.jpg": "136553890e44616bf26cdabe335511ae",
"assets/assets/images/bg_6.jpg": "3cfda80195e87834f44316a445c84d1a",
"assets/assets/images/bg_7.jpg": "48953bfa75fa0577ce6fe12b55883dfe",
"assets/assets/images/bg_8.jpg": "ce35db472062c523170fb7471dcad081",
"assets/assets/images/bg_9.jpg": "545115984eaeacc28ca83ebcfaa8cc4c",
"assets/assets/images/bitbucket.png": "8835d733be92c262762f532b94c66b77",
"assets/assets/images/cosmic_flower.png": "4457a1d902c8999193ed93f340e5dfe1",
"assets/assets/images/cyber_cat.png": "5551762bd57fafb159dc46f232989003",
"assets/assets/images/dragon_spirit.png": "b62ad6ec17763de39bcd47eda3c97727",
"assets/assets/images/dribbble.png": "1bfec3f646e79940f24181360a030797",
"assets/assets/images/dropbox.png": "c4a911fb56a3051c03d090482bdf3e94",
"assets/assets/images/ethereal_goddess.png": "33a6083077f3fa2a37f5a50d7dbbfdb5",
"assets/assets/images/future_car.png": "bad29082ab7a03762e915988506ba1e6",
"assets/assets/images/geometric_lion.png": "182d5196aa00be228e6dc4367fec6fe9",
"assets/assets/images/github.png": "8a423376a00199e7396afb2d9bc37526",
"assets/assets/images/logo.png": "524ad5090d7bde812a993951ed7ea80e",
"assets/assets/images/logo_light.png": "3a200818e1bc8540d9cc0eddfddf69d7",
"assets/assets/images/logo_min.png": "4c3e7aee3bffd78d5eaf5aa83b82a4d5",
"assets/assets/images/mail_chimp.png": "c9076360c41eb4187154f841ef692ccd",
"assets/assets/images/nft_hero_1.png": "732082f921eed79d13a8e79e5ad768d3",
"assets/assets/images/nft_hero_2.png": "58bff46c395d645a580dfdc291f0f6dd",
"assets/assets/images/nft_hero_3.png": "e0ba7179a9ae1beecbd9285b5b21bb19",
"assets/assets/images/ocean_guardian.png": "2f9eaa38a4f34a4b4fa858d39744cd36",
"assets/assets/images/pattern.png": "2cb6c3e2e670d8e33a05c27a5b700a6d",
"assets/assets/images/pixel_knight.png": "bddf789e425c7f3c045d7adfa1f0cc69",
"assets/assets/images/shark_netify_planes.png": "7b670fac44a44a8b11a6bced103fb76a",
"assets/assets/images/slack.png": "7311ed6846bdbc9af2994aafd6ad8f1a",
"assets/assets/images/slider_bg.jpg": "48c8e24084a79e09cb9535972412eb5b",
"assets/assets/images/success_team.jpg": "29eb09aeabf469ff4a8428cc93e63e49",
"assets/assets/images/thumbnail_1.jpg": "c49306649f8de6044b194bb2ce83b320",
"assets/assets/images/thumbnail_2.jpg": "0533d0c575dbc8faa058a1a64b166e46",
"assets/assets/images/thumbnail_3.jpg": "70242a16d97b3db3c9e9ac54fd45eb83",
"assets/assets/maps/indonesia-province-simple.json": "a619c54128a7c0a11cf6a0d5d0c7e602",
"assets/assets/maps/us-states-1.json": "b5080fea5bc97e75ecb292e8a83f014f",
"assets/assets/maps/us-states.json": "8efc94b42219ef1a92051bd759fdf9c0",
"assets/assets/maps/world_map.json": "a7444bf58c741674a69d12c1ba514694",
"assets/FontManifest.json": "9c08e616217aee3b11e509ae82275cc2",
"assets/fonts/MaterialIcons-Regular.otf": "3949555b1bb858792f811306e34e041b",
"assets/NOTICES": "ee3502761e2ca93c0cb57e5996cb42fc",
"assets/packages/appflowy_editor/assets/images/case_sensitive.svg": "1f93577f39711359040ffde3d815fdc6",
"assets/packages/appflowy_editor/assets/images/check.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/checkmark.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/clear.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/delete.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/link.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/point.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/quote.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/regex.svg": "31424cd1f827bb7f237cd8e56c58f941",
"assets/packages/appflowy_editor/assets/images/reset_text_color.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/image.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/number.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/images/selection_menu/text.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/toolbar/bold.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/center.svg": "c44cf79c7fae101e6fb9daa8aaf62a54",
"assets/packages/appflowy_editor/assets/images/toolbar/code.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/h1.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/h2.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/h3.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color.svg": "f8dd55016252c335c33e97fb39159882",
"assets/packages/appflowy_editor/assets/images/toolbar/italic.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/left.svg": "511106ad3206b6ccbf9702f22b0097db",
"assets/packages/appflowy_editor/assets/images/toolbar/link.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/quote.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/right.svg": "19968f066c5bccae9f3e059f04492850",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/text.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color.svg": "b912db1bb9568af27b19e2946e38cf38",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_auto.svg": "74b07c6cd726be519ea32060d7a4b78c",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_ltr.svg": "16a42742a29ea1cf30253cd9429095cd",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_rtl.svg": "a994493865a43a16af27155434be4a6c",
"assets/packages/appflowy_editor/assets/images/toolbar/underline.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/uncheck.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/upload_image.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/close.svg": "aa945f43dcd92bce9b5c810eb33940be",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "79d01e0ad5a8862717d256dfb84b4e59",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "220a197fe5cfc773a9fd64a565ca4707",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "b4b26ccbafdd0d30e47c5db7093f0f31",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "47eb50078eadf1a0bc8584cec26814db",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "b5fc5a82a0acc2cbc82a0706e6183dba",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "b709a4cac1484810dca038e02fd9df14",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
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
"flutter_bootstrap.js": "3fc474d7ef4aecde9eb0da8197479d3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3176c6ba04c58ba1f8fa9a0b56c8a885",
"/": "3176c6ba04c58ba1f8fa9a0b56c8a885",
"main.dart.js": "abaf5e64efe6256585507688c4b15ce6",
"manifest.json": "88d14731026bce4101af422d51396be2",
"splash/img/dark-1x.png": "9b9b080ea4741528d9a8c5a3e3b4a9b5",
"splash/img/dark-2x.png": "9c6eae8ef05c855679aa38e2eb10799d",
"splash/img/dark-3x.png": "8e4dbe3a27dc2d74a161a2cd7b1d5921",
"splash/img/dark-4x.png": "45629ecd925ba426b3d49c92bdfa62cc",
"splash/img/light-1x.png": "0218b8d43e0b15996f5151e8bf2ce2b6",
"splash/img/light-2x.png": "73b3f5ae57ad5bf8c74864518be40db4",
"splash/img/light-3x.png": "091d25d5b47bd06f3705ca9b6684b8f7",
"splash/img/light-4x.png": "4fb0d896c06743374ac43935ac01bec5",
"version.json": "9f9dc6b4d54aa4fb3284831eff4ed5c8"};
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
