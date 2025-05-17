const CACHE_NAME = "school-academy-v2.0";
const OFFLINE_URL = "/offline.html";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "img/ico/android-chrome-512x512.png",
  "img/hero-banner.avif",
  "/offline.html",
  "/about.html",
  "/program.html",
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
