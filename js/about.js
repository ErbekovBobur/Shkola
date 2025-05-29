document.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
  script.onload = () => waitForTranslationInit(initializeApp);
  document.head.appendChild(script);

  let teachers = [];

  function initializeApp() {
    fetch("./data/teachers.json")
      .then((res) => res.json())
      .then((data) => {
        teachers = data;
        initializeSwiper();
        setupLanguageSwitcher();
      });
  }

  function getTranslation(key, lang) {
    return window.getTranslation ? window.getTranslation(key, lang) || key : key;
  }

  function generateTeacherCards(lang) {
    const grid = document.getElementById("teachers-grid");
    if (!grid) return;
    grid.innerHTML = "";

    teachers.forEach((t, i) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `
        <div class="teacher-card">
          <img src="${t.image}" alt="${t.name[lang] || t.name.ru}" loading="lazy">
          <div class="teacher-info">
            <h3 data-translate="teacher-${i + 1}-name">${t.name[lang] || t.name.ru}</h3>
            <div class="position" data-translate="teacher-${i + 1}-position">${t.position[lang] || t.position.ru}</div>
            <p class="bio" data-translate="teacher-${i + 1}-bio">${t.bio[lang] || t.bio.ru}</p>
            <button class="more-btn" data-modal="modal-${i}" data-translate="more-btn">${getTranslation(
        "more-btn",
        lang
      )}</button>
          </div>
        </div>
        <div class="teacher-modal" id="modal-${i}">
          <div class="modal-content">
            <h3 data-translate="teacher-${i + 1}-name">${t.name[lang] || t.name.ru}</h3>
            <div class="position" data-translate="teacher-${i + 1}-position">${t.position[lang] || t.position.ru}</div>
            <p data-translate="teacher-${i + 1}-bio">${t.bio[lang] || t.bio.ru}</p>
            <button class="close-btn" data-close="modal-${i}" data-translate="close-btn">${getTranslation(
        "close-btn",
        lang
      )}</button>
          </div>
        </div>
      `;
      grid.appendChild(slide);
    });

    setupModalHandlers();
  }

  function initializeSwiper() {
    const lang = document.documentElement.lang || localStorage.getItem("selectedLang") || "ru";
    generateTeacherCards(lang);

    new Swiper(".teachers-swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: { slidesPerView: 4, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        0: { slidesPerView: 1, spaceBetween: 10 },
      },
    });

    loadImg();
  }

  function setupLanguageSwitcher() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang");
        generateTeacherCards(lang);
        if (window.translatePage) window.translatePage(lang);
        if (window.Swiper) {
          const swiper = document.querySelector(".teachers-swiper").swiper;
          if (swiper) swiper.destroy(true, true);
          initializeSwiper();
        }
      });
    });
  }

  function setupModalHandlers() {
    document.querySelectorAll(".more-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("show");
          document.body.style.overflow = "hidden";
        }
      });
    });

    document.querySelectorAll(".close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-close");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.remove("show");
          document.body.style.overflow = "";
        }
      });
    });
  }

  function waitForTranslationInit(callback) {
    if (window.getTranslation && typeof window.getTranslation === "function") {
      callback();
    } else {
      setTimeout(() => waitForTranslationInit(callback), 100);
    }
  }

  function loadImg() {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("loaded"));
      }
    });
  }
});
