// analytics.js
// document.addEventListener("DOMContentLoaded", function () {
//   // Google Analytics
//   window.dataLayer = window.dataLayer || [];
//   function gtag() {
//     dataLayer.push(arguments);
//   }
//   gtag("js", new Date());
//   gtag("config", "G-22ZG2NQ22L"); // Замените на ваш ID

// Yandex Metrika
//   (function (m, e, t, r, i, k, a) {
//     m[i] =
//       m[i] ||
//       function () {
//         (m[i].a = m[i].a || []).push(arguments);
//       };
//     m[i].l = 1 * new Date();
//     (k = e.createElement(t)),
//       (a = e.getElementsByTagName(t)[0]),
//       (k.async = 1),
//       (k.src = r),
//       a.parentNode.insertBefore(k, a);
//   })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
//   ym(XXXXXX, "init", {
//     // Замените XXXXXX на ваш ID
//     clickmap: true,
//     trackLinks: true,
//     accurateTrackBounce: true,
//   });

// Отслеживание кликов по телефону
// document.querySelectorAll(".bouncing-phone-number").forEach((phone) => {
//   phone.addEventListener("click", () => {
//     gtag("event", "phone_click", {
//       event_category: "engagement",
//       event_label: "Phone Call",
//     });
//     ym(XXXXXX, "reachGoal", "PHONE_CLICK");
//   });
// });

// Отслеживание отправки форм
// document.querySelectorAll("form").forEach((form) => {
//   form.addEventListener("submit", () => {
//     const formName = form.id || "unknown_form";
//     gtag("event", "form_submit", {
//       event_category: "lead",
//       event_label: formName,
//     });
//     ym(XXXXXX, "reachGoal", "FORM_SUBMIT");
//   });
// });
// });
