const CACHE_NAME = "school-academy-v2.0";
const OFFLINE_URL = "/offline.html";
const urlsToCache = [
  "/",                  // Главная
  "/index/index.html",
  "/about/index.html",
  "/program/index.html",
  "/offline/index.html",
  "/css/style.css",
  "/css/index.css",
  "/css/about.css",
  "/css/animate.css",
  "/js/main.js",
  "/js/about.js",
  "/js/language.js",
  "/data/teachers.json",
  "/data/translations.json",
  "img/ico/android-chrome-512x512.png",
  "img/hero-banner.avif",
];

// self.addEventListener("install", (event) => {
//   event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
// });

// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(fetch(event.request).catch(() => caches.match(OFFLINE_URL)));
//   } else {
//     event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
//   }
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)));
//     })
//   );
// });
