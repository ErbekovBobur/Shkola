document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    "school-name": {
      "ru": "Школьная академия",
      "uz": "School Academy"
    },
    "address": {
      "ru": "Ташкент, Юнусабадский район",
      "uz": "Toshkent, Yunusobod tumani"
    },
    "nav-home": {
      "ru": "Главная",
      "uz": "Bosh sahifa"
    },
    "nav-about": {
      "ru": "О школе",
      "uz": "Maktab haqida"
    },
    "nav-about-history": {
      "ru": "История",
      "uz": "Tarix"
    },
    "nav-about-teachers": {
      "ru": "Преподаватели",
      "uz": "Ustozlar"
    },
    "nav-about-gallery": {
      "ru": "Галерея",
      "uz": "Galareya"
    },
    "nav-about-mission": {
      "ru": "Наша миссия",
      "uz": "Bizning vazifamiz"
    },
    "nav-about-faq": {
      "ru": "Часто задаваемые вопросы",
      "uz": "Savol-javoblar"
    },
    "nav-program": {
      "ru": "Учебные программы",
      "uz": "O'quv dasturlari"
    },
    "nav-program-primary-school": {
      "ru": "Начальная школа",
      "uz": "Boshlang'ich maktab"
    },
    "nav-program-high-school": {
      "ru": "Средняя школа",
      "uz": "O'rta maktab"
    },
    "nav-program-clubs": {
      "ru": "Дополнительные занятия",
      "uz": "Qo'shimcha mashg'ulotlar"
    },
    "nav-contact": {
      "ru": "Контакты",
      "uz": "Aloqa"
    },
    "hero-title": {
      "ru": "Качественное образование",
      "uz": "Zamonaviy va sifatli taʼlim"
    },
    "hero-title-accent": {
      "ru": "в Ташкенте",
      "uz": "Toshkentda"
    },
    "hero-button": {
      "ru": "Записаться на экскурсию",
      "uz": "Ekskursiyaga yoziling"
    },
    "mission-title": {
      "ru": "Наша миссия",
      "uz": "Bizning vazifamiz"
    },
    "mission-description": {
      "ru": "Обеспечить качественное образование, которое вдохновляет, развивает критическое мышление и готовит к вызовам будущего.",
      "uz": "Ilhomlantiruvchi, tanqidiy fikrlashni rivojlantiruvchi va kelajak sinovlariga tayyorlaydigan sifatli ta'limga ega bo'lish imkoniyatini ta'minlash."
    }
  };

  window.getTranslation = function(key, lang) {
    if (!translations || !translations[key]) return key;
    return translations[key][lang] || translations[key]['ru'] || key;
  }

  function applyLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
      const key = element.getAttribute("data-translate");
      element.textContent = getTranslation(key, lang);
    });
    document.querySelectorAll("[data-translate-placeholder]").forEach(input => {
      const key = input.getAttribute("data-translate-placeholder");
      input.placeholder = getTranslation(key, lang);
    });
    document.documentElement.lang = lang;
    if (window.generateGoals) {
      window.generateGoals(lang);
    }
  }

  function initLanguage() {
    const savedLang = localStorage.getItem("selectedLang");
    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = ["ru", "uz"].includes(browserLang) ? browserLang : "ru";
    const lang = savedLang || defaultLang;
    applyLanguage(lang);
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", btnLang === lang);
      btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    });
    const slider = document.querySelector(".lang-slider");
    if (slider) {
      slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
    }
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      localStorage.setItem("selectedLang", lang);
      applyLanguage(lang);
      document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b === this);
        b.setAttribute("aria-pressed", b === this ? "true" : "false");
      });
      const slider = document.querySelector(".lang-slider");
      if (slider) {
        slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
      }
    });
  });

  initLanguage();
});